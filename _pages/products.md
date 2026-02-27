---
layout: single
title: "Guides"
permalink: /products/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
h1, h2, h3 { font-family: 'Playfair Display', Georgia, serif; }

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
}

/* Hero logo */
.bb-hero-logo {
  display: block;
  height: 52px;
  width: auto;
  margin-bottom: 1rem;
  filter: brightness(0) saturate(100%) invert(79%) sepia(38%) saturate(475%) hue-rotate(2deg) brightness(0.98) contrast(0.92);
}

/* Page Header */
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
  margin: 0 0 0.4rem;
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

/* Main product layout */
.bb-product-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.75rem;
  margin-bottom: 2rem;
}

/* Product image */
.bb-product-img {
  border-radius: 8px;
  overflow: hidden;
  min-height: 180px;
}
.bb-product-img img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 8px;
}

/* Product card */
.bb-product-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1.75rem 1.5rem;
  box-shadow: 0 3px 16px rgba(0,0,0,0.05);
}
.bb-product-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  margin: 0 0 0.4rem;
}
.bb-product-card h2 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--bb-navy);
  font-size: 1.45rem;
  font-weight: 700;
  margin: 0 0 0.65rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
}
.bb-product-tagline {
  color: var(--bb-text-secondary);
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  line-height: 1.7;
  margin: 0 0 1.25rem;
}

/* Section headers inside card */
.bb-section-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--bb-green);
  margin: 0 0 0.65rem;
  padding-top: 1.1rem;
  border-top: 1px solid var(--bb-border);
}
.bb-section-label:first-of-type {
  border-top: none;
  padding-top: 0;
}

/* Feature list (What's Included) */
.bb-feature-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1.25rem;
}
.bb-feature-list li {
  position: relative;
  padding-left: 1.65rem;
  margin-bottom: 0.6rem;
  color: var(--bb-text-secondary);
  font-size: 0.87rem;
  line-height: 1.65;
}
.bb-feature-list li::before {
  content: '\2713';
  position: absolute;
  left: 0;
  color: var(--bb-green-accent);
  font-weight: 700;
  font-size: 0.9rem;
  line-height: 1.65;
}

/* Who It's For prose */
.bb-who-prose {
  color: var(--bb-text-secondary);
  font-size: 0.87rem;
  line-height: 1.75;
  margin: 0 0 1.25rem;
}

/* Price & CTA */
.bb-price-row {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-bottom: 0.85rem;
  flex-wrap: wrap;
}
.bb-price-tag {
  display: inline-block;
  background: var(--bb-navy);
  color: var(--bb-white);
  padding: 0.4rem 1.25rem;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.bb-buy-btn {
  display: inline-block;
  background: var(--bb-green-accent);
  color: var(--bb-white) !important;
  padding: 0.75rem 2rem;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.88rem;
  text-decoration: none !important;
  transition: all 0.22s ease;
  border: 1.5px solid var(--bb-green-accent);
}
.bb-buy-btn:hover {
  background: var(--bb-green);
  border-color: var(--bb-green);
  transform: translateY(-1px);
  box-shadow: 0 5px 16px rgba(45,95,63,0.25);
  color: var(--bb-white) !important;
}
.bb-coming-soon-note {
  color: var(--bb-gray);
  font-size: 0.78rem;
  font-style: italic;
  margin-top: 0.35rem;
}

/* Why a Paid Guide section */
.bb-why-paid {
  background: var(--bb-green-bg-subtle);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 1.5rem;
}
.bb-why-paid h2 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 0.85rem;
}
.bb-why-paid p {
  color: var(--bb-text-secondary);
  font-size: 0.87rem;
  line-height: 1.8;
  margin: 0 0 0.75rem;
}
.bb-why-paid p:last-child { margin-bottom: 0; }

/* Coming Soon roadmap */
.bb-roadmap {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1.5rem 1.5rem;
  margin-bottom: 1.5rem;
}
.bb-roadmap h2 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0 0 1rem;
}
.bb-roadmap-item {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  margin-bottom: 0.85rem;
  padding-bottom: 0.85rem;
  border-bottom: 1px solid #f1f5f9;
}
.bb-roadmap-item:last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}
.bb-roadmap-dot {
  width: 8px;
  height: 8px;
  min-width: 8px;
  background: var(--bb-green-accent);
  border-radius: 50%;
  margin-top: 0.4rem;
}
.bb-roadmap-item p {
  color: var(--bb-text-secondary);
  font-size: 0.87rem;
  line-height: 1.55;
  margin: 0;
}
.bb-roadmap-item strong {
  color: var(--bb-navy);
}

/* Contact note */
.bb-contact-note {
  text-align: center;
  color: var(--bb-gray);
  font-size: 0.85rem;
}
.bb-contact-note a {
  color: var(--bb-green-accent);
  font-weight: 600;
}

