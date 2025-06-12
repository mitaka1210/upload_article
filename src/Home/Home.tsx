import React, { useEffect, useState } from 'react';
import CreateEditArticles from '../create-edit-article/create-edit-article';
import ListArticles from '../ListArticles/list-articles';
import LoginPage from '../Login/Login';
import { useDispatch } from 'react-redux';
import { checkAuth } from '../store/login/authSlice';

interface CheckAuthParams {
 language: string;
}

const Home = () => {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const dispatch = useDispatch();
 const getGoogleToken = localStorage.getItem('googleToken');

 useEffect(() => {
  const checkUserAuth = async () => {
   const result = await dispatch<any>(
    checkAuth({
     language: 'bg',
    } as CheckAuthParams)
   );
   if (result.payload && (result.payload as { isAuthenticated: boolean }).isAuthenticated) {
    setIsLoggedIn(true);
   } else if (getGoogleToken) {
    setIsLoggedIn(true);
   }
  };
  checkUserAuth().then(() => {});
 }, [dispatch, getGoogleToken]);
 return (
  <div>
   {isLoggedIn ? (
    <>
     <CreateEditArticles />
     <ListArticles />
    </>
   ) : (
    <LoginPage />
   )}
  </div>
 );
};

export default Home;
