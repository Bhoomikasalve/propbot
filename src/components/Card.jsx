// src/components/Card.jsx

function Card({ property }) {
  return (
    <div className="property-card">
      <div className="property-image">
        <img src={property.image} alt={property.title} />
        <div className="property-price">{property.price}</div>
      </div>
      <div className="property-content">
        <h3>{property.title}</h3>
        <p className="property-address">{property.address}</p>
        <div className="property-details">
          <span><i className="fas fa-bed"></i> {property.beds} Beds</span>
          <span><i className="fas fa-bath"></i> {property.baths} Baths</span>
          <span><i className="fas fa-ruler-combined"></i> {property.area}</span>
        </div>
        <button className="property-btn">View Details</button>
      </div>
    </div>
  );
}

export default Card;