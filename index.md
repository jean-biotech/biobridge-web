---
layout: splash
title: " "
classes: wide
---

<style>
/* ================================================================
   Homepage — field guide edition. Built on the global tokens in
   assets/css/main.scss (--paper, --paper-2, --ink, --ink-soft,
   --olive, --olive-deep, --line). Flat colors only, no gradients,
   no shadows, 0-2px radius, color-change-only hover on links/buttons.
   ================================================================ */

.hp { max-width: 1160px; margin: 0 auto; padding: 0 1.25rem; }
.hp-band { padding: 3.5rem 0; }
.hp-band + .hp-band { border-top: 1px solid var(--line); }
.hp-band--tint { background: var(--paper-2); }
.hp .eyebrow { margin-bottom: 0.6rem; display: inline-block; }
.hp h2 { font-size: clamp(1.5rem, 3vw, 2rem); margin: 0; }

/* ---------------- Hero ---------------- */
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 1rem;
}
.hero-copy { max-width: 620px; }
.hero-copy h1 {
  font-size: clamp(2.1rem, 5vw, 3.1rem);
  font-weight: 500;
  line-height: 1.12;
  letter-spacing: -0.01em;
  margin: 0.9rem 0 1.1rem;
  color: var(--ink);
}
.hero-copy h1 em {
  font-style: italic;
}
.hero-copy .hero-sub {
  font-size: 1.1rem;
  color: var(--ink-soft);
  line-height: 1.6;
  margin: 0 0 1.5rem;
  max-width: 500px;
}
.hero-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
.btn-start {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--olive);
  color: var(--paper) !important;
  font-family: var(--font-body);
  font-weight: 600;
  font-size: 1rem;
  padding: 0.85rem 1.6rem;
  border-radius: var(--radius);
  text-decoration: none !important;
  transition: background-color 0.15s ease;
}
.btn-start:hover { background: var(--olive-deep); color: var(--paper) !important; }
.hero-quiet-links { display: flex; flex-direction: column; gap: 0.4rem; }
.hero-quiet-links a {
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--ink-soft) !important;
  text-decoration: none !important;
  border-bottom: 1px solid var(--line);
  width: fit-content;
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.hero-quiet-links a:hover { color: var(--olive-deep) !important; border-color: var(--olive); }
.hero-honest-line {
  font-family: var(--font-display);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--ink);
  max-width: 440px;
}
.hero-visual__panel {
  background: var(--olive-deep);
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
}
.hero-visual__panel img {
  width: 100%;
  max-width: 220px;
  height: auto;
  display: block;
  filter: brightness(0) invert(1);
  opacity: 0.92;
}

@media (min-width: 900px) {
  .hero { grid-template-columns: 1.05fr 0.95fr; padding-top: 3rem; padding-bottom: 2rem; }
}

/* ---------------- How BioBridge works: numbered editorial list ---------------- */
.works-head { max-width: 560px; margin-bottom: 2rem; }
.works-list { border-top: 1px solid var(--line); }
.works-row {
  display: grid;
  grid-template-columns: 3rem 1fr auto;
  align-items: center;
  gap: 1.25rem;
  padding: 1.6rem 1rem;
  border-bottom: 1px solid var(--line);
  text-decoration: none !important;
  color: inherit !important;
  transition: background-color 0.15s ease;
}
.works-row:hover { background: var(--paper-2); }
.works-row__num { font-family: var(--font-display); font-weight: 500; font-size: 1.1rem; color: var(--ink-soft); }
.works-row__title { font-family: var(--font-display); font-size: 1.2rem; font-weight: 600; margin: 0 0 0.3rem; color: var(--ink); }
.works-row__desc { font-family: var(--font-body); font-size: 0.92rem; color: var(--ink-soft); margin: 0; max-width: 620px; }
.works-row__arrow { font-size: 1.3rem; color: var(--ink-soft); }
.works-row:hover .works-row__arrow { color: var(--olive); }

.works-row--featured {
  background: var(--olive);
  border-radius: var(--radius);
  border-bottom-color: transparent;
  margin: 0.25rem 0;
}
.works-row--featured .works-row__num,
.works-row--featured .works-row__title,
.works-row--featured .works-row__desc,
.works-row--featured .works-row__arrow { color: var(--paper) !important; }
.works-row--featured:hover { background: var(--olive-deep); }

