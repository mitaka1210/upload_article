import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createAccount } from '../store/create_account/createAccountSlice';

const SignUpForm = ({ onAccountCreated }) => {
 const [username, setUsername] = useState('');
 const [first_name, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');
 const [email, setEmail] = useState('');

 const [usernameError, setUsernameError] = useState('');
 const [firstNameError, setFirstNameError] = useState('');
 const [lastNameError, setLastNameError] = useState('');
 const [emailError, setEmailError] = useState('');
 const [passwordError, setPasswordError] = useState('');
 const [confirmPasswordError, setConfirmPasswordError] = useState('');

 const [createAccountIsTrue, setCreateAccountIsTrue] = useState(false);
 const [successMessage, setSuccessMessage] = useState('');

 const { errorCreate, status } = useSelector((state) => state.createAccount);
 const dispatch = useDispatch();
 useEffect(() => {
  if (createAccountIsTrue) {
   const signInButton = document.getElementById('idCreateAccount');
   const containerLogin = document.getElementById('login');
   signInButton.addEventListener('click', () => {
    containerLogin.classList.remove('right-panel-active');
   });
  }
 }, [createAccountIsTrue]);
 const handleCreateAccount = async (e) => {
  e.preventDefault();
  const role = 'user';
  if (validateInputs()) {
   try {
    await dispatch(createAccount({ username, first_name, lastName, email, password, role })).unwrap();

    setCreateAccountIsTrue(true);
    setSuccessMessage('Account created successfully!');
    // Clear form
    setUsername('');
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    // Notify parent component
    if (typeof onAccountCreated === 'function') {
     onAccountCreated();
    }
   } catch (error) {
    console.error('Error:', error);
    setCreateAccountIsTrue(false);
   }
  }
 };

 const validateInputs = () => {
  let isValid = true;
  setUsernameError('');
  setFirstNameError('');
  setLastNameError('');
  setEmailError('');
  setPasswordError('');
  setConfirmPasswordError('');

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
  if (password !== confirmPassword) {
   setConfirmPasswordError('Passwords do not match');
   isValid = false;
  }
  if (password && password.length < 6) {
   setPasswordError('Password must be at least 6 characters');
   isValid = false;
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailPattern.test(email)) {
   setEmailError('Please enter a valid email');
   isValid = false;
  }

  return isValid;
 };

 return (
  <form action="#" onSubmit={handleCreateAccount}>
   <h5 className="add-color-white">Create Account</h5>

   <div className="input-width-100">
    <label className="add-color-white">Username</label>
    <input className="border-radius-10" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
    {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
   </div>

   <div className="input-width-100">
    <label className="add-color-white">First name</label>
    <input className="border-radius-10" type="text" value={first_name} onChange={(e) => setFirstName(e.target.value)} />
    {firstNameError && <p style={{ color: 'red' }}>{firstNameError}</p>}
   </div>

   <div className="input-width-100">
    <label className="add-color-white">Last name</label>
    <input className="border-radius-10" type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
    {lastNameError && <p style={{ color: 'red' }}>{lastNameError}</p>}
   </div>

   <div className="input-width-100">
    <label className="add-color-white">Email</label>
    <input className="border-radius-10" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
   </div>

   <div className="input-width-100">
    <label className="add-color-white">Password</label>
    <input className="border-radius-10" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
   </div>

   <div className="input-width-100">
    <label className="add-color-white">Confirm Password</label>
    <input className="border-radius-10" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
    {confirmPasswordError && <p style={{ color: 'red' }}>{confirmPasswordError}</p>}
   </div>

   {errorCreate && <p style={{ color: 'red' }}>{errorCreate.message}</p>}
   {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}

   <button className="btn-login-page" id="idCreateAccount" type="submit" disabled={status === 'loading'}>
    {status === 'loading' ? 'Creating...' : 'Sign Up'}
   </button>
  </form>
 );
};

export default SignUpForm;
