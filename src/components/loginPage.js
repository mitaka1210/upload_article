import React, { useState } from 'react';
import './login.scss';

const LoginPage = (login: boolean) => {
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [error, setError] = useState('');
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 
 const validateInputs = () => {
  if (!username || !password) {
   setError('Both fields are required');
   return false;
  }
  if (password.length < 6) {
   setError('Password must be at least 6 characters');
   return false;
  }
  setError('');
  return true;
 };
 
 const handleLogin = async (e) => {
  e.preventDefault();
  if (!validateInputs()) return;
  
  try {
   const response = await fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
   });
   
   const data = await response.json();
   if (response.ok) {
    localStorage.setItem('token', data.token);
    setIsLoggedIn(true);
    setError('');
   } else {
    setError(data.message || 'Login failed');
   }
  } catch (err) {
   setError('Something went wrong');
  }
 };
 
 const checkAuth = async () => {
  const token = localStorage.getItem('token');
  if (!token) return setIsLoggedIn(false);
  
  try {
   const response = await fetch('http://localhost:5000/check-auth', {
    headers: { Authorization: token },
   });
   
   const data = await response.json();
   setIsLoggedIn(data.isAuthenticated);
  } catch {
   setIsLoggedIn(false);
  }
 };

 const handleClickSignUp = () => {
  const signUpButton = document.getElementById('signUp');
  const containerLogin = document.getElementById('container-login');

  signUpButton.addEventListener('click', () => {
   containerLogin.classList.add('right-panel-active');
  });
 };
 const handleClickSignIn = () => {
  const signInButton = document.getElementById('signIn');
  const containerLogin = document.getElementById('container-login');
  signInButton.addEventListener('click', () => {
   containerLogin.classList.remove('right-panel-active');
  });
 };
 return (
  <div>
   <div className="container-login" id="container-login">
    <div className="form-container-login sign-up-container-login">
     <form action="#">
      <h1>Create Account</h1>
      <div className="social-container-login">
       <a href="#" className="social">
        <ion-icon name="logo-facebook"></ion-icon>
       </a>
       <a href="#" className="social">
        <ion-icon name="logo-googleplus"></ion-icon>
       </a>
       <a href="#" className="social">
        <ion-icon name="logo-linkedin"></ion-icon>
       </a>
      </div>
      <span>or use your email for registration</span>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Sign Up</button>
     </form>
    </div>
    <div className="form-container-login sign-in-container-login">
     <form action="#" onSubmit={handleLogin}>
      <h1>Sign In</h1>
      <div className="social-container-login">
       <a href="#" className="social">
        <ion-icon name="logo-googleplus"></ion-icon>
       </a>
      </div>
      <span>or use your account</span>
      <div>
       <label>Username</label>
       <input
          type="text"
          value={username}
          onChange={(e) => setUsername (e.target.value)}
       />
      </div>
      <div>
       <label>Password</label>
       <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
       />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" onClick={handleClickSignIn}>Sign In</button>
     </form>
    </div>
    <div className="overlay-container-login">
     <div className="overlay">
      <div className="overlay-panel overlay-left" onClick={handleClickSignIn}>
       <h1>Welcome Back</h1>
       <p>To keep connected with us please login with your personal info</p>
       <button className="ghost" id="signIn" onClick={handleClickSignIn}>
        Sign In
       </button>
      </div>
      <div className="overlay-panel overlay-right" onClick={handleClickSignUp}>
       <h1>Hello,Friend</h1>
       <p>Enter your personal details and start journey with us</p>
       <button className="ghost" id="signUp">
        Sign Up
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default LoginPage;