/* Free Preview Card */
.bb-preview-card {
  background: linear-gradient(135deg, #FFF8EE 0%, #FFF3E0 100%);
  border: 1.5px solid #F5A623;
  border-radius: 10px;
  padding: 1.75rem 1.5rem;
  margin-bottom: 1.75rem;
  position: relative;
  overflow: hidden;
}
.bb-preview-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; width: 100%; height: 4px;
  background: linear-gradient(90deg, #F5A623, #E67E22);
}
.bb-preview-eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #E67E22;
  margin: 0 0 0.4rem;
}
.bb-preview-card h2 {
  font-family: 'Playfair Display', Georgia, serif;
  color: #1A3A28;
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.6rem;
  letter-spacing: -0.02em;
}
.bb-preview-card p {
  font-family: 'Inter', sans-serif;
  color: #475569;
  font-size: 0.87rem;
  line-height: 1.75;
  margin: 0 0 1.1rem;
}
.bb-preview-sample {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: var(--bb-white);
  border: 1px solid #F5A623;
  border-radius: 7px;
  padding: 0.85rem 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;
}
.bb-preview-sample-icon {
  font-size: 1.75rem;
  flex-shrink: 0;
}
.bb-preview-sample-info {
  flex: 1;
  min-width: 0;
}
.bb-preview-sample-info strong {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  color: #1A3A28;
  margin-bottom: 0.15rem;
}
.bb-preview-sample-info span {
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  color: var(--bb-gray);
}
.bb-preview-btn {
  display: inline-block;
  background: #E67E22;
  color: var(--bb-white) !important;
  padding: 0.65rem 1.5rem;
  border-radius: 5px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none !important;
  transition: all 0.22s ease;
  white-space: nowrap;
  flex-shrink: 0;
}
.bb-preview-btn:hover {
  background: #D35400;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(230,126,34,0.3);
  color: var(--bb-white) !important;
}
.bb-preview-coming-soon {
  display: inline-block;
  background: rgba(230,126,34,0.1);
  border: 1px solid rgba(230,126,34,0.35);
  border-radius: 4px;
  padding: 0.2rem 0.65rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  color: #E67E22;
}

/* International callout */
.bb-international-callout {
  background: #FAF7F2;
  border: 1px solid #e8dfd0;
  border-left: 4px solid var(--bb-green-accent);
  border-radius: 7px;
  padding: 1rem 1.25rem;
  margin: 1.25rem 0;
}
.bb-international-callout .bb-intl-header {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--bb-green);
  margin: 0 0 0.4rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
.bb-international-callout p {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-style: italic;
  color: var(--bb-text-secondary);
  line-height: 1.7;
  margin: 0;
}

/* Mobile */
@media (max-width: 768px) {
  .bb-preview-sample {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
  }
  .bb-preview-sample-icon {
    text-align: center;
  }
  .bb-preview-btn {
    width: 100%;
    text-align: center;
    display: block;
  }
}

/* Desktop */
@media (min-width: 769px) {
  .bb-page-hero { padding: 2.5rem 2.5rem; border-radius: 10px; }
  .bb-page-hero h1 { font-size: 1.65rem; }
  .bb-page-hero p { font-size: 0.93rem; }
  .bb-product-layout { grid-template-columns: 2fr 3fr; align-items: start; gap: 2.25rem; }
  .bb-product-card { padding: 2rem 2.25rem; }
  .bb-product-card h2 { font-size: 1.75rem; }
  .bb-product-img { min-height: 260px; }
  .bb-why-paid { padding: 1.75rem 2rem; }
  .bb-roadmap { padding: 1.75rem 2rem; }
  .bb-preview-card { padding: 2rem 2.25rem; }
  .bb-preview-card h2 { font-size: 1.4rem; }
}
</style>

<div class="bb-page-hero">
  <h1>BioBridge Guides</h1>
  <p>Structured, experience-backed guidance for anyone figuring out their path into biotech.</p>
</div>

