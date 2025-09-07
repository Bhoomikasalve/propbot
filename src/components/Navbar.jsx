import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../services/auth';
import './Navbar.css';

function Navbar() {
  const { currentUser, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    logout();
    // Close mobile menu after logout
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className="navbar bg-white">
      <div className="nav-container">
        {/* Logo with Image */}
        <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>
          <img 
            src="https://i.ibb.co/cXYPJTgg/Screenshot-from-2025-09-06-15-22-51-removebg-preview.png" 
            alt="PropBot Logo" 
            className="logo-image" 
          />
          <span className="logo-text"></span>
        </Link>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/listings?type=rent" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Rent</Link>
          <Link to="/about" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
          <Link to="/contact" className="nav-link" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
        </div>

        {/* User Actions */}
        <div className="nav-actions">
          {currentUser ? (
            <div className="user-menu">
              <span className="user-welcome">Welcome, {currentUser.email}</span>
              <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar; 