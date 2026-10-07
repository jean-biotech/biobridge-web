---
layout: splash
title: "Guides"
permalink: /products/
---

<style>
/* ================================================================
   GUIDES
   Shared pieces (type, bands, buttons, index, notes) come from
   assets/css/biobridge.css. These are the parts only this page uses.
   ================================================================ */

/* ---------- Hero: the guide, its price, and the free preview ---------- */

.bb-guides-hero {
  display: grid;
  gap: 2.25rem;
}

.bb-guides .bb-guides-cover {
  display: block;
  width: 150px;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(23, 33, 28, 0.12), 0 14px 30px rgba(23, 33, 28, 0.2);
}

.bb-guides .bb-guides-hero .bb-lede {
  max-width: 32em;
}

.bb-guides .bb-guides-price {
  margin-top: 2rem;
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: 2rem;
  line-height: 1;
  color: var(--bb-ink);
}

.bb-guides .bb-guides-hero .bb-actions {
  margin-top: 1.25rem;
}

/* The purchase link keeps Gumroad's class so its checkout overlay works.
   Gumroad's script can restyle .gumroad-button, so pin the site's look. */
.bb-guides a.bb-button.gumroad-button {
  display: inline-block !important;
  background: var(--bb-green) !important;
  color: #fff !important;
  font-family: var(--bb-sans) !important;
  font-size: 1.05rem !important;
  font-weight: 600 !important;
  line-height: 1 !important;
  padding: 1rem 1.5rem !important;
  border: 0 !important;
  border-radius: 6px !important;
  box-shadow: none !important;
  text-decoration: none !important;
  text-shadow: none !important;
}

.bb-guides a.bb-button.gumroad-button:hover {
  background: var(--bb-green-dark) !important;
}

/* ---------- What's included, and coming soon ---------- */

.bb-guides .bb-index .bb-index-title {
  font-size: 1.35rem;
}

/* ---------- Who it's for, and why it's paid: heading beside the text ---------- */

.bb-guides-split {
  display: grid;
  gap: 1.75rem;
}

.bb-guides .bb-guides-split-text > p {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 41rem;
}

.bb-guides .bb-guides-split-text > p + p {
  margin-top: 1.1em;
}

.bb-guides .bb-guides-intl {
  max-width: 41rem;
  margin-top: 2.25rem;
}

.bb-guides .bb-guides-intl h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.bb-guides .bb-guides-intl p {
  font-size: 1rem;
  line-height: 1.6;
}

.bb-guides .bb-guides-split-text .bb-guides-sign {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 2rem;
  font-size: 1rem;
  line-height: 1.45;
}

.bb-guides .bb-guides-sign img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex: none;
}

/* ---------- Free preview (last section) ---------- */

.bb-guides-preview {
  display: grid;
  gap: 2rem;
}

.bb-guides .bb-guides-preview-text {
  max-width: 32em;
}

.bb-guides .bb-guides-preview .bb-actions {
  margin-top: 0;
}

.bb-guides .bb-guides-sample h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.bb-guides .bb-guides-sample p {
  font-size: 1rem;
  line-height: 1.6;
}

.bb-guides .bb-guides-contact {
  margin-top: 2.5rem;
  font-size: 1rem;
}

/* No one-word last lines */
.bb-guides p,
.bb-guides .bb-index-text {
  text-wrap: pretty;
}

/* ---------- Wider screens ---------- */

@media (min-width: 700px) {
  .bb-guides-hero {
    grid-template-columns: 220px minmax(0, 1fr);
    gap: 3rem;
    align-items: center;
  }

  .bb-guides .bb-guides-cover {
    width: 100%;
  }
}

@media (min-width: 900px) {
  .bb-guides-hero {
    grid-template-columns: 300px minmax(0, 1fr);
    gap: 4.5rem;
  }

  .bb-guides-split {
    grid-template-columns: 280px minmax(0, 1fr);
    column-gap: 4.5rem;
  }

  .bb-guides-preview {
    grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
    grid-template-areas:
      "text sample"
      "actions sample";
    grid-template-rows: auto 1fr;
    column-gap: 4rem;
    align-items: start;
  }

  .bb-guides-preview-text { grid-area: text; }
  .bb-guides-sample { grid-area: sample; }
  .bb-guides .bb-guides-preview .bb-actions { grid-area: actions; }
}

