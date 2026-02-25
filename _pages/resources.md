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
  object-fit: cover;
  padding: 0;
  border-radius: 5px;
  display: block;
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
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.bb-book-thumb img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
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

<!-- NEWSLETTERS -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Newsletters</h2>
  </div>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-readout.png" alt="The Readout logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.statnews.com/newsletters/" target="_blank">The Readout</a></h3>
        <p>STAT News weekly biotech &amp; pharma roundup, the industry's go-to briefing.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-sciencedaily.png" alt="ScienceDaily logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.sciencedaily.com/newsletters/" target="_blank">ScienceDaily</a></h3>
        <p>Free daily digest of the latest science research across biology, health, medicine, and technology.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-fiercebiotech.png" alt="Fierce Biotech logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.fiercebiotech.com/newsletters" target="_blank">Fierce Biotech</a></h3>
        <p>Industry-focused biotech news covering drug development, clinical trials, and company moves.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-wsj.png" alt="Wall Street Journal logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.wsj.com/tech/biotech" target="_blank">Wall Street Journal: Biotech</a></h3>
        <p>Covers biotech stocks, funding rounds, and market-moving clinical trial results. Great for understanding the business side of the industry.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-endpoints.png" alt="Endpoints News logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://endpts.com/" target="_blank">Bio Newsletter by Endpoints News</a></h3>
        <p>Daily biotech news covering drug development, FDA decisions, and company pipelines. Trusted by industry insiders.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-nature.png" alt="Nature logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.nature.com/briefing/signup/" target="_blank">Nature Briefing</a></h3>
        <p>Weekly digest from Nature covering the biggest stories across biology, medicine, and science policy.</p>
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
        <img src="/assets/images/logo-shortwave.png" alt="Shortwave logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.npr.org/podcasts/510351/short-wave" target="_blank">Shortwave (NPR)</a></h3>
        <p>Short daily science stories from NPR, accessible, lively, and great for beginners.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-radiolab.png" alt="Radiolab logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.wnycstudios.org/podcasts/radiolab" target="_blank">Radiolab</a></h3>
        <p>Deep-dive storytelling on science and the human experience, covering genetics, ethics, and life itself.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-mindscape.png" alt="Mindscape logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://mindscapepodcast.com/" target="_blank">Mindscape</a></h3>
        <p>Sean Carroll interviews scientists and thinkers about the big ideas in physics, biology, and the universe.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/hidden-brain.png" alt="Hidden Brain logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://hiddenbrain.org/" target="_blank">Hidden Brain</a></h3>
        <p>Explores the unconscious patterns that drive human behavior — including how scientists think, make decisions, and navigate uncertainty. Surprisingly relevant for anyone in research.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/nature-podcast.png" alt="Nature Podcast logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.nature.com/nature/articles?type=nature-podcast" target="_blank">Nature Podcast</a></h3>
        <p>The weekly podcast from one of the world's most respected scientific journals. Covers breakthrough research, emerging science, and what it means for medicine and society.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-ologies.png" alt="Ologies logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.alieward.com/ologies" target="_blank">Ologies with Alie Ward</a></h3>
        <p>Deep dives into specific scientific fields with the experts who study them. Approachable, funny, and genuinely educational.</p>
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
        <img src="/assets/images/logo-pipeline.png" alt="In the Pipeline logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.science.org/blogs/pipeline" target="_blank">In the Pipeline — Derek Lowe</a></h3>
        <p>A medicinal chemist's honest take on drug discovery, lab failures, and what actually happens inside pharma.</p>
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
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-fortune.png" alt="Fortune logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://fortune.com/2023/03/31/ai-cure-cancer-chatgpt-drug-discovery/" target="_blank">Fortune: "Will AI Cure Cancer?"</a></h3>
        <p>A fascinating look at how artificial intelligence is transforming drug discovery and cancer research — a perfect window into where biotech is heading and why it matters beyond the lab.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-atlantic.png" alt="The Atlantic logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.theatlantic.com/ideas/archive/2021/03/how-mrna-technology-could-change-world/618431/" target="_blank">The Atlantic: How mRNA Technology Could Change the World</a></h3>
        <p>A compelling look at how mRNA technology went from obscure lab research to one of the most important medical breakthroughs in history. Essential reading for understanding the future of medicine.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-wired.png" alt="WIRED logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.wired.com/story/wired-guide-to-crispr/" target="_blank">The WIRED Guide to CRISPR</a></h3>
        <p>WIRED's definitive guide to CRISPR gene editing — how it works, where it came from, and what it means for the future of medicine, agriculture, and life itself.</p>
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
        <img src="/assets/images/logo-kurzgesagt.png" alt="Kurzgesagt logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/c/inanutshell" target="_blank">Kurzgesagt</a></h3>
        <p>Animated science explainers; their episodes on genetic engineering and CRISPR are essential viewing.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-teded.png" alt="TED-Ed logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/teded" target="_blank">TED-Ed</a></h3>
        <p>Short, beautifully animated lessons on biology, chemistry, medicine, and science history.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-veritasium.png" alt="Veritasium logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/c/veritasium" target="_blank">Veritasium</a></h3>
        <p>Science and engineering deep dives, thoughtful, well-produced, and always surprising.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/nvidia-biotech-video.png" alt="Why Nvidia, Google and Microsoft Are Betting Billions on Biotech's AI Future thumbnail" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://youtu.be/Xzw7TXdXYtk" target="_blank">Why Nvidia, Google and Microsoft Are Betting Billions on Biotech's AI Future</a></h3>
        <p>A clear breakdown of why the biggest tech companies are pouring billions into biotech and what it means for the future of the industry.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/birth-of-biotech-video.png" alt="The Birth of Biotech video thumbnail" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/watch?v=naqbi_qVoVY" target="_blank">The Birth of Biotech | Recombinant DNA, Genentech, and Insulin Analogs</a></h3>
        <p>The origin story of the modern biotech industry — how recombinant DNA technology and Genentech changed medicine forever. Essential history for any biotech student.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/jared-friedman-video.png" alt="Jared Friedman video thumbnail" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.youtube.com/watch?v=C1DlZWfI6rk" target="_blank">Jared Friedman — Advice for Hard-tech and Biotech Founders</a></h3>
        <p>YC partner Jared Friedman shares honest advice for anyone building a hard-tech or biotech company. Great perspective on the startup side of the industry.</p>
      </div>
    </div>
  </div>
