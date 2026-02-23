---
layout: single
title: "The Learning Lab"
permalink: /resources/
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
.bb-page-hero .bb-hero-sub {
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--bb-green-hover);
  margin-bottom: 0.5rem;
  display: block;
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

/* Section header */
.bb-section-head {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 2px solid var(--bb-green-accent);
}
.bb-section-head h2 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 0.95rem;
  font-weight: 700;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Resource section wrapper */
.bb-resource-section {
  margin-bottom: 2.25rem;
}

/* Grid */
.bb-resource-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.85rem;
  margin-bottom: 0;
}

/* Resource card with thumbnail */
.bb-resource-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 7px;
  padding: 0.85rem 1rem;
  transition: all 0.22s ease;
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
}
.bb-resource-card:hover {
  box-shadow: 0 3px 14px rgba(0,0,0,0.07);
  transform: translateY(-1px);
}
.bb-resource-thumb {
  width: 44px;
  height: 44px;
  min-width: 44px;
  background: linear-gradient(135deg, #d1e8d8, #c8dfe0);
  border-radius: 5px;
  border: 1px solid var(--bb-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
}
.bb-resource-thumb img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 4px;
}
.bb-resource-thumb-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.52rem;
  color: var(--bb-gray);
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
  padding: 0 3px;
}
.bb-resource-info {
  flex: 1;
  min-width: 0;
}
.bb-resource-card h3 {
  margin: 0 0 0.2rem;
  font-family: 'Inter', sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
}
.bb-resource-card h3 a {
  color: var(--bb-navy);
  text-decoration: none;
  transition: color 0.2s ease;
}
.bb-resource-card h3 a:hover { color: var(--bb-green-accent); }
.bb-resource-card p {
  color: var(--bb-gray);
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 0;
}

/* Book cards — with thumbnail like other cards */
.bb-book-card h3 { font-style: italic; }

