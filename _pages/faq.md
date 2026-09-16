---
layout: single
title: "FAQ"
permalink: /faq/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=Instrument+Sans:wght@400;500;600;700&display=swap');
body { font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; }

:root {
  --bb-green: #24221A;
  --bb-green-accent: #5C6335;
  --bb-green-bright: #5C6335;
  --bb-green-hover: #3B4223;
  --bb-green-dark: #3B4223;
  --bb-green-bg: #E6DBC2;
  --bb-green-bg-subtle: #E6DBC2;
  --bb-navy: #24221A;
  --bb-charcoal: #24221A;
  --bb-white: #EFE6D2;
  --bb-off-white: #E6DBC2;
  --bb-text-secondary: #5B5745;
  --bb-gray: #5B5745;
  --bb-border: rgba(36,34,26,0.22);
}

/* Accordion container */
.bb-accordion {
  max-width: 100%;
}

/* Individual accordion item */
.bb-accordion-item {
  border: 1px solid var(--bb-border);
  border-radius: 2px;
  margin-bottom: 0.6rem;
  background: var(--bb-white);
  overflow: hidden;
}
.bb-accordion-item.open {
  border-color: var(--bb-green-accent);
}

/* Question button */
.bb-accordion-btn {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.9rem 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.85rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--bb-navy);
  line-height: 1.45;
  transition: background 0.15s ease;
}
.bb-accordion-btn:hover {
  background: var(--bb-green-bg-subtle);
}
.bb-accordion-item.open .bb-accordion-btn {
  background: var(--bb-green-bg-subtle);
  color: var(--bb-green);
}

/* Chevron icon */
.bb-chevron {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border: 1px solid var(--bb-border);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease;
  color: var(--bb-gray);
  font-size: 0.68rem;
}
.bb-accordion-item.open .bb-chevron {
  background: var(--bb-green-accent);
  border-color: var(--bb-green-accent);
  color: var(--bb-white);
  transform: rotate(180deg);
}

/* Answer panel */
.bb-accordion-panel {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.35s ease, padding 0.25s ease;
}
.bb-accordion-item.open .bb-accordion-panel {
  max-height: 1000px;
}

/* Answer content */
.bb-accordion-body {
  padding: 0 1.1rem 1.1rem;
  border-top: 1px solid var(--bb-border);
}
.bb-accordion-body p {
  color: var(--bb-text-secondary);
  font-size: 0.87rem;
  line-height: 1.8;
  margin: 0.75rem 0 0;
}
.bb-accordion-body p + p {
  margin-top: 0.65rem;
}
.bb-accordion-body a {
  color: var(--bb-green-accent);
  font-weight: 600;
  text-decoration: none;
}
.bb-accordion-body a:hover { text-decoration: underline; }
.bb-accordion-body strong {
  color: var(--bb-navy);
  font-weight: 600;
}

/* Desktop */
@media (min-width: 769px) {
  .bb-accordion-btn { font-size: 0.92rem; padding: 1rem 1.25rem; }
  .bb-accordion-body { padding: 0 1.25rem 1.25rem; }
}
</style>

{% include page-header.html kicker="FREQUENTLY ASKED" title="Frequently Asked Questions" deck="Common questions from people exploring biotechnology. Click any question to expand the answer." %}

