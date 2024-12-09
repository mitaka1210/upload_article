import React from 'react';
import './reusable.scss';
import { Route, Routes } from 'react-router-dom'; //components
import Read from './components/Read';
import Home from './components/Home';
import EditTodo from './components/EditTodo';
import './App.scss';

function App() {
 return (
  <div>
   <Routes>
    <Route path="/" element={<Home />} name="Home" />
    <Route path="/read" element={<Read />} name="Read" />
    <Route path="/update-section/:id" element={<EditTodo />} />
   </Routes>
  </div>
 );
}

export default App;
