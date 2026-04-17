---
layout: single
title: "Application Reviewer"
permalink: /application-reviewer/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
h1, h2, h3, h4 { font-family: 'Playfair Display', Georgia, serif; }

:root {
  --bb-green: #2D5F3F;
  --bb-green-accent: #3A7D5C;
  --bb-green-bright: #4CAF50;
  --bb-green-hover: #66BB6A;
  --bb-green-dark: #1A3A28;
  --bb-green-bg: #E8F5E9;
  --bb-green-bg-subtle: #F1F8F4;
  --bb-navy: #1A1A2E;
  --bb-charcoal: #2C3E50;
  --bb-white: #ffffff;
  --bb-off-white: #FAFAFA;
  --bb-text-secondary: #475569;
  --bb-gray: #64748b;
  --bb-border: #e2e8f0;
  --bb-teal: #0E7490;
  --bb-amber: #b45309;
}

/* ============================================
   HERO
   ============================================ */
.bb-page-hero {
  background: linear-gradient(160deg, var(--bb-navy) 0%, var(--bb-green-dark) 100%);
  color: var(--bb-white);
  padding: 2rem 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
}
.bb-page-hero::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: radial-gradient(ellipse at 80% 20%, rgba(45,95,63,0.15) 0%, transparent 60%);
  pointer-events: none;
}
.bb-page-hero h1 {
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  color: var(--bb-white);
  letter-spacing: -0.02em;
  position: relative;
}
.bb-page-hero p {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  color: rgba(255,255,255,0.8);
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
  position: relative;
}
.bb-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 4px;
  padding: 0.2rem 0.6rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.85);
  margin-bottom: 0.75rem;
  position: relative;
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
  font-family: 'Inter', sans-serif;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  white-space: nowrap;
}

/* ============================================
   HOW IT WORKS — 3-step strip
   ============================================ */
.bb-steps {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-bottom: 2rem;
}
@media (min-width: 600px) {
  .bb-steps { grid-template-columns: repeat(3, 1fr); gap: 1rem; }
}
.bb-step {
  background: var(--bb-green-bg-subtle);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1rem 1.1rem;
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}
.bb-step-num {
  width: 24px;
  height: 24px;
  min-width: 24px;
  background: var(--bb-green-accent);
  color: var(--bb-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  margin-top: 1px;
}
.bb-step-text strong {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--bb-navy);
  margin-bottom: 0.15rem;
}
.bb-step-text span {
  font-family: 'Inter', sans-serif;
  font-size: 0.79rem;
  color: var(--bb-text-secondary);
  line-height: 1.5;
}

/* ============================================
   FORM CARD
   ============================================ */
.bb-form-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 10px;
  box-shadow: 0 3px 18px rgba(0,0,0,0.06);
  overflow: hidden;
  margin-bottom: 2rem;
}
.bb-form-card-top {
  height: 4px;
  background: linear-gradient(90deg, var(--bb-green-dark), var(--bb-green-accent));
}
.bb-form-card-body {
  padding: 1.75rem 1.5rem;
}
.bb-form-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  margin: 0 0 0.35rem;
}
.bb-form-heading {
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--bb-navy);
  margin: 0 0 0.4rem;
  letter-spacing: -0.01em;
}
.bb-form-subhead {
  font-family: 'Inter', sans-serif;
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
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bb-green);
  margin-bottom: 0.25rem;
}
.bb-field-hint {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: var(--bb-gray);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}
.bb-textarea {
  width: 100%;
  min-height: 220px;
  border: 1.5px solid var(--bb-border);
  border-radius: 7px;
  padding: 0.85rem 1rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.84rem;
  line-height: 1.65;
  color: var(--bb-charcoal);
  background: var(--bb-white);
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
}
.bb-textarea:focus {
  outline: none;
  border-color: var(--bb-green-accent);
  box-shadow: 0 0 0 3px rgba(58,125,92,0.1);
}
.bb-textarea::placeholder {
  color: #aab4c0;
  font-size: 0.81rem;
  line-height: 1.55;
}
.bb-textarea.bb-field-error {
  border-color: #dc2626;
  box-shadow: 0 0 0 3px rgba(220,38,38,0.08);
}
.bb-char-counter {
  font-family: 'Inter', sans-serif;
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
  border-radius: 6px;
  padding: 0.65rem 1rem;
  font-family: 'Inter', sans-serif;
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
  border-radius: 6px;
  padding: 0.875rem 2.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.22s ease;
  letter-spacing: 0.01em;
  width: 100%;
  justify-content: center;
}
@media (min-width: 600px) {
  .bb-analyze-btn { width: auto; }
}
.bb-analyze-btn:hover:not(:disabled) {
  background: var(--bb-green);
  transform: translateY(-1px);
  box-shadow: 0 5px 18px rgba(45,95,63,0.28);
}
.bb-analyze-btn:active:not(:disabled) { transform: translateY(0); }
.bb-analyze-btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.bb-btn-note {
  font-family: 'Inter', sans-serif;
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
  border-radius: 50%;
  display: inline-block;
}