<div class="bb-accordion" id="bb-accordion">

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>How do I get my first internship or job?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>The most reliable route is applying directly on company career pages. Most biotech companies, even large ones, post entry-level and internship roles on their websites. Apply through the official posting and tailor your resume to each role, even slightly.</p>
        <p>Cold outreach can be a useful supplement, not a replacement for applying, and it works best when it's specific and brief. If you have no lab experience, highlight transferable skills: attention to detail, data handling, relevant coursework. University research labs are often more accessible than industry for a first experience and are worth pursuing at the same time.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>What skills should I focus on building?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>The skills that matter most depend on the path you're aiming for, but a few are broadly valuable across almost every biotech role. Data fluency (even at a basic level, with Excel or Python) is increasingly expected. Clear writing and communication are rare and consistently valued. Understanding the regulatory landscape (FDA, GMP, GLP basics) is relevant to far more roles than just regulatory affairs.</p>
        <p>Scientific literacy: the ability to read a paper, follow a technical argument, and understand what a study is actually claiming. That's the underlying skill that compounds over time regardless of your specific role.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>Can I pivot into biotech from any background? Do I need a science degree?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>Yes, and it happens more often than people expect. The path looks different depending on where you're starting. Non-science backgrounds have clear entry points in business development, regulatory, operations, communications, and project management.</p>
        <p>If you want a lab-based role without a science background, you'll likely need to get one, or start with a certificate program. The most important thing is being specific about which kind of role you're actually targeting and building toward that, rather than trying to enter biotech in the abstract.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>I'm in high school. Where do I start?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>Start by getting a clear picture of what the field actually is. Read broadly: biotech industry news, popular science books, YouTube channels like Kurzgesagt. Take AP Biology or chemistry if your school offers it, and look into summer research programs or science competitions in your area.</p>
        <p>You have more time than you think. The most useful thing you can do right now is stay curious and explore widely, rather than locking onto a single path too early.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>I'm in college but not majoring in biology. Can I still get into biotech?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>Absolutely. Biotech needs engineers for process development and manufacturing, computer scientists for bioinformatics and data analysis, business majors for operations and strategy, and communications people for science writing and marketing. A biology degree is one path in, not the only one.</p>
        <p>The key is connecting whatever you're studying to a specific role. Look at actual job postings in the area you're interested in, see what they ask for, and build toward that.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>I'm changing careers. Is it too late?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>Not at all. People enter biotech in their 30s, 40s, and beyond, often in roles where their previous experience is exactly what's needed. Someone with a legal background is well-positioned for regulatory affairs. A project manager from any industry can move into clinical operations or manufacturing. Someone with sales experience can transition into biotech sales or business development without starting from scratch.</p>
        <p>What matters most is demonstrating that you understand the context and are committed to building the specific knowledge gaps. Online courses and industry certifications can close those gaps faster than you'd expect.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>I don't have a science background. Can I still learn?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>Biotech is much broader than most people realize. You don't need a science degree to work in the industry. Roles in regulatory affairs, business development, communications, project management, and operations are filled by people from law, business, engineering, and the humanities.</p>
        <p>What usually matters is scientific literacy, not a science degree. That means being able to read a summary, understand what a clinical trial is, and follow along in a meeting. You can build that over time by reading industry news, taking a free online course, and staying curious.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>What is the job market like?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>Entry-level salaries in lab or operations roles typically start around $50k to $60k, but with a few years of experience can reach $90k to $100k+. Data, computational, and engineering roles in hubs like Boston or the Bay Area often pay more. The industry goes through cycles. Layoffs happen, especially at smaller biotechs after funding rounds, but core functions like manufacturing, quality control, and regulatory affairs have historically remained more stable.</p>
        <p>Overall it's a growing field, and it rewards people who keep building expertise over time.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>Do I need to live in a biotech hub?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>It helps, especially early in your career when proximity to other people in the industry accelerates learning and networking. The major hubs (Boston/Cambridge, the Bay Area, San Diego, Research Triangle, and Seattle) have the highest concentration of companies and therefore the most entry-level opportunities.</p>
        <p>That said, biotech companies exist in most mid-to-large cities, and remote work is increasingly common for non-lab roles like regulatory affairs, business development, and project management. If relocating isn't possible, identify what's local and be strategic about which roles allow more flexibility.</p>
      </div>
    </div>
  </div>

  <div class="bb-accordion-item">
    <button class="bb-accordion-btn" aria-expanded="false">
      <span>I have more questions. How can I get help?</span>
      <span class="bb-chevron">&#9660;</span>
    </button>
    <div class="bb-accordion-panel">
      <div class="bb-accordion-body">
        <p>You can reach out directly at <a href="mailto:jeans.connects@gmail.com">jeans.connects@gmail.com</a>. A mentorship program is in development for people who want more structured, one-on-one guidance.</p>
      </div>
    </div>
  </div>

</div>

<script>
(function() {
  var items = document.querySelectorAll('.bb-accordion-item');
  items.forEach(function(item) {
    var btn = item.querySelector('.bb-accordion-btn');
    btn.addEventListener('click', function() {
      var isOpen = item.classList.contains('open');
      // Toggle this item (multiple can be open simultaneously)
      item.classList.toggle('open');
      btn.setAttribute('aria-expanded', !isOpen);
    });
  });
})();
</script>
