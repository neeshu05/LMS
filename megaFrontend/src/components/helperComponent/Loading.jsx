import React from 'react';

const Loader = () => {
  const loaderStyle = {
    border: '4px solid #f3f3f3', /* Light gray border */
    borderTop: '4px solid #3498db', /* Blue border for animation */
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite', /* Rotation animation */
    margin: '20px auto', /* Center the loader */
  };

  return (
    <div style={loaderStyle}></div>
  );
};

export default Loader;