@media (min-width: 700px) {
  .works-row { grid-template-columns: 4rem 1fr auto; padding: 1.85rem 1.25rem; }
}

/* ---------------- Founder story ---------------- */
.story-grid { display: grid; grid-template-columns: 1fr; gap: 2.25rem; }
.story-photo-col { display: flex; justify-content: center; }
.story-photo {
  width: 220px;
  height: 220px;
  border-radius: var(--radius);
  object-fit: cover;
  display: block;
}
.story-caption { text-align: center; margin-top: 0.85rem; }
.story-caption .name { font-family: var(--font-body); font-weight: 600; font-size: 0.98rem; color: var(--ink); }
.story-caption .role { font-family: var(--font-body); font-size: 0.85rem; color: var(--ink-soft); margin-top: 0.15rem; }
.story-content p { color: var(--ink-soft); line-height: 1.8; margin-bottom: 1rem; font-size: 1.02rem; }
.story-connect { display: flex; align-items: center; gap: 1rem; flex-wrap: wrap; margin-top: 1.5rem; }
.story-connect-label { font-family: var(--font-body); font-size: 0.85rem; color: var(--ink-soft); }
.story-connect a {
  font-family: var(--font-body); font-weight: 600; font-size: 0.9rem;
  text-decoration: none !important;
  padding: 0.45rem 0.9rem;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  color: var(--ink) !important;
  transition: color 0.15s ease, border-color 0.15s ease;
}
.story-connect a:hover { border-color: var(--olive); color: var(--olive-deep) !important; }

@media (min-width: 900px) {
  .story-grid { grid-template-columns: 240px 1fr; gap: 3.25rem; align-items: start; }
}

/* ---------------- Career Explorer ---------------- */
.explorer-head { max-width: 640px; margin-bottom: 1.75rem; }
.explorer-filters {
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
  margin-bottom: 2rem;
}
.filter-group { margin-bottom: 1.1rem; }
.filter-group:last-child { margin-bottom: 0; }
.filter-group-label {
  display: block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--ink-soft);
  margin-bottom: 0.6rem;
}
.explorer-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.chip {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 500;
  padding: 0.45rem 0.95rem;
  border-radius: var(--radius);
  border: 1px solid var(--line);
  background: var(--paper);
  color: var(--ink-soft);
  cursor: pointer;
  transition: color 0.15s ease, border-color 0.15s ease, background-color 0.15s ease;
}
.chip:hover { border-color: var(--olive); }
.chip[aria-pressed="true"] {
  background: var(--olive);
  border-color: var(--olive);
  color: var(--paper);
}
.explorer-toolbar { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 1.25rem; padding-top: 1.1rem; border-top: 1px solid var(--line); }
.explorer-count { font-family: var(--font-body); font-size: 0.8rem; color: var(--ink-soft); }
.explorer-reset {
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--olive-deep);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem 0;
}
.explorer-reset:hover { color: var(--olive); }
.explorer-results { display: grid; grid-template-columns: 1fr; gap: 1.1rem; }
.explorer-empty { color: var(--ink-soft); font-style: italic; padding: 2rem 0; }
.role-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.25rem 1.4rem;
}
.role-card__top { display: flex; align-items: flex-start; justify-content: space-between; gap: 0.75rem; margin-bottom: 0.65rem; }
.role-card__title { margin: 0; font-size: 1.05rem; color: var(--ink); }
.badge {
  font-family: var(--font-body);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  padding: 0.3rem 0.55rem;
  border-radius: var(--radius);
  white-space: nowrap;
  flex-shrink: 0;
}
.badge--go { background: var(--paper-2); color: var(--olive-deep); }
.badge--maybe { background: var(--paper-2); color: var(--ink); border: 1px solid var(--line); }
.badge--later { background: var(--ink); color: var(--paper); }
.role-card__salary { font-size: 0.85rem; color: var(--ink); margin: 0 0 0.65rem; line-height: 1.5; }
.role-card__salary .eyebrow { color: var(--ink-soft); font-size: 0.66rem; }
.role-card__step { font-size: 0.9rem; color: var(--ink-soft); line-height: 1.6; margin: 0 0 0.85rem; }
.role-card__link { font-family: var(--font-body); font-weight: 600; font-size: 0.85rem; text-decoration: none !important; color: var(--olive-deep); }

