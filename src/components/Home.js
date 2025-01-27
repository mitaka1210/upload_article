import React, { useState } from 'react';
import InputTodo from './InputTodo';
import ListTodos from '../ListTodos/ListTodos';
import LoginPage from './loginPage';

const Home = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 return (
  <div>
   {isLoggedIn ? (
    <>
     <InputTodo />
     <ListTodos />
    </>
   ) : (
    <LoginPage />
   )}
  </div>
 );
};

export default Home;