/* Desktop tweaks */
@media (min-width: 769px) {
  .bb-page-hero { padding: 2.5rem 2.5rem; border-radius: 10px; }
  .bb-page-hero h1 { font-size: 1.65rem; }
  .bb-page-hero p { font-size: 0.93rem; }
  .bb-form-card-body { padding: 2rem 2.25rem; }
  .bb-form-heading { font-size: 1.4rem; }
  .bb-textarea { min-height: 260px; }
}
</style>

<div class="bb-page-hero">
  <div class="bb-hero-badge">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
    Free Tool &middot; Powered by Claude
  </div>
  <h1>AI Application Reviewer</h1>
  <p>Paste a biotech job description and your resume — Claude analyzes the match, surfaces your gaps, and tells you exactly how to strengthen your application before you submit.</p>
</div>

<div class="bb-steps">
  <div class="bb-step">
    <div class="bb-step-num">1</div>
    <div class="bb-step-text">
      <strong>Paste the job description</strong>
      <span>Copy the full posting, including requirements and preferred qualifications.</span>
    </div>
  </div>
  <div class="bb-step">
    <div class="bb-step-num">2</div>
    <div class="bb-step-text">
      <strong>Paste your resume</strong>
      <span>Plain text works best — copy directly from your Word doc or PDF.</span>
    </div>
  </div>
  <div class="bb-step">
    <div class="bb-step-num">3</div>
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
            <p class="bb-field-hint">Paste the full posting — include the requirements section and any preferred qualifications.</p>
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
            Takes about 15–20 seconds &middot; Your text is not stored
          </span>
        </div>

      </form>
    </div>
  </div>
</div>

<script>
(function () {
  var MAX = 8000;

  var jdEl      = document.getElementById('bb-jd');
  var resumeEl  = document.getElementById('bb-resume');
  var jdCount   = document.getElementById('bb-jd-counter');
  var resCount  = document.getElementById('bb-resume-counter');
  var form      = document.getElementById('bb-review-form');
  var submitBtn = document.getElementById('bb-submit-btn');
  var valMsg    = document.getElementById('bb-validation-msg');
  var valText   = document.getElementById('bb-validation-text');

  function updateCounter(el, counterEl) {
    var n = el.value.length;
    counterEl.textContent = n.toLocaleString() + ' / ' + MAX.toLocaleString();
    counterEl.className = 'bb-char-counter' +
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

  function showValidation(msg) {
    valText.textContent = msg;
    valMsg.classList.add('visible');
  }

  function hideValidation() {
    valMsg.classList.remove('visible');
  }

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
    if (!jd) {
      jdEl.classList.add('bb-field-error');
      showValidation('Please paste the job description.');
      return;
    }
    if (!resume) {
      resumeEl.classList.add('bb-field-error');
      showValidation('Please paste your resume text.');
      return;
    }
    if (jd.length < 100) {
      jdEl.classList.add('bb-field-error');
      showValidation('The job description looks too short — paste the full posting for accurate results.');
      return;
    }
    if (resume.length < 100) {
      resumeEl.classList.add('bb-field-error');
      showValidation('The resume text looks too short — paste your full resume for accurate results.');
      return;
    }

    hideValidation();
    // Results wiring comes next
    console.log('Ready to analyze:', { jdLength: jd.length, resumeLength: resume.length });
  });

}());
</script>