@media (min-width: 1000px) {
  .bb-guides .bb-index.bb-guides-included,
  .bb-guides .bb-index.bb-guides-soon {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>

<div class="bb-page bb-guides">

<!-- Hero -->
<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap bb-guides-hero">
    <img class="bb-guides-cover" src="/assets/images/blueprint-cover-600.jpg" alt="Cover of The Biotech Blueprint" width="600" height="900">
    <div>
      <p class="bb-kicker">Guides</p>
      <h1>The Biotech Blueprint</h1>
      <p class="bb-lede">A comprehensive, practical guide for anyone taking their first steps into biotechnology. Real materials, annotated and explained, with roadmaps developed from direct experience navigating this field as a student.</p>
      <p class="bb-guides-price">$22</p>
      <div class="bb-actions">
        <a class="bb-button gumroad-button" href="https://tranquility120.gumroad.com/l/the-biotech-blueprint" data-gumroad-product-id="the-biotech-blueprint">Purchase on Gumroad</a>
        <a class="bb-textlink" href="/free-preview">Read the free preview</a>
      </div>
    </div>
  </div>
</header>

<!-- What's included -->
<section class="bb-section" id="included">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>What's included</h2>
    </div>
    <ul class="bb-index bb-guides-included">
      <li>
        <div>
          <span class="bb-index-title">Annotated resume</span>
          <span class="bb-index-text">A personal resume that landed a biotech internship at a major pharma company, annotated line by line so you understand every formatting and content choice, not just what it looks like.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Cold email and outreach templates</span>
          <span class="bb-index-text">Templates that got responses from partners at firms and senior people at major biotech and pharma companies, including the exact framing that works when you have no existing connections.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Pivot story roadmap</span>
          <span class="bb-index-text">Based on a real transition from pre-dental to biotech, with the specific steps, reframing strategies, and application materials that made it work.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Interview prep guide</span>
          <span class="bb-index-text">Actual questions asked at biotech companies, organized by role type, with guidance on how to approach each one.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Professors and labs</span>
          <span class="bb-index-text">A curated list of biotech-friendly professors and labs organized by research area, for students trying to get into research without existing connections.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Career quiz</span>
          <span class="bb-index-text">A quiz to help identify which biotech role fits your background and goals, with tailored next steps based on your results.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Career timeline and entry roadmap</span>
          <span class="bb-index-text">A complete timeline that maps out exactly what to do at each stage, from your first research experience to your first industry role.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">Interview prep roadmap</span>
          <span class="bb-index-text">A full roadmap covering the entire hiring arc, from application to offer, with what to expect at each stage and how to prepare for it.</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<!-- Who it's for -->
<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap bb-guides-split">
    <h2>Who it's for</h2>
    <div class="bb-guides-split-text">
      <p>The Blueprint is for anyone who wants more than a list of tips. If you're in high school trying to get ahead before college applications or summer programs, it maps out where to start. If you're a college student (any major) wondering how to connect what you're studying to a real biotech career, it gives you a framework.</p>
      <p>Recent grads who need to translate their degree into actual next steps will find it useful, and so will career changers who've spent too much time wading through generic advice that doesn't account for where they're actually starting from. Anyone who learns better from real examples and experience-backed reasoning, rather than scattered internet searches or generic listicles, is exactly who this was written for.</p>
      <aside class="bb-note bb-guides-intl">
        <h3>Outside the US?</h3>
        <p>Canada, the UK, and Australia typically use CVs (curriculum vitae) rather than resumes, and formatting expectations differ: CVs are often longer, include more detail on academic history, and may include a personal statement. The resume materials in the Biotech Blueprint are formatted for US applications. The frameworks and principles apply internationally, but you may want to adapt the formatting to match local conventions in your country.</p>
      </aside>
    </div>
  </div>
</section>

<!-- Why a paid guide -->
<section class="bb-section bb-band bb-band--forest">
  <div class="bb-wrap bb-guides-split">
    <h2>Why a paid guide?</h2>
    <div class="bb-guides-split-text">
      <p>I spent months figuring out what no one explains clearly: which resume format actually gets interviews, how to cold email a professor and hear back, what to say in your first biotech internship application. A lot of it was trial and error. The Blueprint is what came out of that process: my actual materials, annotated and explained, alongside roadmaps I developed from my own experience as a student navigating this field.</p>
      <p>Everything on this website (the <a href="/career-pathways/">career pages</a>, the <a href="/resources/">resource library</a>, the <a href="/faq/">FAQ</a>) is free and always will be. The Blueprint is for people who want everything in one place, with more depth, in a format they can save and return to. If you want experience-backed guidance rather than another generic article, this is it.</p>
      <p class="bb-guides-sign">
        <img src="/assets/images/profile-photo.jpg" alt="" width="48" height="48" loading="lazy">
        <span><strong>Jean Tran</strong>, founder</span>
      </p>
    </div>
  </div>
</section>

<!-- Coming soon -->
<section class="bb-section">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Coming soon</h2>
    </div>
    <ul class="bb-index bb-guides-soon">
      <li>
        <div>
          <span class="bb-index-title">Mentorship program access</span>
          <span class="bb-index-text">Connect directly with biotech professionals who have been where you are and can help you figure out the next step.</span>
        </div>
      </li>
      <li>
        <div>
          <span class="bb-index-title">BioBridge High School Program Initiative at Thomas Jefferson University</span>
          <span class="bb-index-text">A structured educational program bringing biotech literacy directly into high school classrooms, modeled after initiatives like First Generation Investors, with the goal of giving students hands-on exposure to the industry before college.</span>
        </div>
      </li>
    </ul>
  </div>
</section>

<!-- Free preview -->
<section class="bb-section bb-band bb-band--cream" id="free-preview">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <p class="bb-kicker">Try before you buy</p>
      <h2>Get a free preview</h2>
    </div>
    <div class="bb-guides-preview">
      <p class="bb-guides-preview-text">Not sure if the Blueprint is right for you? Download a free sample and see the level of detail, annotation, and practical guidance you can expect throughout the full guide.</p>
      <div class="bb-note bb-guides-sample">
        <h3>Free sample: the cold email template</h3>
        <p>The exact email framework that got responses from senior people at major biotech and pharma companies, annotated line by line.</p>
      </div>
      <div class="bb-actions">
        <a class="bb-button" href="/free-preview">Get the free preview</a>
      </div>
    </div>
    <p class="bb-guides-contact bb-muted">Questions about the guide? Email <a href="mailto:jeans.connects@gmail.com">jeans.connects@gmail.com</a></p>
  </div>
</section>

</div>
