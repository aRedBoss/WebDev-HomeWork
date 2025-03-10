/* eslint-disable react/prop-types */
import PropertyListing from "./PropertyListing";
import { Link } from "react-router-dom";

const PropertyListings = ({ properties }) => {
  return (
    <div className="property-list">
      {properties.map((property) => (
        <div className="property-preview" key={property._id}>
          <Link to={`/properties/${property._id}`}>
            <PropertyListing
              title={property.title}
              type={property.type}
              description={property.description}
              price={property.price}
              location={property.location}
              squareFeet={property.squareFeet}
              yearBuilt={property.yearBuilt}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PropertyListings;
