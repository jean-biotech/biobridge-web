---
layout: splash
title: "Application Reviewer"
permalink: /application-reviewer/
---

<style>
/* ================================================================
   APPLICATION REVIEWER
   Shared pieces (type, bands, buttons, form fields, tags, index)
   come from assets/css/biobridge.css. These are the parts only this
   tool uses. The script at the bottom of the page swaps the form,
   loading, and results blocks in and out of the same spot.
   ================================================================ */

.bb-reviewer {
  --bb-error: #9b2c1c;
  --bb-error-bg: #fbf0ec;
  --bb-error-line: #efd0c6;
}

/* ---------- Page header: how it works ---------- */

.bb-reviewer .bb-steps-label {
  margin-top: 2.75rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--bb-muted);
}

.bb-reviewer .bb-steps {
  list-style: none;
  margin: 0.85rem 0 0;
  padding: 0;
  display: grid;
  gap: 1.25rem;
}

.bb-reviewer .bb-steps li {
  margin: 0;
  padding-top: 1rem;
  border-top: 1px solid #d9cfba;
}

.bb-reviewer .bb-step-title {
  display: block;
  font-weight: 600;
  font-size: 1.15rem;
  line-height: 1.35;
  color: var(--bb-ink);
}

.bb-reviewer .bb-step-text {
  display: block;
  margin-top: 0.3rem;
  font-size: 1.05rem;
  line-height: 1.5;
}

/* ---------- Form ---------- */

/* The theme draws forms as a gray box; this form sits on the page */
.bb-reviewer form {
  margin: 0;
  padding: 0;
  background: none;
}

.bb-reviewer .bb-fields {
  display: grid;
  gap: 2.25rem;
}

.bb-reviewer .bb-field {
  display: grid;
  align-content: start;
  min-width: 0;
}

.bb-reviewer .bb-field label {
  font-size: 1.15rem;
  margin-bottom: 0.2rem;
}

.bb-reviewer .bb-field-hint {
  font-size: 1.05rem;
  line-height: 1.5;
  color: var(--bb-muted);
  margin-bottom: 0.8rem;
}

.bb-reviewer textarea {
  display: block;
  margin: 0;
  min-height: 15rem;
  resize: vertical;
}

.bb-reviewer textarea::placeholder {
  color: #767f7a;
  opacity: 1;
}

.bb-reviewer textarea.bb-field-error {
  border-color: var(--bb-error);
  box-shadow: 0 0 0 1px var(--bb-error);
}

