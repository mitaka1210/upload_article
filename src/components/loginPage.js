import React, { useState } from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/login/authSlice';
import { createAccount } from '../store/create_account/createAccountSlice';
import { useNavigate } from 'react-router-dom';

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
 const [errorInput, setError] = useState('');
 const [isLoggedIn, setIsLoggedIn] = useState(true);
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
  console.log('pesho', username, password);
  if (!validateInputs()) {
   const result = await dispatch(login({ username, password }));
   console.log('pesho', result.payload.token);
   userTokenLocalStorage = localStorage.getItem('token');
   if (result.payload.token === userTokenLocalStorage) {
    navigate('/');
   }
  }
 };
 const handleCreateAccount = async (e) => {
  e.preventDefault();
  console.log('pesho', first_name, password);
  if (validateInputs()) {
   dispatch(createAccount({ username, first_name, lastName, email, password }));
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
      <h4>Create Account</h4>
      <div className="social-container-login">
       <a href="#" className="social">
        <ion-icon name="logo-facebook"></ion-icon>
       </a>
      </div>
      <span>or use your email for registration</span>

      <div>
       <label>Username</label>
       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
       {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
      </div>

      <div>
       <label>First name</label>
       <input type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
       {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
      </div>

      <div>
       <label>Last name</label>
       <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
       {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
      </div>

      <div className="flex-vertical-container">
       <label>Email</label>
       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
      </div>

      <div>
       <label>Password</label>
       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
       {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      </div>

      <div>
       <label>Confirm Password</label>
       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
       {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button>Sign Up1</button>
     </form>
    </div>
    <div className="form-container-login sign-in-container-login">
     {loginForm ? (
      <div>
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
         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
         <label>Password</label>
         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
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
       <h4>Welcome Back</h4>
       <p>To keep connected with us please login with your personal info</p>
       <button className="ghost" id="signIn" onClick={handleClickSignIn}>
        Sign In
       </button>
      </div>
      <div className="overlay-panel overlay-right" onClick={handleClickSignUp}>
       <h4>Hello,Friend</h4>
       <p>Enter your personal details and start journey with us</p>
       <button className="ghost" id="signUp">
        Sign Up2
       </button>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default LoginPage;
