import React, { useState } from 'react';
import google from '../assets/google-svgrepo-com.svg';
import '../components/login.scss';
const Form = ({ username, setUsername, password, setPassword, handleLogin, loading, error }) => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const [loginForm, setHideForm] = useState(true);

 const handleClickSignIn = () => {
  console.log('pesho CLICK2');
  setHideForm(true);
  setIsLoggedIn(true);
  const signInButton = document.getElementById('signIn');
  const containerLogin = document.getElementById('login');
  signInButton.addEventListener('click', () => {
   containerLogin.classList.remove('right-panel-active');
  });
 };
 return (
  <div className="container-login-page">
   <div className="container-login" id="login"></div>
   <div className="form-container-login sign-in-container-login">
    {loginForm ? (
     <div>
      <form action="#" onSubmit={handleLogin}>
       <h2 className="add-color-white">Sign In</h2>
       <div className="social-container-login">
        <a href="#" className="social">
         <img className="google-size" src={google} alt="google" />
        </a>
       </div>
       <span className="add-color-white">or use your account</span>
       <div>
        <label className="add-color-white margin-top-15">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
       </div>
       <div>
        <label className="add-color-white">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       </div>
       {isLoggedIn && <p style={{ color: 'red' }}>{error}</p>}
       <button onClick={handleClickSignIn} type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
       </button>
      </form>
     </div>
    ) : null}
   </div>
  </div>
 );
};

export default Form;