/* The script rewrites this element's class, so keep its name */
.bb-reviewer .bb-char-counter {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.4;
  color: var(--bb-muted);
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.bb-reviewer .bb-char-counter.warn {
  color: var(--bb-ink);
  font-weight: 600;
}

.bb-reviewer .bb-char-counter.over {
  color: var(--bb-error);
  font-weight: 600;
}

/* Validation and error message (shown by the script) */
.bb-reviewer .bb-validation-msg {
  display: none;
  align-items: flex-start;
  gap: 0.65rem;
  margin-top: 1.75rem;
  padding: 0.9rem 1.1rem;
  background: var(--bb-error-bg);
  border: 1px solid var(--bb-error-line);
  border-radius: 8px;
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.45;
  color: var(--bb-error);
}

.bb-reviewer .bb-validation-msg.visible {
  display: flex;
}

.bb-reviewer .bb-validation-msg svg {
  flex: none;
  margin-top: 0.15em;
}

.bb-reviewer .bb-submit {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem 1.5rem;
  margin-top: 1.75rem;
}

.bb-reviewer .bb-submit-note {
  font-size: 1rem;
  line-height: 1.45;
  color: var(--bb-muted);
}

/* Keeps "15–20 seconds" on one line */
.bb-reviewer .bb-nowrap {
  white-space: nowrap;
}

/* ---------- Buttons on this page ---------- */

.bb-reviewer button:focus {
  outline: none;
}

.bb-reviewer button:focus-visible {
  outline: 2px solid var(--bb-green);
  outline-offset: 3px;
}

.bb-reviewer [tabindex="-1"]:focus {
  outline: none;
}

/* A button that looks like the site's text links */
.bb-reviewer .bb-copy {
  display: inline-block;
  margin: 1.25rem 0 0;
  padding: 0;
  background: none;
  border: 0;
  font-family: var(--bb-sans);
  font-size: 1.05rem;
  font-weight: 600;
  line-height: 1.4;
  color: var(--bb-green);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
  cursor: pointer;
  transition: color 0.15s ease;
}

.bb-reviewer .bb-copy:hover {
  color: var(--bb-green-dark);
}

.bb-reviewer .bb-copy.bb-share-copied {
  color: var(--bb-ink);
  text-decoration: none;
  cursor: default;
}

/* ---------- Loading ---------- */

.bb-reviewer .bb-loading {
  display: none;
  max-width: 40rem;
  padding: 1.75rem 1.5rem;
  background: var(--bb-cream);
  border-radius: var(--bb-radius);
}

.bb-reviewer .bb-loading.visible {
  display: block;
}

.bb-reviewer .bb-spinner {
  display: block;
  width: 1.9rem;
  height: 1.9rem;
  margin-bottom: 1rem;
  border: 3px solid rgba(45, 95, 63, 0.18);
  border-top-color: var(--bb-green);
  border-radius: 50%;
  animation: bb-reviewer-spin 0.9s linear infinite;
}

@keyframes bb-reviewer-spin {
  to { transform: rotate(360deg); }
}

.bb-reviewer .bb-loading-heading {
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.25;
  color: var(--bb-ink);
}

.bb-reviewer .bb-loading-sub {
  margin-top: 0.4rem;
  font-size: 1.05rem;
  line-height: 1.55;
}

/* ---------- Results ---------- */

.bb-reviewer .bb-results {
  display: none;
}

.bb-reviewer .bb-results.visible {
  display: block;
  animation: bb-reviewer-fade 0.4s ease both;
}

@keyframes bb-reviewer-fade {
  from { opacity: 0; }
  to { opacity: 1; }
}

.bb-reviewer .bb-results .bb-section-head {
  margin-bottom: 2rem;
}

/* Score: the number, a meter, the label, and the summary */
.bb-reviewer .bb-score {
  display: grid;
  gap: 1.5rem;
  padding: 1.5rem 1.25rem 1.75rem;
  background: var(--bb-cream);
  border-radius: var(--bb-radius);
}

.bb-reviewer .bb-score-caption {
  font-size: 1rem;
  font-weight: 600;
  color: var(--bb-muted);
}

.bb-reviewer .bb-score-num {
  display: flex;
  align-items: baseline;
  gap: 0.35rem;
  margin-top: 0.35rem;
  font-weight: 600;
  line-height: 1;
  color: var(--bb-ink);
}

.bb-reviewer .bb-score-num span {
  transition: none;
}

.bb-reviewer #bb-ring-num {
  font-size: 4.5rem;
  letter-spacing: -0.02em;
}

.bb-reviewer .bb-score-outof {
  font-size: 1.3rem;
  color: var(--bb-muted);
}

.bb-reviewer .bb-meter {
  height: 8px;
  margin-top: 1.1rem;
  background: rgba(45, 95, 63, 0.16);
  border-radius: 4px;
  overflow: hidden;
}

.bb-reviewer .bb-meter-fill {
  width: 0;
  height: 100%;
  background: var(--bb-green);
  border-radius: 4px;
}

.bb-reviewer .bb-score-label {
  font-size: 1.75rem;
}

.bb-reviewer .bb-score-summary {
  margin-top: 0.6rem;
  font-size: 1.15rem;
  line-height: 1.6;
  max-width: 38em;
}

/* Strengths, gaps, tips: titled lists on a green rule */
.bb-reviewer .bb-findings {
  display: grid;
  gap: 2.5rem;
  margin-top: 3rem;
}

.bb-reviewer .bb-finding {
  min-width: 0;
  padding-top: 1.1rem;
  border-top: 2px solid var(--bb-green);
}

.bb-reviewer .bb-finding h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
}

.bb-reviewer .bb-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bb-reviewer .bb-list li {
  position: relative;
  margin: 0;
  padding-left: 1.65rem;
  font-size: 1.05rem;
  line-height: 1.55;
}

.bb-reviewer .bb-list li + li {
  margin-top: 0.85rem;
}

/* Default marker: a small green dot */
.bb-reviewer .bb-list li::before {
  content: "";
  position: absolute;
  left: 0.3rem;
  top: 0.62em;
  width: 0.42rem;
  height: 0.42rem;
  border-radius: 50%;
  background: var(--bb-green);
}

/* Strengths: a check mark */
.bb-reviewer .bb-list--strengths li::before {
  left: 0.32rem;
  top: 0.3em;
  width: 0.36rem;
  height: 0.7rem;
  border: solid var(--bb-green);
  border-width: 0 2px 2px 0;
  border-radius: 0;
  background: none;
  transform: rotate(45deg);
}

