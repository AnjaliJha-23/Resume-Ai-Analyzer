const TrustedBy = () => {
  return (
    <section className="trusted-by-section">
      <div className="container">
        <p className="trusted-by-title">
          Trusted by ambitious students & professionals from
        </p>
        <div className="trusted-by-logos">
          {/* Google */}
          <div className="company-logo google-logo">
            <span className="g-blue">G</span>
            <span className="g-red">o</span>
            <span className="g-yellow">o</span>
            <span className="g-blue">g</span>
            <span className="g-green">l</span>
            <span className="g-red">e</span>
          </div>

          {/* Microsoft */}
          <div className="company-logo ms-logo">
            <div className="ms-icon-grid">
              <span className="ms-red"></span>
              <span className="ms-green"></span>
              <span className="ms-blue"></span>
              <span className="ms-yellow"></span>
            </div>
            <span className="ms-text">Microsoft</span>
          </div>

          {/* Amazon */}
          <div className="company-logo amazon-logo">
            <span className="amazon-text">amazon</span>
            <span className="amazon-smile"></span>
          </div>

          {/* Adobe */}
          <div className="company-logo adobe-logo">
            <span className="adobe-badge">A</span>
            <span className="adobe-text">Adobe</span>
          </div>

          {/* Deloitte */}
          <div className="company-logo deloitte-logo">
            <span className="deloitte-text">Deloitte<span className="deloitte-dot">.</span></span>
          </div>

          {/* Samsung */}
          <div className="company-logo samsung-logo">
            <span className="samsung-text">SAMSUNG</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
