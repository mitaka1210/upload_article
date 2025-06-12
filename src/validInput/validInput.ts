export const validateInput = (username: string, password: string, first_name: string, lastName: string, email: string, confirmPassword: string): { isValid: boolean; errors: Record<string, string> } => {
 let isValid = true;
 const errors: Record<string, string> = {};

 if (!username) {
  errors.username = 'Username is required';
  isValid = false;
 }
 if (!first_name) {
  errors.first_name = 'First name is required';
  isValid = false;
 }
 if (!lastName) {
  errors.lastName = 'Last name is required';
  isValid = false;
 }
 if (!email) {
  errors.email = 'Email is required';
  isValid = false;
 } else {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
   errors.email = 'Please enter a valid email';
   isValid = false;
  }
 }
 if (!password) {
  errors.password = 'Password is required';
  isValid = false;
 } else if (password.length < 6) {
  errors.password = 'Password must be at least 6 characters';
  isValid = false;
 }

 if (!confirmPassword) {
  errors.confirmPassword = 'Confirm password is required';
  isValid = false;
 } else if (password !== confirmPassword) {
  errors.confirmPassword = 'Passwords do not match';
  isValid = false;
 }

 return { isValid, errors };
};
