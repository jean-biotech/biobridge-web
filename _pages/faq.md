---
layout: splash
title: "FAQ"
permalink: /faq/
---

<style>
/* ================================================================
   FAQ
   The questions use the shared .bb-faq component (native <details>).
   These rules group them by topic and lay out the closing section.
   ================================================================ */

/* ---------- Topics ---------- */

.bb-faqpage .bb-topic {
  border-top: 2px solid var(--bb-green);
  padding-top: 1.1rem;
}

.bb-faqpage .bb-topic + .bb-topic {
  margin-top: 3.5rem;
}

.bb-faqpage .bb-topic h2 {
  font-size: 1.75rem;
  line-height: 1.2;
  margin-bottom: 0.4rem;
}

/* The topic's green rule stands in for the list's top border */
.bb-faqpage .bb-topic .bb-faq {
  border-top: 0;
}

/* Avoid a lone word on the last line of a wrapped question */
.bb-faqpage .bb-faq summary {
  text-wrap: pretty;
}

.bb-faqpage .bb-topic details:last-child {
  border-bottom: 0;
}

/* ---------- Closing: more questions ---------- */

.bb-faqpage .bb-ask h2 {
  font-size: 1.75rem;
  line-height: 1.2;
}

.bb-faqpage .bb-ask p {
  max-width: 34em;
  margin-top: 0.9rem;
}

/* ---------- Wider screens ---------- */

@media (min-width: 900px) {
  /* Topic name on the left, sitting on the same line as its first question */
  .bb-faqpage .bb-topic,
  .bb-faqpage .bb-ask {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    column-gap: 4.5rem;
    align-items: baseline;
  }

  .bb-faqpage .bb-topic {
    padding-top: 0;
  }

  .bb-faqpage .bb-topic + .bb-topic {
    margin-top: 4.5rem;
  }

  .bb-faqpage .bb-topic h2 {
    margin: 0;
  }

  .bb-faqpage .bb-ask p {
    margin-top: 0;
  }
}
</style>

<div class="bb-page bb-faqpage">

<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap">
    <p class="bb-kicker">FAQ</p>
    <h1>Questions about getting into biotech, <em>answered</em></h1>
    <p class="bb-lede">Common questions from people exploring biotech: where to start, how to come in from another field, and what to know about finding a job.</p>
  </div>
</header>

