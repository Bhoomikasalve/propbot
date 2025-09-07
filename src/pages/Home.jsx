import { useEffect, useState, useRef } from "react";
import "./Home.css";
import heroImage from "../assets/images/hero-bg.png";
import { getProperties } from "../services/api";

function Home() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProperties();
        setProperties(data.slice(0, 8)); // first 8 properties
      } catch (err) {
        console.error("Error fetching properties:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  // Format price with commas
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  // Generate a random price since it's not in the API data
  const generatePrice = () => {
    const prices = [450000, 320000, 550000, 780000, 390000, 920000, 410000, 670000];
    return prices[Math.floor(Math.random() * prices.length)];
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay">
          <div className="hero-content">
            <h1>Find Your Dream Home in One Click!</h1>
            <p>Discover, Buy or Rent Verified Properties with Ease</p>

            {/* Search Bar */}
            <div className="search-bar">
              <div className="search-location">
                <i className="fas fa-search"></i>
                <input type="text" placeholder="Search Location..." />
              </div>
              <button className="btn-outline">List Your Property</button>
            </div>

            {/* Filter Bar */}
            <div className="filter-bar">
              <select>
                <option>For Rent</option>
                <option>For Sale</option>
              </select>
              <select>
                <option>House</option>
                <option>Apartment</option>
                <option>Commercial</option>
              </select>
              <select>
                <option>Indonesia</option>
                <option>USA</option>
                <option>UK</option>
              </select>
              <button className="btn-primary">Find Property</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">What We Do?</h2>
          <p className="section-subtitle">
            Helping you find, buy, and rent the perfect property with ease.
          </p>
          <div className="services-grid">
            <div className="service-card">
              <i className="fas fa-home service-icon"></i>
              <h3>Buy & Sell Properties</h3>
              <p>Find verified homes and connect with trusted sellers.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-key service-icon"></i>
              <h3>Find Rental Homes</h3>
              <p>Browse through thousands of rental options suited to your needs.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-robot service-icon"></i>
              <h3>Smart AI Property Search</h3>
              <p>Get instant recommendations based on your search behavior.</p>
            </div>
            <div className="service-card">
              <i className="fas fa-lock service-icon"></i>
              <h3>Safe & Secure Transactions</h3>
              <p>Buy and rent with confidence through our verified process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Property Showcase with Scroll */}
      <section className="property-showcase">
        
        <div className="container">
        <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">Best Properties Available For Sale</h1>
          <p className="subtitle">Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!</p>
        </div>
        <button className="view-more-btn">View More Properties</button>
      </div>          
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading properties...</p>
            </div>
          ) : (
            <div className="scroll-wrapper">
              <button className="scroll-btn left" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="properties-scroll" ref={scrollRef}>
                {properties.map((property) => (
                  <div key={property.id} className="property-card">
                    <div className="property-image-container">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="property-img"
                      />
                      <div className="property-price-overlay">
                        {formatPrice(generatePrice())}
                      </div>
                    </div>
                    <div className="property-content">
                      <div className="property-header">
                        <div className="property-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{property.buildingNumber} {property.cardinalDirection} {property.city}, {property.state}</span>
                        </div>
                        <div className="property-rating">
                          <i className="fas fa-star"></i>
                          <span>⭐4.5/5</span>
                        </div>
                      </div>
                      <h3 className="property-title">{property.name}</h3>
                      <p className="property-description">
                        Beautiful property in {property.city} with modern amenities.
                      </p>
                      <div className="property-details">
                        <span><i className="fas fa-bed"></i> {Math.floor(Math.random() * 4) + 2} Beds</span>
                        <span><i className="fas fa-bath"></i> {Math.floor(Math.random() * 3) + 1} Baths</span>
                        <span><i className="fas fa-ruler"></i> {Math.floor(Math.random() * 2000) + 1000} sqft</span>
                      </div>
                      <div className="property-footer">
                        <button className="buy-now-btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="scroll-btn right" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
          <div className="header-section">
        <div className="header-content">
          <h1 className="main-title">Find The Perfect Rental Home</h1>
          <p className="subtitle">Browse our top-rated properties for sale, featuring premium listings tailored to your needs. Find your dream home today!</p>
        </div>
        <button className="view-more-btn">View More Properties</button>
      </div>          
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              <p>Loading properties...</p>
            </div>
          ) : (
            <div className="scroll-wrapper">
              <button className="scroll-btn left" onClick={scrollLeft}>
                <i className="fas fa-chevron-left"></i>
              </button>

              <div className="properties-scroll" ref={scrollRef}>
                {properties.map((property) => (
                  <div key={property.id} className="property-card">
                    <div className="property-image-container">
                      <img
                        src={property.image}
                        alt={property.name}
                        className="property-img"
                      />
                      <div className="property-price-overlay">
                        {formatPrice(generatePrice())}
                      </div>
                    </div>
                    <div className="property-content">
                      <div className="property-header">
                        <div className="property-location">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{property.buildingNumber} {property.cardinalDirection} {property.city}, {property.state}</span>
                        </div>
                        <div className="property-rating">
                          <i className="fas fa-star"></i>
                          <span>⭐4.5/5</span>
                        </div>
                      </div>
                      <h3 className="property-title">{property.name}</h3>
                      <p className="property-description">
                        Beautiful property in {property.city} with modern amenities.
                      </p>
                      <div className="property-details">
                        <span><i className="fas fa-bed"></i> {Math.floor(Math.random() * 4) + 2} Beds</span>
                        <span><i className="fas fa-bath"></i> {Math.floor(Math.random() * 3) + 1} Baths</span>
                        <span><i className="fas fa-ruler"></i> {Math.floor(Math.random() * 2000) + 1000} sqft</span>
                      </div>
                      <div className="property-footer">
                        <button className="buy-now-btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button className="scroll-btn right" onClick={scrollRight}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;