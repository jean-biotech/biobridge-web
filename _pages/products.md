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

/* Product image placeholder */
.bb-product-img {
  background: linear-gradient(145deg, #e0ebe2, #d4e8d9);
  border: 1px dashed rgba(45,95,63,0.3);
  border-radius: 8px;
  padding: 2rem 1.25rem;
  text-align: center;
  color: var(--bb-gray);
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  min-height: 180px;
}
.bb-product-img-label {
  display: inline-block;
  background: rgba(45,95,63,0.1);
  border: 1px dashed rgba(45,95,63,0.3);
  border-radius: 5px;
  padding: 0.35rem 0.85rem;
  letter-spacing: 0.02em;
  font-size: 0.75rem;
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
    <div class="bb-product-img-label">Blueprint Cover / Preview</div>
    <div style="font-size:0.72rem; color: var(--bb-gray); margin-top:0.2rem;">Placeholder. Final mockup coming.</div>
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
      <li><strong>A beginner's guide to reading a scientific paper, step by step:</strong> no science background assumed.</li>
      <li><strong>Four roadmaps for four starting points:</strong> high school student, non-biology college major, career changer, and graduate student.</li>
      <li><strong>The most common mistakes people make applying to biotech roles:</strong> and exactly how to fix them.</li>
    </ul>

    <p class="bb-section-label">Who It's For</p>
    <p class="bb-who-prose">The Blueprint is for anyone who wants more than a list of tips. If you're in high school trying to get ahead before college applications or summer programs, it maps out where to start. If you're a college student (any major) wondering how to connect what you're studying to a real biotech career, it gives you a framework. Recent grads who need to translate their degree into actual next steps will find it useful, and so will career changers who've spent too much time wading through generic advice that doesn't account for where they're actually starting from. Anyone who learns better from real examples and experience-backed reasoning, rather than scattered internet searches or generic listicles, is exactly who this was written for.</p>

    <p class="bb-section-label">Get the Guide</p>
    <div class="bb-price-row">
      <span class="bb-price-tag">$22</span>
    </div>
    <a href="#" class="bb-buy-btn">Purchase on Gumroad</a>
    <p class="bb-coming-soon-note">Link coming soon; guide in final review.</p>
  </div>

</div>

<!-- WHY A PAID GUIDE -->
<div class="bb-why-paid">
  <h2>Why a Paid Guide?</h2>
  <p>I spent months figuring out what no one explains clearly: which resume format actually gets interviews, how to cold email a professor and hear back, what to say in your first biotech internship application. A lot of it was trial and error. The Blueprint is what came out of that process: my actual materials, annotated and explained, alongside roadmaps I developed from my own experience as a student navigating this field.</p>
  <p>Everything on this website (the career pages, the resource library, the FAQ) is free and always will be. The Blueprint is for people who want everything in one place, with more depth, in a format they can save and return to. If you want experience-backed guidance rather than another generic article, this is it.</p>
</div>

<!-- COMING SOON -->
<div class="bb-roadmap">
  <h2>Coming Soon</h2>
  <div class="bb-roadmap-item">
    <div class="bb-roadmap-dot"></div>
    <p><strong>Mentorship Program Access</strong>—Connect directly with biotech professionals who have been where you are and can help you figure out the next step.</p>
  </div>
  <div class="bb-roadmap-item">
    <div class="bb-roadmap-dot"></div>
    <p><strong>BioBridge High School Program Initiative at Thomas Jefferson University:</strong> A structured educational program bringing biotech literacy directly into high school classrooms — modeled after initiatives like First Generation Investors, with the goal of giving students hands-on exposure to the industry before college.</p>
  </div>
</div>

<p class="bb-contact-note">Questions about the guide? Email <a href="mailto:jeans.connects@gmail.com">jeans.connects@gmail.com</a></p>
