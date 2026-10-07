---
layout: splash
title: "What is Biotech?"
permalink: /what-is-biotech/
---

<style>
/* ================================================================
   WHAT IS BIOTECH?
   Shared pieces (type, bands, buttons, tags, jump links) come from
   assets/css/biobridge.css. These are the parts only this page uses,
   scoped under .bb-wib.
   ================================================================ */

.bb-wib p {
  text-wrap: pretty;
}

/* ---------- Page header ---------- */

.bb-wib .bb-pagehead h1 {
  max-width: 16em;
}

.bb-wib .bb-pagehead .bb-lede {
  max-width: 38em;
}

/* ---------- The short definition ---------- */

.bb-wib .bb-wib-define {
  display: grid;
  gap: 1.75rem;
}

.bb-wib .bb-wib-statement {
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: clamp(2.1rem, 1.4rem + 2.2vw, 3rem);
  line-height: 1.12;
  letter-spacing: -0.01em;
  color: var(--bb-ink);
  max-width: 13.5em;
}

.bb-wib .bb-wib-define-text {
  max-width: 34em;
  font-size: 1.15rem;
  line-height: 1.65;
}

.bb-wib .bb-wib-define-text p + p {
  margin-top: 1em;
}

/* ---------- Real-world examples ---------- */

.bb-wib .bb-wib-examples {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 2.5rem;
}

.bb-wib .bb-wib-examples > li {
  margin: 0;
  display: grid;
  grid-template-columns: 7.5rem minmax(0, 1fr);
  align-items: center;
  align-content: start;
  column-gap: 1.1rem;
}

.bb-wib .bb-wib-examples img {
  display: block;
  width: 7.5rem;
  height: auto;
  aspect-ratio: 8 / 5;
  object-fit: cover;
  border-radius: 6px;
}

.bb-wib .bb-wib-examples h3 {
  font-size: 1.4rem;
}

.bb-wib .bb-wib-examples p,
.bb-wib .bb-wib-examples .bb-tags {
  grid-column: 1 / -1;
}

.bb-wib .bb-wib-examples p {
  margin-top: 1rem;
  font-size: 1.05rem;
  line-height: 1.55;
}

.bb-wib .bb-wib-examples .bb-tags {
  margin-top: 1rem;
}

/* ---------- Beyond the science (forest band) ---------- */

.bb-wib .bb-wib-beyond {
  display: grid;
  gap: 2rem;
}

.bb-wib .bb-wib-beyond-story p,
.bb-wib .bb-wib-beyond-close {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 34em;
}

.bb-wib .bb-wib-beyond-story h2 {
  margin-bottom: 1.5rem;
}

.bb-wib .bb-wib-beyond-story p + p {
  margin-top: 1.1em;
}

.bb-wib .bb-wib-beyond-close {
  font-weight: 600;
  color: var(--bb-on-dark);
}

/* The four "someone had to" jobs, set as a list */
.bb-wib .bb-wib-someone {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bb-wib .bb-wib-someone li {
  margin: 0;
  padding: 1.1rem 0 1.2rem;
  border-top: 1px solid color-mix(in srgb, var(--bb-on-dark) 22%, transparent);
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.35;
  color: var(--bb-on-dark);
}

/* Footnote for readers outside the US */
.bb-wib .bb-wib-intl {
  border-top: 1px solid color-mix(in srgb, var(--bb-on-dark) 22%, transparent);
  padding-top: 1.5rem;
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.6;
}

.bb-wib .bb-wib-intl p {
  max-width: 48em;
}

.bb-wib .bb-wib-intl strong {
  display: block;
  margin-bottom: 0.25rem;
}

/* ---------- Common misconceptions ---------- */

.bb-wib .bb-wib-myths {
  border-top: 2px solid var(--bb-green);
}

.bb-wib .bb-wib-myth {
  display: grid;
  gap: 0.75rem;
  padding: 1.6rem 0 1.9rem;
  border-bottom: 1px solid var(--bb-line);
}

.bb-wib .bb-wib-myth h3 {
  font-size: 1.65rem;
  line-height: 1.25;
  text-indent: -0.4em;
}

.bb-wib .bb-wib-myth p {
  max-width: 36em;
}

/* ---------- Next step ---------- */

.bb-wib .bb-wib-next p:not(.bb-kicker) {
  max-width: 32em;
  margin-top: 1rem;
}

/* ---------- Wider screens ---------- */

@media (min-width: 640px) {
  .bb-wib .bb-wib-examples {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 3rem 2.5rem;
  }
}

@media (min-width: 900px) {
  .bb-wib .bb-wib-define {
    grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr);
    gap: 4.5rem;
    align-items: start;
  }

  .bb-wib .bb-wib-define-text {
    padding-top: 2.1rem;
  }

  .bb-wib .bb-wib-beyond {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-template-areas:
      "story list"
      "close list"
      "intl  intl";
    grid-template-rows: auto 1fr auto;
    column-gap: 4.5rem;
    row-gap: 1.75rem;
  }

  .bb-wib .bb-wib-beyond-story { grid-area: story; }
  .bb-wib .bb-wib-someone { grid-area: list; align-self: start; }
  .bb-wib .bb-wib-beyond-close { grid-area: close; }
  .bb-wib .bb-wib-intl { grid-area: intl; }

  .bb-wib .bb-wib-someone li {
    font-size: 1.3rem;
  }

  .bb-wib .bb-wib-myth {
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    column-gap: 4.5rem;
    padding: 2rem 0 2.25rem;
  }
}

