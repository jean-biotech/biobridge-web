---
layout: single
title: "What is Biotech?"
permalink: /what-is-biotech/
toc: true
toc_label: "On This Page"
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
  --bb-gray: #757575;
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

/* Image Placeholder */
.bb-img-placeholder {
  background: linear-gradient(135deg, var(--bb-green-bg), #e8f4f5);
  border: 1px dashed var(--bb-border);
  border-radius: 8px;
  padding: 1.5rem 1rem;
  text-align: center;
  color: var(--bb-gray);
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.5;
}

/* Reduced callout box */
.bb-callout {
  background: var(--bb-navy);
  border-radius: 8px;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
  position: relative;
  overflow: hidden;
  display: inline-block;
  width: 100%;
}
.bb-callout::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  width: 3px; height: 100%;
  background: linear-gradient(180deg, var(--bb-green-bright), var(--bb-green-accent));
}
.bb-callout p {
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--bb-white);
  margin: 0;
  line-height: 1.5;
  letter-spacing: -0.01em;
  padding-left: 0.75rem;
}
.bb-callout span {
  display: block;
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 400;
  color: rgba(255,255,255,0.5);
  margin-top: 0.35rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding-left: 0.75rem;
}

/* Section intro text */
.bb-intro-text {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: #334155;
  line-height: 1.8;
  margin-bottom: 1.25rem;
}

/* Visual divider with label */
.bb-divider {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin: 1.75rem 0;
}
.bb-divider-line {
  flex: 1;
  height: 1px;
  background: var(--bb-border);
}
.bb-divider-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  white-space: nowrap;
}

/* ============================================
   FLIP CARDS — Real-World Examples
   ============================================ */
.bb-flip-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin: 1.25rem 0;
}

.bb-flip-card {
  perspective: 1000px;
  height: 220px;
  cursor: pointer;
}

.bb-flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}

.bb-flip-card.flipped .bb-flip-card-inner,
.bb-flip-card:hover .bb-flip-card-inner {
  transform: rotateY(180deg);
}

.bb-flip-front,
.bb-flip-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 8px;
  border: 1px solid var(--bb-border);
  overflow: hidden;
}

/* Front of card */
.bb-flip-front {
  background: var(--bb-white);
  display: flex;
  flex-direction: column;
}
.bb-flip-front-img {
  background: linear-gradient(135deg, #d1e8d8, #e8f4ea);
  height: 110px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-bottom: 1px solid var(--bb-border);
}
.bb-flip-front-img span {
  font-family: 'Inter', sans-serif;
  font-size: 0.68rem;
  font-weight: 500;
  color: var(--bb-green);
  background: rgba(45,95,63,0.1);
  border: 1px dashed rgba(45,95,63,0.3);
  border-radius: 4px;
  padding: 0.25rem 0.6rem;
}
.bb-flip-front-body {
  padding: 0.85rem 1rem;
  flex: 1;
}
.bb-flip-front-body h3 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 0.92rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}
.bb-flip-front-body p {
  color: var(--bb-gray);
  font-size: 0.75rem;
  margin: 0;
}
.bb-flip-hint {
  font-family: 'Inter', sans-serif;
  font-size: 0.62rem;
  color: var(--bb-gray);
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* Back of card */
.bb-flip-back {
  background: var(--bb-navy);
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  padding: 1.1rem 1.25rem;
  justify-content: center;
}
.bb-flip-back h3 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-green-hover);
  font-size: 0.82rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.bb-flip-back p {
  color: rgba(255,255,255,0.85);
  font-size: 0.82rem;
  line-height: 1.65;
  margin: 0 0 0.5rem;
}
.bb-flip-back p:last-child { margin-bottom: 0; }
/* Company name badges on flip card back */
.bb-flip-org-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  margin-top: 0.65rem;
}
.bb-flip-org-badge {
  display: inline-block;
  background: rgba(14,116,144,0.18);
  border: 1px solid rgba(14,116,144,0.38);
  border-radius: 20px;
  padding: 0.18rem 0.6rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: #7ECFE0;
  letter-spacing: 0.01em;
  white-space: nowrap;
}

/* Two-column split */
.bb-two-col {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin: 1.25rem 0;
  align-items: start;
}
.bb-two-col-text p {
  font-family: 'Inter', sans-serif;
  color: #334155;
  font-size: 0.9rem;
  line-height: 1.8;
  margin: 0 0 0.85rem;
}
.bb-two-col-text p:last-child { margin-bottom: 0; }

