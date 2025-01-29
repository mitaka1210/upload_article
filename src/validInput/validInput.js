//! ERROR input default state

export const validateInput = (username, password, first_name, lastName, email, confirmPassword) => {
 let isValid = true;
 // Изчистване на всички грешки първо
 let setUsernameError = '';
 let setFirstNameError = '';
 let setLastNameError = '';
 let setEmailError = '';
 let setPasswordError = '';
 let setConfirmPasswordError = '';

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
