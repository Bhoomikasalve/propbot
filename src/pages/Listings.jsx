import { useState, useEffect } from "react";
import { ChevronDown, MapPin, Heart, Eye, Phone } from "lucide-react";
import { getProperties } from "../services/api";
import heroImage from "../assets/images/hero-bg.png";

function Listings() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [searchFilters, setSearchFilters] = useState({
    type: "For Sale",
    property: "Apartment",
    location: "Indonesia",
  });

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await getProperties();
        setProperties(data);
        setFilteredProperties(data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setFilteredProperties(properties);
    } else {
      const filtered = properties.filter((p) => p.type === filter);
      setFilteredProperties(filtered);
    }
  }, [filter, properties]);

  const handleFilterChange = (filterName, value) => {
    setSearchFilters((prev) => ({
      ...prev,
      [filterName]: value,
    }));
  };

  const styles = {
    container: {
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
    },
    loadingContainer: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#f9fafb",
    },
    loadingContent: {
      textAlign: "center",
    },
    spinner: {
      animation: "spin 1s linear infinite",
      borderRadius: "50%",
      height: "48px",
      width: "48px",
      borderWidth: "2px",
      borderStyle: "solid",
      borderColor: "transparent transparent #2563eb transparent",
      margin: "0 auto 16px auto",
    },
    loadingText: {
      color: "#4b5563",
    },
    heroSection: {
      position: "relative",
      height: "700px",
      backgroundImage: `url(${heroImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      borderRadius: "24px",
      margin: "16px",
      marginTop: "16px",
      overflow: "hidden",
    },
    heroContent: {
      position: "relative",
      zIndex: 10,
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center", // Center horizontally
      padding: "32px 48px",
      textAlign: "center", // Center text alignment
    },
    heroTextContainer: {
      maxWidth: "800px", // Increased max width for better centering
      width: "100%", // Take full width up to max-width
    },
    heroTitle: {
      fontSize: "clamp(2rem, 5vw, 3rem)",
      fontWeight: "bold",
      color: "white",
      marginBottom: "12px",
      lineHeight: "1.2",
      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
    },
    heroSubtitle: {
      fontSize: "1.125rem",
      color: "rgba(255, 255, 255, 0.9)",
      marginBottom: "32px",
      lineHeight: "1.6",
      textShadow: "0 1px 2px rgba(0,0,0,0.3)",
    },
    searchContainer: {
      backgroundColor: "white",
      borderRadius: "50px",
      padding: "8px",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      maxWidth: "1024px",
      width: "100%", // Take full width up to max-width
    },
    searchFilters: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      flexWrap: "wrap",
      justifyContent: "center", // Center the filter elements
    },
    dropdownContainer: {
      flex: "1",
      minWidth: "120px",
    },
    dropdown: {
      width: "100%",
      padding: "12px 16px",
      backgroundColor: "#f3f4f6",
      border: "0",
      borderRadius: "50px",
      color: "#374151",
      fontSize: "0.875rem",
      fontWeight: "500",
      appearance: "none",
      cursor: "pointer",
      outline: "none",
    },
    dropdownFocus: {
      backgroundColor: "#e5e7eb",
    },
    chevronIcon: {
      position: "absolute",
      right: "12px",
      top: "50%",
      transform: "translateY(-50%)",
      width: "16px",
      height: "16px",
      color: "#6b7280",
      pointerEvents: "none",
    },
    searchButton: {
      padding: "12px 32px",
      backgroundColor: "#1d4ed8",
      color: "white",
      fontWeight: "600",
      borderRadius: "50px",
      border: "none",
      cursor: "pointer",
      whiteSpace: "nowrap",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: "all 0.2s ease",
    },
    searchButtonHover: {
      backgroundColor: "#1e40af",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    },
    propertiesSection: {
      padding: "48px 16px",
    },
    propertiesContainer: {
      maxWidth: "1280px",
      margin: "0 auto",
    },
    sectionTitle: {
      fontSize: "1.875rem",
      fontWeight: "bold",
      color: "#111827",
      marginBottom: "32px",
    },
    propertiesGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "32px",
    },
    propertyCard: {
      backgroundColor: "white",
      borderRadius: "24px",
      overflow: "hidden",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: "all 0.3s ease",
    },
    propertyCardHover: {
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    propertyImage: {
      position: "relative",
      height: "240px",
      overflow: "hidden",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform 0.5s ease",
    },
    imageHover: {
      transform: "scale(1.05)",
    },
    heartButton: {
      position: "absolute",
      top: "16px",
      right: "16px",
      width: "40px",
      height: "40px",
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      backdropFilter: "blur(4px)",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    heartButtonHover: {
      backgroundColor: "white",
    },
    propertyDetails: {
      padding: "24px",
    },
    locationContainer: {
      display: "flex",
      alignItems: "center",
      color: "#4b5563",
      marginBottom: "12px",
    },
    locationText: {
      fontSize: "0.875rem",
      fontWeight: "500",
    },
    eyeButton: {
      marginLeft: "auto",
      width: "32px",
      height: "32px",
      backgroundColor: "#dbeafe",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    eyeButtonHover: {
      backgroundColor: "#bfdbfe",
    },
    propertyTitle: {
      fontSize: "1.125rem",
      fontWeight: "500",
      color: "#111827",
      marginBottom: "16px",
      lineHeight: "1.5",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      overflow: "hidden",
    },
    ownerInfo: {
      color: "#6b7280",
      fontSize: "0.875rem",
      marginBottom: "16px",
    },
    ownerName: {
      fontWeight: "600",
    },
    bottomSection: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    phoneButton: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#2563eb",
      fontWeight: "500",
      background: "none",
      border: "none",
      cursor: "pointer",
      textDecoration: "none",
    },
    phoneButtonHover: {
      textDecoration: "underline",
    },
    knowMoreButton: {
      padding: "8px 20px",
      backgroundColor: "#1d4ed8",
      color: "white",
      fontWeight: "500",
      borderRadius: "12px",
      border: "none",
      cursor: "pointer",
      transition: "all 0.2s ease",
    },
    knowMoreButtonHover: {
      backgroundColor: "#1e40af",
    },
    dateText: {
      fontSize: "0.75rem",
      color: "#9ca3af",
      marginTop: "12px",
    },
  };

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <div style={styles.loadingContent}>
          <div style={styles.spinner}></div>
          <p style={styles.loadingText}>Loading properties...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heroTextContainer}>
            <h1 style={styles.heroTitle}>Featured Properties For Sale</h1>
            <p style={styles.heroSubtitle}>
              Discover, Buy, or Rent Verified Properties with Ease
            </p>

            {/* Search Filters */}
            <div style={styles.searchContainer}>
              <div style={styles.searchFilters}>
                {/* Type Dropdown */}
                <div style={styles.dropdownContainer}>
                  <div style={{ position: "relative" }}>
                    <select
                      style={styles.dropdown}
                      value={searchFilters.type}
                      onChange={(e) => handleFilterChange("type", e.target.value)}
                      onFocus={(e) =>
                        (e.target.style.backgroundColor =
                          styles.dropdownFocus.backgroundColor)
                      }
                      onBlur={(e) =>
                        (e.target.style.backgroundColor =
                          styles.dropdown.backgroundColor)
                      }
                    >
                      <option>For Sale</option>
                      <option>For Rent</option>
                      <option>For Buying</option>
                    </select>
                    <ChevronDown style={styles.chevronIcon} />
                  </div>
                </div>

                {/* Property Dropdown */}
                <div style={styles.dropdownContainer}>
                  <div style={{ position: "relative" }}>
                    <select
                      style={styles.dropdown}
                      value={searchFilters.property}
                      onChange={(e) =>
                        handleFilterChange("property", e.target.value)
                      }
                      onFocus={(e) =>
                        (e.target.style.backgroundColor =
                          styles.dropdownFocus.backgroundColor)
                      }
                      onBlur={(e) =>
                        (e.target.style.backgroundColor =
                          styles.dropdown.backgroundColor)
                      }
                    >
                      <option>Apartment</option>
                      <option>House</option>
                      <option>Villa</option>
                      <option>Condo</option>
                    </select>
                    <ChevronDown style={styles.chevronIcon} />
                  </div>
                </div>

                {/* Location Dropdown */}
                <div style={styles.dropdownContainer}>
                  <div style={{ position: "relative" }}>
                    <select
                      style={styles.dropdown}
                      value={searchFilters.location}
                      onChange={(e) =>
                        handleFilterChange("location", e.target.value)
                      }
                      onFocus={(e) =>
                        (e.target.style.backgroundColor =
                          styles.dropdownFocus.backgroundColor)
                      }
                      onBlur={(e) =>
                        (e.target.style.backgroundColor =
                          styles.dropdown.backgroundColor)
                      }
                    >
                      <option>Indonesia</option>
                      <option>India</option>
                      <option>USA</option>
                      <option>UK</option>
                    </select>
                    <ChevronDown style={styles.chevronIcon} />
                  </div>
                </div>

                {/* Find Property Button */}
                <button
                  style={styles.searchButton}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor =
                      styles.searchButtonHover.backgroundColor;
                    e.target.style.boxShadow =
                      styles.searchButtonHover.boxShadow;
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor =
                      styles.searchButton.backgroundColor;
                    e.target.style.boxShadow =
                      styles.searchButton.boxShadow;
                  }}
                >
                  Find Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Section */}
      <div style={styles.propertiesSection}>
        <div style={styles.propertiesContainer}>
          <h2 style={styles.sectionTitle}>Featured Property</h2>

          <div style={styles.propertiesGrid}>
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                style={styles.propertyCard}
                onMouseOver={(e) => {
                  e.currentTarget.style.boxShadow =
                    styles.propertyCardHover.boxShadow;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.boxShadow =
                    styles.propertyCard.boxShadow;
                }}
              >
                {/* Property Image */}
                <div style={styles.propertyImage}>
                  <img
                    src={property.image}
                    alt={property.name}
                    style={styles.image}
                    onMouseOver={(e) => {
                      e.target.style.transform =
                        styles.imageHover.transform;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  />
                  <button
                    style={styles.heartButton}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor =
                        styles.heartButtonHover.backgroundColor;
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor =
                        styles.heartButton.backgroundColor;
                    }}
                  >
                    <Heart size={20} color="#4b5563" />
                  </button>
                </div>

                {/* Property Details */}
                <div style={styles.propertyDetails}>
                  <div style={styles.locationContainer}>
                    <MapPin
                      size={16}
                      color="#6b7280"
                      style={{ marginRight: "8px" }}
                    />
                    <span style={styles.locationText}>
                      {property.city}, {property.state}, {property.country}
                    </span>
                    <button
                      style={styles.eyeButton}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.eyeButtonHover.backgroundColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.eyeButton.backgroundColor;
                      }}
                    >
                      <Eye size={16} color="#2563eb" />
                    </button>
                  </div>

                  <h3 style={styles.propertyTitle}>{property.name}</h3>

                  <p style={styles.ownerInfo}>
                    Owner:{" "}
                    <span style={styles.ownerName}>
                      {property.ownerName}
                    </span>
                  </p>

                  <div style={styles.bottomSection}>
                    <button
                      style={styles.phoneButton}
                      onMouseOver={(e) => {
                        e.target.style.textDecoration =
                          styles.phoneButtonHover.textDecoration;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.textDecoration = "none";
                      }}
                    >
                      <Phone size={16} />
                      {property.contactNumber}
                    </button>
                    <button
                      style={styles.knowMoreButton}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.knowMoreButtonHover.backgroundColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.knowMoreButton.backgroundColor;
                      }}
                    >
                      Know More
                    </button>
                  </div>

                  <p style={styles.dateText}>
                    Added:{" "}
                    {new Date(property.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Listings;