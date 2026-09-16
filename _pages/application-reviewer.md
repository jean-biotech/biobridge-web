---
layout: single
title: "Application Reviewer"
permalink: /application-reviewer/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=Instrument+Sans:wght@400;500;600;700&display=swap');
body { font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
h1, h2, h3, h4 { font-family: 'Fraunces', Georgia, serif; }

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
  --bb-teal: #5C6335;
  --bb-amber: #5C6335;
}

/* ============================================
   SECTION DIVIDER
   ============================================ */
.bb-section-divider {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin: 2rem 0 1.5rem;
}
.bb-section-divider-line {
  flex: 1;
  height: 1px;
  background: var(--bb-border);
}
.bb-section-divider-label {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  white-space: nowrap;
}

/* ============================================
   HOW IT WORKS: numbered editorial list
   ============================================ */
.bb-steps {
  border-top: 1px solid var(--bb-border);
  margin-bottom: 2rem;
}
.bb-step {
  display: grid;
  grid-template-columns: 2.5rem 1fr;
  align-items: baseline;
  gap: 1rem;
  padding: 1.1rem 0.25rem;
  border-bottom: 1px solid var(--bb-border);
}
@media (min-width: 600px) {
  .bb-step { grid-template-columns: 3rem 1fr; padding: 1.25rem 0.5rem; }
}
.bb-step-num {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--bb-text-secondary);
}
.bb-step-text strong {
  display: block;
  font-family: 'Fraunces', Georgia, serif;
  font-size: 0.98rem;
  font-weight: 700;
  color: var(--bb-navy);
  margin-bottom: 0.2rem;
}
.bb-step-text span {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.83rem;
  color: var(--bb-text-secondary);
  line-height: 1.5;
}

/* ============================================
   FORM CARD
   ============================================ */
.bb-form-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 2rem;
}
.bb-form-card-top {
  height: 4px;
  background: var(--bb-green-accent);
}
.bb-form-card-body {
  padding: 1.75rem 1.5rem;
}
.bb-form-eyebrow {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  margin: 0 0 0.35rem;
}
.bb-form-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--bb-navy);
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
}
.bb-form-subhead {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.85rem;
  color: var(--bb-text-secondary);
  line-height: 1.65;
  margin: 0 0 1.5rem;
}

/* Textarea grid */
.bb-form-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 1.25rem;
}
@media (min-width: 769px) {
  .bb-form-grid { grid-template-columns: 1fr 1fr; }
}

/* Individual form group */
.bb-form-group { display: flex; flex-direction: column; }
.bb-field-label {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bb-green);
  margin-bottom: 0.25rem;
}
.bb-field-hint {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.78rem;
  color: var(--bb-gray);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
.bb-textarea {
  width: 100%;
  min-height: 220px;
  border: 1.5px solid var(--bb-border);
  border-radius: 0;
  padding: 0.85rem 1rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.84rem;
  line-height: 1.65;
  color: var(--bb-charcoal);
  background: var(--bb-white);
  resize: vertical;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}
.bb-textarea:focus {
  outline: none;
  border-color: var(--bb-green-accent);
}
.bb-textarea::placeholder {
  color: #5B5745;
  font-size: 0.81rem;
  line-height: 1.55;
}
.bb-textarea.bb-field-error {
  border-color: #dc2626;
}
.bb-char-counter {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.72rem;
  color: var(--bb-gray);
  margin-top: 0.35rem;
  text-align: right;
  transition: color 0.2s ease;
}
.bb-char-counter.warn { color: var(--bb-amber); }
.bb-char-counter.over { color: #dc2626; font-weight: 600; }

/* Validation message */
.bb-validation-msg {
  display: none;
  align-items: center;
  gap: 0.5rem;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 0;
  padding: 0.65rem 1rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.82rem;
  color: #dc2626;
  margin-bottom: 1rem;
}
.bb-validation-msg.visible { display: flex; }

/* Submit row */
.bb-form-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.6rem;
}
.bb-analyze-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--bb-green-accent);
  color: var(--bb-white);
  border: none;
  border-radius: 0;
  padding: 0.875rem 2.75rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
  letter-spacing: 0.01em;
  width: 100%;
  justify-content: center;
}
@media (min-width: 600px) {
  .bb-analyze-btn { width: auto; }
}
.bb-analyze-btn:hover:not(:disabled) {
  background: var(--bb-green);
}
.bb-analyze-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.bb-btn-note {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.75rem;
  color: var(--bb-gray);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}
