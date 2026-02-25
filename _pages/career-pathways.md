---
layout: single
title: "Career Pathways"
permalink: /career-pathways/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
body { font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; }
h1, h2, h3, h4 { font-family: 'Playfair Display', Georgia, serif; }

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
  --bb-teal: #0E7490;
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
  margin: 0 0 0.5rem;
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

/* ============================================
   CAROUSEL WRAPPER — Full width
   ============================================ */
.bb-carousel-wrap {
  position: relative;
  width: 100%;
  margin: 0 0 1.5rem;
  padding: 0 3rem;
  box-sizing: border-box;
}

/* Navigation arrows — circular, Penn style */
.bb-carousel-btn {
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  background: var(--bb-white);
  border: 1.5px solid var(--bb-border);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.1rem;
  color: var(--bb-navy);
  transition: all 0.2s ease;
  z-index: 10;
  line-height: 1;
  font-family: Georgia, serif;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding: 0;
}
.bb-carousel-btn:hover {
  border-color: var(--bb-green-accent);
  color: var(--bb-green-accent);
  box-shadow: 0 4px 14px rgba(45,95,63,0.2);
}
.bb-carousel-btn.prev { left: 0; }
.bb-carousel-btn.next { right: 0; }
.bb-carousel-btn:disabled {
  opacity: 0.3;
  cursor: default;
  box-shadow: none;
}

/* Carousel viewport */
.bb-carousel-viewport {
  overflow: hidden;
  border-radius: 10px;
}

/* Cards track */
.bb-carousel-track {
  display: flex;
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

/* Individual card — viewport height constrained */
.bb-career-slide {
  min-width: 100%;
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 18px rgba(0,0,0,0.07);
  display: flex;
  flex-direction: column;
}

/* Card image — fills width, fixed height */
.bb-card-img {
  background: linear-gradient(135deg, #d1e8d8, #e8f4ea);
  border-bottom: 1px solid var(--bb-border);
  width: 100%;
  height: 140px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.bb-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.bb-card-img-label {
  display: inline-block;
  background: rgba(45,95,63,0.1);
  border: 1px dashed rgba(45,95,63,0.3);
  border-radius: 4px;
  padding: 0.3rem 0.85rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--bb-green);
  letter-spacing: 0.02em;
}

/* Card body */
.bb-card-body {
  padding: 1.25rem 1.5rem;
  overflow-y: auto;
  flex: 1;
}
.bb-card-body h2 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 1.05rem;
  font-weight: 700;
  margin: 0 0 1rem;
  letter-spacing: -0.01em;
}

/* Detail rows */
.bb-detail {
  margin-bottom: 0.75rem;
}
.bb-detail-label {
  font-family: 'Inter', sans-serif;
  color: var(--bb-green);
  font-size: 0.67rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 700;
  margin-bottom: 0.15rem;
}
.bb-detail-value {
  color: var(--bb-text-secondary);
  font-size: 0.84rem;
  line-height: 1.6;
  margin: 0;
}
.bb-detail-value ul {
  margin: 0;
  padding-left: 1.1rem;
}
.bb-detail-value li {
  margin-bottom: 0.15rem;
  font-size: 0.84rem;
}

/* Company logos section */
.bb-companies {
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--bb-border);
}
.bb-companies-label {
  font-family: 'Inter', sans-serif;
  color: var(--bb-gray);
  font-size: 0.67rem;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  font-weight: 600;
  margin-bottom: 0.5rem;
}
.bb-logo-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
/* Distinct teal accent for org badges — not the same muted green */
.bb-logo-badge {
  display: inline-block;
  background: rgba(14,116,144,0.1);
  border: 1px solid rgba(14,116,144,0.25);
  border-radius: 4px;
  padding: 0.25rem 0.65rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.73rem;
  font-weight: 600;
  color: var(--bb-teal);
  letter-spacing: 0.01em;
}

/* Dots + counter */
.bb-carousel-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}
.bb-carousel-dots {
  display: flex;
  gap: 0.4rem;
}
.bb-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--bb-border);
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
  padding: 0;
}
.bb-dot.active {
  background: var(--bb-green-accent);
  transform: scale(1.25);
}
.bb-carousel-counter {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  color: var(--bb-gray);
  font-weight: 500;
}

/* Next Steps */
.bb-next-steps {
  background: var(--bb-green-bg-subtle);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1.25rem 1.5rem;
  margin-top: 0.5rem;
}
.bb-next-steps h2 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 0.9rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0.65rem;
}
.bb-next-steps ul {
  padding-left: 1.1rem;
  margin: 0;
}
.bb-next-steps li {
  margin-bottom: 0.4rem;
  color: var(--bb-text-secondary);
  font-size: 0.85rem;
}
.bb-next-steps a {
  color: var(--bb-green-accent);
  font-weight: 600;
}

