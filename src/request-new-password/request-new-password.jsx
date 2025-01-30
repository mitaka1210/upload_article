import React, { useState } from 'react';
import axios from 'axios';

const RequestReset = () => {
 const [email, setEmail] = useState('');
 const [message, setMessage] = useState('');

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post('/api/request-reset', { email });
   setMessage(response.data.message);
  } catch (error) {
   setMessage('Error requesting password reset');
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" required />
   <button type="submit">Request Password Reset</button>
   {message && <p>{message}</p>}
  </form>
 );
};

export default RequestReset;