/* Misconception Blocks */
.bb-misconception {
  background: var(--bb-off-white);
  border: 1px solid var(--bb-border);
  border-left: 3px solid var(--bb-green-accent);
  border-radius: 7px;
  padding: 1rem 1.25rem;
  margin-bottom: 0.75rem;
}
.bb-misconception strong {
  color: var(--bb-navy);
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
}
.bb-misconception p {
  color: var(--bb-text-secondary);
  margin: 0.35rem 0 0;
  font-size: 0.85rem;
  line-height: 1.7;
}

/* Flip card front image fill */
.bb-flip-front-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}


/* Beyond the Science image */
.bb-beyond-img {
  width: 100%;
  border-radius: 8px;
  display: block;
}

/* Desktop */
@media (min-width: 769px) {
  .bb-page-hero { padding: 2.5rem 2.5rem; border-radius: 10px; }
  .bb-page-hero h1 { font-size: 1.65rem; }
  .bb-page-hero p { font-size: 0.93rem; }
  .bb-flip-grid { grid-template-columns: repeat(2, 1fr); gap: 1.1rem; }
  .bb-flip-card { height: 240px; }
  .bb-flip-front-img { height: 120px; }
  .bb-two-col { grid-template-columns: 3fr 2fr; gap: 2.25rem; }
  .bb-callout p { font-size: 1rem; }
}
@media (min-width: 1024px) {
  .bb-flip-grid { grid-template-columns: repeat(4, 1fr); }
}
</style>

<div class="bb-page-hero">
  <h1>What is Biotechnology, Really?</h1>
  <p>Understanding the science shaping our future, in plain language, no prerequisites required.</p>
</div>

<p class="bb-intro-text">Biotechnology is using living systems (cells, bacteria, proteins, DNA) to create useful products or solve real problems.</p>

<div class="bb-callout">
  <p>Biotech = biology + technology to solve real problems.</p>
  <span>The simplest definition that actually holds up</span>
</div>

<p class="bb-intro-text">It sounds vague because biotech is <strong>incredibly broad</strong>. It touches medicine, agriculture, environmental science, manufacturing, and more. The best way to understand it is through examples.</p>

<div class="bb-divider">
  <div class="bb-divider-line"></div>
  <div class="bb-divider-label">Real-World Examples</div>
  <div class="bb-divider-line"></div>
</div>

## Real-World Examples

<p class="bb-intro-text" style="font-size:0.82rem; color: var(--bb-gray);">Hover over each card (or tap on mobile) to see more.</p>

<div class="bb-flip-grid">

  <div class="bb-flip-card" role="button" tabindex="0" aria-label="Medicine example: click to flip">
    <div class="bb-flip-card-inner">
      <div class="bb-flip-front">
        <div class="bb-flip-front-img"><img src="/assets/images/biotech-medicine.jpg" alt="Medicine"></div>
        <div class="bb-flip-front-body">
          <h3>Medicine</h3>
          <p class="bb-flip-hint">Hover to learn more</p>
        </div>
      </div>
      <div class="bb-flip-back">
        <h3>Medicine</h3>
        <p>Insulin for diabetics is made by bacteria engineered to carry the human insulin gene. CAR-T therapy takes your own immune cells, genetically reprograms them to recognize cancer, and injects them back.</p>
        <div class="bb-flip-org-badges">
          <span class="bb-flip-org-badge">Moderna</span>
          <span class="bb-flip-org-badge">Pfizer</span>
          <span class="bb-flip-org-badge">Genentech</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bb-flip-card" role="button" tabindex="0" aria-label="Agriculture example: click to flip">
    <div class="bb-flip-card-inner">
      <div class="bb-flip-front">
        <div class="bb-flip-front-img"><img src="/assets/images/biotech-agriculture.jpg" alt="Agriculture"></div>
        <div class="bb-flip-front-body">
          <h3>Agriculture</h3>
          <p class="bb-flip-hint">Hover to learn more</p>
        </div>
      </div>
      <div class="bb-flip-back">
        <h3>Agriculture</h3>
        <p>Drought-resistant crops can survive on 30% less water. Plant-based meat uses heme (a protein from engineered yeast) to replicate the taste and texture of beef.</p>
        <div class="bb-flip-org-badges">
          <span class="bb-flip-org-badge">Bayer</span>
          <span class="bb-flip-org-badge">Monsanto</span>
          <span class="bb-flip-org-badge">Syngenta</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bb-flip-card" role="button" tabindex="0" aria-label="Environment example: click to flip">
    <div class="bb-flip-card-inner">
      <div class="bb-flip-front">
        <div class="bb-flip-front-img"><img src="/assets/images/biotech-environment.jpg" alt="Environment"></div>
        <div class="bb-flip-front-body">
          <h3>Environment</h3>
          <p class="bb-flip-hint">Hover to learn more</p>
        </div>
      </div>
      <div class="bb-flip-back">
        <h3>Environment</h3>
        <p>Bioremediation uses bacteria that break down petroleum into harmless compounds. Bioplastics made from plants instead of petroleum decompose in months, not centuries.</p>
        <div class="bb-flip-org-badges">
          <span class="bb-flip-org-badge">Bolt Threads</span>
          <span class="bb-flip-org-badge">LanzaTech</span>
          <span class="bb-flip-org-badge">Novozymes</span>
        </div>
      </div>
    </div>
  </div>

  <div class="bb-flip-card" role="button" tabindex="0" aria-label="Cutting Edge example: click to flip">
    <div class="bb-flip-card-inner">
      <div class="bb-flip-front">
        <div class="bb-flip-front-img"><img src="/assets/images/biotech-cuttingedge.jpg" alt="The Cutting Edge"></div>
        <div class="bb-flip-front-body">
          <h3>The Cutting Edge</h3>
          <p class="bb-flip-hint">Hover to learn more</p>
        </div>
      </div>
      <div class="bb-flip-back">
        <h3>The Cutting Edge</h3>
        <p>Bioprinting uses 3D printers loaded with living cells to build skin grafts, cartilage, and blood vessels. Mini-brains grown from stem cells are helping scientists study Alzheimer's without human trials.</p>
        <div class="bb-flip-org-badges">
          <span class="bb-flip-org-badge">10x Genomics</span>
          <span class="bb-flip-org-badge">CRISPR Therapeutics</span>
          <span class="bb-flip-org-badge">Illumina</span>
        </div>
      </div>
    </div>
  </div>

