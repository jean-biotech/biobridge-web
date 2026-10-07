---
layout: splash
title: "The Learning Lab"
permalink: /resources/
---

<style>
/* ================================================================
   THE LEARNING LAB (/resources/)
   Shared pieces (page header, sections, jump links, buttons) come
   from assets/css/biobridge.css. These are the parts only this page
   uses: the resource lists and the bookshelf.
   ================================================================ */

/* ---------- Groups: one heading and list per kind of media ---------- */

.bb-resources .bb-res-group + .bb-res-group {
  margin-top: 4.5rem;
}

.bb-resources .bb-res-group .bb-section-head {
  margin-bottom: 1.5rem;
}

/* ---------- Resource list: logo, name, and a line on what it is ---------- */

.bb-resources .bb-res-list {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 2px solid var(--bb-green);
}

.bb-resources .bb-res {
  position: relative;
  display: grid;
  grid-template-columns: 44px minmax(0, 1fr);
  grid-template-areas:
    "logo name"
    "logo text";
  column-gap: 1rem;
  align-items: start;
  align-content: start;
  margin: 0;
  padding: 1.1rem 0 1.25rem;
  border-top: 1px solid var(--bb-line);
}

.bb-resources .bb-res:first-child {
  border-top: 0;
}

/* Logos come in mixed styles; a fixed frame keeps the column tidy */
.bb-resources .bb-res-logo {
  grid-area: logo;
  display: block;
  width: 44px;
  height: 44px;
  object-fit: contain;
  background: #fff;
  border: 1px solid var(--bb-line);
  border-radius: 6px;
}

.bb-resources .bb-res-name {
  grid-area: name;
  font-size: 1.2rem;
  line-height: 1.3;
}

.bb-resources .bb-res-name a {
  color: var(--bb-ink);
  text-decoration: none;
}

/* The whole row is clickable; the name stays the link text */
.bb-resources .bb-res-name a::after {
  content: "";
  position: absolute;
  inset: 0;
}

.bb-resources .bb-res:hover .bb-res-name a,
.bb-resources .bb-res-name a:focus-visible {
  color: var(--bb-green);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
}

.bb-resources .bb-res-text {
  grid-area: text;
  margin-top: 0.3rem;
  font-size: 1.05rem;
  line-height: 1.55;
}

/* Keeps a hyphenated word in a title from breaking across lines */
.bb-resources .bb-nowrap {
  white-space: nowrap;
}

/* ---------- Bookshelf ---------- */

.bb-resources .bb-books {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 2.25rem 3rem;
}

.bb-resources .bb-book {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  column-gap: 1.25rem;
  align-items: start;
  margin: 0;
}

.bb-resources .bb-book-cover {
  display: block;
  width: 88px;
  height: auto;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(246, 241, 230, 0.14), 0 10px 22px rgba(0, 0, 0, 0.28);
}

.bb-resources .bb-book h3 {
  font-size: 1.25rem;
  line-height: 1.3;
  font-style: italic;
}

.bb-resources .bb-book-author {
  margin-top: 0.2rem;
  font-size: 1rem;
}

.bb-resources .bb-book-text {
  margin-top: 0.6rem;
  font-size: 1.05rem;
  line-height: 1.55;
}

/* ---------- Next step ---------- */

.bb-resources .bb-res-next p {
  margin-top: 0.75rem;
  font-size: 1.15rem;
}

/* ---------- Wider screens ---------- */

@media (min-width: 700px) {
  .bb-resources .bb-res-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 3rem;
  }

  .bb-resources .bb-res {
    padding: 1.25rem 0 1.4rem;
  }

  .bb-resources .bb-res:nth-child(2) {
    border-top: 0;
  }

  .bb-resources .bb-books {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .bb-resources .bb-book {
    grid-template-columns: 104px minmax(0, 1fr);
    column-gap: 1.5rem;
  }

  .bb-resources .bb-book-cover {
    width: 104px;
  }
}
</style>

<div class="bb-page bb-resources">

<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap">
    <p class="bb-kicker">Resources</p>
    <h1>The <em>Learning</em> Lab</h1>
    <p class="bb-lede">Newsletters, podcasts, videos, courses, and books for exploring biotech, all hand-picked for quality and accessibility.</p>
    <ul class="bb-jumpnav" aria-label="On this page">
      <li><a data-scroll-ignore href="#newsletters">Newsletters</a></li>
      <li><a data-scroll-ignore href="#podcasts">Podcasts</a></li>
      <li><a data-scroll-ignore href="#reads">Beginner-friendly reads</a></li>
      <li><a data-scroll-ignore href="#youtube">YouTube channels</a></li>
      <li><a data-scroll-ignore href="#courses">Free courses</a></li>
      <li><a data-scroll-ignore href="#books">Books</a></li>
    </ul>
  </div>