/* Four across only when each column has room for its text and tags */
@media (min-width: 1100px) {
  .bb-wib .bb-wib-examples {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
  }

  .bb-wib .bb-wib-examples > li {
    display: block;
  }

  .bb-wib .bb-wib-examples img {
    width: 100%;
    height: auto;
    aspect-ratio: 8 / 5;
    margin-bottom: 1.25rem;
  }
}
</style>

<div class="bb-page bb-wib">

<!-- Page header -->
<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap">
    <p class="bb-kicker">The basics</p>
    <h1>What is biotechnology, <em>really</em>?</h1>
    <p class="bb-lede">The science shaping our future, explained in plain language. No prerequisites required.</p>
    <ul class="bb-jumpnav" aria-label="On this page">
      <li><a href="#real-world-examples">Real-world examples</a></li>
      <li><a href="#beyond-the-science">Beyond the science</a></li>
      <li><a href="#common-misconceptions">Common misconceptions</a></li>
    </ul>
  </div>
</header>

<!-- The short definition -->
<section class="bb-section">
  <div class="bb-wrap bb-wib-define">
    <div>
      <p class="bb-kicker">The simplest definition that actually holds up</p>
      <p class="bb-wib-statement">Biotech = biology&nbsp;+&nbsp;technology to&nbsp;solve real problems.</p>
    </div>
    <div class="bb-wib-define-text">
      <p>Biotechnology is using living systems (cells, bacteria, proteins, DNA) to create useful products or solve real problems.</p>
      <p>It sounds vague because biotech is <strong>incredibly broad</strong>. It touches medicine, agriculture, environmental science, manufacturing, and more. The best way to understand it is through examples.</p>
    </div>
  </div>
</section>

<!-- Real-world examples -->
<section class="bb-section bb-band bb-band--cream" id="real-world-examples">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Real-world examples</h2>
    </div>
    <ul class="bb-wib-examples">
      <li>
        <img src="/assets/images/biotech-medicine.jpg" alt="" width="400" height="250" loading="lazy">
        <h3>Medicine</h3>
        <p>Insulin for diabetics is made by bacteria engineered to carry the human insulin gene. CAR-T therapy takes your own immune cells, genetically reprograms them to recognize cancer, and injects them back.</p>
        <ul class="bb-tags" aria-label="Companies">
          <li>Moderna</li>
          <li>Pfizer</li>
          <li>Genentech</li>
        </ul>
      </li>
      <li>
        <img src="/assets/images/biotech-agriculture.jpg" alt="" width="400" height="250" loading="lazy">
        <h3>Agriculture</h3>
        <p>Drought-resistant crops can survive on 30% less water. Plant-based meat uses heme (a protein from engineered yeast) to replicate the taste and texture of beef.</p>
        <ul class="bb-tags" aria-label="Companies">
          <li>Bayer</li>
          <li>Monsanto</li>
          <li>Syngenta</li>
        </ul>
      </li>
      <li>
        <img src="/assets/images/biotech-environment.jpg" alt="" width="400" height="250" loading="lazy">
        <h3>Environment</h3>
        <p>Bioremediation uses bacteria that break down petroleum into harmless compounds. Bioplastics made from plants instead of petroleum decompose in months, not centuries.</p>
        <ul class="bb-tags" aria-label="Companies">
          <li>Bolt Threads</li>
          <li>LanzaTech</li>
          <li>Novozymes</li>
        </ul>
      </li>
      <li>
        <img src="/assets/images/biotech-cuttingedge.jpg" alt="" width="400" height="250" loading="lazy">
        <h3>The cutting edge</h3>
        <p>Bioprinting uses 3D printers loaded with living cells to build skin grafts, cartilage, and blood vessels. Mini-brains grown from stem cells are helping scientists study Alzheimer's without human trials.</p>
        <ul class="bb-tags" aria-label="Companies">
          <li>10x Genomics</li>
          <li>CRISPR Therapeutics</li>
          <li>Illumina</li>
        </ul>
      </li>
    </ul>
  </div>
