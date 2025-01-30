import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const ResetPassword = () => {
 const [newPassword, setNewPassword] = useState('');
 const [message, setMessage] = useState('');
 const query = new URLSearchParams(useLocation().search);
 const token = query.get('token');

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await axios.post('/api/reset-password', { token, newPassword });
   setMessage(response.data.message);
  } catch (error) {
   setMessage('Error resetting password');
  }
 };

 return (
  <form onSubmit={handleSubmit}>
   <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter your new password" required />
   <button type="submit">Reset Password</button>
   {message && <p>{message}</p>}
  </form>
 );
};

export default ResetPassword;
