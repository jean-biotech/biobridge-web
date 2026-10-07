---
layout: splash
title: " "
classes: wide
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600&family=Source+Serif+4:ital,opsz,wght@0,8..60,600;1,8..60,600&display=swap">

<style>
/* ================================================================
   HOMEPAGE
   Everything is scoped to .bb-home so the theme's defaults
   (heading borders, small paragraph sizes) don't leak in.
   ================================================================ */

.bb-home {
  --ink: #17211c;
  --text: #39443f;
  --muted: #5f6964;
  --green: #2d5f3f;
  --green-dark: #22492f;
  --forest: #1f3d2c;
  --cream: #f6f1e6;
  --cream-line: #e4dccb;
  --lime: #d4e9a6;
  --on-dark: #f6f1e6;
  --on-dark-soft: rgba(246, 241, 230, 0.82);
  --serif: 'Source Serif 4', Georgia, serif;
  --sans: 'Source Sans 3', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  font-family: var(--sans);
  font-size: 1.125rem;
  line-height: 1.6;
  color: var(--text);
}

.bb-home p {
  font-size: inherit;
  line-height: inherit;
  margin: 0;
}

.bb-home h1,
.bb-home h2 {
  font-family: var(--serif);
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  margin: 0;
  padding: 0;
  border: 0;
  text-wrap: balance;
}

.bb-home h2 {
  font-size: clamp(1.85rem, 1.4rem + 1.4vw, 2.5rem);
  line-height: 1.15;
}

.bb-home a {
  color: var(--green);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.2em;
}

.bb-home a:hover {
  color: var(--green-dark);
}

.bb-wrap {
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 0.5rem;
}

.bb-section {
  padding: 3.5rem 0;
}

/* Full-bleed background without causing horizontal scroll: the border
   image paints past the sides but doesn't count toward page width */
.bb-band {
  background: var(--band);
  border-image: conic-gradient(var(--band) 0 0) fill 0 // 0 100vmax;
}

.bb-band--cream { --band: var(--cream); }
.bb-band--forest { --band: var(--forest); }

/* The page ends on a colored band, so close the theme's gap above the footer */
.layout--splash .page__footer {
  margin-top: 0;
}

/* ---------- Buttons and links ---------- */

.bb-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem 1.75rem;
  margin-top: 2rem;
}

.bb-home .bb-button,
.bb-home .bb-button:visited {
  display: inline-block;
  background: var(--green);
  color: #fff;
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 1;
  padding: 1rem 1.5rem;
  border-radius: 6px;
  text-decoration: none;
  transition: background-color 0.15s ease;
}

.bb-home .bb-button:hover {
  background: var(--green-dark);
  color: #fff;
  text-decoration: none;
}

.bb-home .bb-textlink {
  font-weight: 600;
  font-size: 1.05rem;
}

/* ---------- Hero ---------- */

.bb-hero {
  padding: 2.75rem 0 3rem;
}

.bb-hero-grid {
  display: grid;
  gap: 2.75rem;
}

.bb-home .bb-hero h1 {
  font-size: clamp(2.4rem, 1.5rem + 3vw, 3.6rem);
  line-height: 1.08;
  max-width: 12em;
}

.bb-home .bb-hero h1 em {
  font-style: italic;
  color: var(--green);
}

.bb-home .bb-lede {
  font-size: 1.2rem;
  line-height: 1.55;
  max-width: 30em;
  margin-top: 1.5rem;
}

.bb-byline {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin-top: 2.5rem;
}

.bb-byline img {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  flex: none;
}

.bb-home .bb-byline p {
  font-size: 1rem;
  line-height: 1.45;
  color: var(--muted);
}

.bb-byline strong {
  color: var(--ink);
  font-weight: 600;
}

/* Questions from Instagram, drawn as a message thread */
.bb-dms {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.6rem;
  max-width: 25rem;
}

.bb-home .bb-dms-label {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 0.4rem;
}

.bb-home .bb-dm {
  background: #fff;
  border: 1px solid var(--cream-line);
  border-radius: 1.4rem 1.4rem 1.4rem 0.4rem;
  padding: 0.6rem 1.15rem 0.7rem;
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.25;
  color: var(--ink);
}

.bb-home .bb-dm-reply {
  align-self: flex-end;
  margin-top: 0.5rem;
  max-width: 17em;
  background: var(--green);
  border-color: var(--green);
  border-radius: 1.4rem 1.4rem 0.4rem 1.4rem;
  padding: 0.75rem 1.15rem;
  font-family: var(--sans);
  font-weight: 400;
  font-size: 1.05rem;
  line-height: 1.45;
  color: #fff;
}

