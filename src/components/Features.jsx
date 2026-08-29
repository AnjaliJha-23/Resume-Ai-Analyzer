import { 
  FileEdit, 
  Target, 
  Sparkles, 
  BarChart3, 
  Download, 
  History 
} from "lucide-react";
import "../styles/features.css";

const Features = () => {
  const featuresList = [
    {
      icon: FileEdit,
      iconColorClass: "blue",
      title: "AI Resume Tailoring",
      description: "Tailor your resume to any job description instantly.",
    },
    {
      icon: Target,
      iconColorClass: "green",
      title: "ATS Optimization",
      description: "Beat ATS filters with keyword-optimized content.",
    },
    {
      icon: Sparkles,
      iconColorClass: "purple",
      title: "Smart Suggestions",
      description: "Get AI suggestions to improve your resume.",
    },
    {
      icon: BarChart3,
      iconColorClass: "amber",
      title: "Match Score",
      description: "Know how well your resume matches the job.",
    },
    {
      icon: Download,
      iconColorClass: "cyan",
      title: "Instant Export",
      description: "Download in multiple formats. Clean & professional.",
    },
    {
      icon: History,
      iconColorClass: "emerald",
      title: "Resume History",
      description: "Track and manage all your resume versions.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="features-header">
          <h2 className="features-title">Powerful Features to Get You Hired</h2>
        </div>

        <div className="features-grid">
          {featuresList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="feature-card">
                <div className={`feature-icon-wrapper ${item.iconColorClass}`}>
                  <Icon size={22} />
                </div>
                <h3 className="feature-name">{item.title}</h3>
                <p className="feature-desc">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
