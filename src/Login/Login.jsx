import React, { useState } from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login/authSlice';
import { useNavigate } from 'react-router-dom';
import google from '../assets/google-svgrepo-com.svg';
import SignUpForm from '../SignUpForm/SignUpForm';

const LoginPage = () => {
 const [first_name] = useState('');
 const [lastName] = useState('');
 const [confirmPassword] = useState('');
 const [email] = useState('');
 //! ERROR input default state
 const [, setUsernameError] = useState('');
 const [, setFirstNameError] = useState('');
 const [, setLastNameError] = useState('');
 const [, setEmailError] = useState('');
 const [, setPasswordError] = useState('');
 const [, setConfirmPasswordError] = useState('');
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [loginForm, setHideForm] = useState(true);
 const dispatch = useDispatch();
 const { loading, error } = useSelector((state) => state.auth);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const navigate = useNavigate();

 // трябва да го изнеса като функция във файла validInput.js
 const validateInputs = () => {
  let isValid = true;

  // Изчистване на всички грешки първо
  setUsernameError('');
  setFirstNameError('');
  setLastNameError('');
  setEmailError('');
  setPasswordError('');
  setConfirmPasswordError('');

  // Проверка дали всички полета са попълнени
  if (!username) {
   setUsernameError('Username is required');
   isValid = false;
  }
  if (!first_name) {
   setFirstNameError('First name is required');
   isValid = false;
  }
  if (!lastName) {
   setLastNameError('Last name is required');
   isValid = false;
  }
  if (!email) {
   setEmailError('Email is required');
   isValid = false;
  }
  if (!password) {
   setPasswordError('Password is required');
   isValid = false;
  }
  if (!confirmPassword) {
   setConfirmPasswordError('Confirm password is required');
   isValid = false;
  }

  // Проверка дали паролите съвпадат
  if (password !== confirmPassword) {
   setConfirmPasswordError('Passwords do not match');
   isValid = false;
  }

  // Проверка за минимална дължина на паролата
  if (password && password.length < 6) {
   setPasswordError('Password must be at least 6 characters');
   isValid = false;
  }

  // Проверка за валиден имейл
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailPattern.test(email)) {
   setEmailError('Please enter a valid email');
   isValid = false;
  }

  return isValid;
 };

 const handleLogin = async (e) => {
  let userTokenLocalStorage = '';
  e.preventDefault();
  if (!validateInputs()) {
   const result = await dispatch(login({ username, password, role: 'user' }));
   userTokenLocalStorage = localStorage.getItem('token');
   if (result.payload.token === userTokenLocalStorage) {
    navigate('/home');
   }
  }
 };
 const handleClickSignUp = () => {
  console.log('pesho CLICK');
  setHideForm(false);
  const signUpButton = document.getElementById('signUp');
  const containerLogin = document.getElementById('login');

  signUpButton.addEventListener('click', () => {
   containerLogin.classList.add('right-panel-active');
  });
 };
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
   <div className="container-login" id="login">
    <div className="form-container-login sign-up-container-login">
     <SignUpForm />
    </div>
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
        <button className="btn-login-page" onClick={handleClickSignIn} type="submit" disabled={loading}>
         {loading ? 'Logging in...' : 'Login'}
        </button>
       </form>
      </div>
     ) : null}
    </div>
    <div className="overlay-container-login">
     <div className="overlay">
      <div className="overlay-panel overlay-left" onClick={handleClickSignIn}>
       <h5>Welcome Back</h5>
       <p>To keep connected with us please login with your personal info</p>
       <button className="ghost btn-login-page" id="signIn" onClick={handleClickSignIn}>
        Sign In
       </button>
      </div>
      <div className="overlay-panel overlay-right" onClick={handleClickSignUp}>
       <h4>Hello,Friend</h4>
       <p>Enter your personal details and start journey with me!</p>
       <button className="ghost btn-login-page hello-friend-btn" id="signUp">
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
