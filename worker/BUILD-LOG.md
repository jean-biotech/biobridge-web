# AI Application Reviewer — Build Log

**Session date:** April 19, 2026  
**Branch work:** `claude/add-ai-application-reviewer-sQ8MA`, `polish-reviewer`, `add-share-feature`  
**PRs merged:** #52, #54, #55  
**Live URL:** https://biotechbridge.org/application-reviewer/

---

## What we built

An AI-powered internship application reviewer. Students paste a biotech job description and their resume — Claude analyzes the match and returns structured, biotech-specific feedback in ~15–20 seconds.

---

## Architecture decisions

### Why Cloudflare Worker?
- Site is hosted on GitHub Pages (static, no server-side code)
- Needed to keep the Anthropic API key off the client
- Cloudflare Worker acts as a lightweight proxy — no separate backend to maintain
- Free tier is more than sufficient for this traffic level

### Request flow
```
Student browser
  → POST /application-reviewer (form submit)
  → Cloudflare Worker (biobridge-reviewer.jennifertranpk.workers.dev)
      - validates origin (CORS lock to biotechbridge.org)
      - validates inputs (required, 8,000 char limit)
      - calls Anthropic API with Claude Opus 4.7
      - prompt caching on system prompt (saves ~$0.003/req after first hit)
      - returns structured JSON
  → Jekyll page JS renders results
```

### Why Claude Opus 4.7?
Most capable model for nuanced domain-specific analysis. The system prompt is detailed enough that a weaker model produces noticeably more generic feedback.

### Why no PDF upload?
Intentionally deferred — text paste is simpler, works reliably, and forces students to actually read their resume content. PDF parsing adds complexity with little benefit for v1.

---

## Files created / modified

### `worker/src/index.js` (new)
Cloudflare Worker proxy.

- `ALLOWED_ORIGINS` — CORS allowlist, `biotechbridge.org` + `www.biotechbridge.org` only
- Input validation — both fields required, 8,000 char limit each, returns descriptive errors
- Calls `claude-opus-4-7` via raw `fetch()` (no SDK — CF Workers environment)
- Prompt caching via `cache_control: { type: 'ephemeral' }` on the system block
- JSON extracted with `/\{[\s\S]*\}/` regex to handle any accidental markdown fences
- Error handling: 400 for bad input, 502 if Anthropic is down, 500 if response unparseable

### `worker/wrangler.toml` (new)
```toml
name = "biobridge-reviewer"
main = "src/index.js"
compatibility_date = "2024-11-01"
```
Deploy: `npx wrangler deploy`  
Set key: `npx wrangler secret put ANTHROPIC_API_KEY`

### `_pages/application-reviewer.md` (new)
Full Jekyll page. Permalink: `/application-reviewer/`. Layout: `single`.  
Vanilla JS in an IIFE — no frameworks. All CSS and JS inline in the `.md` file.

---

## Claude response schema

Evolved over the session. Final schema:

```json
{
  "matchScore": "<integer 0-100>",
  "matchLabel": "<'Poor Match' | 'Fair Match' | 'Good Match' | 'Strong Match'>",
  "jobTitle": "<position title extracted from JD, or null>",
  "company": "<company name extracted from JD, or null>",
  "summary": "<2-3 sentence candid assessment>",
  "strengths": ["<up to 5, minimum 2 — cite specific resume content>"],
  "gaps": ["<up to 5, minimum 1 — cite specific JD requirements not in resume>"],
  "coverLetterTips": ["<up to 4, minimum 2>"],
  "actionItems": ["<up to 4, minimum 2>"],
  "keywords": {
    "matched": ["<terms in both JD and resume>"],
    "missing": ["<important JD terms absent from resume — max 8>"]
  }
}
```

Schema changes during session:
- `suggestions` (single array) → split into `coverLetterTips` + `actionItems` to support 4 distinct cards
- Added `jobTitle` + `company` for the share feature

Score guide in system prompt:
- 0–25: Poor Match
- 26–50: Fair Match
- 51–75: Good Match
- 76–100: Strong Match

---

## Page sections

