// src/components/PropertyShowcase.jsx
import { useState, useEffect, useRef } from 'react';
import { getProperties } from '../services/api';
import Card from './Card';
import './PropertyShowcase.css';

function PropertyShowcase() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        setLoading(true);
        const data = await getProperties();
        setProperties(data.slice(0, 7)); // Get first 7 properties
      } catch (err) {
        setError(err.message);
        console.error('Error fetching properties:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="property-showcase">
        <div className="container">
          <h2 className="section-title">Best Properties Available For Sale</h2>
          <div className="loading">Loading properties...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="property-showcase">
        <div className="container">
          <h2 className="section-title">Best Properties Available For Sale</h2>
          <div className="error">Error: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="property-showcase">
      <div className="container">
        <h2 className="section-title">Best Properties Available For Sale</h2>
        
        <div className="scroll-controls">
          <button className="scroll-btn left" onClick={scrollLeft} aria-label="Scroll left">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="scroll-btn right" onClick={scrollRight} aria-label="Scroll right">
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>

        <div className="properties-scroll-container" ref={scrollContainerRef}>
          <div className="properties-grid">
            {properties.map(property => (
              <Card key={property.id} property={property} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyShowcase;