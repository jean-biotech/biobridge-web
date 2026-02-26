---
layout: single
title: "Get Involved"
permalink: /get-involved/
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

/* Page Header — Mobile First */
.bb-page-hero {
  background: linear-gradient(160deg, var(--bb-navy) 0%, var(--bb-green-dark) 100%);
  color: var(--bb-white);
  padding: 2.5rem 1.5rem;
  border-radius: 10px;
  margin-bottom: 2.5rem;
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
  font-size: 1.75rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  color: var(--bb-white);
  letter-spacing: -0.02em;
  position: relative;
}
.bb-page-hero p {
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: rgba(255,255,255,0.8);
  margin: 0;
  font-weight: 300;
  line-height: 1.6;
  position: relative;
}

/* Involvement Cards — Mobile First */
.bb-involve-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;
  margin-bottom: 2.5rem;
}
.bb-involve-card {
  background: var(--bb-white);
  border: 1px solid var(--bb-border);
  border-radius: 8px;
  padding: 1.75rem 1.5rem;
  transition: all 0.25s ease;
  position: relative;
}
.bb-involve-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--bb-green-accent), var(--bb-green-hover));
  border-radius: 8px 8px 0 0;
}
.bb-involve-card:hover {
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}
.bb-involve-card h2 {
  font-family: 'Inter', sans-serif;
  color: var(--bb-navy);
  font-size: 1.1rem;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 1rem;
}
.bb-involve-card p {
  color: var(--bb-text-secondary);
  font-size: 0.92rem;
  line-height: 1.75;
}
.bb-involve-card ul {
  color: var(--bb-text-secondary);
  font-size: 0.92rem;
  line-height: 1.75;
  padding-left: 1.25rem;
}
.bb-involve-card li {
  margin-bottom: 0.35rem;
}
.bb-involve-card em {
  color: var(--bb-gray);
  font-size: 0.875rem;
}

/* Contact Section */
.bb-contact-section {
  background: var(--bb-green-bg);
  border: 1px solid var(--bb-border);
  border-radius: 10px;
  padding: 2rem 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
}
.bb-contact-section h2 {
  font-family: 'Inter', sans-serif;
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
  border-radius: 6px;
  border: 1px solid var(--bb-border);
  background: var(--bb-white);
  color: var(--bb-navy) !important;
  text-decoration: none !important;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.2s ease;
  min-height: 44px;
}
.bb-contact-link:hover {
  border-color: var(--bb-green-accent);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  color: var(--bb-green-accent) !important;
}
.bb-feedback-note {
  color: var(--bb-gray);
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.7;
  max-width: 560px;
  margin: 0 auto;
}

/* Desktop */
@media (min-width: 769px) {
  .bb-page-hero {
    padding: 3.5rem 3rem;
    border-radius: 12px;
  }
  .bb-page-hero h1 {
    font-size: 2.25rem;
  }
  .bb-page-hero p {
    font-size: 1.1rem;
  }
  .bb-involve-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem;
  }
  .bb-involve-card {
    padding: 2rem;
  }
  .bb-involve-card h2 {
    font-size: 1.25rem;
  }
  .bb-contact-section {
    padding: 2.5rem 3rem;
    border-radius: 12px;
  }
}
</style>

<div class="bb-page-hero">
  <h1>Get Involved with BioBridge</h1>
  <p>BioBridge is a student-led initiative, and we are always looking for people who want to help make biotech more accessible.</p>
</div>


<div class="bb-involve-grid">

  <div class="bb-involve-card">
    <h2>For Students</h2>
    <p><strong>Email signup:</strong> Get updates on new resources, mentorship opportunities, and events.</p>
    <p><strong>Interest form:</strong> Tell us what you are looking for and we will help connect you with resources.</p>
    <p><em>(Forms coming soon -- for now, email us directly)</em></p>
  </div>

  <div class="bb-involve-card">
    <h2>For Mentors</h2>
    <p>If you work in biotech and want to help students navigate the field, we would love to hear from you.</p>
    <p>We are building a mentorship program to connect curious students with professionals who remember what it was like to start.</p>
    <p><em>Mentor interest form (coming soon)</em></p>
  </div>

  <div class="bb-involve-card">
    <h2>For Contributors</h2>
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
    <a href="mailto:jeans.connects@gmail.com" class="bb-contact-link">
      <i class="fas fa-envelope"></i> jeans.connects@gmail.com
    </a>
    <a href="https://github.com/jean-biotech/biobridge" target="_blank" class="bb-contact-link">
      <i class="fab fa-github"></i> GitHub
    </a>
    <a href="https://linkedin.com/in/jeantrann" target="_blank" class="bb-contact-link">
      <i class="fab fa-linkedin"></i> LinkedIn
    </a>
  </div>
  <p class="bb-feedback-note">See something that could be better? Have an idea for a new resource or page? We are constantly improving BioBridge based on feedback from students and professionals. Let us know what would make this more useful for you.</p>
</div>
