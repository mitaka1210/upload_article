import React from 'react';

const ErrorMessages = ({ errors }: { errors: string[] }) => {
 if (!errors || errors.length === 0) {
  return null;
 }

 return (
  <div>
   {errors.map((error: string, index: number) => (
    <p key={index} style={{ color: 'red' }}>
     {error}
    </p>
   ))}
  </div>
 );
};

export default ErrorMessages;