<!-- MAIN PRODUCT LAYOUT -->
<div class="bb-product-layout">

  <!-- Product image -->
  <div class="bb-product-img">
    <img src="/assets/images/blueprint-cover.png" alt="The Biotech Blueprint cover">
  </div>

  <!-- Product details -->
  <div class="bb-product-card">
    <p class="bb-product-eyebrow">BioBridge Guide</p>
    <h2>The Biotech Blueprint</h2>
    <p class="bb-product-tagline">A comprehensive, practical guide for anyone taking their first steps into biotechnology. Real materials, annotated and explained, with roadmaps developed from direct experience navigating this field as a student.</p>

    <p class="bb-section-label">What's Included</p>
    <ul class="bb-feature-list">
      <li><strong>A personal resume that landed a biotech internship at a major pharma company:</strong> annotated line by line so you understand every formatting and content choice, not just what it looks like.</li>
      <li><strong>Cold email and outreach templates that got responses from partners at firms and senior people at major biotech and pharma companies:</strong> including the exact framing that works when you have no existing connections.</li>
      <li><strong>A pivot story roadmap based on a real transition from pre-dental to biotech:</strong> with the specific steps, reframing strategies, and application materials that made it work.</li>
      <li><strong>An interview prep guide with actual questions asked at biotech companies, organized by role type:</strong> with guidance on how to approach each one.</li>
      <li><strong>A curated list of biotech-friendly professors and labs organized by research area:</strong> for students trying to get into research without existing connections.</li>
      <li><strong>A career quiz to help identify which biotech role fits your background and goals:</strong> with tailored next steps based on your results.</li>
      <li><strong>A complete career timeline and entry roadmap:</strong> mapping out exactly what to do at each stage, from your first research experience to your first industry role.</li>
      <li><strong>A full interview prep roadmap covering the entire hiring arc:</strong> from application to offer, with what to expect at each stage and how to prepare for it.</li>
    </ul>

    <p class="bb-section-label">Who It's For</p>
    <p class="bb-who-prose">The Blueprint is for anyone who wants more than a list of tips. If you're in high school trying to get ahead before college applications or summer programs, it maps out where to start. If you're a college student (any major) wondering how to connect what you're studying to a real biotech career, it gives you a framework. Recent grads who need to translate their degree into actual next steps will find it useful, and so will career changers who've spent too much time wading through generic advice that doesn't account for where they're actually starting from. Anyone who learns better from real examples and experience-backed reasoning, rather than scattered internet searches or generic listicles, is exactly who this was written for.</p>

    <p class="bb-section-label">Get the Guide</p>
    <div class="bb-price-row">
      <span class="bb-price-tag">$37</span>
    </div>
    <a href="https://tranquility120.gumroad.com/l/the-biotech-blueprint" class="bb-buy-btn gumroad-button" data-gumroad-product-id="the-biotech-blueprint">Purchase on Gumroad</a>
  </div>

</div>

<!-- WHY A PAID GUIDE -->
<div class="bb-why-paid">
  <h2>Why a Paid Guide?</h2>
  <p>I spent months figuring out what no one explains clearly: which resume format actually gets interviews, how to cold email a professor and hear back, what to say in your first biotech internship application. A lot of it was trial and error. The Blueprint is what came out of that process: my actual materials, annotated and explained, alongside roadmaps I developed from my own experience as a student navigating this field.</p>
  <p>Everything on this website (the career pages, the resource library, the FAQ) is free and always will be. The Blueprint is for people who want everything in one place, with more depth, in a format they can save and return to. If you want experience-backed guidance rather than another generic article, this is it.</p>
</div>

<!-- FREE PREVIEW CARD -->
<div class="bb-preview-card">
  <p class="bb-preview-eyebrow">Try Before You Buy</p>
  <h2>Get a Free Preview &rarr;</h2>
  <p>Not sure if the Blueprint is right for you? Download a free sample and see the level of detail, annotation, and practical guidance you can expect throughout the full guide.</p>
  <div class="bb-preview-sample">
    <div class="bb-preview-sample-icon"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--bb-green-accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg></div>
    <div class="bb-preview-sample-info">
      <strong>Free Sample: The Cold Email Template</strong>
      <span>The exact email framework that got responses from senior people at major biotech and pharma companies—annotated line by line.</span>
    </div>
    <a href="/free-preview" class="bb-preview-btn">Get Free Preview &rarr;</a>
  </div>
</div>

<!-- International callout — resume/CV context -->
<div class="bb-international-callout">
  <div class="bb-intl-header"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:middle;flex-shrink:0"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg> Outside the US?</div>
  <p>Canada, the UK, and Australia typically use CVs (curriculum vitae) rather than resumes, and formatting expectations differ—CVs are often longer, include more detail on academic history, and may include a personal statement. The resume materials in the Biotech Blueprint are formatted for US applications. The frameworks and principles apply internationally, but you may want to adapt the formatting to match local conventions in your country.</p>
</div>

<!-- COMING SOON -->
<div class="bb-roadmap">
  <h2>Coming Soon</h2>
  <div class="bb-roadmap-item">
    <div class="bb-roadmap-dot"></div>
    <p><strong>Mentorship Program Access</strong>: Connect directly with biotech professionals who have been where you are and can help you figure out the next step.</p>
  </div>
  <div class="bb-roadmap-item">
    <div class="bb-roadmap-dot"></div>
    <p><strong>BioBridge High School Program Initiative at Thomas Jefferson University:</strong> A structured educational program bringing biotech literacy directly into high school classrooms—modeled after initiatives like First Generation Investors, with the goal of giving students hands-on exposure to the industry before college.</p>
  </div>
</div>

<p class="bb-contact-note">Questions about the guide? Email <a href="mailto:jeans.connects@gmail.com">jeans.connects@gmail.com</a></p>