</header>

<div class="bb-section">
  <div class="bb-wrap">

    <!-- Newsletters -->
    <section class="bb-res-group" id="newsletters">
      <div class="bb-section-head">
        <h2>Newsletters</h2>
      </div>
      <ul class="bb-res-list">
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-readout.png" alt="" width="40" height="40">
          <h3 class="bb-res-name"><a href="https://www.statnews.com/newsletters/" target="_blank" rel="noopener">The Readout</a></h3>
          <p class="bb-res-text">A weekly biotech and pharma roundup from STAT News, the industry's go-to briefing.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-sciencedaily.png" alt="" width="40" height="40">
          <h3 class="bb-res-name"><a href="https://www.sciencedaily.com/newsletters/" target="_blank" rel="noopener">ScienceDaily</a></h3>
          <p class="bb-res-text">Free daily digest of the latest science research across biology, health, medicine, and technology.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-fiercebiotech.png" alt="" width="40" height="40">
          <h3 class="bb-res-name"><a href="https://www.fiercebiotech.com/newsletters" target="_blank" rel="noopener">Fierce Biotech</a></h3>
          <p class="bb-res-text">Industry-focused biotech news covering drug development, clinical trials, and company moves.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-wsj.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.wsj.com/tech/biotech" target="_blank" rel="noopener">Wall Street Journal: Biotech</a></h3>
          <p class="bb-res-text">Covers biotech stocks, funding rounds, and market-moving clinical trial results. Great for understanding the business side of the industry.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-endpoints.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://endpts.com/" target="_blank" rel="noopener">Bio Newsletter by Endpoints News</a></h3>
          <p class="bb-res-text">Daily biotech news covering drug development, FDA decisions, and company pipelines. Trusted by industry insiders.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-nature.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.nature.com/briefing/signup/" target="_blank" rel="noopener">Nature Briefing</a></h3>
          <p class="bb-res-text">Weekly digest from Nature covering the biggest stories across biology, medicine, and science policy.</p>
        </li>
      </ul>
    </section>

    <!-- Podcasts -->
    <section class="bb-res-group" id="podcasts">
      <div class="bb-section-head">
        <h2>Podcasts</h2>
      </div>
      <ul class="bb-res-list">
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-shortwave.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.npr.org/podcasts/510351/short-wave" target="_blank" rel="noopener">Shortwave (NPR)</a></h3>
          <p class="bb-res-text">Short daily science stories from NPR: accessible, lively, and great for beginners.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-radiolab.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.wnycstudios.org/podcasts/radiolab" target="_blank" rel="noopener">Radiolab</a></h3>
          <p class="bb-res-text">Deep-dive storytelling on science and the human experience, covering genetics, ethics, and life itself.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-mindscape.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://mindscapepodcast.com/" target="_blank" rel="noopener">Mindscape</a></h3>
          <p class="bb-res-text">Sean Carroll interviews scientists and thinkers about the big ideas in physics, biology, and the universe.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/hidden-brain.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://hiddenbrain.org/" target="_blank" rel="noopener">Hidden Brain</a></h3>
          <p class="bb-res-text">Explores the unconscious patterns that drive human behavior, including how scientists think, make decisions, and navigate uncertainty. Surprisingly relevant for anyone in research.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/nature-podcast.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.nature.com/nature/articles?type=nature-podcast" target="_blank" rel="noopener">Nature Podcast</a></h3>
          <p class="bb-res-text">The weekly podcast from one of the world's most respected scientific journals. Covers breakthrough research, emerging science, and what it means for medicine and society.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-ologies.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.alieward.com/ologies" target="_blank" rel="noopener">Ologies with Alie Ward</a></h3>
          <p class="bb-res-text">Deep dives into specific scientific fields with the experts who study them. Approachable, funny, and genuinely educational.</p>
        </li>
      </ul>
    </section>

    <!-- Beginner-friendly reads -->
    <section class="bb-res-group" id="reads">
      <div class="bb-section-head">
        <h2>Beginner-friendly reads</h2>
      </div>
      <ul class="bb-res-list">
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-pipeline.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.science.org/blogs/pipeline" target="_blank" rel="noopener">In the Pipeline by Derek Lowe</a></h3>
          <p class="bb-res-text">A medicinal chemist's honest take on drug discovery, lab failures, and what actually happens inside pharma.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-learngenetics.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://learn.genetics.utah.edu/" target="_blank" rel="noopener">Learn.Genetics</a></h3>
          <p class="bb-res-text">Interactive genetics tutorials from the University of Utah, thorough and freely available.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-scitable.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.nature.com/scitable" target="_blank" rel="noopener">Scitable by Nature</a></h3>
          <p class="bb-res-text">Free science education articles from one of the world's top research journals.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-fortune.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://fortune.com/2023/03/31/ai-cure-cancer-chatgpt-drug-discovery/" target="_blank" rel="noopener">Fortune: "Will AI Cure Cancer?"</a></h3>
          <p class="bb-res-text">A fascinating look at how artificial intelligence is transforming drug discovery and cancer research, and a perfect window into where biotech is heading and why it matters beyond the lab.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-atlantic.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.theatlantic.com/ideas/archive/2021/03/how-mrna-technology-could-change-world/618431/" target="_blank" rel="noopener">The Atlantic: How mRNA Technology Could Change the World</a></h3>
          <p class="bb-res-text">A compelling look at how mRNA technology went from obscure lab research to one of the most important medical breakthroughs in history. Essential reading for understanding the future of medicine.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-wired.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.wired.com/story/wired-guide-to-crispr/" target="_blank" rel="noopener">The WIRED Guide to CRISPR</a></h3>
          <p class="bb-res-text">WIRED's definitive guide to CRISPR gene editing: how it works, where it came from, and what it means for the future of medicine, agriculture, and life itself.</p>
        </li>
      </ul>
    </section>

    <!-- YouTube -->
    <section class="bb-res-group" id="youtube">
      <div class="bb-section-head">
        <h2>YouTube channels</h2>
      </div>
      <ul class="bb-res-list">
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-kurzgesagt.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.youtube.com/c/inanutshell" target="_blank" rel="noopener">Kurzgesagt</a></h3>
          <p class="bb-res-text">Animated science explainers; their episodes on genetic engineering and CRISPR are essential viewing.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-teded.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.youtube.com/teded" target="_blank" rel="noopener">TED-Ed</a></h3>
          <p class="bb-res-text">Short, beautifully animated lessons on biology, chemistry, medicine, and science history.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-veritasium.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.youtube.com/c/veritasium" target="_blank" rel="noopener">Veritasium</a></h3>
          <p class="bb-res-text">Science and engineering deep dives: thoughtful, well-produced, and always surprising.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/nvidia-biotech-video.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://youtu.be/Xzw7TXdXYtk" target="_blank" rel="noopener">Why Nvidia, Google and Microsoft Are Betting Billions on Biotech's AI Future</a></h3>
          <p class="bb-res-text">A clear breakdown of why the biggest tech companies are pouring billions into biotech and what it means for the future of the industry.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/birth-of-biotech-video.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.youtube.com/watch?v=naqbi_qVoVY" target="_blank" rel="noopener">The Birth of Biotech: Recombinant DNA, Genentech, and Insulin Analogs</a></h3>
          <p class="bb-res-text">The origin story of the modern biotech industry: how recombinant DNA technology and Genentech changed medicine forever. Essential history for any biotech student.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/jared-friedman-video.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.youtube.com/watch?v=C1DlZWfI6rk" target="_blank" rel="noopener">Jared Friedman: Advice for <span class="bb-nowrap">Hard-tech</span> and Biotech Founders</a></h3>
          <p class="bb-res-text">YC partner Jared Friedman shares honest advice for anyone building a hard-tech or biotech company. Great perspective on the startup side of the industry.</p>
        </li>
      </ul>
    </section>

    <!-- Courses -->
    <section class="bb-res-group" id="courses">
      <div class="bb-section-head">
        <h2>Free online courses</h2>
        <p>From lab fundamentals to data science, regulatory affairs, and industry business skills, all free.</p>
      </div>
      <ul class="bb-res-list">
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-mitocw.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://ocw.mit.edu/courses/biology/" target="_blank" rel="noopener">MIT OpenCourseWare: Biology</a></h3>
          <p class="bb-res-text">Full MIT courses, completely free. Challenging, comprehensive, and the real thing.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-khanacademy.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.khanacademy.org/science/biology" target="_blank" rel="noopener">Khan Academy: Biology</a></h3>
          <p class="bb-res-text">Self-paced, beginner-friendly, and covers everything from cells to evolution.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-ibiology.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.ibiology.org/" target="_blank" rel="noopener">iBiology</a></h3>
          <p class="bb-res-text">Video talks by leading researchers, offering a window into how real scientists think and work.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-coursera.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.coursera.org/specializations/bioinformatics" target="_blank" rel="noopener">Coursera: Bioinformatics Specialization (UC San Diego)</a></h3>
          <p class="bb-res-text">Covers algorithms, genomics, and computational biology. Perfect for students interested in the data and dry lab side of biotech.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-edx.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://www.edx.org/" target="_blank" rel="noopener">edX: Regulatory Affairs in the Pharmaceutical Industry</a></h3>
          <p class="bb-res-text">Learn how drugs get approved, how to navigate the FDA, and what regulatory teams actually do day to day.</p>
        </li>
        <li class="bb-res">
          <img class="bb-res-logo" src="/assets/images/logo-mitocw.png" alt="" width="40" height="40" loading="lazy">
          <h3 class="bb-res-name"><a href="https://ocw.mit.edu/courses/brain-and-cognitive-sciences/" target="_blank" rel="noopener">MIT OpenCourseWare: Biology of Mental Health</a></h3>
          <p class="bb-res-text">Explores neuroscience, drug development for psychiatric conditions, and the intersection of biotech and mental health. Completely free.</p>
        </li>
      </ul>
    </section>

  </div>
