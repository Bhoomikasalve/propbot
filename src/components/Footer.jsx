import { useState } from "react";
// import { Home } from "lucide-react";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (email.includes("@")) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 2000);
    }
  };

  const footerStyles = {
    footer: {
      background: 'linear-gradient(to right, #1E3A8ACC, #1E3A8ACC)',
      color: 'white',
      padding: '80px 16px',
    },
    container: {
      maxWidth: '896px',
      margin: '0 auto',
    },
    mainSection: {
      textAlign: 'center',
      marginBottom: '64px',
    },
    heading: {
      fontSize: 'clamp(2.25rem, 5vw, 3rem)',
      fontWeight: 'bold',
      marginBottom: '24px',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '1.25rem',
      color: '#c7d2fe',
      marginBottom: '48px',
      maxWidth: '512px',
      margin: '0 auto 48px auto',
      lineHeight: '1.6',
    },
    inputContainer: {
      display: 'flex',
      alignItems: 'center',
      maxWidth: '448px',
      margin: '0 auto',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50px',
      padding: '4px',
      backdropFilter: 'blur(4px)',
    },
    input: {
      flex: '1',
      padding: '12px 24px',
      backgroundColor: '#e5e7eb',
      color: '#1f2937',
      borderRadius: '50px',
      border: 'none',
      outline: 'none',
      fontSize: '1rem',
    },
    button: {
      marginLeft: '8px',
      padding: '12px 32px',
      backgroundColor: '#3730a3',
      color: 'white',
      fontWeight: '600',
      borderRadius: '50px',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      fontSize: '1rem',
    },
    buttonHover: {
      backgroundColor: '#312e81',
    },
    buttonDisabled: {
      opacity: '0.7',
      cursor: 'not-allowed',
    },
    bottomSection: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '32px',
      borderTop: '1px solid rgba(165, 180, 252, 0.3)',
      gap: '24px',
    },
    logo: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '24px',
    },
    logoIcon: {
      width: '32px',
      height: '32px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: '12px',
    },
    logoText: {
      fontSize: '1.25rem',
      fontWeight: 'bold',
    },
    nav: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '32px',
      marginBottom: '24px',
    },
    navLink: {
      color: '#c7d2fe',
      textDecoration: 'none',
      fontSize: '1rem',
      fontWeight: '500',
      transition: 'color 0.2s ease',
    },
    navLinkHover: {
      color: 'white',
    },
    copyright: {
      color: '#c7d2fe',
      fontSize: '0.875rem',
    },
  };

  // Media query styles for desktop
  const desktopStyles = {
    bottomSection: {
      ...footerStyles.bottomSection,
      flexDirection: 'row',
      gap: '0',
    },
    logo: {
      ...footerStyles.logo,
      marginBottom: '0',
    },
    nav: {
      ...footerStyles.nav,
      justifyContent: 'flex-end',
      marginBottom: '0',
    },
  };

  return (
    <footer style={footerStyles.footer}>
      <div style={footerStyles.container}>
        {/* Main CTA Section */}
        <div style={footerStyles.mainSection}>
          <h1 style={footerStyles.heading}>
            Get in Touch with Us
          </h1>
          <p style={footerStyles.subtitle}>
            Subscribe now for exclusive <br />
            property insights and deals!
          </p>
          
          {/* Email Input */}
          <div style={footerStyles.inputContainer}>
            <input
              type="email"
              aria-label="Email address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={footerStyles.input}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitted}
              style={{
                ...footerStyles.button,
                ...(isSubmitted ? footerStyles.buttonDisabled : {}),
              }}
              onMouseOver={(e) => {
                if (!isSubmitted) {
                  e.target.style.backgroundColor = footerStyles.buttonHover.backgroundColor;
                }
              }}
              onMouseOut={(e) => {
                if (!isSubmitted) {
                  e.target.style.backgroundColor = footerStyles.button.backgroundColor;
                }
              }}
            >
              {isSubmitted ? "Done!" : "Submit"}
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div 
          style={window.innerWidth >= 768 ? desktopStyles.bottomSection : footerStyles.bottomSection}
        >
          {/* Logo */}
          <div style={window.innerWidth >= 768 ? desktopStyles.logo : footerStyles.logo}>
            <div style={footerStyles.logoIcon}>
              {/* <Home size={20} color="white" /> */}
            </div>
            <span style={footerStyles.logoText}>PropBot</span>
          </div>

          {/* Nav Links */}
          <nav style={window.innerWidth >= 768 ? desktopStyles.nav : footerStyles.nav}>
            {["For Sale", "Rentals", "New Projects", "Property News"].map(
              (link) => (
                <a
                  key={link}
                  href="#"
                  style={footerStyles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = footerStyles.navLinkHover.color;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = footerStyles.navLink.color;
                  }}
                >
                  {link}
                </a>
              )
            )}
          </nav>

          {/* Copyright */}
          <p style={footerStyles.copyright}>
            © 2025 PropBot. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;