.bb-btn-note-dot {
  width: 5px;
  height: 5px;
  background: var(--bb-green-accent);
  border-radius: 0;
  display: inline-block;
}

/* Desktop tweaks */
@media (min-width: 769px) {
  .bb-form-card-body { padding: 2rem 2.25rem; }
  .bb-form-heading { font-size: 1.4rem; }
  .bb-textarea { min-height: 260px; }
}

/* ============================================
   LOADING STATE
   ============================================ */
.bb-loading {
  display: none;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3.5rem 1.5rem 3rem;
}
.bb-loading.visible { display: flex; }
.bb-spinner {
  width: 44px;
  height: 44px;
  border: 3px solid var(--bb-green-bg);
  border-top-color: var(--bb-green-accent);
  border-radius: 0;
  animation: bb-spin 0.85s linear infinite;
  margin-bottom: 1.25rem;
}
@keyframes bb-spin { to { transform: rotate(360deg); } }
.bb-loading-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--bb-navy);
  margin: 0 0 0.4rem;
}
.bb-loading-sub {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.83rem;
  color: var(--bb-text-secondary);
  line-height: 1.65;
  max-width: 360px;
  margin: 0;
}
.bb-loading-dots {
  display: flex;
  gap: 5px;
  margin-top: 1.5rem;
}
.bb-loading-dots span {
  width: 6px;
  height: 6px;
  border-radius: 0;
  background: var(--bb-green-accent);
  animation: bb-dot-pulse 1.4s ease-in-out infinite;
}
.bb-loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.bb-loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes bb-dot-pulse {
  0%, 80%, 100% { opacity: 0.2; }
  40%           { opacity: 1; }
}

/* ============================================
   RESULTS: FADE IN
   ============================================ */
