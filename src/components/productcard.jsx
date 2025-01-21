// write product card here
import React from 'react';
import ViewProductButton from './button.jsx'; // Adjust the path if necessary

const Productcard = () => {
  // Static dummy data for the product details
  const productImage =
    'https://static.toiimg.com/thumb/msid-113193500,width-400,resizemode-4/113193500.jpg';
  const productName = 'Mobile';
  const price = '$30';

  const cardStyle = {
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  };

  const titleStyle = {
    fontSize: '18px',
    margin: '16px 0 8px',
  };

  const priceStyle = {
    fontSize: '16px',
    color: '#333',
    marginBottom: '16px',
  };

  return (
    <div style={cardStyle}>
      <img src={productImage} alt="Product" style={imageStyle} />
      <h2 style={titleStyle}>{productName}</h2>
      <p style={priceStyle}>{price}</p>
      <ViewProductButton />
    </div>
  );
};

export default Productcard;