@media (min-width: 700px) { .explorer-results { grid-template-columns: repeat(2, 1fr); } }
@media (min-width: 1100px) { .explorer-results { grid-template-columns: repeat(3, 1fr); } }

/* ---------------- Learning Lab ---------------- */
.lab-grid { display: grid; grid-template-columns: 1fr; gap: 1.1rem; }
.lab-card {
  background: var(--paper-2);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.5rem;
}
.lab-card h3 { font-size: 1.05rem; margin: 0 0 0.3rem; color: var(--ink); }
.lab-card .eyebrow { display: block; margin-bottom: 0.5rem; }
.lab-card p.lab-desc { color: var(--ink-soft); font-size: 0.88rem; margin: 0 0 1rem; }
.lab-logos { display: flex; flex-wrap: wrap; align-items: center; gap: 1rem 1.25rem; }
.lab-logos img { height: 26px; width: auto; max-width: 100px; object-fit: contain; }
.lab-books-row { display: flex; gap: 0.6rem; }
.lab-books-row img { width: 52px; height: 76px; object-fit: cover; border-radius: var(--radius); }
.lab-more { margin-top: 1.75rem; }
.lab-more a { font-weight: 600; text-decoration: none !important; color: var(--olive-deep); }

@media (min-width: 900px) { .lab-grid { grid-template-columns: repeat(4, 1fr); } }

/* ---------------- Close ---------------- */
.close-band { text-align: left; }
.close-inner { max-width: 680px; }
.close-inner h2 { font-size: clamp(1.6rem, 3.2vw, 2.2rem); margin: 0 0 1rem; }
.close-inner p { color: var(--ink-soft); font-size: 1.05rem; line-height: 1.7; margin: 0 0 1.5rem; max-width: 540px; }
</style>

<!-- ============ HERO ============ -->
<div class="hp">
  <div class="hero">
    <div class="hero-copy">
      <span class="eyebrow">Student-led biotech initiative</span>
      <h1>Bridging the gap between <em>curiosity</em> and careers in biotechnology</h1>
      <p class="hero-sub">Clear explanations, curated resources, and practical guidance for anyone exploring the world of biotech.</p>
      <div class="hero-actions">
        <a href="/what-is-biotech/" class="btn-start">Start here</a>
        <div class="hero-quiet-links">
          <a href="/career-pathways/">Explore careers</a>
          <a href="/products/">Browse the guides</a>
        </div>
      </div>
      <p class="hero-honest-line">"My messages became a constant stream of the same questions."</p>
    </div>
    <div class="hero-visual">
      <div class="hero-visual__panel">
        <img src="/assets/images/BioBridge.png" alt="BioBridge">
      </div>
    </div>
  </div>
</div>

<!-- ============ HOW BIOBRIDGE WORKS: numbered editorial list ============ -->
<div class="hp-band hp-band--tint">
  <div class="hp">
    <div class="works-head">
      <span class="eyebrow">What BioBridge offers</span>
      <h2>Clear explanations, curated resources, and honest guidance.</h2>
    </div>
    <div class="works-list">
      <a href="/what-is-biotech/" class="works-row works-row--featured">
        <span class="works-row__num">01</span>
        <span>
          <span class="works-row__title">Understand biotech</span>
          <p class="works-row__desc">Learn what biotechnology really is through real-world examples and plain-language explanations that make the science accessible.</p>
        </span>
        <span class="works-row__arrow">&rarr;</span>
      </a>
      <a href="/career-pathways/" class="works-row">
        <span class="works-row__num">02</span>
        <span>
          <span class="works-row__title">Discover careers</span>
          <p class="works-row__desc">Explore the major career pathways in biotech, with realistic entry points, salary expectations, and guidance for every background.</p>
        </span>
        <span class="works-row__arrow">&rarr;</span>
      </a>
      <a href="/resources/" class="works-row">
        <span class="works-row__num">03</span>
        <span>
          <span class="works-row__title">Access resources</span>
          <p class="works-row__desc">Browse curated newsletters, podcasts, courses, and books that are all free, beginner-friendly, and hand-picked for quality.</p>
        </span>
        <span class="works-row__arrow">&rarr;</span>
      </a>
    </div>
  </div>
