import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { FileText, Sun, Moon, Menu, X } from "lucide-react";
import "../styles/navbar.css";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo">
          <div className="logo-icon">
            <FileText size={20} />
          </div>
          <span className="logo-text">ResumeAI</span>
        </a>

        {/* Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>How It Works</a>
          {/* <a href="#resources" onClick={() => setMobileMenuOpen(false)}>Resources</a> */}
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        </nav>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <button 
            className="theme-toggle-btn" 
            onClick={toggleTheme} 
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          
          <button className="login-btn">Log in</button>
          <button className="primary-btn">Get Started</button>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;