@keyframes bb-fade-up {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.bb-results {
  display: none;
}
.bb-results.visible {
  display: block;
  animation: bb-fade-up 0.4s ease;
}

/* ============================================
   SCORE CARD
   ============================================ */
.bb-score-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-top: 3px solid var(--bb-green-accent);
  border-radius: 0;
  padding: 1.75rem 1.5rem;
  margin-bottom: 1.25rem;
}
.bb-score-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}
@media (min-width: 580px) {
  .bb-score-inner { flex-direction: row; align-items: flex-start; text-align: left; }
}
.bb-ring-wrap {
  position: relative;
  width: 120px;
  height: 120px;
  flex-shrink: 0;
}
.bb-ring-svg {
  width: 120px;
  height: 120px;
  transform: rotate(-90deg);
  display: block;
}
.bb-ring-track {
  fill: none;
  stroke: var(--bb-green-bg);
  stroke-width: 9;
}
.bb-ring-fill {
  fill: none;
  stroke: var(--bb-teal);
  stroke-width: 9;
  stroke-linecap: round;
  transition: stroke-dashoffset 1s cubic-bezier(0.4,0,0.2,1), stroke 0.3s ease;
}
.bb-ring-center {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.bb-ring-num {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1;
  color: var(--bb-navy);
  transition: color 0.3s ease;
}
.bb-ring-denom {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.67rem;
  color: var(--bb-gray);
  font-weight: 500;
  margin-top: 3px;
}
.bb-score-info { flex: 1; min-width: 0; }
.bb-score-label {
  display: inline-block;
  padding: 0.28rem 0.85rem;
  border-radius: 2px;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 0.85rem;
  background: rgba(92,99,53,0.1);
  border: 1px solid rgba(92,99,53,0.25);
  color: var(--bb-teal);
  transition: background 0.3s, border-color 0.3s, color 0.3s;
}
.bb-score-summary {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.88rem;
  color: var(--bb-text-secondary);
  line-height: 1.75;
  margin: 0;
}
@media (min-width: 769px) {
  .bb-score-card { padding: 2rem 2.25rem; }
}

/* ============================================
   DETAIL GRID: 2x2
   ============================================ */
.bb-detail-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
  margin-bottom: 1.1rem;
}
@media (min-width: 769px) {
  .bb-detail-grid { grid-template-columns: 1fr 1fr; }
}
.bb-detail-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 0;
  overflow: hidden;
}
.bb-detail-card--green { border-top: 3px solid var(--bb-green-accent); }
.bb-detail-card--amber { border-top: 3px solid var(--bb-amber); }
.bb-detail-card--teal  { border-top: 3px solid var(--bb-teal); }
.bb-detail-card--navy  { border-top: 3px solid var(--bb-navy); }
.bb-card-header {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  padding: 0.9rem 1.25rem;
  border-bottom: 1px solid var(--bb-border);
  background: var(--bb-green-bg-subtle);
}
.bb-card-icon {
  width: 28px;
  height: 28px;
  min-width: 28px;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bb-card-icon--green { background: rgba(92,99,53,0.13); }
.bb-card-icon--amber { background: rgba(92,99,53,0.13); }
.bb-card-icon--teal  { background: rgba(92,99,53,0.13); }
.bb-card-icon--navy  { background: rgba(36,34,26,0.10); }
.bb-card-title {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bb-navy);
  margin: 0;
}
.bb-result-list {
  list-style: none;
  padding: 0.2rem 0 0;
  margin: 0;
}
.bb-result-item {
  display: flex;
  gap: 0.6rem;
  padding: 0.65rem 1.25rem;
  border-bottom: 1px solid var(--bb-border);
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.84rem;
  color: var(--bb-charcoal);
  line-height: 1.65;
}
.bb-result-item:last-child { border-bottom: none; }
.bb-item-marker {
  font-size: 0.8rem;
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 0.13rem;
  width: 14px;
  text-align: center;
  line-height: 1.6;
}
.bb-item-marker--green { color: var(--bb-green-accent); }
.bb-item-marker--amber { color: var(--bb-amber); }
.bb-item-marker--teal  { color: var(--bb-teal); }
.bb-item-marker--navy  { color: var(--bb-navy); }

/* ============================================
   KEYWORDS CARD: full width
   ============================================ */
.bb-keywords-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 0;
  overflow: hidden;
  margin-bottom: 1.75rem;
}
.bb-kw-body {
  padding: 1.1rem 1.25rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.1rem;
}
@media (min-width: 580px) {
  .bb-kw-body { grid-template-columns: 1fr 1fr; }
}
.bb-kw-col-label {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 0 0 0.6rem;
}
.bb-kw-col-label--green { color: var(--bb-green-accent); }
.bb-kw-col-label--amber { color: var(--bb-amber); }
.bb-kw-chips { display: flex; flex-wrap: wrap; gap: 0.4rem; }
.bb-kw-badge {
  display: inline-block;
  border-radius: 2px;
  padding: 0.22rem 0.65rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.73rem;
  font-weight: 600;
}
.bb-kw-matched {
  background: rgba(92,99,53,0.08);
  border: 1px solid rgba(92,99,53,0.2);
  color: var(--bb-green);
}
.bb-kw-missing {
  background: rgba(92,99,53,0.07);
  border: 1px solid rgba(92,99,53,0.2);
  color: var(--bb-amber);
}

/* ============================================
   SHARE BUTTON
   ============================================ */
.bb-share-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  color: var(--bb-green-accent);
  border: 1px solid rgba(92,99,53,0.35);
  border-radius: 0;
  padding: 0.45rem 0.9rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.78rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s ease, border-color 0.18s ease, color 0.18s ease;
  margin-top: 0.9rem;
}
.bb-share-btn:hover {
  background: var(--bb-green-bg-subtle);
  border-color: var(--bb-green-accent);
}
.bb-share-btn.bb-share-copied {
  color: var(--bb-green);
  border-color: var(--bb-green-accent);
  background: var(--bb-green-bg);
  cursor: default;
}

