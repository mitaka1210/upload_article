import React from 'react'

export const validInput = () => {
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
}