/* ---------- Where to start ---------- */

.bb-home .bb-index {
  list-style: none;
  margin: 2.25rem 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 2.5rem;
}

.bb-home .bb-index li {
  margin: 0;
  max-width: none;
  border-top: 2px solid var(--green);
}

.bb-home .bb-index li a {
  display: block;
  padding: 1.1rem 0 2rem;
  color: inherit;
  text-decoration: none;
}

.bb-index-title {
  display: block;
  font-family: var(--serif);
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 1.25;
  color: var(--ink);
  margin-bottom: 0.4rem;
}

.bb-index-text {
  display: block;
  font-size: 1.05rem;
  line-height: 1.55;
  color: var(--text);
}

.bb-home .bb-index li a:hover {
  text-decoration: none;
}

.bb-home .bb-index li a:hover .bb-index-title {
  color: var(--green);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
}

/* ---------- Founder story ---------- */

.bb-founder {
  display: grid;
  grid-template-areas:
    "head"
    "photo"
    "story";
  gap: 1.75rem;
}

.bb-home .bb-founder h2 {
  grid-area: head;
  color: var(--on-dark);
}

.bb-home .bb-founder-photo {
  grid-area: photo;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  margin: 0;
}

.bb-home .bb-founder-photo img {
  width: 88px;
  height: 88px;
  object-fit: cover;
  object-position: 50% 30%;
  border-radius: 6px;
  display: block;
  flex: none;
  margin: 0;
  transition: none;
}

.bb-home .bb-founder-photo figcaption {
  width: auto;
  margin: 0;
  font-family: var(--sans);
  font-size: 1rem;
  line-height: 1.45;
  color: var(--on-dark-soft);
}

.bb-founder-photo strong {
  display: block;
  color: var(--on-dark);
  font-size: 1.1rem;
  font-weight: 600;
}

.bb-founder-story { grid-area: story; }

.bb-home .bb-founder-story p {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 36em;
  margin-bottom: 1.1em;
  color: var(--on-dark-soft);
}

.bb-home .bb-founder-story .bb-founder-links {
  margin: 1.5rem 0 0;
  font-weight: 600;
  font-size: 1.05rem;
}

.bb-home .bb-founder-links a {
  color: var(--lime);
}

.bb-home .bb-founder-links a:hover {
  color: #fff;
}

.bb-founder-links a + a {
  margin-left: 1.5rem;
}

/* ---------- The Biotech Blueprint ---------- */

