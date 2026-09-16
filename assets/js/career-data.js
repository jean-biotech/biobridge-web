/*
 * Career Path Explorer: editable dataset.
 *
 * This is the ONLY file you need to touch to add a role, fix a salary
 * range, or update a first step. Nothing here is code logic, just a
 * list of plain objects. Copy an existing entry and change the values.
 *
 * Fields:
 *   title       - role name shown on the card
 *   phd         - one of: "not-required" | "optional" | "usually-required"
 *   background  - array, pick any of:
 *                 "biology" | "chemistry" | "cs-data" | "business" |
 *                 "engineering" | "non-stem"
 *   interest    - array, pick any of:
 *                 "lab-bench" | "data-computational" |
 *                 "business-commercial" | "regulatory-policy" |
 *                 "manufacturing-operations"
 *   salary      - a ROUNDED, APPROXIMATE US entry-level range. Always
 *                 keep the word "estimate" somewhere near it in the UI,
 *                 never present these as precise or authoritative.
 *   firstStep   - one realistic, honest next action.
 *   resourceText / resourceUrl - one linked resource to learn more.
 */

window.BB_CAREER_ROLES = [
  {
    title: "Research Associate",
    phd: "not-required",
    background: ["biology", "chemistry"],
    interest: ["lab-bench"],
    salary: "$48k to $62k (estimate)",
    firstStep: "Apply straight out of a bachelor's in biology or biochemistry: most industry RA roles train you on lab technique on the job.",
    resourceText: "See the lab & research pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Manufacturing Associate",
    phd: "not-required",
    background: ["engineering", "chemistry", "non-stem"],
    interest: ["manufacturing-operations"],
    salary: "$50k to $68k (estimate)",
    firstStep: "Look for \"manufacturing associate\" or \"MSAT\" postings. Many only require an associate's or bachelor's degree.",
    resourceText: "See the manufacturing pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Bioinformatics Analyst",
    phd: "optional",
    background: ["cs-data", "biology"],
    interest: ["data-computational"],
    salary: "$65k to $90k (estimate)",
    firstStep: "Build a small portfolio project analyzing a public genomic dataset and learn basic R or Python.",
    resourceText: "Browse computational resources",
    resourceUrl: "/resources/"
  },
  {
    title: "Computational Biologist",
    phd: "usually-required",
    background: ["cs-data", "biology"],
    interest: ["data-computational"],
    salary: "$95k to $140k (estimate, research-lead level)",
    firstStep: "A master's can open junior computational roles; a PhD is the common path to leading independent research.",
    resourceText: "See the data & computation pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Regulatory Affairs Associate",
    phd: "not-required",
    background: ["business", "biology", "non-stem"],
    interest: ["regulatory-policy"],
    salary: "$55k to $75k (estimate)",
    firstStep: "Look for RA associate openings or an entry certificate program. Clear writing matters more here than a lab background.",
    resourceText: "See the regulatory pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "QA / QC Specialist",
    phd: "not-required",
    background: ["engineering", "chemistry", "non-stem"],
    interest: ["manufacturing-operations"],
    salary: "$52k to $70k (estimate)",
    firstStep: "QA is one of the most background-agnostic entry points: start as a QA/QC associate and learn GMP on the job.",
    resourceText: "See the manufacturing pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Business Development Associate",
    phd: "not-required",
    background: ["business", "non-stem"],
    interest: ["business-commercial"],
    salary: "$60k to $85k (estimate)",
    firstStep: "An MBA helps later, but many people start in a biotech-adjacent sales, ops, or consulting role and move in.",
    resourceText: "See the business pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Clinical Research Coordinator",
    phd: "not-required",
    background: ["biology", "non-stem"],
    interest: ["lab-bench", "regulatory-policy"],
    salary: "$45k to $60k (estimate)",
    firstStep: "A common bridge for pre-med students: apply directly at hospitals, CROs, or a biotech's clinical team.",
    resourceText: "See the clinical pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Medical Science Liaison",
    phd: "usually-required",
    background: ["biology", "non-stem"],
    interest: ["business-commercial"],
    salary: "$130k to $160k (estimate, advanced-degree level)",
    firstStep: "Usually requires a PharmD, PhD, or MD plus clinical expertise. This is a longer-horizon goal, not a first job.",
    resourceText: "See the business pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Scientific Writer",
    phd: "optional",
    background: ["non-stem", "biology"],
    interest: ["business-commercial", "regulatory-policy"],
    salary: "$55k to $80k (estimate)",
    firstStep: "A strong writing sample beats a science pedigree here: pitch a biotech newsletter or blog to build clips.",
    resourceText: "Browse the Learning Lab",
    resourceUrl: "/resources/"
  },
  {
    title: "Data Scientist, Biotech",
    phd: "optional",
    background: ["cs-data"],
    interest: ["data-computational"],
    salary: "$85k to $120k (estimate)",
    firstStep: "A CS or stats background plus one biology-adjacent side project is often enough to break in without a life-science degree.",
    resourceText: "Browse computational resources",
    resourceUrl: "/resources/"
  },
  {
    title: "Process Engineer",
    phd: "not-required",
    background: ["engineering"],
    interest: ["manufacturing-operations"],
    salary: "$70k to $95k (estimate)",
    firstStep: "A chemical or biomedical engineering degree plus a GMP-facility internship is the standard path in.",
    resourceText: "See the manufacturing pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Patent Agent",
    phd: "optional",
    background: ["chemistry", "biology", "engineering"],
    interest: ["regulatory-policy", "business-commercial"],
    salary: "$90k to $130k (estimate)",
    firstStep: "Requires passing the patent bar. A technical bachelor's degree already qualifies you to sit for it, no law degree needed to start.",
    resourceText: "See the regulatory pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Principal Scientist / R&D Lead",
    phd: "usually-required",
    background: ["biology", "chemistry"],
    interest: ["lab-bench", "data-computational"],
    salary: "$120k to $170k (estimate, senior level)",
    firstStep: "A senior destination role, not a first job. Expect 5+ years of experience plus a PhD or equivalent research record.",
    resourceText: "See the lab & research pathway",
    resourceUrl: "/career-pathways/"
  },
  {
    title: "Supply Chain Analyst",
    phd: "not-required",
    background: ["business", "engineering", "non-stem"],
    interest: ["manufacturing-operations", "business-commercial"],
    salary: "$55k to $75k (estimate)",
    firstStep: "Supply chain and ops roles value process thinking over a science degree. Logistics or operations experience transfers directly.",
    resourceText: "See the manufacturing pathway",
    resourceUrl: "/career-pathways/"
  }
];
