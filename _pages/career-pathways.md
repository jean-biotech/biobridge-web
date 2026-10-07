---
layout: splash
title: "Career Pathways"
permalink: /career-pathways/
---

<style>
/* ================================================================
   CAREERS
   Shared pieces (type, bands, facts, tags, cards, index) come from
   assets/css/biobridge.css. These are the parts only this page uses.
   ================================================================ */

/* No one-word last lines in running text (where browsers support it) */
.bb-careers p,
.bb-careers dd,
.bb-careers li {
  text-wrap: pretty;
}

/* The theme shrinks every <dd> to .75em; keep fact values full size */
.bb-careers .bb-facts dd {
  font-size: 1em;
}

/* Keeps a number range such as 15–20 on one line */
.bb-careers .bb-nowrap {
  white-space: nowrap;
}

/* A qualifier in a fact label, such as "(if requested)", wraps as a unit */
.bb-careers .bb-facts dt span {
  font-weight: 400;
  color: var(--bb-muted);
  white-space: nowrap;
}

/* ---------- Page header: title on the left, the seven paths on the right ---------- */

.bb-careers .bb-careers-head {
  display: grid;
  gap: 2.5rem;
}

.bb-careers .bb-toc-label {
  font-size: 0.95rem;
  color: var(--bb-muted);
  margin-bottom: 0.5rem;
}

.bb-careers .bb-toc ul {
  list-style: none;
  margin: 0;
  padding: 0;
  border-top: 1px solid var(--bb-cream-line);
}

.bb-careers .bb-toc li {
  margin: 0;
  border-bottom: 1px solid var(--bb-cream-line);
}

.bb-careers .bb-toc a {
  display: block;
  padding: 0.6rem 0;
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: 1.2rem;
  line-height: 1.3;
  color: var(--bb-ink);
  text-decoration: none;
}

.bb-careers .bb-toc a:hover {
  color: var(--bb-green);
  text-decoration: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 0.18em;
}

/* ---------- Rows: a title on the left, the details on the right ---------- */

.bb-careers .bb-row {
  display: grid;
  gap: 1.25rem;
  border-top: 2px solid var(--bb-green);
  padding: 1.25rem 0 3rem;
}

.bb-careers .bb-row:last-child {
  padding-bottom: 0;
}

.bb-careers .bb-row-lead {
  margin-top: 0.75rem;
  font-size: 1.15rem;
  line-height: 1.55;
  max-width: 30em;
}

/* ---------- The seven paths ---------- */

.bb-careers .bb-path h2 {
  font-size: clamp(1.6rem, 1.35rem + 0.8vw, 2rem);
}

.bb-careers .bb-roles {
  list-style: none;
  margin: 0;
  padding: 0;
}

.bb-careers .bb-roles li {
  margin: 0 0 0.2rem;
}

.bb-careers .bb-roles span {
  color: var(--bb-muted);
}

.bb-careers .bb-facts .bb-tags {
  margin-top: 0.2rem;
}

/* A quieter closing row for readers outside the US */
.bb-careers .bb-row.bb-intl {
  border-top: 1px solid var(--bb-line);
}

.bb-careers .bb-intl h2 {
  font-size: 1.45rem;
  line-height: 1.25;
}

.bb-careers .bb-intl p {
  max-width: 36em;
}

/* ---------- Finding your first internship ---------- */

.bb-careers .bb-programs {
  display: grid;
  gap: 1.75rem;
}

.bb-careers .bb-programs h4 {
  margin-bottom: 0.6rem;
}

.bb-careers .bb-plug {
  margin-top: 1.75rem;
}

.bb-careers .bb-card h4 {
  font-family: var(--bb-serif);
  font-size: 1.3rem;
  line-height: 1.25;
}

.bb-careers .bb-card .bb-muted {
  margin: 0.2rem 0 0.75rem;
}