</div>

<!-- ============ FOUNDER STORY ============ -->
<div class="hp-band">
  <div class="hp">
    <span class="eyebrow">The story behind BioBridge</span>
    <div class="story-grid" style="margin-top:1.25rem;">
      <div class="story-photo-col">
        <div>
          <img class="story-photo" src="/assets/images/profile-photo.jpg" alt="Jean Tran, founder of BioBridge">
          <div class="story-caption">
            <div class="name">Jean Tran</div>
            <div class="role">Founder, BioBridge<br>BS/MS Biotechnology</div>
          </div>
        </div>
      </div>
      <div class="story-content">
        <p class="lede">I was certain I would become a doctor. In college, I completed the shadowing hours, prerequisites, and extracurriculars. But the closer I pushed myself toward a future in clinical work, the more I questioned whether it was actually right for me. I realized I needed a different direction.</p>
        <p>While searching for alternatives, I discovered my school offered a combined BS/MS in biotechnology that I could complete in four years. I knew almost nothing about biotech when I applied, but the program revealed just how expansive the field actually is: business strategy, regulatory policy, manufacturing operations, lab work, and more.</p>
        <p>I started documenting what I was learning on social media, and the audience grew quickly. Tens of thousands of people followed along, and my messages became a constant stream of the same questions.</p>
        <blockquote class="pull-quote">"What is biotech? How do I get in? Do I need a PhD?"</blockquote>
        <p>People were curious, but lacked a practical starting point. BioBridge is the resource I wish had existed when I was trying to figure it out.</p>
        <div class="story-connect">
          <span class="story-connect-label">Follow the journey:</span>
          <a href="https://instagram.com/jeans.scenes" target="_blank" rel="noopener">Instagram</a>
          <a href="https://linkedin.com/in/jeantrann" target="_blank" rel="noopener">LinkedIn</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ============ CAREER PATH EXPLORER ============ -->
<div class="hp-band hp-band--tint" id="explorer-section">
  <div class="hp">
    <div class="explorer-head">
      <span class="eyebrow">A tool to try</span>
      <h2>Find your lane.</h2>
      <p style="color:var(--ink-soft); margin-top:0.75rem;">Filter by where you're coming from and what you're drawn to. Every range below is a rounded, approximate US entry-level estimate, not a promise.</p>
    </div>

    <div id="career-explorer">
      <div class="explorer-filters">
        <div class="filter-group">
          <span class="filter-group-label">Your background</span>
          <div class="explorer-chips" role="group" aria-label="Filter by background">
            <button type="button" class="chip" data-group="background" data-value="biology" aria-pressed="false">Biology</button>
            <button type="button" class="chip" data-group="background" data-value="chemistry" aria-pressed="false">Chemistry</button>
            <button type="button" class="chip" data-group="background" data-value="cs-data" aria-pressed="false">CS / data</button>
            <button type="button" class="chip" data-group="background" data-value="business" aria-pressed="false">Business</button>
            <button type="button" class="chip" data-group="background" data-value="engineering" aria-pressed="false">Engineering</button>
            <button type="button" class="chip" data-group="background" data-value="non-stem" aria-pressed="false">Non-STEM</button>
          </div>
        </div>
        <div class="filter-group">
          <span class="filter-group-label">What interests you</span>
          <div class="explorer-chips" role="group" aria-label="Filter by interest area">
            <button type="button" class="chip" data-group="interest" data-value="lab-bench" aria-pressed="false">Lab / bench</button>
            <button type="button" class="chip" data-group="interest" data-value="data-computational" aria-pressed="false">Data / computational</button>
            <button type="button" class="chip" data-group="interest" data-value="business-commercial" aria-pressed="false">Business / commercial</button>
            <button type="button" class="chip" data-group="interest" data-value="regulatory-policy" aria-pressed="false">Regulatory / policy</button>
            <button type="button" class="chip" data-group="interest" data-value="manufacturing-operations" aria-pressed="false">Manufacturing / operations</button>
          </div>
        </div>
        <div class="filter-group">
          <span class="filter-group-label">PhD required?</span>
          <div class="explorer-chips" role="group" aria-label="Filter by PhD requirement">
            <button type="button" class="chip" data-group="phd" data-value="not-required" aria-pressed="false">Not required</button>
            <button type="button" class="chip" data-group="phd" data-value="optional" aria-pressed="false">Optional</button>
            <button type="button" class="chip" data-group="phd" data-value="usually-required" aria-pressed="false">Usually required</button>
          </div>
        </div>
        <div class="explorer-toolbar">
          <span class="explorer-count" aria-live="polite"></span>
          <button type="button" class="explorer-reset">Clear filters</button>
        </div>
      </div>
      <div class="explorer-results" aria-live="polite"></div>
    </div>
  </div>
