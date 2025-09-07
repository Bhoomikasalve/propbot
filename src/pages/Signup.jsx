import { useState } from "react";
import { useAuth } from "../services/auth";
import { useNavigate, Link } from "react-router-dom";
import loginImage from "../assets/images/property1.png";
import { FaEnvelope, FaLock, FaUser, FaArrowLeft } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }

    if (password.length < 6) {
      return setError("Password should be at least 6 characters");
    }

    try {
      setLoading(true);
      await signup(email, password);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error);
      setError("Failed to create account: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Header */}
      {/* <div className="signup-header">
        <button onClick={() => navigate("/")} className="back-btn">
          <FaArrowLeft /> Back to Homepage
        </button>
        <div className="logo">🏠 PropBot</div>
        <button onClick={() => navigate("/about")} className="about-btn">
          About Us
        </button>
      </div> */}

      {/* Card */}
      <div className="signup-card">
        {/* Left Form */}
        <div className="signup-form">
          <h2>Create new account</h2>
          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
            <label>Name</label>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                value={name}
                placeholder="Enter Your Full Name"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <label>Email Address</label>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                value={email}
                placeholder="Enter Your Email Id"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <label>Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                value={password}
                placeholder="Enter Your Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <label>Confirm Password</label>
            <div className="input-group">
              <FaLock className="input-icon" />
              <input
                type="password"
                value={confirmPassword}
                placeholder="Confirm Your Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <button type="submit" disabled={loading} className="signup-btn">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="login-link">
            Already have an account? <Link to="/login">Log In</Link>
          </p>
        </div>

        {/* Right Image */}
        <div className="signup-image">
          <img src={loginImage} alt="Property" />
        </div>
      </div>
    </div>
  );
}

export default Signup;
