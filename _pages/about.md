---
layout: splash
title: "About"
permalink: /about/
---

<style>
/* ================================================================
   ABOUT: the founder story in full
   ================================================================ */

.bb-about-story {
  display: grid;
  gap: 2rem;
}

.bb-about .bb-about-photo {
  margin: 0;
  display: block;
}

.bb-about .bb-about-photo img {
  display: block;
  width: 100%;
  max-width: 320px;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  object-position: 50% 30%;
  border-radius: 6px;
  margin: 0;
}

.bb-about .bb-about-photo figcaption {
  width: auto;
  margin: 1rem 0 0;
  font-family: var(--bb-sans);
  font-size: 1rem;
  line-height: 1.45;
  color: var(--bb-muted);
}

.bb-about .bb-about-photo strong {
  display: block;
  font-size: 1.1rem;
}

.bb-about .bb-about-candid {
  margin: 2.25rem 0 0;
  display: block;
}

.bb-about .bb-about-candid img {
  margin: 0;
  aspect-ratio: 3 / 2;
}

.bb-about .bb-about-candid figcaption {
  width: auto;
  margin: 0.75rem 0 0;
  font-family: var(--bb-sans);
  font-size: 0.95rem;
  color: var(--bb-muted);
}

.bb-about .bb-prose p {
  font-size: 1.2rem;
  line-height: 1.7;
}

@media (min-width: 900px) {
  .bb-about-story {
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 4.5rem;
    align-items: start;
  }
}
</style>

<div class="bb-page bb-about">

<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap">
    <h1>Why I started BioBridge</h1>
    <p class="bb-lede">From a pre-med plan to a BS/MS in biotechnology, and a community of 90K+ asking the same questions I once had.</p>
  </div>
</header>

<section class="bb-section">
  <div class="bb-wrap bb-about-story">
    <figure class="bb-about-photo">
      <img src="/assets/images/profile-photo.jpg" alt="Jean Tran" width="320" height="400">
      <figcaption>
        <strong>Jean Tran</strong>
        Founder, BioBridge<br>BS/MS Biotechnology
      </figcaption>
    </figure>
    <div class="bb-prose">
      <p>I was certain I would become a doctor. In college, I completed the shadowing hours, prerequisites, and extracurriculars. But the closer I pushed myself toward a future in clinical work, the more I questioned whether it was actually right for me. I realized I needed a different direction.</p>
      <p>While searching for alternatives, I discovered my school offered a combined BS/MS in biotechnology that I could complete in four years. I knew almost nothing about biotech when I applied, but the program revealed just how expansive the field actually is: not just lab work, but business strategy, regulatory policy, manufacturing operations, and more.</p>
      <p>I started documenting what I was learning on social media, and the audience grew quickly. Tens of thousands of people followed along, and my messages became a constant stream of the same questions: What is biotech? How do I get in? Do I need a PhD? People were curious, but lacked a practical starting point. BioBridge is the resource I wish had existed when I was trying to figure it out.</p>
      <figure class="bb-about-candid">
        <img class="bb-photo" src="/assets/images/microscope.jpg" alt="Jean Tran looking through a microscope" width="1000" height="667" loading="lazy">
        <figcaption>At the microscope.</figcaption>
      </figure>
    </div>
  </div>
</section>


<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Follow along</h2>
      <p>I share what I'm learning about biotech, and what it's really like to get into the field, on Instagram.</p>
    </div>
    <div class="bb-actions">
      <a class="bb-button" href="https://instagram.com/jeans.scenes" target="_blank" rel="noopener">Follow @jeans.scenes</a>
      <a class="bb-textlink" href="https://linkedin.com/in/jeantrann" target="_blank" rel="noopener">Connect on LinkedIn</a>
    </div>
  </div>
</section>

</div>