</div>

<!-- Books -->
<section class="bb-section bb-band bb-band--forest" id="books">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Books worth reading</h2>
    </div>
    <ul class="bb-books">
      <li class="bb-book">
        <img class="bb-book-cover" src="/assets/images/book-the-gene-300.jpg" alt="" width="300" height="400" loading="lazy">
        <div>
          <h3>The Gene</h3>
          <p class="bb-book-author">Siddhartha Mukherjee</p>
          <p class="bb-book-text">A sweeping history of genetics, written for a general audience by a Pulitzer-winning author and oncologist.</p>
        </div>
      </li>
      <li class="bb-book">
        <img class="bb-book-cover" src="/assets/images/book-henrietta-lacks-300.jpg" alt="" width="300" height="400" loading="lazy">
        <div>
          <h3>The Immortal Life of Henrietta Lacks</h3>
          <p class="bb-book-text">Science, ethics, and race: an essential read on how cell biology intersects with human dignity.</p>
        </div>
      </li>
      <li class="bb-book">
        <img class="bb-book-cover" src="/assets/images/book-spillover-300.jpg" alt="" width="300" height="400" loading="lazy">
        <div>
          <h3>Spillover</h3>
          <p class="bb-book-author">David Quammen</p>
          <p class="bb-book-text">How infectious diseases jump from animals to humans. Prescient, terrifying, and beautifully written.</p>
        </div>
      </li>
      <li class="bb-book">
        <img class="bb-book-cover" src="/assets/images/book-sapiens-300.jpg" alt="" width="300" height="400" loading="lazy">
        <div>
          <h3>Sapiens</h3>
          <p class="bb-book-author">Yuval Noah Harari</p>
          <p class="bb-book-text">A sweeping history of humankind that puts biology, medicine, and biotechnology in deep historical context. Essential reading for understanding why biotech matters.</p>
        </div>
      </li>
      <li class="bb-book">
        <img class="bb-book-cover" src="/assets/images/book-feynman-300.jpg" alt="" width="300" height="400" loading="lazy">
        <div>
          <h3>Surely You're Joking, Mr. Feynman!</h3>
          <p class="bb-book-author">Richard Feynman</p>
          <p class="bb-book-text">A Nobel Prize-winning physicist's memoir about curiosity, experimentation, and what it means to think like a scientist. Surprisingly funny and genuinely inspiring.</p>
        </div>
      </li>
      <li class="bb-book">
        <img class="bb-book-cover" src="/assets/images/book-selfish-gene-300.jpg" alt="" width="300" height="400" loading="lazy">
        <div>
          <h3>The Selfish Gene</h3>
          <p class="bb-book-author">Richard Dawkins</p>
          <p class="bb-book-text">A foundational text in evolutionary biology that reshaped how scientists think about genes, behavior, and life itself. Challenging but rewarding.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<!-- Next step -->
<section class="bb-section bb-band bb-band--cream bb-res-next">
  <div class="bb-wrap">
    <h2>Have a resource to suggest?</h2>
    <p>Get in touch and help grow this collection.</p>
    <div class="bb-actions">
      <a class="bb-button" href="/get-involved/">Suggest a resource</a>
    </div>
  </div>
</section>

</div>
