import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedBy from "../components/TrustedBy";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import "../styles/howItWorks.css";

const Landing = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        
        {/* Split Section: How It Works & What Users Say */}
        <section id="how-it-works" className="split-showcase-section">
          <div className="container">
            <div className="split-grid">
              <HowItWorks />
              <Testimonials />
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