<section class="bb-section">
  <div class="bb-wrap">

    <div class="bb-topic" id="getting-started">
      <h2>Getting started</h2>
      <div class="bb-faq">

        <details>
          <summary>I'm in high school. Where do I start?</summary>
          <div class="bb-faq-body">
            <p>Start by getting a clear picture of what the field actually is. Read broadly: biotech industry news, popular science books, YouTube channels like Kurzgesagt. Take AP Biology or chemistry if your school offers it, and look into summer research programs or science competitions in your area.</p>
            <p>You have more time than you think. The most useful thing you can do right now is stay curious and explore widely, rather than locking onto a single path too early.</p>
          </div>
        </details>

        <details>
          <summary>I'm in college but not majoring in biology. Can I still get into biotech?</summary>
          <div class="bb-faq-body">
            <p>Absolutely. Biotech needs engineers for process development and manufacturing, computer scientists for bioinformatics and data analysis, business majors for operations and strategy, and communications people for science writing and marketing. A biology degree is one path in, not the only one.</p>
            <p>The key is connecting whatever you're studying to a specific role. Look at actual job postings in the area you're interested in, see what they ask for, and build toward that.</p>
          </div>
        </details>

        <details>
          <summary>What skills should I focus on building?</summary>
          <div class="bb-faq-body">
            <p>The skills that matter most depend on the path you're aiming for, but a few are broadly valuable across almost every biotech role. Data fluency (even at a basic level, with Excel or Python) is increasingly expected. Clear writing and communication are rare and consistently valued. Understanding the regulatory landscape (FDA, GMP, GLP basics) is relevant to far more roles than just regulatory affairs.</p>
            <p>Scientific literacy: the ability to read a paper, follow a technical argument, and understand what a study is actually claiming. That's the underlying skill that compounds over time regardless of your specific role.</p>
          </div>
        </details>

      </div>
    </div>

    <div class="bb-topic" id="another-field">
      <h2>Coming from another field</h2>
      <div class="bb-faq">

        <details>
          <summary>Can I pivot into biotech from any background? Do I need a science degree?</summary>
          <div class="bb-faq-body">
            <p>Yes, and it happens more often than people expect. The path looks different depending on where you're starting. Non-science backgrounds have clear entry points in business development, regulatory, operations, communications, and project management.</p>
            <p>If you want a lab-based role without a science background, you'll likely need to get one, or start with a certificate program. The most important thing is being specific about which kind of role you're actually targeting and building toward that, rather than trying to enter biotech in the abstract.</p>
          </div>
        </details>

        <details>
          <summary>I'm changing careers. Is it too late?</summary>
          <div class="bb-faq-body">
            <p>Not at all. People enter biotech in their 30s, 40s, and beyond, often in roles where their previous experience is exactly what's needed. Someone with a legal background is well-positioned for regulatory affairs. A project manager from any industry can move into clinical operations or manufacturing. Someone with sales experience can transition into biotech sales or business development without starting from scratch.</p>
            <p>What matters most is demonstrating that you understand the context and are committed to filling the specific knowledge gaps. Online courses and industry certifications can close those gaps faster than you'd expect.</p>
          </div>
        </details>

        <details>
          <summary>I don't have a science background. Can I still learn?</summary>
          <div class="bb-faq-body">
            <p>Biotech is much broader than most people realize. You don't need a science degree to work in the industry. Roles in regulatory affairs, business development, communications, project management, and operations are filled by people from law, business, engineering, and the humanities.</p>
            <p>What usually matters is scientific literacy, not a science degree. That means being able to read a summary, understand what a clinical trial is, and follow along in a meeting. You can build that over time by reading industry news, taking a free online course, and staying curious.</p>
          </div>
        </details>

      </div>
    </div>

    <div class="bb-topic" id="finding-a-job">
      <h2>Finding a job</h2>
      <div class="bb-faq">

        <details>
          <summary>How do I get my first internship or job?</summary>
          <div class="bb-faq-body">
            <p>The most reliable route is applying directly on company career pages. Most biotech companies, even large ones, post entry-level and internship roles on their websites. Apply through the official posting and tailor your resume to each role, even slightly.</p>
            <p>Cold outreach can be a useful supplement, not a replacement for applying, and it works best when it's specific and brief. If you have no lab experience, highlight transferable skills: attention to detail, data handling, relevant coursework. University research labs are often more accessible than industry for a first experience and are worth pursuing at the same time.</p>
          </div>
        </details>

        <details>
          <summary>What is the job market like?</summary>
          <div class="bb-faq-body">
            <p>Entry-level salaries in lab or operations roles typically start around $50–60k, but with a few years of experience can reach $90–100k+. Data, computational, and engineering roles in hubs like Boston or the Bay Area often pay more. The industry goes through cycles. Layoffs happen, especially at smaller biotechs after funding rounds, but core functions like manufacturing, quality control, and regulatory affairs have historically remained more stable.</p>
            <p>Overall it's a growing field, and it rewards people who keep building expertise over time.</p>
          </div>
        </details>

        <details>
          <summary>Do I need to live in a biotech hub?</summary>
          <div class="bb-faq-body">
            <p>It helps, especially early in your career when proximity to other people in the industry accelerates learning and networking. The major hubs (Boston/Cambridge, the Bay Area, San Diego, Research Triangle, and Seattle) have the highest concentration of companies and therefore the most entry-level opportunities.</p>
            <p>That said, biotech companies exist in most mid-to-large cities, and remote work is increasingly common for non-lab roles like regulatory affairs, business development, and project management. If relocating isn't possible, identify what's local and be strategic about which roles allow more flexibility.</p>
          </div>
        </details>

      </div>
    </div>

  </div>
</section>

<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap bb-ask">
    <h2>Still have questions?</h2>
    <div>
      <p>You can reach out directly at <a href="mailto:jeans.connects@gmail.com">jeans.connects@gmail.com</a>. A mentorship program is in development for people who want more structured, one-on-one guidance.</p>
      <div class="bb-actions">
        <a class="bb-button" href="mailto:jeans.connects@gmail.com">Email your question</a>
        <a class="bb-textlink" href="/get-involved/">See ways to get involved</a>
      </div>
    </div>
  </div>
</section>

</div>