</div>

<div class="bb-divider">
  <div class="bb-divider-line"></div>
  <div class="bb-divider-label">Beyond the Lab</div>
  <div class="bb-divider-line"></div>
</div>

## Beyond the Science

<div class="bb-two-col">
  <div class="bb-two-col-text">
    <p>A breakthrough in the lab is just the beginning. Getting from concept to the real world takes an entire team, and most of them aren't scientists.</p>
    <p>Take mRNA vaccines. The underlying science existed for decades. Turning it into something that reached billions of people took business strategists, regulatory experts, manufacturing engineers, ethicists, and communicators working in parallel.</p>
    <p>Someone had to decide what was worth pursuing and who would pay for it. Someone had to design safe trials and navigate the FDA. Someone had to figure out how to manufacture at scale without losing efficacy. Someone had to explain a brand-new technology to a skeptical public.</p>
    <p>That's why biotech needs business people, engineers, lawyers, writers, and project managers just as much as it needs scientists.</p>
  </div>
  <div>
    <img src="/assets/images/team-illustration.jpg" alt="Cross-functional team behind a biotech breakthrough" class="bb-beyond-img">
  </div>
</div>

<div class="bb-divider">
  <div class="bb-divider-line"></div>
  <div class="bb-divider-label">Common Misconceptions</div>
  <div class="bb-divider-line"></div>
</div>

## Common Misconceptions

<div class="bb-misconception">
  <strong>"You need to be good at biology to work in the industry."</strong>
  <p>Not necessarily. Biotech employs humanities majors, business students, and engineers just as readily as biology PhDs. Science communication, operations, and regulatory affairs are all viable without a lab background.</p>
</div>

<div class="bb-misconception">
  <strong>"It's all lab work."</strong>
  <p>Lab work is one slice of a much bigger picture. There's also manufacturing, regulatory affairs, sales, policy, data analysis, and more. The <a href="/career-pathways/" style="color: #3A7D5C; font-weight: 600;">Career Pathways</a> page shows the full range.</p>
</div>

<div class="bb-misconception">
  <strong>"You need a PhD."</strong>
  <p>Only if you want to lead independent research. Most biotech jobs in regulatory, manufacturing, business, and operations require a bachelor's degree or less. Certificate programs can get you there in months, and there are entry points at every level.</p>
</div>

<script>
// Click-to-flip support for mobile/keyboard
(function() {
  var cards = document.querySelectorAll('.bb-flip-card');
  cards.forEach(function(card) {
    card.addEventListener('click', function() {
      card.classList.toggle('flipped');
    });
    card.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.classList.toggle('flipped');
      }
    });
  });
})();
</script>