/* ============================================
   RESULTS FOOTER
   ============================================ */
.bb-results-footer {
  text-align: center;
  padding-bottom: 1rem;
}
.bb-disclaimer {
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.75rem;
  color: var(--bb-gray);
  line-height: 1.65;
  margin: 0 auto 1.1rem;
  max-width: 460px;
  font-style: italic;
}
.bb-try-again-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: var(--bb-white);
  color: var(--bb-green-accent);
  border: 1.5px solid var(--bb-green-accent);
  border-radius: 0;
  padding: 0.7rem 1.75rem;
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;
}
.bb-try-again-btn:hover {
  background: var(--bb-green-bg-subtle);
}
</style>

{% include page-header.html kicker="APPLICATION TOOL" title="AI Application Reviewer" deck="Paste a biotech job description and your resume: Claude analyzes the match, surfaces your gaps, and tells you exactly how to strengthen your application before you submit." %}

<div class="bb-steps">
  <div class="bb-step">
    <div class="bb-step-num">01</div>
    <div class="bb-step-text">
      <strong>Paste the job description</strong>
      <span>Copy the full posting, including requirements and preferred qualifications.</span>
    </div>
  </div>
  <div class="bb-step">
    <div class="bb-step-num">02</div>
    <div class="bb-step-text">
      <strong>Paste your resume</strong>
      <span>Plain text works best. Copy directly from your Word doc or PDF.</span>
    </div>
  </div>
  <div class="bb-step">
    <div class="bb-step-num">03</div>
    <div class="bb-step-text">
      <strong>Get your analysis</strong>
      <span>Match score, strengths, gaps, and biotech-specific suggestions in about 20 seconds.</span>
    </div>
  </div>
</div>

<div class="bb-section-divider">
  <div class="bb-section-divider-line"></div>
  <div class="bb-section-divider-label">Your Application</div>
  <div class="bb-section-divider-line"></div>
</div>

<div id="bb-form-section">
  <div class="bb-form-card">
    <div class="bb-form-card-top"></div>
    <div class="bb-form-card-body">

      <p class="bb-form-eyebrow">Step-by-step review</p>
      <h2 class="bb-form-heading">Review Your Application</h2>
      <p class="bb-form-subhead">Both fields are required. The more complete the job description and resume, the more specific the feedback will be.</p>

      <form id="bb-review-form" novalidate>

        <div class="bb-form-grid">

          <div class="bb-form-group">
            <label class="bb-field-label" for="bb-jd">Job Description</label>
            <p class="bb-field-hint">Paste the full posting. Include the requirements section and any preferred qualifications.</p>
            <textarea
              id="bb-jd"
              class="bb-textarea"
              maxlength="8000"
              placeholder="Paste the job description here...

Example:
We are seeking a motivated undergraduate student for a summer internship in our Computational Biology group. The ideal candidate will have experience with Python or R, familiarity with RNA-seq data analysis, and a strong foundation in molecular biology..."></textarea>
            <div class="bb-char-counter" id="bb-jd-counter">0 / 8,000</div>
          </div>

          <div class="bb-form-group">
            <label class="bb-field-label" for="bb-resume">Your Resume</label>
            <p class="bb-field-hint">Paste your resume as plain text. Copy from your Word doc, Google Doc, or PDF reader.</p>
            <textarea
              id="bb-resume"
              class="bb-textarea"
              maxlength="8000"
              placeholder="Paste your resume text here...

Example:
Jane Smith
jane@university.edu | linkedin.com/in/janesmith

EDUCATION
B.S. Biochemistry, University of Michigan, Expected May 2026
GPA: 3.7 / 4.0

RESEARCH EXPERIENCE
Undergraduate Research Assistant, Dr. Chen Lab..."></textarea>
            <div class="bb-char-counter" id="bb-resume-counter">0 / 8,000</div>
          </div>

        </div>

        <div class="bb-validation-msg" id="bb-validation-msg">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span id="bb-validation-text">Please fill in both fields before analyzing.</span>
        </div>

        <div class="bb-form-footer">
          <button type="submit" class="bb-analyze-btn" id="bb-submit-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
            Analyze My Application
          </button>
          <span class="bb-btn-note">
            <span class="bb-btn-note-dot"></span>
            Takes about 15 to 20 seconds &middot; Your text is not stored
          </span>
        </div>

      </form>
    </div>
  </div>
