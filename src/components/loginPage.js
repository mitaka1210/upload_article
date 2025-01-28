import React, { useState } from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login/authSlice';
import { useNavigate } from 'react-router-dom';
import google from '../assets/google-svgrepo-com.svg';
import { createAccount } from '../store/create_account/createAccountSlice';

const LoginPage = () => {
 const [username, setUsername] = useState('');
 const [first_name, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [email, setEmail] = useState('');
 const [loginForm, setHideForm] = useState(true);
 //! ERROR input default state
 const [usernameError, setUsernameError] = useState('');
 const [firstNameError, setFirstNameError] = useState('');
 const [lastNameError, setLastNameError] = useState('');
 const [emailError, setEmailError] = useState('');
 const [passwordError, setPasswordError] = useState('');
 const [confirmPasswordError, setConfirmPasswordError] = useState('');
 const dispatch = useDispatch();
 const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
 const {  errorCreate } = useSelector((state) => state.createAccount);
 const [errorInput, setError] = useState('');
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const navigate = useNavigate();

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
   const result = await dispatch(login({ username, password }));
   userTokenLocalStorage = localStorage.getItem('token');
   if (result.payload.token === userTokenLocalStorage) {
    navigate('/home');
   }
  }
 };
 const handleCreateAccount = async (e) => {
  e.preventDefault();
  if (validateInputs()) {
   try {
    const resultDispatch = await dispatch(createAccount({ username, first_name, lastName, email, password })).unwrap();
    const signInButton = document.getElementById('idCreateAccount');
    const containerLogin = document.getElementById('login');
    signInButton.addEventListener('click', () => {
     containerLogin.classList.remove('right-panel-active');
    });
   }
   catch (error) {
    console.log('Error', error);
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
     <form action="#" onSubmit={handleCreateAccount}>
      <h5 className="add-color-white">Create Account</h5>
      <span className="add-color-white">or use your email for registration</span>

      <div>
       <label className="add-color-white">Username</label>
       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
       {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      </div>

      <div>
       <label className="add-color-white">First name</label>
       <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
       {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
      </div>

      <div>
       <label className="add-color-white">Last name</label>
       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
       {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
      </div>

      <div className="flex-vertical-container">
       <label className="add-color-white">Email</label>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>

      <div>
       <label className="add-color-white">Password</label>
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>

      <div>
       <label className="add-color-white">Confirm Password</label>
       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
       {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
      </div>

      {errorCreate && <p style={{ color: 'red' }}>{errorCreate.message}</p>}
      <button id="idCreateAccount">Sign Up</button>
     </form>
    </div>
    <div className="form-container-login sign-in-container-login">
     {loginForm ? (
      <div>
       <form action="#" onSubmit={handleLogin}>
        <h2 className="add-color-white">Sign In</h2>
        <div className="social-container-login">
         <a href="#" className="social">
          <img className="google-size" src={google} alt="google"/>
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
    <div className="overlay-container-login">
     <div className="overlay">
      <div className="overlay-panel overlay-left" onClick={handleClickSignIn}>
       <h5>Welcome Back</h5>
       <p>To keep connected with us please login with your personal info</p>
       <button className="ghost" id="signIn" onClick={handleClickSignIn}>
        Sign In
       </button>
      </div>
      <div className="overlay-panel overlay-right" onClick={handleClickSignUp}>
       <h4>Hello,Friend</h4>
       <p>Enter your personal details and start journey with me!</p>
       <button className="ghost hello-friend-btn" id="signUp">
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
