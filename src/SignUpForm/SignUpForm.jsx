import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../store/create_account/createAccountSlice';

const SignUpForm = () => {
 const [username, setUsername] = useState('');
 const [first_name, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [email, setEmail] = useState('');
 //! ERROR input default state
 const [usernameError, setUsernameError] = useState('');
 const [firstNameError, setFirstNameError] = useState('');
 const [lastNameError, setLastNameError] = useState('');
 const [emailError, setEmailError] = useState('');
 const [passwordError, setPasswordError] = useState('');
 const [confirmPasswordError, setConfirmPasswordError] = useState('');
 const { errorCreate } = useSelector((state) => state.createAccount);
 const dispatch = useDispatch();
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

 const handleCreateAccount = async (e) => {
  const role = 'user';
  e.preventDefault();
  if (validateInputs()) {
   try {
    dispatch(createAccount({ username, first_name, lastName, email, password, role })).unwrap();
    const signInButton = document.getElementById('idCreateAccount');
    const containerLogin = document.getElementById('login');
    signInButton.addEventListener('click', () => {
     containerLogin.classList.remove('right-panel-active');
    });
   } catch (error) {
    console.log('Error', error);
   }
  }
 };
 return (
  <form action="#" onSubmit={handleCreateAccount}>
   <h5 className="add-color-white">Create Account</h5>
   <span className="add-color-white">or use your email for registration</span>

   <div className="input-width-100 margin-5">
    <label className="add-color-white">Username</label>
    <input className="border-radius-10" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    {usernameError && (
     <p className="remove-padding-bottom" style={{ color: 'red' }}>
      {usernameError}
     </p>
    )}
   </div>

   <div className="input-width-100 margin-5">
    <label className="add-color-white">First name</label>
    <input className="border-radius-10" type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
    {firstNameError && (
     <p className="remove-padding-bottom" style={{ color: 'red' }}>
      {firstNameError}
     </p>
    )}
   </div>

   <div className="input-width-100 margin-5">
    <label className="add-color-white">Last name</label>
    <input className="border-radius-10" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    {lastNameError && (
     <p className="remove-padding-bottom" style={{ color: 'red' }}>
      {lastNameError}
     </p>
    )}
   </div>

   <div className="flex-vertical-container input-width-100 margin-5">
    <label className="add-color-white">Email</label>
    <input className="border-radius-10" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    {emailError && (
     <p className="remove-padding-bottom" style={{ color: 'red' }}>
      {emailError}
     </p>
    )}
   </div>

   <div className="input-width-100 margin-5">
    <label className="add-color-white">Password</label>
    <input className="border-radius-10" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    {passwordError && (
     <p className="remove-padding-bottom" style={{ color: 'red' }}>
      {passwordError}
     </p>
    )}
   </div>

   <div className="margin-10 input-width-100 margin-5">
    <label className="add-color-white">Confirm Password</label>
    <input className="border-radius-10" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    {confirmPasswordError && (
     <p className="remove-padding-bottom" style={{ color: 'red' }}>
      {confirmPasswordError}
     </p>
    )}
   </div>

   {errorCreate && (
    <p className="remove-padding-bottom" style={{ color: 'red' }}>
     {errorCreate.message}
    </p>
   )}
   <button className="btn-login-page" id="idCreateAccount">
    Sign Up
   </button>
  </form>
 );
};

export default SignUpForm;