/* Desktop enhancements */
@media (min-width: 769px) {
  .bb-page-hero { padding: 2.5rem 2.5rem; border-radius: 10px; }
  .bb-page-hero h1 { font-size: 1.65rem; }
  .bb-page-hero p { font-size: 0.93rem; }
  .bb-card-img { height: 180px; }
  .bb-card-body { padding: 1.5rem 2rem; }
  .bb-carousel-wrap { padding: 0 3.5rem; }
  .bb-carousel-btn { width: 44px; height: 44px; font-size: 1.2rem; }
}

/* ============================================
   CREAM SECTION BACKGROUNDS
   ============================================ */
.bb-cream-wrap {
  background: #FAF7F2;
  border-top: 1px solid #ede8e0;
  border-bottom: 1px solid #ede8e0;
  margin: 2rem -48px;
  padding: 2rem 48px;
}
@media (min-width: 1200px) {
  .bb-cream-wrap {
    margin: 2rem -72px;
    padding: 2rem 72px;
  }
}

/* ============================================
   SECTION DIVIDER
   ============================================ */
.bb-section-divider {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  margin: 2.5rem 0 1.75rem;
}
.bb-section-divider-line {
  flex: 1;
  height: 1px;
  background: var(--bb-border);
}
.bb-section-divider-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.67rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-accent);
  white-space: nowrap;
}

/* ============================================
   INTERNSHIP SECTION
   ============================================ */
.bb-internship-section {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 10px;
  padding: 1.75rem 1.5rem;
  margin-bottom: 1.5rem;
}
.bb-internship-section h2 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--bb-green);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}
.bb-internship-section .bb-section-intro {
  font-family: 'Inter', sans-serif;
  color: var(--bb-text-secondary);
  font-size: 0.88rem;
  line-height: 1.75;
  margin: 0 0 1.5rem;
}
.bb-internship-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
@media (min-width: 769px) {
  .bb-internship-grid { grid-template-columns: repeat(2, 1fr); }
  .bb-internship-section { padding: 2.25rem 2rem; }
  .bb-internship-section h2 { font-size: 1.5rem; }
}
.bb-internship-block {
  background: var(--bb-green-bg-subtle);
  border: 1px solid var(--bb-border);
  border-left: 3px solid var(--bb-green-accent);
  border-radius: 7px;
  padding: 1rem 1.1rem;
}
.bb-internship-block h3 {
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--bb-green);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 0.5rem;
}
.bb-internship-block p {
  font-family: 'Inter', sans-serif;
  font-size: 0.84rem;
  color: var(--bb-text-secondary);
  line-height: 1.7;
  margin: 0 0 0.4rem;
}
.bb-internship-block p:last-child { margin-bottom: 0; }
.bb-internship-block ul {
  margin: 0;
  padding-left: 1.1rem;
}
.bb-internship-block li {
  font-size: 0.84rem;
  color: var(--bb-text-secondary);
  line-height: 1.65;
  margin-bottom: 0.25rem;
}
.bb-program-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.65rem;
}
.bb-program-badge {
  display: inline-block;
  background: rgba(45,95,63,0.08);
  border: 1px solid rgba(45,95,63,0.2);
  border-radius: 4px;
  padding: 0.22rem 0.6rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.73rem;
  font-weight: 600;
  color: var(--bb-green);
}

/* ============================================
   WHERE BIOTECH IS HEADING SECTION
   ============================================ */
.bb-future-section {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 10px;
  padding: 1.75rem 1.5rem;
  margin-bottom: 1.5rem;
}
.bb-future-section h2 {
  font-family: 'Playfair Display', Georgia, serif;
  color: var(--bb-green);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
  letter-spacing: -0.02em;
}
.bb-future-section .bb-section-intro {
  font-family: 'Inter', sans-serif;
  color: var(--bb-text-secondary);
  font-size: 0.88rem;
  line-height: 1.75;
  margin: 0 0 1.5rem;
}
.bb-future-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}
@media (min-width: 769px) {
  .bb-future-grid { grid-template-columns: repeat(2, 1fr); }
  .bb-future-section { padding: 2.25rem 2rem; }
  .bb-future-section h2 { font-size: 1.5rem; }
}
.bb-future-card {
  background: var(--bb-green-bg-subtle);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1.1rem 1.25rem;
}
.bb-future-card h3 {
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 700;
  color: var(--bb-navy);
  margin: 0 0 0.6rem;
}
.bb-future-card p {
  font-family: 'Inter', sans-serif;
  font-size: 0.84rem;
  color: var(--bb-text-secondary);
  line-height: 1.75;
  margin: 0;
}

/* ============================================
   INTERNATIONAL CALLOUT
   ============================================ */
