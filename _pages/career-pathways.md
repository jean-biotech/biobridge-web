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
</style>

<div class="bb-page-hero">
  <h1>Careers in Biotechnology</h1>
  <p>There is no single path into biotech. Explore the major routes, one card at a time, with realistic entry points for every background.</p>
</div>

<div class="bb-stats-strip">
  <div class="bb-stat">
    <div class="bb-stat-num">10,000+</div>
    <div class="bb-stat-label">Students Reached</div>
  </div>
  <div class="bb-stat">
    <div class="bb-stat-num">55K+</div>
    <div class="bb-stat-label">Community Members</div>
  </div>
  <div class="bb-stat">
    <div class="bb-stat-num">Open to All</div>
    <div class="bb-stat-label">Backgrounds &amp; Disciplines</div>
  </div>
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
            <p class="bb-detail-value">Using coding, statistics, and algorithms to analyze biological data — genomics, proteomics, drug discovery, and more.</p>
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
</script>