.bb-careers .bb-card h4 + p:not(.bb-muted) {
  margin-top: 0.75rem;
}

.bb-careers .bb-tips {
  margin: 0;
  padding-left: 1.25em;
}

.bb-careers .bb-tips li {
  margin: 0 0 0.75rem;
}

.bb-careers .bb-tips li:last-child {
  margin-bottom: 0;
}

.bb-careers .bb-tips li::marker {
  color: var(--bb-green);
}

/* ---------- Where biotech is heading ---------- */

.bb-careers .bb-trends {
  display: grid;
  column-gap: 3rem;
}

.bb-careers .bb-trends article {
  border-top: 2px solid var(--bb-green);
  padding: 1.1rem 0 2.75rem;
}

.bb-careers .bb-trends h3 {
  margin-bottom: 0.75rem;
}

.bb-careers .bb-trends p {
  font-size: 1.05rem;
  line-height: 1.65;
}

.bb-careers .bb-trends p + p {
  margin-top: 0.9rem;
}

/* The forest feature on AI and lab work */
.bb-careers .bb-feature {
  display: grid;
  gap: 1.75rem;
}

.bb-careers .bb-feature-text p {
  font-size: 1.15rem;
  line-height: 1.7;
  max-width: 36em;
}

.bb-careers .bb-feature-text p + p {
  margin-top: 1.1em;
}

.bb-careers .bb-feature-text .bb-feature-link {
  margin-top: 1.5rem;
}

/* ---------- Wider screens ---------- */

/* Three cards in a two-column grid: let the last one take the full row */
@media (min-width: 640px) and (max-width: 999px) {
  .bb-careers .bb-cards--3 > :last-child:nth-child(odd) {
    grid-column: 1 / -1;
  }
}

