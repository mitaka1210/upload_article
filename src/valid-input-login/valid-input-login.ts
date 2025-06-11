export const validLoginInput = (username, password) => {
 let errors = {};

 if (!username) {
  errors.username = 'Username is required';
 }

 if (!password) {
  errors.password = 'Password is required';
 } else if (password.length < 6) {
  errors.password = 'Password must be at least 6 characters';
 }

 return errors;
};
