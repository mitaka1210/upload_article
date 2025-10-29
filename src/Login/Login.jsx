import React, { useEffect, useState } from 'react';
import './login.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuth, login } from '../store/login/authSlice';
import { useNavigate } from 'react-router-dom';
import google from '../assets/google-svgrepo-com.svg';
import { validLoginInput } from '../valid-input-login/valid-input-login';
import SignUpForm from '../SignUpForm/SignUpForm';
import { auth, signInWithGoogle } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

const LoginPage = () => {
 const [errors, setErrors] = useState({});
 const [username, setUsername] = useState('');
 const [password, setPassword] = useState('');
 const [loginForm, setHideForm] = useState(true);
 const dispatch = useDispatch();
 const { loading, error } = useSelector((state) => state.auth);
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const navigate = useNavigate();
 const [user, setUser] = useState(null);
 const [showPassword, setShowPassword] = useState(false);
 useEffect(() => {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const containerLogin = document.getElementById('login');

  const handleSignUpClick = () => {
   containerLogin.classList.add('right-panel-active');
  };

  const handleSignInClick = () => {
   containerLogin.classList.remove('right-panel-active');
  };

  signUpButton.addEventListener('click', handleSignUpClick);
  signInButton.addEventListener('click', handleSignInClick);
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
   setUser(currentUser);
  });
  // 🔹 Проверка дали потребителят е влязъл след redirect
  const googleToken = localStorage.getItem('googleToken');
  if (googleToken != null) {
   navigate('/home');
  }
  return () => {
   signUpButton.removeEventListener('click', handleSignUpClick);
   signInButton.removeEventListener('click', handleSignInClick);
   unsubscribe();
  };
 }, [1]);
 const loginAndCheckAuth = async (loginData) => {
  const loginResult = await dispatch(login(loginData));

  if (loginResult.meta.requestStatus === 'rejected') {
   // Спираме процеса тук, не изпълняваме checkAuth и не навигираме
   return;
  }

  const checkAuthResult = await dispatch(
   checkAuth({
    language: 'bg',
   })
  );

  if (checkAuthResult.meta.requestStatus === 'rejected') {
   console.log('Authentication check failed:', checkAuthResult.error.message);
   // Може да решиш да направиш нещо тук, например да редиректнеш към страница за грешка
   return;
  }

  // Ако и двата action-а са успешни, навигираме към /home
  navigate('/home');
 };
 const handleLogin = async (e) => {
  e.preventDefault();
  const validationErrors = validLoginInput(username, password);
  if (Object.keys(validationErrors).length > 0) {
   setErrors(validationErrors);
   return;
  }
  await loginAndCheckAuth({ username, password, role: 'user' });
  const loginResult = await dispatch(login({ username, password, role: 'user' }));
  if (loginResult.payload.token) {
   navigate('/home');
  }
 };
 const handleClickSignUp = () => {
  setHideForm(false);
 };
 const handleClickSignIn = () => {
  setHideForm(true);
  setIsLoggedIn(true);
 };
 return (
  <div className="container-login-page">
   <div className="container-login" id="login">
    <div className="form-container-login sign-in-container-login">
     {loginForm ? (
      <div>
       <form action="#" onSubmit={handleLogin}>
        <h2 className="add-color-white">Sign In</h2>
        <div className="social-container-login" onClick={signInWithGoogle}>
         <a href="#" className="social">
          <img className="google-size" src={google} alt="google" />
         </a>
        </div>
        <span className="add-color-white">or use your account</span>

        <div className="input-row" style={{ position: 'relative' }}>
         <label className="add-color-white login-input margin-top-15">Username</label>
         <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)} style={{ paddingRight: '36px' }} />
         {username && (
          <button
           type="button"
           onClick={() => setUsername('')}
           aria-label="Clear username"
           style={{
            position: 'absolute',
            right: '8px',
            bottom: '1px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
           }}
          >
           ✖️
          </button>
         )}
         {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div className="margin-15" style={{ position: 'relative' }}>
         <label className="add-color-white">Password</label>
         <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} style={{ paddingRight: '36px' }} />
         <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          style={{
           position: 'absolute',
           right: '8px',
           top: '34px',
           background: 'transparent',
           border: 'none',
           cursor: 'pointer',
           fontSize: '18px',
          }}
         >
          {showPassword ? '🙉' : '🙈'}
         </button>
         {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        {isLoggedIn && <p style={{ color: 'red' }}>{error}</p>}
        <button className="btn-login-page" onClick={handleClickSignIn} type="submit" disabled={loading}>
         {loading ? 'Logging in...' : 'Login'}
        </button>
       </form>
      </div>
     ) : (
      <div>
       <SignUpForm onAccountCreated={handleClickSignIn} />
      </div>
     )}
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
       <button className="ghost btn-login-page hello-friend-btn" id="signUp" onClick={handleClickSignUp}>
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