</div>

<!-- ============ LEARNING LAB ============ -->
<div class="hp-band">
  <div class="hp">
    <span class="eyebrow">Hand-picked, not algorithmic</span>
    <h2>The Learning Lab.</h2>
    <p style="color:var(--ink-soft); margin-top:0.75rem; max-width:640px;">A running library of the newsletters, podcasts, courses, and books that actually explain biotech well. Free and beginner-friendly, every one of them checked before it's added.</p>

    <div class="lab-grid" style="margin-top:2rem;">
      <div class="lab-card">
        <span class="eyebrow">Newsletters</span>
        <h3>What's happening, weekly</h3>
        <p class="lab-desc">Industry news without the jargon wall.</p>
        <div class="lab-logos">
          <img src="/assets/images/logo-wsj.png" alt="The Wall Street Journal" loading="lazy">
          <img src="/assets/images/logo-nature.png" alt="Nature" loading="lazy">
          <img src="/assets/images/logo-fiercebiotech.png" alt="Fierce Biotech" loading="lazy">
          <img src="/assets/images/logo-endpoints.png" alt="Endpoints News" loading="lazy">
        </div>
      </div>
      <div class="lab-card">
        <span class="eyebrow">Podcasts</span>
        <h3>Listen on the commute</h3>
        <p class="lab-desc">Long-form conversations with scientists and builders.</p>
        <div class="lab-logos">
          <img src="/assets/images/logo-radiolab.png" alt="Radiolab" loading="lazy">
          <img src="/assets/images/logo-ologies.png" alt="Ologies" loading="lazy">
          <img src="/assets/images/hidden-brain.png" alt="Hidden Brain" loading="lazy">
          <img src="/assets/images/logo-shortwave.png" alt="Short Wave" loading="lazy">
        </div>
      </div>
      <div class="lab-card">
        <span class="eyebrow">Courses</span>
        <h3>Go deeper, at your pace</h3>
        <p class="lab-desc">Free, self-paced, no application required.</p>
        <div class="lab-logos">
          <img src="/assets/images/logo-coursera.png" alt="Coursera" loading="lazy">
          <img src="/assets/images/logo-edx.png" alt="edX" loading="lazy">
          <img src="/assets/images/logo-khanacademy.png" alt="Khan Academy" loading="lazy">
          <img src="/assets/images/logo-mitocw.png" alt="MIT OpenCourseWare" loading="lazy">
        </div>
      </div>
      <div class="lab-card">
        <span class="eyebrow">Books</span>
        <h3>For the long read</h3>
        <p class="lab-desc">The ones people actually finish.</p>
        <div class="lab-books-row">
          <img src="/assets/images/book-the-gene.jpg" alt="The Gene, by Siddhartha Mukherjee" loading="lazy">
          <img src="/assets/images/book-henrietta-lacks.jpg" alt="The Immortal Life of Henrietta Lacks" loading="lazy">
          <img src="/assets/images/book-sapiens.png" alt="Sapiens, by Yuval Noah Harari" loading="lazy">
        </div>
      </div>
    </div>
    <p class="lab-more"><a href="/resources/">See the full Learning Lab &rarr;</a></p>
  </div>
</div>

<!-- ============ CLOSE ============ -->
<div class="hp-band hp-band--tint close-band">
  <div class="hp">
    <div class="close-inner">
      <span class="eyebrow">Ready to explore biotechnology?</span>
      <h2>Discover career pathways, free resources, and real guidance from someone who has been there.</h2>
      <a href="/what-is-biotech/" class="btn-start">Learn more</a>
    </div>
  </div>
</div>

<script src="/assets/js/career-data.js"></script>
<script src="/assets/js/career-explorer.js"></script>
