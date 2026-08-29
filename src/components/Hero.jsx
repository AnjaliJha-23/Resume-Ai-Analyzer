import { Sparkles, UploadCloud, PlayCircle } from "lucide-react";
import DashboardPreview from "./DashboardPreview";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Copy & Actions */}
          <div className="hero-content">
            {/* Pill Badge */}
            <div className="hero-badge">
              <Sparkles size={14} />
              <span>AI-Powered • ATS-Optimized • Interview-Ready</span>
            </div>

            {/* Title */}
            <h1 className="hero-title">
              Land <span className="hero-title-highlight">Interviews,</span><br />
              Not Just Applications.
            </h1>

            {/* Subtitle */}
            <p className="hero-description">
              ResumeAI tailors your resume to any job description, optimizes it for ATS filters, and helps you stand out to recruiters.
            </p>

            {/* CTAs */}
            <div className="hero-actions">
              <button className="btn-upload" type="button">
                <UploadCloud size={20} />
                <span>Upload Your Resume</span>
              </button>
              <button className="btn-demo" type="button">
                <PlayCircle size={20} />
                <span>Watch Demo</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="hero-social-proof">
              <div className="avatar-stack">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                  alt="User 1" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" 
                  alt="User 2" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" 
                  alt="User 3" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80" 
                  alt="User 4" 
                />
              </div>
              <span className="social-proof-text">
                Trusted by <strong>12,000+</strong> job seekers across 90+ countries
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Mockup Dashboard */}
          <div className="hero-preview-wrapper">
            <DashboardPreview />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