@media (min-width: 700px) {
  /* A little wider than the shared 11rem so labels such as
     "University career center" stay on one line */
  .bb-careers .bb-facts > div {
    grid-template-columns: 12rem minmax(0, 1fr);
  }

  .bb-careers .bb-trends {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  /* Three short links fit on one row from tablet width up */
  .bb-careers .bb-next .bb-index {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (min-width: 900px) {
  .bb-careers .bb-careers-head {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
    gap: 4rem;
    align-items: center;
  }

  .bb-careers .bb-row {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.8fr);
    column-gap: 4rem;
    padding: 1.5rem 0 3.5rem;
  }

  .bb-careers .bb-row--wide {
    grid-template-columns: minmax(0, 1fr);
  }

  .bb-careers .bb-feature {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1.8fr);
    column-gap: 4rem;
  }
}
</style>

<!-- data-scroll-ignore: the theme's scroll script lands links under the sticky
     header; ignoring it lets the browser use scroll-margin-top instead -->
<div class="bb-page bb-careers" data-scroll-ignore>

<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap bb-careers-head">
    <div>
      <p class="bb-kicker">Careers</p>
      <h1>There's no <em>single</em> path into biotech</h1>
      <p class="bb-lede">Here are the seven major routes into the field, with realistic entry points for every background, plus a practical guide to <a href="#internship">landing your first internship</a>.</p>
    </div>
    <nav class="bb-toc" aria-labelledby="toc-label">
      <p class="bb-toc-label" id="toc-label">The seven paths</p>
      <ul>
        <li><a href="#research">Research</a></li>
        <li><a href="#manufacturing">Industry &amp; manufacturing</a></li>
        <li><a href="#clinical">Clinical</a></li>
        <li><a href="#regulatory">Regulatory &amp; policy</a></li>
        <li><a href="#business">Business &amp; operations</a></li>
        <li><a href="#science-communication">Science communication</a></li>
        <li><a href="#bioinformatics">Bioinformatics &amp; computational biology</a></li>
      </ul>
    </nav>
  </div>
</header>

<!-- The seven paths -->
<section class="bb-section" id="paths">
  <div class="bb-wrap">

    <article class="bb-row bb-path" id="research">
      <div>
        <h2>Research</h2>
        <p class="bb-row-lead">Discovering new knowledge, developing therapies, and studying biological systems at the molecular and cellular level.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Universities, research institutes, pharmaceutical companies, government labs (NIH, CDC).</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Lab technician <span>(Bachelor's degree)</span></li>
              <li>Research associate <span>(Bachelor's + experience)</span></li>
              <li>PhD scientist <span>(for independent research leads)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Experimental design, data analysis, patience, intellectual curiosity.</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>Genentech</li>
              <li>NIH</li>
              <li>Pfizer</li>
              <li>Broad Institute</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <article class="bb-row bb-path" id="manufacturing">
      <div>
        <h2>Industry &amp; manufacturing</h2>
        <p class="bb-row-lead">Scaling up production, quality control, and process optimization: turning lab discoveries into real-world products.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Biotech companies, pharmaceutical manufacturers, contract manufacturing organizations (CMOs).</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Manufacturing associate <span>(High school + training)</span></li>
              <li>Process engineer <span>(Bachelor's in engineering)</span></li>
              <li>Quality assurance specialist <span>(Bachelor's in science)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Attention to detail, problem-solving, regulatory knowledge (GMP, GLP).</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>Lonza</li>
              <li>Thermo Fisher</li>
              <li>Amgen</li>
              <li>Catalent</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <article class="bb-row bb-path" id="clinical">
      <div>
        <h2>Clinical</h2>
        <p class="bb-row-lead">Testing therapies in humans, managing clinical trials, and ensuring patient safety throughout the drug development process.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Hospitals, clinical research organizations (CROs), pharmaceutical companies.</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Clinical research coordinator <span>(Bachelor's)</span></li>
              <li>Clinical trial manager <span>(Bachelor's + experience)</span></li>
              <li>Medical science liaison <span>(Advanced degree)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Organization, communication, ethics, regulatory compliance (FDA, ICH guidelines).</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>IQVIA</li>
              <li>Covance</li>
              <li>Johnson &amp; Johnson</li>
              <li>Medpace</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <article class="bb-row bb-path" id="regulatory">
      <div>
        <h2>Regulatory &amp; policy</h2>
        <p class="bb-row-lead">Navigating FDA approval, ensuring compliance, and shaping public health policy at the bridge between science and government.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Government agencies (FDA, NIH, EPA), consulting firms, pharmaceutical and biotech companies.</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Regulatory affairs specialist <span>(Bachelor's)</span></li>
              <li>Policy analyst <span>(Bachelor's in science or policy)</span></li>
              <li>Compliance officer <span>(Bachelor's + certifications)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Writing, attention to detail, deep understanding of regulations and policy processes.</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>FDA</li>
              <li>Roche</li>
              <li>Merck</li>
              <li>PAREXEL</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <article class="bb-row bb-path" id="business">
      <div>
        <h2>Business &amp; operations</h2>
        <p class="bb-row-lead">Strategy, partnerships, operations, and project management: the business side of bringing biotech innovations to market.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Biotech startups, consulting firms, venture capital firms, established pharma companies.</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Business analyst <span>(Bachelor's in business or science)</span></li>
              <li>Project manager <span>(Bachelor's + experience)</span></li>
              <li>Sales representative <span>(Bachelor's)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Communication, business acumen, strategic thinking, networking.</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>Gilead</li>
              <li>BCG</li>
              <li>Vertex</li>
              <li>Flagship Pioneering</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <article class="bb-row bb-path" id="science-communication">
      <div>
        <h2>Science communication</h2>
        <p class="bb-row-lead">Translating complex science for public audiences through journalism, education, content creation, and advocacy.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Media outlets, nonprofits, science museums, biotech marketing teams.</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Science writer <span>(Bachelor's + writing portfolio)</span></li>
              <li>Public engagement coordinator <span>(Bachelor's)</span></li>
              <li>Medical communications specialist <span>(Bachelor's + experience)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Writing, storytelling, scientific literacy, ability to simplify complexity without losing accuracy.</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>STAT News</li>
              <li>NIH Communications</li>
              <li>Ology</li>
              <li>Science Friday</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <article class="bb-row bb-path" id="bioinformatics">
      <div>
        <h2>Bioinformatics &amp; computational biology</h2>
        <p class="bb-row-lead">Using coding, statistics, and algorithms to analyze biological data: genomics, proteomics, drug discovery, and more.</p>
      </div>
      <dl class="bb-facts">
        <div>
          <dt>Where you'll work</dt>
          <dd>Biotech and pharma companies, academic research labs, hospitals, government agencies (NIH, FDA), and tech companies entering healthcare.</dd>
        </div>
        <div>
          <dt>Entry points</dt>
          <dd>
            <ul class="bb-roles">
              <li>Bioinformatics analyst <span>(Bachelor's in CS, biology, or bioinformatics)</span></li>
              <li>Data scientist in biotech <span>(Bachelor's + Python/R skills)</span></li>
              <li>Computational biologist <span>(Master's or PhD for research-focused roles)</span></li>
            </ul>
          </dd>
        </div>
        <div>
          <dt>Skills needed</dt>
          <dd>Python, R, SQL, statistics, genomics tools (BLAST, Galaxy, GATK), and comfort with large datasets.</dd>
        </div>
        <div>
          <dt>Example organizations</dt>
          <dd>
            <ul class="bb-tags">
              <li>23andMe</li>
              <li>Illumina</li>
              <li>Broad Institute</li>
              <li>DNAnexus</li>
            </ul>
          </dd>
        </div>
      </dl>
    </article>

    <aside class="bb-row bb-intl" id="outside-the-us">
      <h2>Outside the US?</h2>
      <p>Biotech is structured differently in other countries. Europe and Asia have more publicly funded research conducted through universities and government institutes, with fewer venture-backed startups than you'd find in Boston or the Bay Area. In the UK, Germany, and the Netherlands, many biotech roles are embedded within academic medical centers or government research councils. If you're outside the US, look for roles with national research institutes (for example, the Wellcome Sanger Institute, EMBL, or RIKEN in Japan) alongside commercial opportunities.</p>
    </aside>

  </div>
</section>

<!-- Finding your first internship -->
<section class="bb-section bb-band bb-band--cream" id="internship">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Finding your first internship</h2>
      <p>Your first biotech internship doesn't need to be at Pfizer. It needs to get you in the room. Here's a practical guide to the process, from well-known formal programs to cold outreach to academic labs.</p>
    </div>

    <div class="bb-row">
      <div>
        <h3>Well-known programs to apply to</h3>
        <p class="bb-row-lead">These are competitive but well worth applying to. They're structured, paid, and recognized by hiring managers.</p>
        <p class="bb-row-lead">Check each company's careers page directly. Most open applications between October and February for summer positions.</p>
      </div>
      <div class="bb-programs">
        <div>
          <h4>Research, pharma &amp; biotech</h4>
          <ul class="bb-tags">
            <li>Pfizer Summer Internship</li>
            <li>Genentech SURGE</li>
            <li>Amgen Scholars</li>
            <li>AstraZeneca Internship</li>
            <li>Merck Internship</li>
            <li>J&amp;J Intern Program</li>
            <li>Eli Lilly Summer Internship</li>
            <li>AbbVie Internship</li>
            <li>BMS Discovery Fellowship</li>
            <li>Regeneron Internship</li>
            <li>Moderna Internship</li>
            <li>Abbott Internship</li>
          </ul>
        </div>
        <div>
          <h4>Consulting &amp; life sciences strategy</h4>
          <ul class="bb-tags">
            <li>Simon-Kucher &amp; Partners</li>
            <li>Clearview Healthcare Partners</li>
            <li>L.E.K. Consulting</li>
            <li>ZS Associates</li>
            <li>Putnam Associates</li>
            <li>Analysis Group</li>
            <li>Guidehouse Life Sciences</li>
            <li>Huron Consulting</li>
            <li>Avalere Health</li>
            <li>IQVIA Consulting</li>
          </ul>
        </div>
        <div>
          <h4>Government &amp; academic</h4>
          <ul class="bb-tags">
            <li>NIH Summer Internship Program</li>
            <li>NSF REU</li>
            <li>FDA Commissioner's Fellowship</li>
            <li>CDC Public Health Associate Program</li>
            <li>NCI Cancer Research Internship</li>
          </ul>
        </div>
        <div>
          <h4>Medical devices &amp; diagnostics</h4>
          <ul class="bb-tags">
            <li>Medtronic Internship</li>
            <li>Boston Scientific Internship</li>
            <li>Abbott Diagnostics</li>
            <li>Becton Dickinson</li>
            <li>Illumina Internship</li>
            <li>Thermo Fisher Internship</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="bb-row">
      <h3>Application timeline</h3>
      <dl class="bb-facts">
        <div>
          <dt>August–October <span>(fall)</span></dt>
          <dd>Start researching programs. Update your resume. Identify <span class="bb-nowrap">15–20</span> target programs and companies.</dd>
        </div>
        <div>
          <dt>October–December</dt>
          <dd>Major pharma/biotech applications open. Apply early: most use rolling review.</dd>
        </div>
        <div>
          <dt>January–February</dt>
          <dd>Academic lab programs (REU, NIH SIP) open, and startup internship postings spike on LinkedIn. This is also when you should start hearing back from fall applications to major pharma programs. Responses typically take <span class="bb-nowrap">8–12</span> weeks, so don't panic if your inbox is still quiet.</dd>
        </div>
        <div>
          <dt>March–April</dt>
          <dd>Follow-up and interviews. Smaller companies often post well into spring.</dd>
        </div>
        <div>
          <dt>May–June</dt>
          <dd>Last-minute opportunities. Keep checking even if you haven't heard back from early applications.</dd>
        </div>
      </dl>
    </div>

    <div class="bb-row">
      <h3>What to include in your application</h3>
      <div>
        <dl class="bb-facts">
          <div>
            <dt>Resume</dt>
            <dd>1 page, reverse chronological, tailored to each role. Lead with relevant coursework and skills if you don't yet have experience.</dd>
          </div>
          <div>
            <dt>Cover letter</dt>
            <dd>Short (3 paragraphs). Why this company, why this role, what you bring. Skip generic openers.</dd>
          </div>
          <div>
            <dt>Research statement <span>(for academic labs)</span></dt>
            <dd><span class="bb-nowrap">1–2</span> paragraphs on your interests and what you hope to learn.</dd>
          </div>
          <div>
            <dt>References</dt>
            <dd>Have <span class="bb-nowrap">2–3</span> professors or supervisors ready. Ask them in advance.</dd>
          </div>
          <div>
            <dt>Writing sample <span>(if requested)</span></dt>
            <dd>A lab report, class paper, or anything that demonstrates your ability to communicate science clearly.</dd>
          </div>
        </dl>
        <p class="bb-note bb-plug">Want real examples? <a href="/products/">The Biotech Blueprint</a> includes annotated resume samples, cover letter templates, and cold email scripts built specifically for biotech applications. If you want to see what a strong application actually looks like, start there.</p>
      </div>
    </div>

    <div class="bb-row">
      <h3>Where to search</h3>
      <dl class="bb-facts">
        <div>
          <dt>LinkedIn</dt>
          <dd>Filter by "Internship" and "Biotech" or "Pharmaceutical." Set alerts for new postings.</dd>
        </div>
        <div>
          <dt>Handshake</dt>
          <dd>Best for university-specific postings, especially for smaller regional biotech companies that recruit campus-to-campus.</dd>
        </div>
        <div>
          <dt>Company career pages</dt>
          <dd>Always check directly, since many roles aren't posted on aggregators. Bookmark <span class="bb-nowrap">10–15</span> companies you'd want to work for.</dd>
        </div>
        <div>
          <dt>University career center</dt>
          <dd>Often has exclusive postings from alumni-affiliated companies. Ask about biotech-specific fairs.</dd>
        </div>
        <div>
          <dt>Cold outreach</dt>
          <dd>Email professors with funded labs. A well-written cold email to a principal investigator can get you into a research lab even without a formal posting.</dd>
        </div>
      </dl>
    </div>

    <div class="bb-row bb-row--wide">
      <h3>What to expect</h3>
      <div class="bb-cards bb-cards--3">
        <div class="bb-card">
          <h4>Big pharma</h4>
          <p class="bb-muted">Pfizer, Merck, J&amp;J</p>
          <p>Structured programs, assigned mentors, formal presentations, intern cohort events. Slower-paced, process-heavy. Good for learning how large organizations operate and building a network.</p>
        </div>
        <div class="bb-card">
          <h4>Biotech startup</h4>
          <p>Less structure, broader responsibilities, often more hands-on from day one. You may be the only intern. Fast-paced and unpredictable: you'll learn a lot, but you'll need to drive your own experience.</p>
        </div>
        <div class="bb-card">
          <h4>Government or academic lab</h4>
          <p class="bb-muted">NIH, university labs, REU</p>
          <p>Research-focused, usually stipend-based. Excellent for students considering graduate school. Slower publication cycles but deep scientific exposure. Independent project work is common.</p>
        </div>
      </div>
    </div>

    <div class="bb-row">
      <h3>Quick tips that actually help</h3>
      <ul class="bb-tips">
        <li>Apply broadly early, then narrow your focus in February. Don't wait for your "dream" company to post before applying anywhere.</li>
        <li>Tailor your resume keywords to match each job posting. Many companies use ATS screening before a human sees your application.</li>
        <li>A warm introduction beats a cold application every time. LinkedIn alumni tools and professor connections are underutilized by most students.</li>
        <li>Don't overlook smaller CROs, CDMOs, and regional biotech companies. They often offer more hands-on work than large programs.</li>
      </ul>
    </div>

  </div>
</section>

<!-- Where biotech is heading -->
<section class="bb-section" id="trends">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Where biotech is heading</h2>
      <p>The biotech industry is changing faster than most career guides acknowledge. These areas are shaping where the jobs, funding, and scientific energy will flow over the next decade. Here's what that means for you.</p>
    </div>
    <div class="bb-trends">
      <article>
        <h3>AI &amp; drug discovery</h3>
        <p>AlphaFold's protein structure predictions changed what computational biology teams can accomplish in months rather than years. AI-assisted clinical trial design is reducing the time it takes to identify patient cohorts and predict drug responses.</p>
        <p>New roles are emerging at the intersection of machine learning and wet lab science. Computational biologists, AI research scientists, and data engineers focused on genomics pipelines are among the fastest-growing positions in pharma and early-stage biotech. You don't need to be a programmer to contribute: biology domain expertise is increasingly what distinguishes useful AI tools from ones that fail in practice.</p>
        <p><a class="bb-textlink" href="https://www.statnews.com" target="_blank" rel="noopener">Explore on STAT News</a></p>
      </article>
      <article>
        <h3>Synthetic biology</h3>
        <p>Companies like Ginkgo Bioworks have built platform-level infrastructure for engineering organisms to produce everything from fragrances to industrial chemicals to therapeutic proteins. Biomanufacturing (using engineered microbes and cell lines to produce products that previously required petroleum chemistry or animal agriculture) is attracting significant investment.</p>
        <p>Roles range from metabolic engineering and strain development to process scale-up and fermentation operations. Synthetic biology also intersects with food, materials, and agriculture, making it one of the broader application areas for biology training outside traditional pharma.</p>
        <p><a class="bb-textlink" href="https://www.nature.com" target="_blank" rel="noopener">Read on Nature</a></p>
      </article>
      <article>
        <h3>Longevity &amp; aging biotech</h3>
        <p>Venture capital interest in longevity science has grown substantially, with firms like Calico (backed by Alphabet) and Unity Biotechnology pursuing interventions targeting the biology of aging itself rather than individual diseases. The field remains scientifically early-stage, but it's generating roles in translational research, clinical development, and biomarker science.</p>
        <p>For students interested in this space, a strong foundation in cell biology, metabolism, or genetics, combined with an understanding of the long and uncertain clinical timelines involved, puts you ahead of most applicants entering this niche.</p>
        <p><a class="bb-textlink" href="https://www.nia.nih.gov" target="_blank" rel="noopener">Explore at NIA (NIH)</a></p>
      </article>
      <article>
        <h3>Personalized medicine &amp; diagnostics</h3>
        <p>Genomic sequencing costs have dropped dramatically, making population-scale genomics programs feasible. Companion diagnostics (tests that determine whether a patient will respond to a specific therapy) are now required for many oncology drug approvals. Liquid biopsy, which detects cancer-related DNA fragments in blood rather than tissue, is reshaping early detection.</p>
        <p>Roles in this space include clinical genomics scientists, bioinformatics analysts, regulatory affairs specialists focused on IVD (in vitro diagnostics), and commercial teams that work with oncologists and hospital systems to implement these tools in clinical practice.</p>
        <p><a class="bb-textlink" href="https://www.genome.gov" target="_blank" rel="noopener">Explore at genome.gov</a></p>
      </article>
    </div>
  </div>
</section>

<!-- AI and lab work -->
<section class="bb-section bb-band bb-band--forest" id="ai-and-lab-work">
  <div class="bb-wrap bb-feature">
    <h2>How AI is changing (not eliminating) wet lab roles</h2>
    <div class="bb-feature-text">
      <p>A common concern among students is that AI will automate laboratory work and reduce the need for bench scientists. This misreads what AI actually does in a biotech context. AI accelerates hypothesis generation and data interpretation. It does not yet pipette, culture cells, troubleshoot failed assays, or navigate the physical unpredictability of biological systems.</p>
      <p>What is changing: scientists spend less time on routine data analysis and more time on experimental design, interpretation, and cross-functional communication. The human skills that remain essential are precisely the ones that are hardest to automate: deep domain intuition, the ability to recognize when something unexpected in your data is noise versus signal, and the judgment to know when to abandon a hypothesis and why.</p>
      <p>If anything, the growing role of AI in biotech increases the premium on scientists who can both run experiments and engage meaningfully with computational outputs, a combination that is currently rare and therefore valuable.</p>
      <p class="bb-feature-link"><a class="bb-textlink" href="https://www.nature.com" target="_blank" rel="noopener">Read on Nature</a></p>
    </div>
  </div>
</section>

<!-- Next step -->
<section class="bb-section bb-band bb-band--cream bb-next">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Ready to go deeper?</h2>
    </div>
    <ul class="bb-index">
      <li>
        <a href="/resources/">
          <span class="bb-index-title">The Learning Lab</span>
          <span class="bb-index-text">Browse career-specific media and resources.</span>
        </a>
      </li>
      <li>
        <a href="/products/">
          <span class="bb-index-title">The Biotech Blueprint</span>
          <span class="bb-index-text">A step-by-step guide built for your starting point.</span>
        </a>
      </li>
      <li>
        <a href="/what-is-biotech/">
          <span class="bb-index-title">What is biotech?</span>
          <span class="bb-index-text">If you're new to the field, learn what biotech actually is.</span>
        </a>
      </li>
    </ul>
  </div>
</section>

</div>
