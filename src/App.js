import React from 'react';
import './reusable.scss';
import './typography.scss';
import { Navigate, Route, Routes } from 'react-router-dom'; // components
import Read from './components/Read';
import Home from './Home/Home';
import LoginPage from './Login/Login.jsx';
import EditArticle from './EditArticle/edit-article';
import RoleManager from './roleManager/roleManager';
import NewsLetterAdminPanel from './newsletterAdminPanel/newsletterAdminPanel';

function App() {
 return (
  <div>
   <Routes>
    <Route path="/" element={<Navigate to="/login" replace />} />
    <Route path="/login" element={<LoginPage />} name="Login" />
    <Route path="/home" element={<Home />} name="Home" />
    <Route path="/read" element={<Read />} name="Read" />
    <Route path="/change-role" element={<RoleManager />} name="RoleManager" />
    <Route path="/newsletter-admin-panel" element={<NewsLetterAdminPanel />} name="NewsLetterAdminPanel" />
    <Route path="/update-section/:articleId" element={<EditArticle />} />
   </Routes>
  </div>
 );
}

export default App;