/* Gaps: an open circle, something still to fill */
.bb-reviewer .bb-list--gaps li::before {
  left: 0.2rem;
  top: 0.52em;
  width: 0.6rem;
  height: 0.6rem;
  border: 1.5px solid var(--bb-green);
  background: none;
}

/* Keywords */
.bb-reviewer .bb-keywords {
  margin-top: 3rem;
}

.bb-reviewer .bb-keyword-groups {
  display: grid;
  gap: 1.75rem;
}

.bb-reviewer .bb-keyword-groups h4 {
  font-size: 1.05rem;
  margin-bottom: 0.7rem;
}

.bb-reviewer .bb-tags--matched li {
  background: rgba(45, 95, 63, 0.08);
  border-color: rgba(45, 95, 63, 0.3);
  color: var(--bb-green-dark);
}

.bb-reviewer .bb-tags--missing li {
  border-style: dashed;
  border-color: #a9b2ac;
}

.bb-reviewer .bb-tags .bb-tags-none {
  padding-left: 0;
  background: none;
  border: 0;
  color: var(--bb-muted);
}

/* Disclaimer and start over */
.bb-reviewer .bb-results-end {
  display: grid;
  justify-items: start;
  gap: 1.5rem;
  margin-top: 3.5rem;
  padding-top: 1.75rem;
  border-top: 1px solid var(--bb-line);
}

.bb-reviewer .bb-disclaimer {
  max-width: 42em;
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--bb-muted);
}

/* ---------- Wider screens ---------- */

