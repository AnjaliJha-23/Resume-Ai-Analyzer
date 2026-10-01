export const INITIAL_RESUME_DATA = {
  id: "res-001",
  title: "Senior Full Stack Engineer Resume",
  updatedAt: "2026-09-28",
  templateId: "editorial-modern",
  personalInfo: {
    fullName: "Sarah Gomes",
    headline: "Senior Full Stack Engineer & Cloud Architect",
    email: "sarah@example.com",
    phone: "+91 98765 43210",
    location: "Bengaluru, India",
    website: "https://sarahgomes.dev",
    linkedin: "linkedin.com/in/sarah12",
    github: "github.com/sarahgomes"
  },
  summary: "Driven Full Stack Architect with 6+ years of experience designing high-throughput web applications, distributed systems, and AI-powered microservices. Passionate about crisp user interfaces, backend scalability, and automated CI/CD pipelines.",
  experience: [
    {
      id: "exp-1",
      company: "Nexus Technologies",
      position: "Lead Software Architect",
      location: "Bengaluru, IN",
      startDate: "2024-01",
      endDate: "Present",
      current: true,
      description: "Spearheaded frontend & backend architecture for a high-traffic SaaS platform serving 500k+ active users. Improved API latency by 42% through GraphQL caching and Redis queues."
    },
    {
      id: "exp-2",
      company: "Apex Systems",
      position: "Senior React Engineer",
      location: "Remote",
      startDate: "2021-06",
      endDate: "2023-12",
      current: false,
      description: "Built micro-frontend components using React, Next.js, and Tailwind CSS. Reduced bundle size by 35% and increased Lighthouse performance score from 68 to 98."
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "National Institute of Technology",
      degree: "B.Tech in Computer Science & Engineering",
      location: "India",
      startDate: "2017",
      endDate: "2021",
      gpa: "3.9 / 4.0"
    }
  ],
  skills: [
    { category: "Frontend", items: ["React 19", "Next.js", "TypeScript", "Vite", "Tailwind CSS", "Redux Toolkit"] },
    { category: "Backend & DB", items: ["Node.js", "Python", "FastAPI", "PostgreSQL", "Redis", "GraphQL"] },
    { category: "DevOps & Cloud", items: ["AWS (EC2, S3, Lambda)", "Docker", "Kubernetes", "CI/CD (GitHub Actions)"] }
  ],
  projects: [
    {
      id: "proj-1",
      name: "ResumeAI Engine",
      role: "Creator & Lead Dev",
      description: "Developed an editorial resume builder and ATS score analyzer with real-time feedback and keyword optimization."
    },
    {
      id: "proj-2",
      name: "CloudScale Monitor",
      role: "Open Source Contributor",
      description: "Distributed telemetry dashboard visualizing microservice throughput with under 5ms latency."
    }
  ],
  certifications: [
    "AWS Certified Solutions Architect – Associate",
    "Meta Senior Frontend Engineer Professional Certificate"
  ]
};

export const MOCK_RESUMES_LIST = [
  {
    id: "res-001",
    title: "Senior Full Stack Engineer",
    targetRole: "Lead Architect / Tech Lead",
    template: "Editorial Modern",
    lastModified: "2 hours ago",
    atsScore: 92,
    status: "Optimized"
  },
  {
    id: "res-002",
    title: "Frontend Engineer (React / Next.js)",
    targetRole: "Staff Frontend Engineer",
    template: "Executive Sans",
    lastModified: "3 days ago",
    atsScore: 86,
    status: "Draft"
  },
  {
    id: "res-003",
    title: "AI Product Designer & Developer",
    targetRole: "Senior UI/UX Engineer",
    template: "Tech Minimalist",
    lastModified: "1 week ago",
    atsScore: 89,
    status: "Optimized"
  }
];