/* Book cover thumbnail — taller ratio for books */
.bb-book-thumb {
  width: 44px;
  height: 60px;
  min-width: 44px;
  background: linear-gradient(160deg, #c8dac4, #b8d0cc);
  border-radius: 3px;
  border: 1px solid var(--bb-border);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bb-book-thumb-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.5rem;
  color: var(--bb-green);
  font-weight: 600;
  text-align: center;
  line-height: 1.2;
  padding: 0 4px;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

/* CTA Footer */
.bb-cta-footer {
  text-align: center;
  padding: 1.25rem 1.5rem;
  background: var(--bb-green-bg-subtle);
  border-radius: 7px;
  border: 1px solid var(--bb-border);
}
.bb-cta-footer p {
  color: var(--bb-text-secondary);
  font-size: 0.87rem;
  margin: 0;
}
.bb-cta-footer a {
  color: var(--bb-green-accent);
  font-weight: 600;
}

/* Desktop */
@media (min-width: 769px) {
  .bb-page-hero { padding: 2.5rem 2.5rem; border-radius: 10px; }
  .bb-page-hero h1 { font-size: 1.65rem; }
  .bb-page-hero p { font-size: 0.93rem; }
  .bb-resource-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .bb-section-head h2 { font-size: 1rem; }
  .bb-cta-footer { padding: 1.5rem 2rem; }
}
@media (min-width: 1024px) {
  .bb-resource-grid { grid-template-columns: repeat(3, 1fr); }
}
</style>

<div class="bb-page-hero">
  <span class="bb-hero-sub">Curated Science Media</span>
  <h1>The Learning Lab</h1>
  <p>Media and resources for exploring biotech: newsletters, podcasts, videos, courses, and books, all hand-picked for quality and accessibility.</p>
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

<!-- NEWSLETTERS -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Newsletters</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-readout.png" alt="The Readout logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.statnews.com/newsletters/" target="_blank">The Readout</a></h3>
        <p>STAT News weekly biotech &amp; pharma roundup, the industry's go-to briefing.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-sciencedaily.png" alt="ScienceDaily logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.sciencedaily.com/newsletters/" target="_blank">ScienceDaily</a></h3>
        <p>Free daily digest of the latest science research across biology, health, medicine, and technology.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-fiercebiotech.png" alt="Fierce Biotech logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.fiercebiotech.com/newsletters" target="_blank">Fierce Biotech</a></h3>
        <p>Industry-focused biotech news covering drug development, clinical trials, and company moves.</p>
      </div>
    </div>
  </div>
</div>

<!-- PODCASTS -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Podcasts</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-shortwave.png" alt="Shortwave logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.npr.org/podcasts/510351/short-wave" target="_blank">Shortwave (NPR)</a></h3>
        <p>Short daily science stories from NPR, accessible, lively, and great for beginners.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-radiolab.png" alt="Radiolab logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.wnycstudios.org/podcasts/radiolab" target="_blank">Radiolab</a></h3>
        <p>Deep-dive storytelling on science and the human experience, covering genetics, ethics, and life itself.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-mindscape.png" alt="Mindscape logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://mindscapepodcast.com/" target="_blank">Mindscape</a></h3>
        <p>Sean Carroll interviews scientists and thinkers about the big ideas in physics, biology, and the universe.</p>
      </div>
    </div>
  </div>
</div>

<!-- BEGINNER READS -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Beginner-Friendly Reads</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <div class="bb-resource-thumb-label">Logo</div>
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.alextelford.com/cells-are-very-small" target="_blank">Cells Are Very Small</a></h3>
        <p>A visual, approachable introduction to cell biology that actually sticks.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-learngenetics.png" alt="Learn.Genetics logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://learn.genetics.utah.edu/" target="_blank">Learn.Genetics</a></h3>
        <p>Interactive genetics tutorials from the University of Utah, thorough and freely available.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-scitable.png" alt="Scitable by Nature logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.nature.com/scitable" target="_blank">Scitable by Nature</a></h3>
        <p>Free science education articles from one of the world's top research journals.</p>
      </div>
    </div>
  </div>
</div>

<!-- YOUTUBE -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>YouTube Channels</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-kurzgesagt.png" alt="Kurzgesagt logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/c/inanutshell" target="_blank">Kurzgesagt</a></h3>
        <p>Animated science explainers; their episodes on genetic engineering and CRISPR are essential viewing.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-teded.png" alt="TED-Ed logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/teded" target="_blank">TED-Ed</a></h3>
        <p>Short, beautifully animated lessons on biology, chemistry, medicine, and science history.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-veritasium.png" alt="Veritasium logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/c/veritasium" target="_blank">Veritasium</a></h3>
        <p>Science and engineering deep dives, thoughtful, well-produced, and always surprising.</p>
      </div>
    </div>
  </div>
</div>

<!-- COURSES -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Online Courses (Free)</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-mitocw.png" alt="MIT OpenCourseWare logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://ocw.mit.edu/courses/biology/" target="_blank">MIT OpenCourseWare: Biology</a></h3>
        <p>Full MIT courses, completely free. Challenging, comprehensive, and the real thing.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-khanacademy.png" alt="Khan Academy logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.khanacademy.org/science/biology" target="_blank">Khan Academy: Biology</a></h3>
        <p>Self-paced, beginner-friendly, and covers everything from cells to evolution.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-ibiology.png" alt="iBiology logo">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.ibiology.org/" target="_blank">iBiology</a></h3>
        <p>Video talks by leading researchers, offering a window into how real scientists think and work.</p>
      </div>
    </div>
  </div>
</div>

<!-- BOOKS -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Books Worth Reading</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <div class="bb-book-thumb-label">Cover</div>
      </div>
      <div class="bb-resource-info">
        <h3>"The Gene" by Siddhartha Mukherjee</h3>
        <p>A sweeping history of genetics, written for a general audience by a Pulitzer-winning author and oncologist.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <div class="bb-book-thumb-label">Cover</div>
      </div>
      <div class="bb-resource-info">
        <h3>"The Immortal Life of Henrietta Lacks"</h3>
        <p>Science, ethics, and race: an essential read on how cell biology intersects with human dignity.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <div class="bb-book-thumb-label">Cover</div>
      </div>
      <div class="bb-resource-info">
        <h3>"Spillover" by David Quammen</h3>
        <p>How infectious diseases jump from animals to humans. Prescient, terrifying, and beautifully written.</p>
      </div>
    </div>
  </div>
</div>

<div class="bb-cta-footer">
  <p>Have a resource to suggest? <a href="/get-involved/">Get in touch</a> and help grow this collection.</p>
</div>