</section>

<!-- Beyond the science -->
<section class="bb-section bb-band bb-band--forest" id="beyond-the-science">
  <div class="bb-wrap bb-wib-beyond">
    <div class="bb-wib-beyond-story">
      <h2>Beyond the science</h2>
      <p>A breakthrough in the lab is just the beginning. Getting from concept to the real world takes an entire team, and most of them aren't scientists.</p>
      <p>Take mRNA vaccines. The underlying science existed for decades. Turning it into something that reached billions of people took business strategists, regulatory experts, manufacturing engineers, ethicists, and communicators working in parallel.</p>
    </div>
    <ul class="bb-wib-someone">
      <li>Someone had to decide what was worth pursuing and who would pay for it.</li>
      <li>Someone had to design safe trials and navigate the FDA.</li>
      <li>Someone had to figure out how to manufacture at scale without losing efficacy.</li>
      <li>Someone had to explain a brand-new technology to a skeptical public.</li>
    </ul>
    <p class="bb-wib-beyond-close">That's why biotech needs business people, engineers, lawyers, writers, and project managers just as much as it needs scientists.</p>
    <aside class="bb-wib-intl">
      <p><strong>Outside the US?</strong> Regulatory terminology varies by country. FDA = United States Food and Drug Administration. EMA = European Medicines Agency (EU). Health Canada oversees drug approvals in Canada. PMDA (Pharmaceuticals and Medical Devices Agency) regulates in Japan. Terms like "IND filing" or "NDA" are US-specific. Equivalent processes exist in other jurisdictions under different names and timelines.</p>
    </aside>
  </div>
</section>

<!-- Common misconceptions -->
<section class="bb-section" id="common-misconceptions">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Common misconceptions</h2>
    </div>
    <div class="bb-wib-myths">
      <div class="bb-wib-myth">
        <h3>&ldquo;You need to be good at biology to work in the industry.&rdquo;</h3>
        <p><strong>Not necessarily.</strong> Biotech employs humanities majors, business students, and engineers just as readily as biology PhDs. Science communication, operations, and regulatory affairs are all viable without a lab background.</p>
      </div>
      <div class="bb-wib-myth">
        <h3>&ldquo;It&rsquo;s all lab work.&rdquo;</h3>
        <p><strong>Lab work is one slice of a much bigger picture.</strong> There's also manufacturing, regulatory affairs, sales, policy, data analysis, and more. The <a href="/career-pathways/">Careers</a> page shows the full range.</p>
      </div>
      <div class="bb-wib-myth">
        <h3>&ldquo;You need a PhD.&rdquo;</h3>
        <p><strong>Only if you want to lead independent research.</strong> Most biotech jobs in regulatory, manufacturing, business, and operations require a bachelor's degree or less. Certificate programs can get you there in months, and there are entry points at every level.</p>
      </div>
    </div>
  </div>
</section>

<!-- Next step -->
<section class="bb-section bb-band bb-band--cream bb-wib-next">
  <div class="bb-wrap">
    <p class="bb-kicker">Next step</p>
    <h2>See where you could fit in</h2>
    <p>The Careers page walks through seven paths into the field, from lab research to regulatory policy, with realistic entry points for each.</p>
    <div class="bb-actions">
      <a class="bb-button" href="/career-pathways/">Explore careers</a>
      <a class="bb-textlink" href="/resources/">Browse The Learning Lab</a>
    </div>
  </div>
</section>

</div>