</div>

<div id="bb-loading" class="bb-loading">
  <div class="bb-spinner"></div>
  <p class="bb-loading-heading">Analyzing your application&hellip;</p>
  <p class="bb-loading-sub">Claude is reviewing the job description and your resume. This usually takes 15 to 20 seconds.</p>
  <div class="bb-loading-dots">
    <span></span><span></span><span></span>
  </div>
</div>

<div id="bb-results" class="bb-results">

  <div class="bb-section-divider">
    <div class="bb-section-divider-line"></div>
    <div class="bb-section-divider-label">Your Results</div>
    <div class="bb-section-divider-line"></div>
  </div>

  <div class="bb-score-card">
    <div class="bb-score-inner">
      <div class="bb-ring-wrap">
        <svg class="bb-ring-svg" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <circle class="bb-ring-track" cx="60" cy="60" r="52"/>
          <circle id="bb-ring-fill" class="bb-ring-fill" cx="60" cy="60" r="52"
            stroke-dasharray="326.73" stroke-dashoffset="326.73"/>
        </svg>
        <div class="bb-ring-center">
          <span id="bb-ring-num" class="bb-ring-num">0</span>
          <span class="bb-ring-denom">/ 100</span>
        </div>
      </div>
      <div class="bb-score-info">
        <span id="bb-score-label" class="bb-score-label">&nbsp;</span>
        <p id="bb-score-summary" class="bb-score-summary"></p>
        <button type="button" id="bb-share-btn" class="bb-share-btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>
          Copy shareable summary
        </button>
      </div>
    </div>
  </div>

  <div class="bb-detail-grid">

    <div class="bb-detail-card bb-detail-card--green">
      <div class="bb-card-header">
        <div class="bb-card-icon bb-card-icon--green">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#24221A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <p class="bb-card-title">Strengths</p>
      </div>
      <ul id="bb-strengths-list" class="bb-result-list"></ul>
    </div>

    <div class="bb-detail-card bb-detail-card--amber">
      <div class="bb-card-header">
        <div class="bb-card-icon bb-card-icon--amber">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5C6335" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <p class="bb-card-title">Gaps</p>
      </div>
      <ul id="bb-gaps-list" class="bb-result-list"></ul>
    </div>

    <div class="bb-detail-card bb-detail-card--teal">
      <div class="bb-card-header">
        <div class="bb-card-icon bb-card-icon--teal">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5C6335" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
        </div>
        <p class="bb-card-title">Cover Letter Tips</p>
      </div>
      <ul id="bb-cover-list" class="bb-result-list"></ul>
    </div>

    <div class="bb-detail-card bb-detail-card--navy">
      <div class="bb-card-header">
        <div class="bb-card-icon bb-card-icon--navy">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#24221A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        </div>
        <p class="bb-card-title">Action Items</p>
      </div>
      <ul id="bb-actions-list" class="bb-result-list"></ul>
    </div>

  </div>

  <div class="bb-keywords-card">
    <div class="bb-card-header">
      <div class="bb-card-icon bb-card-icon--navy">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#24221A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      </div>
      <p class="bb-card-title">Keyword Match</p>
    </div>
    <div class="bb-kw-body">
      <div>
        <p class="bb-kw-col-label bb-kw-col-label--green">Matched</p>
        <div id="bb-kw-matched" class="bb-kw-chips"></div>
      </div>
      <div>
        <p class="bb-kw-col-label bb-kw-col-label--amber">Missing from Resume</p>
        <div id="bb-kw-missing" class="bb-kw-chips"></div>
      </div>
    </div>
  </div>

  <div class="bb-results-footer">
    <p class="bb-disclaimer">This is an AI-generated analysis: use it as a starting point, not a definitive assessment. Results may not capture all your experience or the full context of the role.</p>
    <button type="button" id="bb-try-again" class="bb-try-again-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.61"/></svg>
      Try Another Application
    </button>
  </div>

