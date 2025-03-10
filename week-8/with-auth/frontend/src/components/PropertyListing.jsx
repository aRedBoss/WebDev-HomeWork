/* eslint-disable react/prop-types */
const PropertyListing = ({
  title,
  type,
  description,
  price,
  location: { address, city, state, zipCode },
  squareFeet,
  yearBuilt,
}) => {
  return (
    <div className="property-preview">
      <h2>{title}</h2>
      <p>Type: {type}</p>
      <p>Description: {description}</p>
      <p>Address: {address}, {city}, {state} {zipCode}</p>
      <p>Price: ${price}</p>
      <p>Square Feet: {squareFeet} sq ft</p>
      <p>Year Built: {yearBuilt}</p>
    </div>
  );
};

export default PropertyListing;
