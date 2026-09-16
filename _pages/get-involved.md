---
layout: single
title: "Get Involved"
permalink: /get-involved/
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..600;1,9..144,400..600&family=Instrument+Sans:wght@400;500;600;700&display=swap');
body { font-family: 'Instrument Sans', -apple-system, BlinkMacSystemFont, sans-serif; }
h1, h2, h3 { font-family: 'Fraunces', Georgia, serif; }

:root {
  --bb-green: #24221A;
  --bb-green-accent: #5C6335;
  --bb-green-bright: #5C6335;
  --bb-green-hover: #3B4223;
  --bb-green-dark: #3B4223;
  --bb-green-bg: #E6DBC2;
  --bb-green-bg-subtle: #E6DBC2;
  --bb-navy: #24221A;
  --bb-charcoal: #24221A;
  --bb-white: #EFE6D2;
  --bb-off-white: #E6DBC2;
  --bb-text-secondary: #5B5745;
  --bb-gray: #5B5745;
  --bb-border: rgba(36,34,26,0.22);
}

/* Involvement list: numbered editorial rows, mobile first */
.bb-involve-list {
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
}
.bb-involve-item {
  padding: 1.75rem 0;
  border-bottom: 1px solid var(--bb-border);
}
.bb-involve-item:first-child {
  padding-top: 0;
}
.bb-involve-item:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.bb-involve-item-head {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 0.85rem;
}
.bb-involve-item h2 {
  font-family: 'Instrument Sans', sans-serif;
  color: var(--bb-navy);
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}
.bb-involve-item p {
  color: var(--bb-text-secondary);
  font-size: 0.92rem;
  line-height: 1.75;
}
.bb-involve-item ul {
  color: var(--bb-text-secondary);
  font-size: 0.92rem;
  line-height: 1.75;
  padding-left: 1.25rem;
}
.bb-involve-item li {
  margin-bottom: 0.35rem;
}
.bb-involve-item em {
  color: var(--bb-gray);
  font-size: 0.875rem;
}

/* Contact Section */
.bb-contact-section {
  background: var(--bb-green-bg);
  border: 1px solid var(--bb-border);
  border-radius: 2px;
  padding: 2rem 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
}
.bb-contact-section h2 {
  font-family: 'Instrument Sans', sans-serif;
  color: var(--bb-navy);
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 1.25rem;
}
.bb-contact-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}
.bb-contact-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.25rem;
  border-radius: 2px;
  border: 1px solid var(--bb-border);
  background: var(--bb-white);
  color: var(--bb-navy) !important;
  text-decoration: none !important;
  font-family: 'Instrument Sans', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  transition: border-color 0.2s ease, color 0.2s ease;
  min-height: 44px;
}
.bb-contact-link:hover {
  border-color: var(--bb-green-accent);
  color: var(--bb-green-accent) !important;
}
.bb-feedback-note {
  color: var(--bb-gray);
  font-family: 'Instrument Sans', sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto;
}

/* Desktop */
@media (min-width: 769px) {
  .bb-involve-item {
    padding: 2rem 0;
  }
  .bb-involve-item h2 {
    font-size: 1.25rem;
  }
  .bb-contact-section {
    padding: 2.5rem 3rem;
  }
}
</style>

{% include page-header.html kicker="GET INVOLVED" title="Get Involved with BioBridge" deck="BioBridge is a student-led initiative, and we are always looking for people who want to help make biotech more accessible." %}

<div class="bb-involve-list">

  <div class="bb-involve-item">
    <div class="bb-involve-item-head">
      <span class="section-number">01</span>
      <h2>For Students</h2>
    </div>
    <p><strong>Email signup:</strong> Get updates on new resources, mentorship opportunities, and events.</p>
    <p><strong>Interest form:</strong> Tell us what you are looking for and we will help connect you with resources.</p>
    <p><em>(Forms coming soon, for now email us directly)</em></p>
  </div>

  <div class="bb-involve-item">
    <div class="bb-involve-item-head">
      <span class="section-number">02</span>
      <h2>For Mentors</h2>
    </div>
    <p>If you work in biotech and want to help students navigate the field, we would love to hear from you.</p>
    <p>We are building a mentorship program to connect curious students with professionals who remember what it was like to start.</p>
    <p><em>Mentor interest form (coming soon)</em></p>
  </div>

  <div class="bb-involve-item">
    <div class="bb-involve-item-head">
      <span class="section-number">03</span>
      <h2>For Contributors</h2>
    </div>
    <p>Have a resource, article, or story to share? Want to write a guest post about your biotech journey?</p>
    <p>We are always looking for:</p>
    <ul>
      <li>Beginner-friendly resources to add to our hub</li>
      <li>Career stories from diverse pathways</li>
      <li>Guest posts explaining biotech concepts</li>
      <li>Feedback on how to improve BioBridge</li>
    </ul>
  </div>

</div>

<div class="bb-contact-section">
  <h2>Stay Connected</h2>
  <div class="bb-contact-links">
    <a href="mailto:jeans.connects@gmail.com" class="bb-contact-link">jeans.connects@gmail.com</a>
    <a href="https://github.com/jean-biotech/biobridge" target="_blank" class="bb-contact-link">GitHub</a>
    <a href="https://linkedin.com/in/jeantrann" target="_blank" class="bb-contact-link">LinkedIn</a>
  </div>
  <p class="bb-feedback-note">See something that could be better? Have an idea for a new resource or page? We are constantly improving BioBridge based on feedback from students and professionals. Let us know what would make this more useful for you.</p>
</div>
