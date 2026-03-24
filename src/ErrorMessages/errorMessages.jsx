import React from 'react';

// eslint-disable-next-line react/prop-types
const ErrorMessages = ({ errors }) => {
 // eslint-disable-next-line react/prop-types
 if (!errors || errors.length === 0) {
  return null;
 }

 return (
  <div>
   {/* eslint-disable-next-line react/prop-types */}
   {errors.map((error, index) => (
    <p key={index} style={{ color: 'red' }}>
     {error}
    </p>
   ))}
  </div>
 );
};

export default ErrorMessages;
