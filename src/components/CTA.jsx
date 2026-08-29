import { Rocket } from "lucide-react";
import "../styles/cta.css";

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-banner-card">
          <div className="cta-left-content">
            <div className="cta-rocket-box">
              <Rocket size={26} />
            </div>
            <div className="cta-text-group">
              <h2 className="cta-title">Ready to Land Your Dream Job?</h2>
              <p className="cta-subtitle">
                Join thousands of job seekers who are getting more interviews with ResumeAI.
              </p>
            </div>
          </div>

          <div className="cta-action-group">
            <button className="cta-btn-primary" type="button">
              Get Started for free
            </button>
            <span className="cta-subtext">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
