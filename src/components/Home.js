import React, { useEffect, useState } from 'react';
import InputTodo from './InputTodo';
import ListTodos from '../ListTodos/ListTodos';
import LoginPage from './loginPage';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../store/login/authSlice';

const Home = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const dispatch = useDispatch();

 useEffect(() => {
  dispatch(checkAuth());
 }, [dispatch, setIsLoggedIn]);
 useEffect(() => {
  const checkUserAuth = async () => {
   const result = await dispatch(checkAuth());
   if (result.payload.isAuthenticated) {
    setIsLoggedIn(true);
   }
  };
  checkUserAuth().then((r) => {});
 }, [dispatch]);
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
