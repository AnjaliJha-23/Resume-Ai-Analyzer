export const MOCK_ANALYSIS_DATA = {
  overallScore: 89,
  atsMatch: 92,
  contentQuality: 86,
  formattingScore: 94,
  keywordMatch: 88,
  targetJobTitle: "Senior Full Stack Engineer",
  companyBenchmark: "Senior Engineering Benchmark (Sample Data)",
  strengths: [
    "Quantified achievements present in 80% of experience bullet points",
    "Clean single-column layout optimized for ATS parser bots",
    "Strong technical taxonomy covering frontend, backend, and cloud DevOps",
    "Clear education and professional certification credentials"
  ],
  improvements: [
    {
      type: "critical",
      section: "Keywords",
      title: "Missing core system design keywords",
      description: "Job descriptions for Senior roles heavily favor keywords like 'Microservices', 'System Design', and 'Event-Driven Architecture'."
    },
    {
      type: "recommended",
      section: "Impact",
      title: "Add measurable revenue or user impact metrics",
      description: "Enhance project descriptions with quantifiable percentages (e.g., 'Increased retention by 18%')."
    },
    {
      type: "minor",
      section: "Summary",
      title: "Shorten professional executive summary",
      description: "Keep executive summary strictly between 3-4 lines for optimal recruiter scan rate."
    }
  ],
  missingKeywords: [
    { word: "System Design", importance: "High", frequency: "14 sample ads" },
    { word: "GraphQL", importance: "High", frequency: "9 sample ads" },
    { word: "CI/CD Pipelines", importance: "Medium", frequency: "11 sample ads" },
    { word: "Kubernetes", importance: "Medium", frequency: "8 sample ads" },
    { word: "Microservices", importance: "High", frequency: "12 sample ads" },
    { word: "Redis Caching", importance: "Low", frequency: "5 sample ads" }
  ],
  foundKeywords: [
    "React 19", "Next.js", "Node.js", "TypeScript", "Python", "FastAPI", "AWS", "Docker", "PostgreSQL"
  ],
  bulletSuggestions: [
    {
      original: "Built frontend components using React and Next.js.",
      improved: "Engineered 25+ reusable React micro-frontend components, accelerating feature deployment by 40%.",
      impactGain: "+12% ATS score"
    },
    {
      original: "Improved API latency through caching.",
      improved: "Spearheaded GraphQL & Redis caching layer implementation, cutting p99 API response latency by 42%.",
      impactGain: "+18% ATS score"
    }
  ]
};
