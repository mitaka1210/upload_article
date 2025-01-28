import React from 'react';
import './reusable.scss';
import './typography.scss';
import { Navigate, Route, Routes } from 'react-router-dom'; // components
import Read from './components/Read';
import Home from './components/Home';
import EditTodo from './components/EditTodo';
import LoginPage from './components/loginPage';

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<LoginPage />} name="Login" />
            <Route path="/home" element={<Home />} name="Home" />
            <Route path="/read" element={<Read />} name="Read" />
            <Route path="/update-section/:id" element={<EditTodo />} />
         </Routes>
      </div>
   );
}

export default App;
