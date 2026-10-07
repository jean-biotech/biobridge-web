---
layout: splash
title: "Get Involved"
permalink: /get-involved/
---

<style>
/* ================================================================
   GET INVOLVED
   Shared pieces come from assets/css/biobridge.css. These rules lay
   out the three ways to take part, the email band, and the closing.
   ================================================================ */

/* ---------- Ways to take part ---------- */

.bb-involve .bb-roles {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 2.75rem;
}

.bb-involve .bb-role {
  display: flex;
  flex-direction: column;
  max-width: 36em;
  margin: 0;
  padding-top: 1.1rem;
  border-top: 2px solid var(--bb-green);
}

.bb-involve .bb-role h3 {
  margin-bottom: 0.7rem;
}

.bb-involve .bb-role p,
.bb-involve .bb-role li {
  font-size: 1.05rem;
  line-height: 1.55;
  text-wrap: pretty;
}

.bb-involve .bb-role p + p,
.bb-involve .bb-role p + ul {
  margin-top: 0.75rem;
}

.bb-involve .bb-role ul {
  list-style: disc;
  margin-bottom: 0;
  padding-left: 1.2em;
}

.bb-involve .bb-role li {
  margin: 0 0 0.3rem;
}

.bb-involve .bb-role li::marker {
  color: var(--bb-green);
}

/* What to do today, set off by a thin rule at the foot of each column */
.bb-involve .bb-role-now {
  margin-top: auto;
  padding-top: 1.5rem;
}

.bb-involve .bb-role-now p {
  padding-top: 0.9rem;
  border-top: 1px solid var(--bb-line);
}

.bb-involve .bb-role-now a {
  font-weight: 600;
}

/* ---------- Email band ---------- */

.bb-involve .bb-contact {
  display: grid;
  gap: 2rem;
}

.bb-involve .bb-contact h2 + p {
  max-width: 30em;
  margin-top: 1rem;
}

.bb-involve .bb-contact-email {
  font-family: var(--bb-serif);
  font-weight: 600;
  font-size: clamp(1.5rem, 1.1rem + 1.6vw, 2.25rem);
  line-height: 1.2;
  overflow-wrap: anywhere;
}

.bb-involve .bb-contact-email a {
  text-decoration-thickness: 2px;
  text-underline-offset: 0.2em;
}

.bb-involve .bb-contact-links {
  margin-top: 1.25rem;
  font-weight: 600;
  font-size: 1.05rem;
}

.bb-involve .bb-contact-links a + a {
  margin-left: 1.5rem;
}

/* ---------- Closing: feedback ---------- */

.bb-involve .bb-feedback h2 {
  font-size: 1.75rem;
  line-height: 1.2;
}

.bb-involve .bb-feedback p {
  max-width: 34em;
  margin-top: 0.9rem;
}

/* ---------- Wider screens ---------- */

@media (min-width: 900px) {
  .bb-involve .bb-roles {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 2.5rem;
  }

  /* Share the heading, text, and note rows across the three columns,
     so the notes start on one line however long each column runs */
  @supports (grid-template-rows: subgrid) {
    .bb-involve .bb-role {
      display: grid;
      grid-row: span 3;
      grid-template-rows: subgrid;
      row-gap: 0;
    }

    .bb-involve .bb-role-now {
      margin-top: 0;
    }
  }

  /* The address sits on the same line as the heading */
  .bb-involve .bb-contact {
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    gap: 4.5rem;
    align-items: baseline;
  }

  .bb-involve .bb-feedback {
    display: grid;
    grid-template-columns: 260px minmax(0, 1fr);
    column-gap: 4.5rem;
    align-items: baseline;
  }

  .bb-involve .bb-feedback p {
    margin-top: 0;
  }
}
</style>

<div class="bb-page bb-involve">

<header class="bb-pagehead bb-band bb-band--cream">
  <div class="bb-wrap">
    <p class="bb-kicker">Get involved</p>
    <h1>Help make biotech more <em>accessible</em></h1>
    <p class="bb-lede">BioBridge is student-led, and there's a place here for students, for people who work in biotech, and for anyone with something to share. For now, taking part starts with an email.</p>
  </div>
</header>

<section class="bb-section">
  <div class="bb-wrap">
    <div class="bb-section-head">
      <h2>Ways to take part</h2>
    </div>
    <ul class="bb-roles">
      <li class="bb-role">
        <h3>For students</h3>
        <div class="bb-role-body">
          <p><strong>Email signup:</strong> get updates on new resources, mentorship opportunities, and events.</p>
          <p><strong>Interest form:</strong> tell us what you're looking for, and we'll help connect you with resources.</p>
        </div>
        <div class="bb-role-now">
          <p>For now, <a href="mailto:jeans.connects@gmail.com">email us directly</a>. Both forms are coming soon.</p>
        </div>
      </li>
      <li class="bb-role">
        <h3>For mentors</h3>
        <div class="bb-role-body">
          <p>If you work in biotech and want to help students navigate the field, we'd love to hear from you.</p>
          <p>We're building a mentorship program to connect curious students with professionals who remember what it was like to start.</p>
        </div>
        <div class="bb-role-now">
          <p>For now, <a href="mailto:jeans.connects@gmail.com">email us directly</a>. A mentor interest form is coming soon.</p>
        </div>
      </li>
      <li class="bb-role">
        <h3>For contributors</h3>
        <div class="bb-role-body">
          <p>Have a resource, article, or story to share? Want to write a guest post about your biotech journey? We're always looking for:</p>
          <ul>
            <li>Beginner-friendly resources to add to our hub</li>
            <li>Career stories from diverse pathways</li>
            <li>Guest posts explaining biotech concepts</li>
            <li>Feedback on how to improve BioBridge</li>
          </ul>
        </div>
        <div class="bb-role-now">
          <p><a href="mailto:jeans.connects@gmail.com">Email us</a> with your idea.</p>
        </div>
      </li>
    </ul>
  </div>
</section>

<section class="bb-section bb-band bb-band--forest" id="contact">
  <div class="bb-wrap bb-contact">
    <div>
      <h2>Start with an email</h2>
      <p>Until the forms are ready, email is the way to take part. Tell us who you are and what you're looking for, or what you'd like to share.</p>
    </div>
    <div>
      <p class="bb-contact-email"><a href="mailto:jeans.connects@gmail.com">jeans.connects@gmail.com</a></p>
      <p class="bb-contact-links">
        <a href="https://github.com/jean-biotech/biobridge" target="_blank" rel="noopener">BioBridge on GitHub</a>
        <a href="https://linkedin.com/in/jeantrann" target="_blank" rel="noopener">Jean Tran on LinkedIn</a>
      </p>
    </div>
  </div>
</section>

<section class="bb-section bb-band bb-band--cream">
  <div class="bb-wrap bb-feedback">
    <h2>See something that could be better?</h2>
    <div>
      <p>Have an idea for a new resource or page? We're constantly improving BioBridge based on feedback from students and professionals. Let us know what would make it more useful for you.</p>
      <div class="bb-actions">
        <a class="bb-button" href="mailto:jeans.connects@gmail.com">Send feedback</a>
      </div>
    </div>
  </div>
</section>

</div>