</div>

<script>
(function () {
  'use strict';
  var MAX        = 8000;
  var CIRC       = 326.73;
  var WORKER_URL = 'https://biobridge-reviewer.jennifertranpk.workers.dev';

  var jdEl        = document.getElementById('bb-jd');
  var resumeEl    = document.getElementById('bb-resume');
  var jdCount     = document.getElementById('bb-jd-counter');
  var resCount    = document.getElementById('bb-resume-counter');
  var form        = document.getElementById('bb-review-form');
  var valMsg      = document.getElementById('bb-validation-msg');
  var valText     = document.getElementById('bb-validation-text');
  var formSec     = document.getElementById('bb-form-section');
  var loadingSec  = document.getElementById('bb-loading');
  var resultsSec  = document.getElementById('bb-results');
  var tryAgainBtn = document.getElementById('bb-try-again');
  var shareBtn    = document.getElementById('bb-share-btn');

  // ---- Char counters ----
  function updateCounter(el, ctrEl) {
    var n = el.value.length;
    ctrEl.textContent = n.toLocaleString() + ' / ' + MAX.toLocaleString();
    ctrEl.className = 'bb-char-counter' +
      (n >= MAX ? ' over' : n >= MAX * 0.9 ? ' warn' : '');
  }
  jdEl.addEventListener('input', function () {
    updateCounter(jdEl, jdCount);
    jdEl.classList.remove('bb-field-error');
    hideValidation();
  });
  resumeEl.addEventListener('input', function () {
    updateCounter(resumeEl, resCount);
    resumeEl.classList.remove('bb-field-error');
    hideValidation();
  });

  function showValidation(msg) { valText.textContent = msg; valMsg.classList.add('visible'); }
  function hideValidation() { valMsg.classList.remove('visible'); }

  // ---- State ----
  function showState(state) {
    formSec.style.display = state === 'form' ? '' : 'none';
    loadingSec.classList[state === 'loading' ? 'add' : 'remove']('visible');
    resultsSec.classList[state === 'results' ? 'add' : 'remove']('visible');
  }

  // ---- Score colors ----
  function scoreColors(s) {
    if (s >= 76) return { stroke: '#24221A', text: '#24221A', bg: 'rgba(92,99,53,0.1)',    border: 'rgba(92,99,53,0.25)' };
    if (s >= 51) return { stroke: '#5C6335', text: '#3B4223', bg: 'rgba(92,99,53,0.12)',  border: 'rgba(92,99,53,0.3)' };
    if (s >= 26) return { stroke: '#5C6335', text: '#3B4223', bg: 'rgba(92,99,53,0.08)',   border: 'rgba(92,99,53,0.25)' };
    return         { stroke: '#dc2626', text: '#dc2626', bg: 'rgba(220,38,38,0.08)',   border: 'rgba(220,38,38,0.25)' };
  }

  // ---- Animate ring + count-up ----
  function animateScore(target) {
    var fill    = document.getElementById('bb-ring-fill');
    var numEl   = document.getElementById('bb-ring-num');
    var labelEl = document.getElementById('bb-score-label');
    var c       = scoreColors(target);
    fill.style.stroke         = c.stroke;
    numEl.style.color         = c.text;
    labelEl.style.background  = c.bg;
    labelEl.style.borderColor = c.border;
    labelEl.style.color       = c.text;

    var startTs = null;
    var dur     = 1200;
    var endOff  = CIRC - (target / 100) * CIRC;
    function tick(ts) {
      if (!startTs) startTs = ts;
      var p    = Math.min((ts - startTs) / dur, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      fill.style.strokeDashoffset = CIRC - (CIRC - endOff) * ease;
      numEl.textContent = Math.round(target * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---- Helpers ----
  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderList(ulId, items, markerCls, markerChar) {
    var ul = document.getElementById(ulId);
    ul.innerHTML = '';
    (items || []).forEach(function (text) {
      var li = document.createElement('li');
      li.className = 'bb-result-item';
      li.innerHTML = '<span class="bb-item-marker ' + markerCls + '">' + markerChar + '</span><span>' + esc(text) + '</span>';
      ul.appendChild(li);
    });
  }

  function renderKeywords(matched, missing) {
    function chips(arr, cls) {
      return (arr || []).map(function (k) {
        return '<span class="bb-kw-badge ' + cls + '">' + esc(k) + '</span>';
      }).join('');
    }
    document.getElementById('bb-kw-matched').innerHTML = chips(matched, 'bb-kw-matched');
    document.getElementById('bb-kw-missing').innerHTML = chips(missing, 'bb-kw-missing');
  }

  // ---- Share ----
  function buildShareText(data) {
    var score = data.matchScore;
    var label = data.matchLabel || '';
    var title = data.jobTitle  || null;
    var co    = data.company   || null;
    var url   = 'biotechbridge.org/application-reviewer/';
    var base  = 'I got a ' + score + '/100 ' + label;
    if (title && co) return base + ' for ' + title + ' at ' + co + '. Analyzed by BioBridge \u00b7 ' + url;
    if (title)       return base + ' for ' + title + '. Analyzed by BioBridge \u00b7 ' + url;
    return base + '. Analyzed by BioBridge \u00b7 ' + url;
  }

  var CLIPBOARD_ICON = shareBtn.innerHTML;

  shareBtn.addEventListener('click', function () {
    var text = shareBtn.dataset.shareText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      shareBtn.classList.add('bb-share-copied');
      shareBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Copied!';
      setTimeout(function () {
        shareBtn.classList.remove('bb-share-copied');
        shareBtn.innerHTML = CLIPBOARD_ICON;
      }, 2000);
    });
  });

  function renderResults(data) {
    document.getElementById('bb-score-label').textContent   = data.matchLabel || '';
    document.getElementById('bb-score-summary').textContent = data.summary    || '';
    shareBtn.dataset.shareText = buildShareText(data);
    renderList('bb-strengths-list', data.strengths,       'bb-item-marker--green', '-');
    renderList('bb-gaps-list',      data.gaps,            'bb-item-marker--amber', '!');
    renderList('bb-cover-list',     data.coverLetterTips, 'bb-item-marker--teal',  '\u2192');
    renderList('bb-actions-list',   data.actionItems,     'bb-item-marker--navy',  '\u2192');
    renderKeywords(data.keywords.matched, data.keywords.missing);
    showState('results');
    window.scrollTo({ top: resultsSec.offsetTop - 24, behavior: 'smooth' });
    setTimeout(function () { animateScore(data.matchScore); }, 100);
  }

  // ---- Submit ----
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var jd     = jdEl.value.trim();
    var resume = resumeEl.value.trim();

    if (!jd && !resume) {
      jdEl.classList.add('bb-field-error');
      resumeEl.classList.add('bb-field-error');
      showValidation('Please paste a job description and your resume before analyzing.');
      return;
    }
    if (!jd)     { jdEl.classList.add('bb-field-error');     showValidation('Please paste the job description.'); return; }
    if (!resume)  { resumeEl.classList.add('bb-field-error'); showValidation('Please paste your resume text.');    return; }
    if (jd.length < 100)     { jdEl.classList.add('bb-field-error');     showValidation('The job description looks too short. Paste the full posting for accurate results.'); return; }
    if (resume.length < 100) { resumeEl.classList.add('bb-field-error'); showValidation('The resume text looks too short. Paste your full resume for accurate results.');    return; }

    hideValidation();
    showState('loading');

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription: jd, resumeText: resume })
    })
    .then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw new Error(data.error || 'Analysis service unavailable. Please try again.');
        return data;
      });
    })
    .then(function (data) {
      renderResults(data);
    })
    .catch(function (err) {
      showState('form');
      showValidation(err.message || 'Something went wrong. Please try again.');
    });
  });

  // ---- Try again ----
  tryAgainBtn.addEventListener('click', function () {
    showState('form');
    window.scrollTo({ top: formSec.offsetTop - 24, behavior: 'smooth' });
  });

}());
</script>