@media (min-width: 700px) {
  .bb-reviewer .bb-steps {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2.5rem;
  }

  .bb-reviewer .bb-loading {
    padding: 2rem 2.25rem;
  }

  .bb-reviewer .bb-score {
    grid-template-columns: 13rem minmax(0, 1fr);
    gap: 3rem;
    padding: 2.25rem 2.5rem 2.5rem;
  }

  .bb-reviewer .bb-findings,
  .bb-reviewer .bb-keyword-groups {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
  }

  /* Three links in one row, rather than two plus one on tablets */
  .bb-reviewer .bb-index {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  /* Side by side, with labels, hints, and boxes lined up across both fields */
  .bb-reviewer .bb-fields {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 2.5rem;
  }

  .bb-reviewer .bb-field {
    grid-row: span 4;
    grid-template-rows: subgrid;
    row-gap: 0;
  }

  .bb-reviewer textarea {
    min-height: 20rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .bb-reviewer .bb-results.visible {
    animation: none;
  }

  .bb-reviewer .bb-spinner {
    animation-duration: 2.4s;
  }
}
</style>

<div class="bb-page bb-reviewer">

<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap">
    <p class="bb-kicker">Tools</p>
    <h1>Application Reviewer</h1>
    <p class="bb-lede">Paste a biotech job description and your resume. Claude, an AI model, analyzes the match, points out your gaps, and tells you how to strengthen your application before you submit. It's free.</p>

    <p class="bb-steps-label" id="bb-steps-label">How it works</p>
    <ol class="bb-steps" aria-labelledby="bb-steps-label">
      <li>
        <span class="bb-step-title">Paste the job description</span>
        <span class="bb-step-text">Copy the full posting, including requirements and preferred qualifications.</span>
      </li>
      <li>
        <span class="bb-step-title">Paste your resume</span>
        <span class="bb-step-text">Plain text works best. Copy it directly from your Word doc or PDF.</span>
      </li>
      <li>
        <span class="bb-step-title">Get your analysis</span>
        <span class="bb-step-text">Match score, strengths, gaps, and biotech-specific suggestions in about 20 seconds.</span>
      </li>
    </ol>
  </div>
</header>

<section class="bb-section">
  <div class="bb-wrap">

    <!-- Form -->
    <div id="bb-form-section">
      <div class="bb-section-head">
        <h2 id="bb-form-title" tabindex="-1">Your application</h2>
        <p>Both fields are required. The more complete the job description and resume, the more specific the feedback will be.</p>
      </div>

      <form id="bb-review-form" novalidate>
        <div class="bb-fields">

          <div class="bb-field">
            <label for="bb-jd">Job description</label>
            <p class="bb-field-hint" id="bb-jd-hint">Paste the full posting, including the requirements section and any preferred qualifications.</p>
            <textarea
              id="bb-jd"
              maxlength="8000"
              aria-required="true"
              aria-describedby="bb-jd-hint bb-jd-counter"
              placeholder="Paste the job description here...

Example:
We are seeking a motivated undergraduate student for a summer internship in our Computational Biology group. The ideal candidate will have experience with Python or R, familiarity with RNA-seq data analysis, and a strong foundation in molecular biology..."></textarea>
            <p class="bb-char-counter" id="bb-jd-counter">0 / 8,000</p>
          </div>

          <div class="bb-field">
            <label for="bb-resume">Your resume</label>
            <p class="bb-field-hint" id="bb-resume-hint">Paste your resume as plain text. Copy from your Word doc, Google Doc, or PDF reader.</p>
            <textarea
              id="bb-resume"
              maxlength="8000"
              aria-required="true"
              aria-describedby="bb-resume-hint bb-resume-counter"
              placeholder="Paste your resume text here...

Example:
Jane Smith
jane@university.edu | linkedin.com/in/janesmith

EDUCATION
B.S. Biochemistry, University of Michigan, Expected May 2026
GPA: 3.7 / 4.0

RESEARCH EXPERIENCE
Undergraduate Research Assistant, Dr. Chen Lab..."></textarea>
            <p class="bb-char-counter" id="bb-resume-counter">0 / 8,000</p>
          </div>

        </div>

        <div class="bb-validation-msg" id="bb-validation-msg" role="alert">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          <span id="bb-validation-text">Please fill in both fields before analyzing.</span>
        </div>

        <div class="bb-submit">
          <button type="submit" class="bb-button" id="bb-submit-btn">Analyze my application</button>
          <p class="bb-submit-note">Takes about <span class="bb-nowrap">15–20 seconds</span>. Your text is not stored.</p>
        </div>
      </form>
    </div>

    <!-- Loading -->
    <div id="bb-loading" class="bb-loading" role="status">
      <span class="bb-spinner" aria-hidden="true"></span>
      <p class="bb-loading-heading">Analyzing your application&hellip;</p>
      <p class="bb-loading-sub">Claude is reviewing the job description and your resume. This usually takes <span class="bb-nowrap">15–20 seconds</span>.</p>
    </div>

    <!-- Results -->
    <div id="bb-results" class="bb-results">
      <div class="bb-section-head">
        <h2 id="bb-results-title" tabindex="-1">Your results</h2>
        <p id="bb-results-role" hidden></p>
      </div>

      <div class="bb-score">
        <div>
          <p class="bb-score-caption">Match score</p>
          <p class="bb-score-num"><span id="bb-ring-num">0</span><span class="bb-score-outof">/100</span></p>
          <div class="bb-meter" aria-hidden="true"><div id="bb-ring-fill" class="bb-meter-fill"></div></div>
        </div>
        <div>
          <h3 id="bb-score-label" class="bb-score-label"></h3>
          <p id="bb-score-summary" class="bb-score-summary"></p>
          <button type="button" id="bb-share-btn" class="bb-copy">Copy shareable summary</button>
        </div>
      </div>

      <div class="bb-findings">
        <div class="bb-finding">
          <h3>Strengths</h3>
          <ul id="bb-strengths-list" class="bb-list bb-list--strengths"></ul>
        </div>
        <div class="bb-finding">
          <h3>Gaps</h3>
          <ul id="bb-gaps-list" class="bb-list bb-list--gaps"></ul>
        </div>
      </div>

      <div class="bb-finding bb-keywords">
        <h3>Keywords from the job description</h3>
        <div class="bb-keyword-groups">
          <div>
            <h4>In your resume</h4>
            <ul id="bb-kw-matched" class="bb-tags bb-tags--matched"></ul>
          </div>
          <div>
            <h4>Missing from your resume</h4>
            <ul id="bb-kw-missing" class="bb-tags bb-tags--missing"></ul>
          </div>
        </div>
      </div>

      <div class="bb-findings">
        <div class="bb-finding">
          <h3>Cover letter tips</h3>
          <ul id="bb-cover-list" class="bb-list"></ul>
        </div>
        <div class="bb-finding">
          <h3>Before you apply</h3>
          <ul id="bb-actions-list" class="bb-list"></ul>
        </div>
      </div>

      <div class="bb-results-end">
        <p class="bb-disclaimer">This analysis is AI-generated. Use it as a starting point, not a definitive assessment. Results may not capture all your experience or the full context of the role.</p>
        <button type="button" id="bb-try-again" class="bb-button">Try another application</button>
      </div>
    </div>

  </div>
</section>

<!-- Where to go next -->
<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Where to go next</h2>
    </div>
    <ul class="bb-index">
      <li>
        <a href="/products/">
          <span class="bb-index-title">The Biotech Blueprint</span>
          <span class="bb-index-text">Real materials, annotated line by line: a resume that landed a pharma internship, cold emails that got replies, and real interview questions.</span>
        </a>
      </li>
      <li>
        <a href="/career-pathways/">
          <span class="bb-index-title">Careers</span>
          <span class="bb-index-text">Seven paths into the field, from lab research to regulatory policy, with realistic entry points for each.</span>
        </a>
      </li>
      <li>
        <a href="/resources/">
          <span class="bb-index-title">The Learning Lab</span>
          <span class="bb-index-text">Newsletters, podcasts, YouTube channels, courses, and books, picked for people who are new to the field.</span>
        </a>
      </li>
    </ul>
  </div>
</section>

</div>

<script>
(function () {
  'use strict';
  var MAX        = 8000;
  var WORKER_URL = 'https://biobridge-reviewer.jennifertranpk.workers.dev';

  var jdEl         = document.getElementById('bb-jd');
  var resumeEl     = document.getElementById('bb-resume');
  var jdCount      = document.getElementById('bb-jd-counter');
  var resCount     = document.getElementById('bb-resume-counter');
  var form         = document.getElementById('bb-review-form');
  var formTitle    = document.getElementById('bb-form-title');
  var valMsg       = document.getElementById('bb-validation-msg');
  var valText      = document.getElementById('bb-validation-text');
  var formSec      = document.getElementById('bb-form-section');
  var loadingSec   = document.getElementById('bb-loading');
  var resultsSec   = document.getElementById('bb-results');
  var resultsTitle = document.getElementById('bb-results-title');
  var tryAgainBtn  = document.getElementById('bb-try-again');
  var shareBtn     = document.getElementById('bb-share-btn');

  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Scrolling ----
  // Elements with an id get scroll-margin-top from biobridge.css,
  // which keeps them clear of the sticky header.
  function scrollToEl(el, block) {
    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: block || 'start' });
  }

  function scrollIfHidden(el, block) {
    var r = el.getBoundingClientRect();
    if (r.top < 80 || r.bottom > window.innerHeight) scrollToEl(el, block);
  }

  // ---- Char counters ----
  function updateCounter(el, ctrEl) {
    var n = el.value.length;
    ctrEl.textContent = n.toLocaleString() + ' / ' + MAX.toLocaleString();
    ctrEl.className = 'bb-char-counter' +
      (n >= MAX ? ' over' : n >= MAX * 0.9 ? ' warn' : '');
  }

  function flagField(el) {
    el.classList.add('bb-field-error');
    el.setAttribute('aria-invalid', 'true');
  }

  function clearField(el) {
    el.classList.remove('bb-field-error');
    el.removeAttribute('aria-invalid');
  }

  jdEl.addEventListener('input', function () {
    updateCounter(jdEl, jdCount);
    clearField(jdEl);
    hideValidation();
  });
  resumeEl.addEventListener('input', function () {
    updateCounter(resumeEl, resCount);
    clearField(resumeEl);
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

  // ---- Animate meter + count-up ----
  function animateScore(target) {
    var fill  = document.getElementById('bb-ring-fill');
    var numEl = document.getElementById('bb-ring-num');
    var score = Math.max(0, Math.min(100, Number(target) || 0));

    if (reduceMotion) {
      fill.style.width  = score + '%';
      numEl.textContent = score;
      return;
    }

    var startTs = null;
    var dur     = 1200;
    function tick(ts) {
      if (!startTs) startTs = ts;
      var p    = Math.min((ts - startTs) / dur, 1);
      var ease = 1 - Math.pow(1 - p, 3);
      fill.style.width  = (score * ease) + '%';
      numEl.textContent = Math.round(score * ease);
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  function resetScore() {
    document.getElementById('bb-ring-fill').style.width = '0%';
    document.getElementById('bb-ring-num').textContent  = '0';
  }

  // ---- Helpers ----
  function renderList(ulId, items) {
    var ul = document.getElementById(ulId);
    ul.innerHTML = '';
    (items || []).forEach(function (text) {
      var li = document.createElement('li');
      li.textContent = String(text);
      ul.appendChild(li);
    });
  }

  function renderTags(ulId, words) {
    var ul = document.getElementById(ulId);
    ul.innerHTML = '';
    (words || []).forEach(function (word) {
      var li = document.createElement('li');
      li.textContent = String(word);
      ul.appendChild(li);
    });
    if (!ul.children.length) {
      var none = document.createElement('li');
      none.className = 'bb-tags-none';
      none.textContent = 'None';
      ul.appendChild(none);
    }
  }

  // "Good Match" from the service reads as "Good match" on the page
  function sentenceCase(s) {
    s = String(s || '');
    return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
  }

  function renderRole(title, co) {
    var el = document.getElementById('bb-results-role');
    var text = title && co ? title + ' at ' + co : title ? title : co ? 'A role at ' + co : '';
    el.textContent = text;
    el.hidden = !text;
  }

  // ---- Share ----
  function buildShareText(data) {
    var score = data.matchScore;
    var label = data.matchLabel || '';
    var title = data.jobTitle  || null;
    var co    = data.company   || null;
    var url   = 'biotechbridge.org/application-reviewer/';
    var base  = 'I got a ' + score + '/100 ' + label;
    if (title && co) return base + ' for ' + title + ' at ' + co + ', analyzed by BioBridge · ' + url;
    if (title)       return base + ' for ' + title + ', analyzed by BioBridge · ' + url;
    return base + ', analyzed by BioBridge · ' + url;
  }

  var SHARE_LABEL = shareBtn.innerHTML;

  shareBtn.addEventListener('click', function () {
    var text = shareBtn.dataset.shareText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(function () {
      shareBtn.classList.add('bb-share-copied');
      shareBtn.textContent = 'Copied!';
      setTimeout(function () {
        shareBtn.classList.remove('bb-share-copied');
        shareBtn.innerHTML = SHARE_LABEL;
      }, 2000);
    });
  });

  function renderResults(data) {
    var keywords = data.keywords || {};
    document.getElementById('bb-score-label').textContent   = sentenceCase(data.matchLabel);
    document.getElementById('bb-score-summary').textContent = data.summary || '';
    renderRole(data.jobTitle, data.company);
    shareBtn.dataset.shareText = buildShareText(data);
    renderList('bb-strengths-list', data.strengths);
    renderList('bb-gaps-list',      data.gaps);
    renderList('bb-cover-list',     data.coverLetterTips);
    renderList('bb-actions-list',   data.actionItems);
    renderTags('bb-kw-matched',     keywords.matched);
    renderTags('bb-kw-missing',     keywords.missing);
    resetScore();
    showState('results');
    scrollToEl(resultsSec);
    resultsTitle.focus({ preventScroll: true });
    setTimeout(function () { animateScore(data.matchScore); }, 100);
  }

  // ---- Submit ----
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var jd     = jdEl.value.trim();
    var resume = resumeEl.value.trim();

    if (!jd && !resume) {
      flagField(jdEl);
      flagField(resumeEl);
      showValidation('Please paste a job description and your resume before analyzing.');
      return;
    }
    if (!jd)     { flagField(jdEl);     showValidation('Please paste the job description.'); return; }
    if (!resume) { flagField(resumeEl); showValidation('Please paste your resume text.');    return; }
    if (jd.length < 100)     { flagField(jdEl);     showValidation('The job description looks too short. Paste the full posting for accurate results.'); return; }
    if (resume.length < 100) { flagField(resumeEl); showValidation('The resume text looks too short. Paste your full resume for accurate results.');    return; }

    hideValidation();
    showState('loading');
    scrollIfHidden(loadingSec);

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ jobDescription: jd, resumeText: resume })
    })
    .then(function (res) {
      return res.json().then(function (data) {
        if (!res.ok) throw new Error(data.error || 'Analysis service unavailable. Please try again.');
        return data;
      }, function () {
        // The reply wasn't JSON, so there's no message from the service to show
        throw new Error('Analysis service unavailable. Please try again.');
      });
    }, function () {
      // The request never got an answer (offline, blocked, or unreachable)
      throw new Error('Couldn\'t reach the analysis service. Check your connection and try again.');
    })
    .then(function (data) {
      renderResults(data);
    })
    .catch(function (err) {
      showState('form');
      showValidation(err.message || 'Something went wrong. Please try again.');
      scrollIfHidden(valMsg, 'center');
    });
  });

  // ---- Try again ----
  tryAgainBtn.addEventListener('click', function () {
    showState('form');
    scrollToEl(formSec);
    formTitle.focus({ preventScroll: true });
  });

}());
</script>