.bb-guide {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.bb-home .bb-guide-cover {
  display: block;
  width: 150px;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 1px 2px rgba(23, 33, 28, 0.12), 0 14px 30px rgba(23, 33, 28, 0.2);
}

.bb-home .bb-kicker {
  font-size: 1rem;
  font-weight: 600;
  color: var(--green);
  margin-bottom: 0.5rem;
}

.bb-home .bb-guide-text > p:not(.bb-kicker) {
  max-width: 32em;
  margin-top: 1rem;
}

/* ---------- Tablet and up ---------- */

@media (min-width: 640px) {
  .bb-home .bb-index {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .bb-section {
    padding: 5rem 0;
  }

  .bb-hero {
    padding: 4.5rem 0 5rem;
  }

  .bb-hero-grid {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
  }

  .bb-dms {
    justify-self: end;
  }

  .bb-home .bb-lede {
    font-size: 1.3rem;
  }

  .bb-founder {
    grid-template-columns: 280px minmax(0, 1fr);
    grid-template-areas:
      "photo head"
      "photo story";
    grid-template-rows: auto 1fr;
    column-gap: 4.5rem;
    row-gap: 1.75rem;
  }

  .bb-home .bb-founder-photo {
    display: block;
  }

  .bb-home .bb-founder-photo img {
    width: 100%;
    height: auto;
    aspect-ratio: 4 / 5;
  }

  .bb-home .bb-founder-photo figcaption {
    margin-top: 1rem;
  }

  .bb-guide {
    grid-template-columns: 260px minmax(0, 1fr);
    gap: 4.5rem;
  }

  .bb-home .bb-guide-cover {
    width: 100%;
  }
}

@media (min-width: 1000px) {
  .bb-home .bb-index {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

<div class="bb-home">

<!-- Hero -->
<section class="bb-hero bb-band bb-band--cream">
  <div class="bb-wrap bb-hero-grid">
    <div>
      <h1>Bridging the gap between <em>curiosity</em> and <em>careers</em> in biotech</h1>
      <p class="bb-lede">For anyone who's curious about biotech but doesn't know what it actually is, which jobs exist, or whether they belong in the field.</p>
      <div class="bb-actions">
        <a class="bb-button" href="/what-is-biotech/">Start with the basics</a>
        <a class="bb-textlink" href="/career-pathways/">Explore careers</a>
      </div>
      <div class="bb-byline">
        <img src="/assets/images/profile-photo.jpg" alt="" width="48" height="48">
        <p><strong>Jean Tran</strong>, founder<br>Community of 90K+ on Instagram at <a href="https://instagram.com/jeans.scenes">@jeans.scenes</a></p>
      </div>
    </div>
    <div class="bb-dms">
      <p class="bb-dms-label">What people ask me on Instagram</p>
      <p class="bb-dm">What is biotech?</p>
      <p class="bb-dm">How do I get in?</p>
      <p class="bb-dm">Do I need a PhD?</p>
      <p class="bb-dm bb-dm-reply">These come up constantly, so I built BioBridge to answer them.</p>
    </div>
  </div>
</section>

<!-- Where to start -->
<section class="bb-section">
  <div class="bb-wrap">
    <h2>Where to start</h2>
    <ul class="bb-index">
      <li>
        <a href="/what-is-biotech/">
          <span class="bb-index-title">What is biotech?</span>
          <span class="bb-index-text">What biotechnology actually is, explained through real examples from medicine, agriculture, and the environment.</span>
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
      <li>
        <a href="/application-reviewer/">
          <span class="bb-index-title">Application Reviewer</span>
          <span class="bb-index-text">A free tool: paste a job posting and your resume to see how well they match and what to strengthen.</span>
        </a>
      </li>
      <li>
        <a href="/faq/">
          <span class="bb-index-title">FAQ</span>
          <span class="bb-index-text">Straight answers to common questions, like whether you need a science degree or have to live in a biotech hub.</span>
        </a>
      </li>
      <li>
        <a href="/get-involved/">
          <span class="bb-index-title">Get involved</span>
          <span class="bb-index-text">BioBridge is student-led. Students, mentors who work in biotech, and contributors are all welcome.</span>
        </a>
      </li>
    </ul>
  </div>
</section>

<!-- Founder story -->
<section class="bb-section bb-band bb-band--forest">
  <div class="bb-wrap bb-founder">
    <h2>Why I started BioBridge</h2>
    <figure class="bb-founder-photo">
      <img src="/assets/images/profile-photo.jpg" alt="Jean Tran" width="280" height="350">
      <figcaption>
        <strong>Jean Tran</strong>
        Founder, BioBridge<br>BS/MS Biotechnology
      </figcaption>
    </figure>
    <div class="bb-founder-story">
      <p>I was certain I would become a doctor. In college, I completed the shadowing hours, prerequisites, and extracurriculars. But the closer I pushed myself toward a future in clinical work, the more I questioned whether it was actually right for me. I realized I needed a different direction.</p>
      <p>While searching for alternatives, I discovered my school offered a combined BS/MS in biotechnology that I could complete in four years. I knew almost nothing about biotech when I applied, but the program revealed just how expansive the field actually is: not just lab work, but business strategy, regulatory policy, manufacturing operations, and more.</p>
      <p>I started documenting what I was learning on social media, and the audience grew quickly. Tens of thousands of people followed along, and my messages became a constant stream of the same questions: What is biotech? How do I get in? Do I need a PhD? People were curious, but lacked a practical starting point. BioBridge is the resource I wish had existed when I was trying to figure it out.</p>
      <p class="bb-founder-links">
        <a href="https://instagram.com/jeans.scenes" target="_blank" rel="noopener">Instagram</a>
        <a href="https://linkedin.com/in/jeantrann" target="_blank" rel="noopener">LinkedIn</a>
      </p>
    </div>
  </div>
</section>

<!-- The Biotech Blueprint -->
<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap bb-guide">
    <img class="bb-guide-cover" src="/assets/images/blueprint-cover-600.jpg" alt="Cover of The Biotech Blueprint" width="600" height="900" loading="lazy">
    <div class="bb-guide-text">
      <p class="bb-kicker">The guide</p>
      <h2>The Biotech Blueprint</h2>
      <p>Real materials, annotated line by line: a resume that landed a pharma internship, cold emails that got replies, real interview questions, and a roadmap for switching into biotech.</p>
      <div class="bb-actions">
        <a class="bb-button" href="/free-preview">Read the free preview</a>
        <a class="bb-textlink" href="/products/">See what's inside</a>
      </div>
    </div>
  </div>
</section>

</div>