### Hero
Dark navy→green gradient (`bb-page-hero`), "Free Tool · Powered by Claude" badge, title, and one-line description.

### How it works
3-step explainer strip with numbered green circles.

### Form (`#bb-form-section`)
- Two textareas side-by-side on desktop, stacked on mobile
- Character counters (warn at 90%, error at 100%)
- Client-side validation: both fields required, minimum 100 chars each
- `WORKER_URL` variable at top of script — the one place to update the endpoint

### Loading state (`#bb-loading`)
- Spinning ring + 3 pulsing dots
- Hides the form while waiting for Claude

### Results (`#bb-results`)

**Score card**
- SVG ring: `viewBox="0 0 120 120"`, `r=52`, circumference `326.73`
- Animated with `requestAnimationFrame`, ease-out cubic, 1.2s duration
- Count-up number synced to arc animation
- Color by score range:

| Range | Label | Color |
|---|---|---|
| 76–100 | Strong Match | `#2D5F3F` green |
| 51–75 | Good Match | `#0E7490` teal |
| 26–50 | Fair Match | `#d97706` amber |
| 0–25 | Poor Match | `#dc2626` red |

- Green top border accent (matching form card style)
- Share button (see below)

**2×2 detail grid**

| Card | Top border | Icon bg | List marker |
|---|---|---|---|
| Strengths | Green | Green | ✓ |
| Gaps | Amber | Amber | ! |
| Cover Letter Tips | Teal | Teal | → |
| Action Items | Navy | Navy | → |

Card headers use `--bb-green-bg-subtle` background. Result item text uses `--bb-charcoal` (darker than the original `--bb-text-secondary`).

**Keyword Match card**
Full-width. Matched keywords in green chips, missing in amber chips.

**Footer**
Italic disclaimer + "Try Another Application" button that returns to the form.

### Share button
Sits below the score summary in the score card. On click:
1. Builds share text: `I got a 68/100 Good Match for Regulatory Affairs Intern at Pfizer—analyzed by BioBridge · biotechbridge.org/application-reviewer/`
2. Falls back to score + label only if `jobTitle`/`company` are null
3. Copies to clipboard via `navigator.clipboard.writeText()`
4. Shows "Copied!" with checkmark for 2s, then reverts

---

## Design system

Matches the rest of biotechbridge.org exactly:

```css
--bb-green: #2D5F3F;
--bb-green-accent: #3A7D5C;
--bb-green-dark: #1A3A28;
--bb-green-bg: #E8F5E9;
--bb-green-bg-subtle: #F1F8F4;
--bb-navy: #1A1A2E;
--bb-charcoal: #2C3E50;
--bb-teal: #0E7490;
--bb-amber: #b45309;
--bb-border: #e2e8f0;
```

Fonts: Inter (body/UI) + Playfair Display (headings). Em dashes tight throughout—no surrounding spaces.

---

## Deployment

### Cloudflare Worker
Deployed via Cloudflare Dashboard (paste `worker/src/index.js` → Deploy).  
API key set as a secret: `ANTHROPIC_API_KEY`.

**To redeploy after worker changes:**
- Dashboard: paste updated `worker/src/index.js` → click Deploy
- CLI: `cd worker && npx wrangler deploy` (key stays set, no changes needed)

### GitHub Pages
Merging to `main` triggers an automatic rebuild (~1–2 min).

---

## What was intentionally left out of v1

- PDF resume upload (text paste chosen for simplicity)
- Rate limiting on the worker (low traffic, revisit if abused)
- Adding the page to site navigation (`_data/navigation.yml`) — not done, can be added when ready to surface it broadly
- Analytics on usage

---

## Conversations that shaped decisions

- **Text vs PDF:** kept text paste for v1 simplicity; students copy from Word/Google Doc
- **4 cards vs 3:** originally `suggestions` was one array; split into `coverLetterTips` + `actionItems` so each card has a distinct purpose
- **Share text format:** "I got a X/100 [label] for [role] at [company]—analyzed by BioBridge" — something students would actually post on LinkedIn or in group chats, not a generic "check out this tool" message
- **Mock data removed:** replaced with real `fetch()` once worker was deployed; no mock fallback kept in production code