</div>

<!-- COURSES -->
<div class="bb-resource-section">
  <div class="bb-section-head">
    <h2>Online Courses (Free)</h2>
  </div>
  <p style="font-family: 'Inter', sans-serif; font-size: 0.85rem; color: var(--bb-text-secondary); margin-top: -0.5rem; margin-bottom: 1rem;">From lab fundamentals to data science, regulatory affairs, and industry business skills — all free.</p>
  <div class="bb-resource-grid">
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-mitocw.png" alt="MIT OpenCourseWare logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://ocw.mit.edu/courses/biology/" target="_blank">MIT OpenCourseWare: Biology</a></h3>
        <p>Full MIT courses, completely free. Challenging, comprehensive, and the real thing.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-khanacademy.png" alt="Khan Academy logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.khanacademy.org/science/biology" target="_blank">Khan Academy: Biology</a></h3>
        <p>Self-paced, beginner-friendly, and covers everything from cells to evolution.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-ibiology.png" alt="iBiology logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.ibiology.org/" target="_blank">iBiology</a></h3>
        <p>Video talks by leading researchers, offering a window into how real scientists think and work.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-coursera.png" alt="Coursera logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.coursera.org/specializations/bioinformatics" target="_blank">Coursera: Bioinformatics Specialization (UC San Diego)</a></h3>
        <p>Covers algorithms, genomics, and computational biology. Perfect for students interested in the data and dry lab side of biotech.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-edx.png" alt="edX logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://www.edx.org/" target="_blank">edX: Regulatory Affairs in the Pharmaceutical Industry</a></h3>
        <p>Learn how drugs get approved, how to navigate the FDA, and what regulatory teams actually do day to day.</p>
      </div>
    </div>
    <div class="bb-resource-card">
      <div class="bb-resource-thumb">
        <img src="/assets/images/logo-mitocw.png" alt="MIT OpenCourseWare logo" width="44" height="44">
      </div>
      <div class="bb-resource-info">
        <h3><a href="https://ocw.mit.edu/courses/brain-and-cognitive-sciences/" target="_blank">MIT OpenCourseWare: Biology of Mental Health</a></h3>
        <p>Explores neuroscience, drug development for psychiatric conditions, and the intersection of biotech and mental health. Completely free.</p>
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
        <img src="/assets/images/book-the-gene.jpg" alt="The Gene book cover">
      </div>
      <div class="bb-resource-info">
        <h3>"The Gene" by Siddhartha Mukherjee</h3>
        <p>A sweeping history of genetics, written for a general audience by a Pulitzer-winning author and oncologist.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <img src="/assets/images/book-henrietta-lacks.jpg" alt="The Immortal Life of Henrietta Lacks book cover">
      </div>
      <div class="bb-resource-info">
        <h3>"The Immortal Life of Henrietta Lacks"</h3>
        <p>Science, ethics, and race: an essential read on how cell biology intersects with human dignity.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <img src="/assets/images/book-spillover.png" alt="Spillover book cover">
      </div>
      <div class="bb-resource-info">
        <h3>"Spillover" by David Quammen</h3>
        <p>How infectious diseases jump from animals to humans. Prescient, terrifying, and beautifully written.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <img src="/assets/images/book-sapiens.png" alt="Sapiens book cover">
      </div>
      <div class="bb-resource-info">
        <h3>"Sapiens" by Yuval Noah Harari</h3>
        <p>A sweeping history of humankind that puts biology, medicine, and biotechnology in deep historical context. Essential reading for understanding why biotech matters.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <img src="/assets/images/book-feynman.png" alt="Surely You're Joking Mr. Feynman book cover">
      </div>
      <div class="bb-resource-info">
        <h3>"Surely You're Joking, Mr. Feynman!" by Richard Feynman</h3>
        <p>A Nobel Prize-winning physicist's memoir about curiosity, experimentation, and what it means to think like a scientist. Surprisingly funny and genuinely inspiring.</p>
      </div>
    </div>
    <div class="bb-resource-card bb-book-card">
      <div class="bb-book-thumb">
        <img src="/assets/images/book-selfish-gene.png" alt="The Selfish Gene book cover">
      </div>
      <div class="bb-resource-info">
        <h3>"The Selfish Gene" by Richard Dawkins</h3>
        <p>A foundational text in evolutionary biology that reshaped how scientists think about genes, behavior, and life itself. Challenging but rewarding.</p>
      </div>
    </div>
  </div>
</div>

<div class="bb-cta-footer">
  <p>Have a resource to suggest? <a href="/get-involved/">Get in touch</a> and help grow this collection.</p>
</div>
