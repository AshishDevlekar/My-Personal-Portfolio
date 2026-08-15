export const profile = {
  name: "Ashish Devlekar",
  title: "Junior Engineer",
  company: "Cushman & Wakefield",
  tagline: "Full-stack developer building AI-powered automation systems.",
  heroIntro: "Full-stack engineer specializing in enterprise automation and applied AI, currently architecting systems at Cushman & Wakefield used by 150+ people across 300+ projects.",
  location: "Mumbai, India",
  email: "ashishdevlekar10@gmail.com",
  phone: "+91 9987075416",
  github: "https://github.com/ashishdevlekar",
  linkedin: "https://linkedin.com/in/ashish-devlekar",
  resumeUrl: `${import.meta.env.BASE_URL}resume.pdf`,
  bio: [
  "Software Developer at Cushman & Wakefield, where I independently built an internal automation platform used by 150+ users across 300+ active projects — covering everything from workflow automation to ML-driven anomaly detection.",
  "I work across the full stack (React, FastAPI, Python, Firebase) and enjoy owning problems end-to-end — architecture, APIs, database design, deployment, the whole cycle. Recently that's included applying ML to real business problems, like automating data mapping that used to take hours down to minutes.",
  "Outside work, I build projects exploring computer vision and AI — real-time facial recognition systems, IoT-based platforms with PyTorch models in production. B.E. in Information Technology with Honours in AI & ML.",
  "Always open to connecting with other developers or talking AI/automation in the enterprise space.",
],
  meta: [
    { label: "Based", value: "Mumbai, IN" },
    { label: "Focus", value: "Full-Stack + AI/ML" },
    { label: "Education", value: "B.E. IT — Honours, AI & ML" },
    { label: "Interests", value: "AI/ML, Automation" }
  ],
};

export const experience = {
  role: "Junior Engineer — Software Development",
  company: "Cushman & Wakefield",
  period: "Nov 2025 — Present",
  project: "Valuation & Advisory — Internal Management Tool",
  summary:
    "Independently architected and built a full-stack automation platform for Cushman & Wakefield's Valuation & Advisory business, supporting the RAA and TAM verticals across 300+ active projects and 150+ users.",
  points: [
    "Built workflow automation modules for MIS Analysis, Cost Analysis, Approval Analysis, Escrow Reconciliation, Collection Mapping, and automated Word report generation — replacing manual processes with centralized, data-driven workflows.",
    "Engineered a Collection Mapping tool that auto-matches bank statements to projects using historical MIS data, cutting manual mapping effort from 3–4 hours to 10–15 minutes.",
    "Built an automated Word report generation pipeline, reducing report preparation time from 2–3 hours to 15–20 minutes.",
    "Implemented ML-driven anomaly detection to benchmark vendor-quoted pricing against historical records and flag deviations for review.",
    "Owned the complete SDLC solo — frontend and backend architecture, database design, API development, authentication, deployment, and production maintenance.",
  ],
  metrics: [
    { value: "95%", label: "faster collection mapping" },
    { value: "90%", label: "faster report generation" },
    { value: "150+", label: "active users" },
    { value: "300+", label: "projects supported" },
  ],
  stack: ["React", "FastAPI", "Python", "Firebase"],
};

export const projects = [
  {
    id: "documind",
    detail: "A",
    tag: "LLM + RAG",
    status: "Building",
    name: "DocuMind",
    subtitle: "AI Document Intelligence Assistant",
    description:
      "A retrieval-augmented system for asking natural-language questions over uploaded documents, with answers cited back to source pages — applying the same document-intelligence thinking used to automate report analysis at Cushman & Wakefield.",
    stack: ["FastAPI", "React", "ChromaDB", "OpenAI API", "PyMuPDF"],
    links: { live: null, code: null },
  },
  {
    id: "traya",
    detail: "B",
    tag: "AI + IoT",
    status: "Live",
    name: "TRAYA",
    subtitle: "Centralized Waste Management Platform",
    description:
      "AI-driven IoT platform for real-time waste tracking using Raspberry Pi and GPIO Zero. Flask/MongoDB backend with a PyTorch multimodal classification model deployed via Docker for automated waste segregation, plus a reward-based recycling system connecting users, collectors, and recyclers.",
    stack: ["Next.js", "Flask", "PyTorch", "MongoDB", "Docker"],
    links: { live: "https://www.sih-traya.duckdns.org/", code: "#" },
  },
  {
    id: "facial-recognition",
    detail: "C",
    tag: "Computer Vision",
    status: "Live",
    name: "Facial Recognition Attendance System",
    subtitle: "Real-time recognition pipeline",
    description:
      "Desktop attendance system using Haar Cascade for detection and LBPH for recognition, holding 95%+ accuracy across lighting and angle variation. Role-based admin/user access, automated attendance logging, and real-time voice notifications.",
    stack: ["Python", "OpenCV", "Tkinter", "Pandas", "NumPy"],
    links: { live: null, code: "#" },
  },
  {
    id: "e-dashboard",
    detail: "D",
    tag: "Full-Stack",
    status: "Live",
    name: "E-Dashboard",
    subtitle: "E-Commerce Admin Dashboard",
    description:
      "A full-stack e-commerce dashboard built on the MERN stack with secure card-based payment processing, protected-route authentication, and an admin panel for managing orders and inventory.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    links: { live: "https://e-dashboard-mz5d.vercel.app/", code: "https://github.com/AshishDevlekar/E-DASHBOARD" },
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["Python", "JavaScript (ES6+)", "SQL", "C++"],
  },
  {
    group: "Frameworks",
    items: ["React", "FastAPI", "Node.js", "Tailwind CSS"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "SQLite", "Firebase"],
  },
  {
    group: "Infra & DevOps",
    items: ["Docker", "Git", "Jupyter"],
  },
  {
    group: "Data & ML",
    items: ["Pandas", "NumPy", "OpenCV", "PyTorch", "EDA & Visualization"],
  },
];

export const certifications = [
  { name: "Artificial Intelligence & Machine Learning", issuer: "IBM SkillsBuild" },
  { name: "AIML Certification", issuer: "CSRBOX" },
];

export const education = {
  school: "Vasantdada Patil College of Engineering and Visual Arts",
  degree: "Bachelor of Engineering, Information Technology — Honours in AI & ML",
  period: "Aug 2021 — Jun 2025",
};
