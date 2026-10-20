---
layout: splash
title: " "
classes: wide
---

<style>
/* ================================================================
   HOMEPAGE
   Shared pieces (type, bands, buttons, index) come from
   assets/css/biobridge.css. These are the parts only the homepage uses.
   ================================================================ */

/* ---------- Hero ---------- */

.bb-hero {
  padding: 2.75rem 0 3rem;
}

.bb-hero-grid {
  display: grid;
  gap: 2.75rem;
}

.bb-home .bb-hero h1 {
  max-width: 12em;
}

.bb-home .bb-hero .bb-lede {
  max-width: 30em;
  margin-top: 1.5rem;
}

.bb-home .bb-byline {
  margin-top: 2.5rem;
  padding-top: 1.25rem;
  border-top: 1px solid var(--bb-cream-line);
  max-width: 30em;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--bb-muted);
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
  color: var(--bb-muted);
  margin-bottom: 0.4rem;
}

.bb-home .bb-dm {
  background: #fff;
  border: 1px solid var(--bb-cream-line);
  border-radius: 1.4rem 1.4rem 1.4rem 0.4rem;
  padding: 0.6rem 1.15rem 0.7rem;
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.25;
  color: var(--bb-ink);
}



/* Narrower screens (phones, iPad portrait, split screen): the questions
   sit under the intro as a compact row instead of a tall column */
@media (max-width: 899px) {
  .bb-hero-grid {
    gap: 2rem;
  }

  .bb-dms {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: none;
    gap: 0.5rem;
  }

  .bb-home .bb-dms-label {
    flex-basis: 100%;
    margin-bottom: 0.1rem;
  }

  .bb-home .bb-dm {
    font-size: 1.1rem;
    padding: 0.45rem 0.95rem 0.55rem;
  }
}

/* ---------- Photo band ---------- */

.bb-home .bb-photo-figure {
  display: block;
  margin: 0;
}

.bb-home .bb-photo-figure .bb-photo {
  aspect-ratio: 4 / 3;
  object-position: 50% 35%;
  margin: 0;
}

@media (min-width: 640px) {
  .bb-home .bb-photo-figure .bb-photo {
    aspect-ratio: 2 / 1;
  }
}

.bb-home .bb-photo-figure figcaption {
  width: auto;
  margin: 0.75rem 0 0;
  font-family: var(--bb-sans);
  font-size: 0.95rem;
  color: var(--bb-muted);
}

.bb-photo-band {
  padding-top: 3rem;
}

/* ---------- Where to start: heading beside a list of rows ---------- */

.bb-start {
  display: grid;
  gap: 1.5rem;
}

.bb-home .bb-start-intro p {
  margin-top: 0.75rem;
  color: var(--bb-muted);
  max-width: 22em;
}

.bb-home .bb-rows {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--bb-line);
}

.bb-home .bb-rows li {
  margin: 0;
  border-bottom: 1px solid var(--bb-line);
}

.bb-home .bb-rows a {
  display: grid;
  gap: 0.25rem;
  padding: 1.15rem 0;
  color: inherit;
  text-decoration: none;
}

.bb-home .bb-rows .bb-index-title {
  font-size: 1.35rem;
  margin: 0;
}

.bb-home .bb-rows a:hover .bb-index-title {
  color: var(--bb-green);
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

.bb-founder h2 { grid-area: head; }

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
  font-family: var(--bb-sans);
  font-size: 1rem;
  line-height: 1.45;
  color: var(--bb-on-dark-soft);
}

.bb-founder-photo strong {
  display: block;
  font-size: 1.1rem;
}

.bb-founder-story { grid-area: story; }

.bb-home .bb-founder-story p {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 36em;
  margin-bottom: 1.1em;
}

.bb-home .bb-founder-story .bb-founder-links {
  margin: 1.5rem 0 0;
  font-weight: 600;
  font-size: 1.05rem;
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

.bb-home .bb-guide-text > p:not(.bb-kicker) {
  max-width: 32em;
  margin-top: 1rem;
}

/* ---------- Wider screens ---------- */

@media (min-width: 900px) {
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

  .bb-photo-band {
    padding-top: 4.5rem;
  }

  .bb-start {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.6fr);
    gap: 4.5rem;
    align-items: start;
  }

  .bb-start-intro {
    position: sticky;
    top: 110px;
  }

  .bb-home .bb-rows a {
    grid-template-columns: 13rem minmax(0, 1fr);
    gap: 2rem;
    align-items: baseline;
  }

  .bb-founder {
    grid-template-columns: 340px minmax(0, 1fr);
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
</style>

<div class="bb-page bb-home">

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
      <p class="bb-byline">Started by <strong>Jean Tran</strong>, who shares the biotech journey with a community of 90K+ on Instagram at <a href="https://instagram.com/jeans.scenes">@jeans.scenes</a>.</p>
    </div>
    <div class="bb-dms">
      <p class="bb-dms-label">What people ask me on Instagram</p>
      <p class="bb-dm">What is biotech?</p>
      <p class="bb-dm">How do I get in?</p>
      <p class="bb-dm">Do I need a PhD?</p>
    </div>
  </div>
</section>

<!-- Photo -->
<section class="bb-photo-band">
  <div class="bb-wrap">
    <figure class="bb-photo-figure">
      <img class="bb-photo" src="/assets/images/protein-structure.jpg" alt="Jean Tran and a colleague exploring a predicted protein structure on a touchscreen" width="1206" height="603" loading="lazy">
      <figcaption>Exploring a predicted protein structure.</figcaption>
    </figure>
  </div>
</section>

<!-- Where to start -->
<section class="bb-section">
  <div class="bb-wrap bb-start">
    <div class="bb-start-intro">
      <h2>Where to start</h2>
      <p>Everything on BioBridge is free. Pick the question you have right now.</p>
    </div>
    <ul class="bb-rows">
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
      <p>I was certain I would become a doctor. But the closer I got to a future in clinical work, the more I questioned whether it was right for me. A combined BS/MS in biotechnology showed me how big the field actually is: not just lab work, but business strategy, regulatory policy, manufacturing operations, and more.</p>
      <p>When I started sharing what I was learning on social media, the same questions kept coming in. BioBridge is the resource I wish had existed when I was trying to figure it out.</p>
      <p class="bb-founder-links">
        <a href="/about/">Read my full story</a>
        <a href="https://instagram.com/jeans.scenes" target="_blank" rel="noopener">Instagram</a>
        <a href="https://linkedin.com/in/jeantrann" target="_blank" rel="noopener">LinkedIn</a>
      </p>
    </div>
  </div>
</section>

<!-- The Biotech Blueprint -->
<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap bb-guide">
    <img class="bb-guide-cover" src="/assets/images/blueprint-cover-v2.jpg" alt="Cover of The Biotech Blueprint" width="600" height="829" loading="lazy">
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