.bb-international-callout {
  background: #FAF7F2;
  border: 1px solid #e8dfd0;
  border-left: 4px solid var(--bb-green-accent);
  border-radius: 7px;
  padding: 1rem 1.25rem;
  margin: 1.5rem 0;
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

/* ============================================
   PROGRAM CATEGORY ACCORDIONS
   ============================================ */
.bb-program-category {
  margin-bottom: 0.45rem;
  border: 1px solid var(--bb-border);
  border-radius: 5px;
  overflow: hidden;
}
.bb-program-category summary {
  padding: 0.45rem 0.75rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--bb-green);
  cursor: pointer;
  list-style: none;
  display: flex;
  align-items: center;
  background: rgba(45,95,63,0.04);
  user-select: none;
}
.bb-program-category summary::-webkit-details-marker { display: none; }
.bb-program-category summary::after {
  content: '+';
  margin-left: auto;
  font-size: 1rem;
  color: var(--bb-green-accent);
  font-weight: 700;
}
.bb-program-category[open] summary::after { content: '−'; }
.bb-program-category .bb-program-badges {
  padding: 0.5rem 0.75rem 0.65rem;
  background: var(--bb-white);
}

/* ============================================
   FLIP CARDS — Industry Trends
   ============================================ */
.bb-flip-card {
  cursor: pointer;
  position: relative;
  transition: box-shadow 0.2s ease, transform 0.2s ease;
}
.bb-flip-card:hover {
  box-shadow: 0 4px 18px rgba(45,95,63,0.15);
  transform: translateY(-2px);
}
.bb-flip-icon {
  font-size: 1.9rem;
  margin-bottom: 0.35rem;
  display: block;
}
.bb-flip-front h3 {
  font-size: 0.9rem;
  color: var(--bb-navy);
  margin: 0 0 0.45rem;
}
.bb-flip-teaser {
  font-size: 0.8rem;
  color: var(--bb-text-secondary);
  line-height: 1.6;
  margin: 0 0 0.65rem;
}
.bb-flip-hint {
  display: inline-block;
  font-size: 0.71rem;
  color: var(--bb-green-accent);
  font-weight: 600;
  letter-spacing: 0.02em;
}
.bb-flip-card.is-flipped {
  background: var(--bb-navy);
  border-color: var(--bb-navy);
}
.bb-flip-card.is-flipped .bb-flip-front { display: none; }
.bb-flip-back { display: none; }
.bb-flip-card.is-flipped .bb-flip-back { display: block; }
.bb-flip-back h3 {
  color: var(--bb-white);
  font-size: 0.88rem;
  margin: 0 0 0.6rem;
}
.bb-flip-back p {
  color: rgba(255,255,255,0.87);
  font-size: 0.8rem;
  line-height: 1.72;
  margin: 0 0 0.75rem;
}
.bb-flip-back-link {
  display: inline-block;
  font-size: 0.73rem;
  color: #66BB6A;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid rgba(76,175,80,0.4);
}
.bb-flip-back-link:hover { color: #81C784; }
.bb-flip-close {
  display: block;
  font-size: 0.71rem;
  color: rgba(255,255,255,0.45);
  margin-top: 0.9rem;
  cursor: pointer;
}
</style>

<div class="bb-page-hero">
  <h1>Careers in Biotechnology</h1>
  <p>There is no single path into biotech. Explore the major routes, one card at a time, with realistic entry points for every background.</p>
</div>

<!-- CAROUSEL -->
<div class="bb-carousel-wrap">
  <button class="bb-carousel-btn prev" id="bb-prev" aria-label="Previous career">&#8249;</button>

  <div class="bb-carousel-viewport">
    <div class="bb-carousel-track" id="bb-track">

      <!-- CARD 1: Research -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-research.jpg" alt="Research lab">
        </div>
        <div class="bb-card-body">
          <h2>Research</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Discovering new knowledge, developing therapies, studying biological systems at the molecular and cellular level.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Universities, research institutes, pharmaceutical companies, government labs (NIH, CDC).</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Lab technician (Bachelor's degree)</li>
              <li>Research associate (Bachelor's + experience)</li>
              <li>PhD scientist (for independent research leads)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Experimental design, data analysis, patience, intellectual curiosity.</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">Genentech</span>
              <span class="bb-logo-badge">NIH</span>
              <span class="bb-logo-badge">Pfizer</span>
              <span class="bb-logo-badge">Broad Institute</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 2: Industry & Manufacturing -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-manufacturing.jpg" alt="Manufacturing floor">
        </div>
        <div class="bb-card-body">
          <h2>Industry &amp; Manufacturing</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Scaling up production, quality control, and process optimization: turning lab discoveries into real-world products.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Biotech companies, pharmaceutical manufacturers, contract manufacturing organizations (CMOs).</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Manufacturing associate (High school + training)</li>
              <li>Process engineer (Bachelor's in engineering)</li>
              <li>Quality assurance specialist (Bachelor's in science)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Attention to detail, problem-solving, regulatory knowledge (GMP, GLP).</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">Lonza</span>
              <span class="bb-logo-badge">Thermo Fisher</span>
              <span class="bb-logo-badge">Amgen</span>
              <span class="bb-logo-badge">Catalent</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 3: Clinical -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-clinical.jpg" alt="Clinical trial">
        </div>
        <div class="bb-card-body">
          <h2>Clinical</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Testing therapies in humans, managing clinical trials, ensuring patient safety throughout the drug development process.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Hospitals, clinical research organizations (CROs), pharmaceutical companies.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Clinical research coordinator (Bachelor's)</li>
              <li>Clinical trial manager (Bachelor's + experience)</li>
              <li>Medical science liaison (Advanced degree)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Organization, communication, ethics, regulatory compliance (FDA, ICH guidelines).</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">IQVIA</span>
              <span class="bb-logo-badge">Covance</span>
              <span class="bb-logo-badge">Johnson &amp; Johnson</span>
              <span class="bb-logo-badge">Medpace</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 4: Regulatory & Policy -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-regulatory.jpg" alt="Regulatory and policy">
        </div>
        <div class="bb-card-body">
          <h2>Regulatory &amp; Policy</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Navigating FDA approval, ensuring compliance, and shaping public health policy at the bridge between science and government.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Government agencies (FDA, NIH, EPA), consulting firms, pharmaceutical and biotech companies.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Regulatory affairs specialist (Bachelor's)</li>
              <li>Policy analyst (Bachelor's in science or policy)</li>
              <li>Compliance officer (Bachelor's + certifications)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Writing, attention to detail, deep understanding of regulations and policy processes.</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">FDA</span>
              <span class="bb-logo-badge">Roche</span>
              <span class="bb-logo-badge">Merck</span>
              <span class="bb-logo-badge">PAREXEL</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 5: Business & Operations -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-business.jpg" alt="Business and operations">
        </div>
        <div class="bb-card-body">
          <h2>Business &amp; Operations</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Strategy, partnerships, operations, and project management: the business side of bringing biotech innovations to market.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Biotech startups, consulting firms, venture capital firms, established pharma companies.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Business analyst (Bachelor's in business or science)</li>
              <li>Project manager (Bachelor's + experience)</li>
              <li>Sales representative (Bachelor's)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Communication, business acumen, strategic thinking, networking.</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">Gilead</span>
              <span class="bb-logo-badge">BCG</span>
              <span class="bb-logo-badge">Vertex</span>
              <span class="bb-logo-badge">Flagship Pioneering</span>
            </div>
          </div>
        </div>
      </div>

      <!-- CARD 6: Science Communication -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-scicomm.jpg" alt="Science communication">
        </div>
        <div class="bb-card-body">
          <h2>Science Communication</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Translating complex science for public audiences through journalism, education, content creation, and advocacy.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Media outlets, nonprofits, science museums, biotech marketing teams.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Science writer (Bachelor's + writing portfolio)</li>
              <li>Public engagement coordinator (Bachelor's)</li>
              <li>Medical communications specialist (Bachelor's + experience)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Writing, storytelling, scientific literacy, ability to simplify complexity without losing accuracy.</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">STAT News</span>
              <span class="bb-logo-badge">NIH Communications</span>
              <span class="bb-logo-badge">Ology</span>
              <span class="bb-logo-badge">Science Friday</span>
            </div>
          </div>
        </div>
      </div>


      <!-- CARD 7: Bioinformatics & Computational Biology -->
      <div class="bb-career-slide">
        <div class="bb-card-img">
          <img src="/assets/images/career-bioinformatics.jpg" alt="Bioinformatics and computational biology">
        </div>
        <div class="bb-card-body">
          <h2>Bioinformatics &amp; Computational Biology</h2>
          <div class="bb-detail">
            <div class="bb-detail-label">What it is</div>
            <p class="bb-detail-value">Using coding, statistics, and algorithms to analyze biological data—genomics, proteomics, drug discovery, and more.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Where you'll work</div>
            <p class="bb-detail-value">Biotech and pharma companies, academic research labs, hospitals, government agencies (NIH, FDA), and tech companies entering healthcare.</p>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Entry points</div>
            <div class="bb-detail-value"><ul>
              <li>Bioinformatics analyst (Bachelor's in CS, biology, or bioinformatics)</li>
              <li>Data scientist in biotech (Bachelor's + Python/R skills)</li>
              <li>Computational biologist (Master's or PhD for research-focused roles)</li>
            </ul></div>
          </div>
          <div class="bb-detail">
            <div class="bb-detail-label">Skills needed</div>
            <p class="bb-detail-value">Python, R, SQL, statistics, genomics tools (BLAST, Galaxy, GATK), and comfort with large datasets.</p>
          </div>
          <div class="bb-companies">
            <div class="bb-companies-label">Example Organizations</div>
            <div class="bb-logo-badges">
              <span class="bb-logo-badge">23andMe</span>
              <span class="bb-logo-badge">Illumina</span>
              <span class="bb-logo-badge">Broad Institute</span>
              <span class="bb-logo-badge">DNAnexus</span>
            </div>
          </div>
        </div>
      </div>

    </div><!-- /.bb-carousel-track -->
  </div><!-- /.bb-carousel-viewport -->

  <button class="bb-carousel-btn next" id="bb-next" aria-label="Next career">&#8250;</button>
</div><!-- /.bb-carousel-wrap -->

<!-- Dots + counter -->
<div class="bb-carousel-footer">
  <div class="bb-carousel-dots" id="bb-dots"></div>
  <span class="bb-carousel-counter" id="bb-counter">1 of 7</span>
</div>

<div class="bb-next-steps">
  <h2>Ready to go deeper?</h2>
  <ul>
    <li>Browse <a href="/resources/">The Learning Lab</a> for career-specific media and resources</li>
    <li>Check out <a href="/products/">The Biotech Blueprint</a>, a step-by-step guide built for your starting point</li>
    <li>Learn what biotech actually is on the <a href="/what-is-biotech/">What is Biotech?</a> page</li>
  </ul>
</div>

<!-- International callout — career structure note -->
<div class="bb-international-callout">
  <div class="bb-intl-header">🌍 Outside the US?</div>
  <p>The biotech industry structure differs internationally. Europe and Asia have more publicly funded research conducted through universities and government institutes, with fewer venture-backed startups than you'd find in Boston or the Bay Area. In the UK, Germany, and the Netherlands, many biotech roles are embedded within academic medical centers or government research councils. If you're outside the US, look for roles with national research institutes (e.g., the Wellcome Sanger Institute, EMBL, or RIKEN in Japan) alongside commercial opportunities.</p>
</div>

<!-- SECTION DIVIDER -->
<div class="bb-section-divider">
  <div class="bb-section-divider-line"></div>
  <div class="bb-section-divider-label">Getting Started</div>
  <div class="bb-section-divider-line"></div>
</div>

<div class="bb-cream-wrap">
<!-- FINDING YOUR FIRST INTERNSHIP -->
<div class="bb-internship-section">
  <h2>Finding Your First Internship</h2>
  <p class="bb-section-intro">Your first biotech internship doesn't need to be at Pfizer. It needs to get you in the room. Here's a practical guide to navigating the process—from well-known formal programs to cold outreach to academic labs.</p>

  <div class="bb-internship-grid">

    <div class="bb-internship-block">
      <h3>Well-Known Programs to Apply To</h3>
      <p>These are competitive but well worth applying—they're structured, paid, and recognized by hiring managers. Browse by sector:</p>

      <details class="bb-program-category">
        <summary>🔬 Research, Pharma &amp; Biotech</summary>
        <div class="bb-program-badges">
          <span class="bb-program-badge">Pfizer Summer Internship</span>
          <span class="bb-program-badge">Genentech SURGE</span>
          <span class="bb-program-badge">Amgen Scholars</span>
          <span class="bb-program-badge">AstraZeneca Internship</span>
          <span class="bb-program-badge">Merck Internship</span>
          <span class="bb-program-badge">J&amp;J Intern Program</span>
          <span class="bb-program-badge">Eli Lilly Summer Internship</span>
          <span class="bb-program-badge">AbbVie Internship</span>
          <span class="bb-program-badge">BMS Discovery Fellowship</span>
          <span class="bb-program-badge">Regeneron Internship</span>
          <span class="bb-program-badge">Moderna Internship</span>
          <span class="bb-program-badge">Abbott Internship</span>
        </div>
      </details>

      <details class="bb-program-category">
        <summary>💼 Consulting &amp; Life Sciences Strategy</summary>
        <div class="bb-program-badges">
          <span class="bb-program-badge">Simon-Kucher &amp; Partners</span>
          <span class="bb-program-badge">Clearview Healthcare Partners</span>
          <span class="bb-program-badge">L.E.K. Consulting</span>
          <span class="bb-program-badge">ZS Associates</span>
          <span class="bb-program-badge">Putnam Associates</span>
          <span class="bb-program-badge">Analysis Group</span>
          <span class="bb-program-badge">Guidehouse Life Sciences</span>
          <span class="bb-program-badge">Huron Consulting</span>
          <span class="bb-program-badge">Avalere Health</span>
          <span class="bb-program-badge">IQVIA Consulting</span>
        </div>
      </details>

      <details class="bb-program-category">
        <summary>🏛️ Government &amp; Academic</summary>
        <div class="bb-program-badges">
          <span class="bb-program-badge">NIH Summer Internship Program</span>
          <span class="bb-program-badge">NSF REU</span>
          <span class="bb-program-badge">FDA Commissioner's Fellowship</span>
          <span class="bb-program-badge">CDC Public Health Associate Program</span>
          <span class="bb-program-badge">NCI Cancer Research Internship</span>
        </div>
      </details>

      <details class="bb-program-category">
        <summary>🩺 Medical Devices &amp; Diagnostics</summary>
        <div class="bb-program-badges">
          <span class="bb-program-badge">Medtronic Internship</span>
          <span class="bb-program-badge">Boston Scientific Internship</span>
          <span class="bb-program-badge">Abbott Diagnostics</span>
          <span class="bb-program-badge">Becton Dickinson</span>
          <span class="bb-program-badge">Illumina Internship</span>
          <span class="bb-program-badge">Thermo Fisher Internship</span>
        </div>
      </details>

      <p style="margin-top:0.65rem;">Check each company's careers page directly—most open applications between October and February for summer positions.</p>
    </div>

    <div class="bb-internship-block">
      <h3>Application Timeline</h3>
      <ul>
        <li><strong>August–October (fall):</strong> Start researching programs. Update your resume. Identify 15–20 target programs and companies.</li>
        <li><strong>October–December:</strong> Major pharma/biotech applications open. Apply early—most use rolling review.</li>
        <li><strong>January–February:</strong> Academic lab programs (REU, NIH SIP) open, and startup internship postings spike on LinkedIn. This is also when you should start hearing back from fall applications to major pharma programs—responses typically take 8–12 weeks, so don't panic if your inbox is still quiet.</li>
        <li><strong>March–April:</strong> Follow-up and interviews. Smaller companies often post well into spring.</li>
        <li><strong>May–June:</strong> Last-minute opportunities—keep checking even if you haven't heard back from early applications.</li>
      </ul>
    </div>

    <div class="bb-internship-block">
      <h3>What to Include in Your Application</h3>
      <ul>
        <li><strong>Resume:</strong> 1 page, reverse chronological, tailored to each role. Lead with relevant coursework and skills if you don't yet have experience.</li>
        <li><strong>Cover letter:</strong> Short (3 paragraphs). Why this company, why this role, what you bring. Skip generic openers.</li>
        <li><strong>Research statement (for academic labs):</strong> 1–2 paragraphs on your interests and what you hope to learn.</li>
        <li><strong>References:</strong> Have 2–3 professors or supervisors ready. Ask them in advance.</li>
        <li><strong>Writing sample (if requested):</strong> A lab report, class paper, or anything that demonstrates your ability to communicate science clearly.</li>
      </ul>
      <p style="margin-top:0.75rem; font-size:0.82rem; color:var(--bb-text-secondary); font-style:italic;">Want real examples? <a href="/products/" style="font-style:normal; color:var(--bb-green-accent); font-weight:600;">The Biotech Blueprint</a> includes annotated resume samples, cover letter templates, and cold email scripts built specifically for biotech applications—if you want to see what a strong application actually looks like, start there.</p>
    </div>

    <div class="bb-internship-block">
      <h3>Where to Search</h3>
      <ul>
        <li><strong>LinkedIn:</strong> Filter by "Internship" and "Biotech" or "Pharmaceutical." Set alerts for new postings.</li>
        <li><strong>Handshake:</strong> Best for university-specific postings, especially for smaller regional biotech companies that recruit campus-to-campus.</li>
        <li><strong>Company career pages:</strong> Always check directly—many roles aren't posted on aggregators. Bookmark 10–15 companies you'd want to work for.</li>
        <li><strong>University career center:</strong> Often has exclusive postings from alumni-affiliated companies. Ask about biotech-specific fairs.</li>
        <li><strong>Cold outreach:</strong> Email professors with funded labs. A well-written cold email to a principal investigator can get you into a research lab even without a formal posting.</li>
      </ul>
    </div>

    <div class="bb-internship-block">
      <h3>What to Expect: Pharma vs. Startup vs. Gov/Academic</h3>
      <ul>
        <li><strong>Big Pharma (Pfizer, Merck, J&J):</strong> Structured programs, assigned mentors, formal presentations, intern cohort events. Slower-paced, process-heavy. Good for learning how large organizations operate and building a network.</li>
        <li><strong>Biotech Startup:</strong> Less structure, broader responsibilities, often more hands-on from day one. You may be the only intern. Fast-paced and unpredictable—you'll learn a lot, but you'll need to drive your own experience.</li>
        <li><strong>Government/Academic Lab (NIH, university labs, REU):</strong> Research-focused, usually stipend-based. Excellent for students considering graduate school. Slower publication cycles but deep scientific exposure. Independent project work is common.</li>
      </ul>
    </div>

    <div class="bb-internship-block">
      <h3>Quick Tips That Actually Help</h3>
      <ul>
        <li>Apply broadly early, then narrow your focus in February. Don't wait for your "dream" company to post before applying anywhere.</li>
        <li>Tailor your resume keywords to match each job posting—many companies use ATS screening before a human sees your application.</li>
        <li>A warm introduction beats a cold application every time. LinkedIn alumni tools and professor connections are underutilized by most students.</li>
        <li>Don't overlook smaller CROs, CDMOs, and regional biotech companies—they often offer more hands-on work than large programs.</li>
      </ul>
    </div>

  </div>
</div>
</div><!-- /.bb-cream-wrap -->

<!-- SECTION DIVIDER -->
<div class="bb-section-divider">
  <div class="bb-section-divider-line"></div>
  <div class="bb-section-divider-label">Industry Trends</div>
  <div class="bb-section-divider-line"></div>
</div>

<!-- WHERE BIOTECH IS HEADING -->
<div class="bb-future-section">
  <h2>Where Biotech Is Heading</h2>
  <p class="bb-section-intro">The biotech industry is changing faster than most career guides acknowledge. These five areas are shaping where the jobs, funding, and scientific energy are flowing in the next decade—and what that means for you.</p>

  <p style="font-size:0.78rem; color:var(--bb-gray); margin: -0.75rem 0 1.25rem; font-family:'Inter',sans-serif;">Click any card to expand the full picture.</p>

  <div class="bb-future-grid">

    <div class="bb-future-card bb-flip-card">
      <div class="bb-flip-front">
        <span class="bb-flip-icon">🤖</span>
        <h3>AI &amp; Drug Discovery</h3>
        <p class="bb-flip-teaser">AlphaFold changed what computational biology teams can do in months. New career paths are emerging fast at the ML–biology intersection.</p>
        <span class="bb-flip-hint">Click to explore →</span>
      </div>
      <div class="bb-flip-back">
        <h3>🤖 AI &amp; Drug Discovery</h3>
        <p>AlphaFold's protein structure predictions changed what computational biology teams can accomplish in months rather than years. AI-assisted clinical trial design is reducing the time it takes to identify patient cohorts and predict drug responses. New roles are emerging at the intersection of machine learning and wet lab science—computational biologists, AI research scientists, and data engineers focused on genomics pipelines are among the fastest-growing positions in pharma and early-stage biotech. You don't need to be a programmer to contribute: biology domain expertise is increasingly what distinguishes useful AI tools from ones that fail in practice.</p>
        <a href="https://www.statnews.com" class="bb-flip-back-link" target="_blank" rel="noopener">Explore on STAT News →</a>
        <span class="bb-flip-close">← Click to flip back</span>
      </div>
    </div>

    <div class="bb-future-card bb-flip-card">
      <div class="bb-flip-front">
        <span class="bb-flip-icon">🧫</span>
        <h3>Synthetic Biology</h3>
        <p class="bb-flip-teaser">Engineering organisms for fragrances, therapeutics, and industrial materials. Biomanufacturing is pulling in serious investment and a new category of roles.</p>
        <span class="bb-flip-hint">Click to explore →</span>
      </div>
      <div class="bb-flip-back">
        <h3>🧫 Synthetic Biology</h3>
        <p>Companies like Ginkgo Bioworks have built platform-level infrastructure for engineering organisms to produce everything from fragrances to industrial chemicals to therapeutic proteins. Biomanufacturing—using engineered microbes and cell lines to produce products that previously required petroleum chemistry or animal agriculture—is attracting significant investment. Roles range from metabolic engineering and strain development to process scale-up and fermentation operations. Synthetic biology also intersects with food, materials, and agriculture, making it one of the broader application areas for biology training outside traditional pharma.</p>
        <a href="https://www.nature.com" class="bb-flip-back-link" target="_blank" rel="noopener">Read on Nature →</a>
        <span class="bb-flip-close">← Click to flip back</span>
      </div>
    </div>

    <div class="bb-future-card bb-flip-card">
      <div class="bb-flip-front">
        <span class="bb-flip-icon">🔬</span>
        <h3>Longevity &amp; Aging Biotech</h3>
        <p class="bb-flip-teaser">VC interest in aging science is real and growing. Here's what it means for early-career researchers entering this scientifically exciting niche.</p>
        <span class="bb-flip-hint">Click to explore →</span>
      </div>
      <div class="bb-flip-back">
        <h3>🔬 Longevity &amp; Aging Biotech</h3>
        <p>Venture capital interest in longevity science has grown substantially, with firms like Calico (backed by Alphabet) and Unity Biotechnology pursuing interventions targeting the biology of aging itself rather than individual diseases. The field remains scientifically early-stage, but it's generating roles in translational research, clinical development, and biomarker science. For students interested in this space, a strong foundation in cell biology, metabolism, or genetics—combined with an understanding of the long and uncertain clinical timelines involved—puts you ahead of most applicants entering this niche.</p>
        <a href="https://www.nia.nih.gov" class="bb-flip-back-link" target="_blank" rel="noopener">Explore at NIA (NIH) →</a>
        <span class="bb-flip-close">← Click to flip back</span>
      </div>
    </div>

    <div class="bb-future-card bb-flip-card">
      <div class="bb-flip-front">
        <span class="bb-flip-icon">🧬</span>
        <h3>Personalized Medicine &amp; Diagnostics</h3>
        <p class="bb-flip-teaser">Sequencing costs have dropped dramatically. Companion diagnostics are now FDA-required for many oncology drugs. The clinical genomics job market is expanding.</p>
        <span class="bb-flip-hint">Click to explore →</span>
      </div>
      <div class="bb-flip-back">
        <h3>🧬 Personalized Medicine &amp; Diagnostics</h3>
        <p>Genomic sequencing costs have dropped dramatically, making population-scale genomics programs feasible. Companion diagnostics—tests that determine whether a patient will respond to a specific therapy—are now required for many oncology drug approvals. Liquid biopsy, which detects cancer-related DNA fragments in blood rather than tissue, is reshaping early detection. Roles in this space include clinical genomics scientists, bioinformatics analysts, regulatory affairs specialists focused on IVD (in vitro diagnostics), and commercial teams that work with oncologists and hospital systems to implement these tools in clinical practice.</p>
        <a href="https://www.genome.gov" class="bb-flip-back-link" target="_blank" rel="noopener">Explore at genome.gov →</a>
        <span class="bb-flip-close">← Click to flip back</span>
      </div>
    </div>

    <div class="bb-future-card bb-flip-card" style="grid-column: 1 / -1;">
      <div class="bb-flip-front">
        <span class="bb-flip-icon">🧪</span>
        <h3>How AI Is Changing (Not Eliminating) Wet Lab Roles</h3>
        <p class="bb-flip-teaser">The most common student concern—addressed directly. AI accelerates hypothesis generation; it doesn't pipette, troubleshoot assays, or navigate biological unpredictability.</p>
        <span class="bb-flip-hint">Click to explore →</span>
      </div>
      <div class="bb-flip-back">
        <h3>🧪 How AI Is Changing (Not Eliminating) Wet Lab Roles</h3>
        <p>A common concern among students is that AI will automate laboratory work and reduce the need for bench scientists. This misreads what AI actually does in a biotech context. AI accelerates hypothesis generation and data interpretation—it does not yet pipette, culture cells, troubleshoot failed assays, or navigate the physical unpredictability of biological systems. What is changing: scientists spend less time on routine data analysis and more time on experimental design, interpretation, and cross-functional communication. The human skills that remain essential are precisely the ones that are hardest to automate: deep domain intuition, the ability to recognize when something unexpected in your data is noise versus signal, and the judgment to know when to abandon a hypothesis and why. If anything, the growing role of AI in biotech increases the premium on scientists who can both run experiments and engage meaningfully with computational outputs—a combination that is currently rare and therefore valuable.</p>
        <a href="https://www.nature.com" class="bb-flip-back-link" target="_blank" rel="noopener">Read on Nature →</a>
        <span class="bb-flip-close">← Click to flip back</span>
      </div>
    </div>

  </div>
</div>

<script>
(function() {
  var track = document.getElementById('bb-track');
  var prev  = document.getElementById('bb-prev');
  var next  = document.getElementById('bb-next');
  var dotsWrap = document.getElementById('bb-dots');
  var counter  = document.getElementById('bb-counter');
  var slides = track ? track.querySelectorAll('.bb-career-slide') : [];
  var total  = slides.length;
  var current = 0;

  if (!track || total === 0) return;

  // Build dots
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'bb-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.dataset.index = i;
    dot.addEventListener('click', function(e) {
      goTo(parseInt(e.currentTarget.dataset.index));
    });
    dotsWrap.appendChild(dot);
  }

  function goTo(index) {
    current = index;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dotsWrap.querySelectorAll('.bb-dot').forEach(function(d, i) {
      d.classList.toggle('active', i === current);
    });
    counter.textContent = (current + 1) + ' of ' + total;
    prev.disabled = current === 0;
    next.disabled = current === total - 1;
  }

  prev.addEventListener('click', function() { if (current > 0) goTo(current - 1); });
  next.addEventListener('click', function() { if (current < total - 1) goTo(current + 1); });

  // Touch / swipe support
  var touchStartX = 0;
  track.parentElement.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].clientX;
  }, { passive: true });
  track.parentElement.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) {
      if (dx < 0 && current < total - 1) goTo(current + 1);
      else if (dx > 0 && current > 0) goTo(current - 1);
    }
  }, { passive: true });

  // Init
  goTo(0);
})();

// Flip cards — industry trends
(function() {
  document.querySelectorAll('.bb-flip-card').forEach(function(card) {
    card.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') return; // let link clicks through
      card.classList.toggle('is-flipped');
    });
  });
})();
</script>
