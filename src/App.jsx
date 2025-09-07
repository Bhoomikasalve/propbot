// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './services/auth';
import Navbar from './components/Navbar'; // Fixed: Correct component name
import Footer from './components/Footer'; // Fixed: Correct component name
import Home from './pages/Home';
import Listings from './pages/Listings';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar /> {/* Now using the component */}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer /> {/* Now using the component */}
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;