import { useState } from "react";
import { useAuth } from "../services/auth";
import { useNavigate } from "react-router-dom";
import loginImage from "../assets/images/property1.png";
import { FaApple, FaGoogle, FaFacebookF, FaEnvelope, FaLock, FaArrowLeft } from "react-icons/fa";
import "./Login.css"; // custom CSS

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      setError("Failed to log in: " + error.message);
    }
    setLoading(false);
  };

  return (
    <div className="login-container">
      {/* Header */}
      {/* <div className="login-header">
        <button onClick={() => navigate("/")} className="back-btn">
          <FaArrowLeft /> Back to Homepage
        </button>
        <div className="logo">🏠 PropBot</div>
        <button onClick={() => navigate("/about")} className="about-btn">
          About Us
        </button>
      </div> */}

      {/* Card */}
      <div className="login-card">
        {/* Left Form */}
        <div className="login-form">
          <h2>Log In</h2>
          {error && <div className="error-msg">{error}</div>}

          <form onSubmit={handleSubmit}>
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

            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember Me
              </label>
              <a href="#" className="forgot-link">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="login-btn" disabled={loading}>
              Log In
            </button>
          </form>

          <div className="divider">
            <span>OR CONTINUE WITH</span>
          </div>

          <div className="social-icons">
            <button><FaApple /></button>
            <button className="fb"><FaFacebookF /></button>
            <button className="google"><FaGoogle /></button>
          </div>

          <p className="signup-link">
            Doesn’t have an account?{" "}
            <a href="/signup">Create One</a>
          </p>
        </div>

        {/* Right Image */}
        <div className="login-image">
          <img src={loginImage} alt="Property" />
        </div>
      </div>
    </div>
  );
}

export default Login;
