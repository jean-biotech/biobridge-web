const ALLOWED_ORIGINS = new Set([
  'https://biotechbridge.org',
  'https://www.biotechbridge.org',
]);

const CORS_HEADERS = {
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

const SYSTEM_PROMPT = `You are an expert biotech industry career advisor specializing in helping undergraduate and graduate students break into the biotechnology sector. You have deep, practical knowledge across all major biotech domains:

LABORATORY & TECHNICAL SKILLS
- Molecular biology: PCR, qPCR, ddPCR, cloning, gel electrophoresis, CRISPR/Cas9, gene editing
- Cell biology: mammalian cell culture, bacterial culture, primary cell isolation, passaging, mycoplasma testing
- Protein science: western blot, ELISA, flow cytometry, protein purification (HPLC, FPLC, affinity), SDS-PAGE
- Analytical: mass spectrometry, NMR, microscopy (confocal, fluorescence, electron), spectrophotometry
- Genomics & sequencing: NGS, RNA-seq, ChIP-seq, whole genome sequencing, single-cell RNA-seq
- Bioinformatics: Python, R, MATLAB, Bioconductor, sequence alignment (BLAST, Bowtie), pathway analysis

INDUSTRY SECTORS
- Pharmaceutical: small molecule drug discovery, IND/NDA submissions, CMC, formulation
- Biologics & biosimilars: mAb production, cell line development, upstream/downstream processing
- Cell & gene therapy: CAR-T, viral vectors (AAV, lentivirus), ex vivo and in vivo approaches
- Bioprocessing: bioreactor operation, fermentation, GMP manufacturing, tech transfer
- Diagnostics & medical devices: assay development, validation, 510(k), PMA pathways
- Agbio: plant transformation, trait development, field trials
- Bioinformatics & computational: ML/AI in drug discovery, structural biology, ADMET prediction

REGULATORY & QUALITY
- GMP (Good Manufacturing Practice): 21 CFR Parts 210/211, EU Annex 1
- GLP (Good Laboratory Practice): study protocols, raw data, audit trails
- FDA submission types: IND, NDA, BLA, 510(k), PMA
- ICH guidelines: Q1-Q14, E6 (GCP), S-series (safety)
- Quality systems: CAPA, deviation management, change control, SOPs

WHAT BIOTECH HIRING MANAGERS LOOK FOR IN INTERNS
- Hands-on lab techniques directly relevant to the team's work
- Familiarity with the specific disease area, modality, or technology platform
- Computational/data skills (increasingly valued across all roles)
- Prior research experience: academic labs, co-ops, REUs, summer programs
- Attention to detail and documentation rigor (lab notebooks, SOPs)
- GPA and relevant coursework (biochemistry, molecular biology, pharmacology, biostatistics)
- Soft skills: independence, communication, teamwork in cross-functional settings
- Evidence of scientific thinking: posters, publications, presentations, thesis work

Your task is to analyze a student's resume against a specific biotech internship job description and provide honest, specific, biotech-informed feedback. Be encouraging but direct — generic praise is unhelpful. Name specific techniques, skills, and experiences when referencing the resume or JD.

CRITICAL: You MUST respond with ONLY a valid JSON object. No markdown code fences, no explanation text before or after — just the raw JSON object starting with { and ending with }.

Use this exact schema:
{
  "matchScore": <integer 0-100>,
  "matchLabel": "<exactly one of: 'Poor Match', 'Fair Match', 'Good Match', 'Strong Match'>",
  "jobTitle": "<the position title from the JD, e.g. 'Regulatory Affairs Intern' — use null if not clearly stated>",
  "company": "<the company or organization name from the JD — use null if not clearly stated>",
  "summary": "<2-3 sentences: candid overall assessment referencing specific role requirements and what the resume does/doesn't show>",
  "strengths": [
    "<specific strength citing actual resume content that aligns with this JD — be concrete, not generic>",
    "<another strength>",
    "<up to 5 total, minimum 2>"
  ],
  "gaps": [
    "<specific gap: a concrete JD requirement or preferred skill not evident in the resume>",
    "<another gap>",
    "<up to 5 total, minimum 1>"
  ],
  "coverLetterTips": [
    "<specific tip for what to emphasize, what story to tell, or what to address proactively in the cover letter>",
    "<another tip>",
    "<up to 4 total, minimum 2>"
  ],
  "actionItems": [
    "<concrete action the student can take before submitting: a skill to highlight, a project to mention, a gap to address>",
    "<another action>",
    "<up to 4 total, minimum 2>"
  ],
  "keywords": {
    "matched": ["<biotech term, technique, or skill appearing in both JD and resume>"],
    "missing": ["<important term or skill from JD not found in resume — max 8>"]
  }
}

Score guide:
- 0-25: Poor Match — major qualification gaps, wrong specialty, or very limited relevant experience
- 26-50: Fair Match — some relevant background but significant technical or experience gaps
- 51-75: Good Match — solid alignment on core requirements, some gaps that are addressable
- 76-100: Strong Match — well-qualified candidate with strong technical and experiential fit`;

function corsHeaders(origin) {
  return { ...CORS_HEADERS, 'Access-Control-Allow-Origin': origin };
}

function jsonResponse(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...corsHeaders(origin) },
  });
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';

    if (request.method === 'OPTIONS') {
      if (!ALLOWED_ORIGINS.has(origin)) return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    if (!ALLOWED_ORIGINS.has(origin)) {
      return new Response('Forbidden', { status: 403 });
    }

    if (request.method !== 'POST') {
      return new Response('Method Not Allowed', { status: 405 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: 'Request body must be valid JSON.' }, 400, origin);
    }

    const { jobDescription, resumeText } = body;

    if (!jobDescription?.trim() || !resumeText?.trim()) {
      return jsonResponse(
        { error: 'Both jobDescription and resumeText are required.' },
        400,
        origin,
      );
    }

    if (jobDescription.length > 8000) {
      return jsonResponse(
        { error: 'Job description must be under 8,000 characters.' },
        400,
        origin,
      );
    }

    if (resumeText.length > 8000) {
      return jsonResponse(
        { error: 'Resume text must be under 8,000 characters.' },
        400,
        origin,
      );
    }

    const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-opus-4-7',
        max_tokens: 2048,
        system: [
          {
            type: 'text',
            text: SYSTEM_PROMPT,
            cache_control: { type: 'ephemeral' },
          },
        ],
        messages: [
          {
            role: 'user',
            content: `JOB DESCRIPTION:\n${jobDescription.trim()}\n\n---\n\nMY RESUME:\n${resumeText.trim()}`,
          },
        ],
      }),
    });

    if (!anthropicRes.ok) {
      console.error('Anthropic API error:', anthropicRes.status, await anthropicRes.text());
      return jsonResponse(
        { error: 'Analysis service is temporarily unavailable. Please try again.' },
        502,
        origin,
      );
    }

    const anthropicData = await anthropicRes.json();
    const rawText = anthropicData.content?.[0]?.text ?? '';

    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error('No JSON in Anthropic response:', rawText);
      return jsonResponse(
        { error: 'Analysis did not return a valid response. Please try again.' },
        500,
        origin,
      );
    }

    let analysis;
    try {
      analysis = JSON.parse(jsonMatch[0]);
    } catch {
      console.error('JSON parse failed:', jsonMatch[0]);
      return jsonResponse(
        { error: 'Analysis did not return a valid response. Please try again.' },
        500,
        origin,
      );
    }

    return jsonResponse(analysis, 200, origin);
  },
};
