import { Star, ArrowRight } from "lucide-react";
import "../styles/howItWorks.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rohit Sharma",
      role: "Software Engineer",
      quote: "ResumeAI helped me rebuild my resume perfectly for the role I wanted. Got interviews!",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Priya Mehta",
      role: "Data Analyst",
      quote: "The ATS score improvement is real. My interview rate increased by 3x!",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    },
    {
      name: "Arjun Nair",
      role: "Product Manager",
      quote: "Clean interface, powerful results. Highly recommend to anyone serious about their career.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="showcase-card testimonials-card">
      <div className="showcase-card-header">
        <h3 className="showcase-title">What Users Say</h3>
        <a href="#reviews" className="view-all-link">
          <span>View all reviews</span>
          <ArrowRight size={14} />
        </a>
      </div>

      <div className="testimonials-row">
        {reviews.map((review, index) => (
          <div key={index} className="testimonial-mini-card">
            <div>
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#F59E0B" stroke="#F59E0B" />
                ))}
              </div>
              <p className="testimonial-quote">"{review.quote}"</p>
            </div>

            <div className="testimonial-author">
              <img
                src={review.avatar}
                alt={review.name}
                className="author-avatar"
              />
              <div className="author-info">
                <span className="author-name">{review.name}</span>
                <span className="author-role">{review.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
