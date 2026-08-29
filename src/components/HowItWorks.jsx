import { Upload, FileText, Sparkles, Download } from "lucide-react";
import "../styles/howItWorks.css";

const HowItWorks = () => {
  const steps = [
    {
      icon: Upload,
      title: "1. Upload Resume",
      description: "Upload your current resume in any format.",
    },
    {
      icon: FileText,
      title: "2. Add Job Description",
      description: "Paste the job description or add job link.",
    },
    {
      icon: Sparkles,
      title: "3. AI Analysis",
      description: "Our AI analyzes and tailors your resume.",
    },
    {
      icon: Download,
      title: "4. Download",
      description: "Get your optimized resume and apply with confidence.",
    },
  ];

  return (
    <div className="showcase-card how-it-works-card">
      <div className="showcase-card-header">
        <h3 className="showcase-title">How ResumeAI Works</h3>
      </div>

      <div className="process-timeline">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="process-step">
              <div className="step-icon-circle">
                <Icon size={20} />
              </div>
              <h4 className="step-title">{step.title}</h4>
              <p className="step-desc">{step.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
