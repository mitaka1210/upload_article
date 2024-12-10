import React, { useEffect } from 'react';
import './card.scss';
import dataM from '../services/listTodosData';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import getTodo from '../configuration/ api-endpoints';
import { fetchTodo } from '../store/todoSlice/todoSlice';

const Card = () => {
 let arr = [];
 arr = dataM;
 //? properties
 let todosData = [];
 let err = '';
 let base64Image = '';
 let content;
 const dispatch = useDispatch();
 const status = useSelector((state) => state.articlesSections.status);
 const error = useSelector((state) => state.articlesSections.error);
 useEffect(() => {
  getTodos();
 }, [status, dispatch]);
 const data = useSelector((state) => {
  todosData = state.todo;
 });

 //delete todo function

 const deleteTodo = async (id) => {
  console.log('pesho');
  try {
   const deleteTodo = await fetch(`${getTodo.DELETE_ALL_TODOS}/${id}`, {
    method: 'DELETE',
   });
  } catch (err) {
   console.error('err', err);
  }
 };
 const getTodos = () => {
  if (status === 'idle') {
   dispatch(fetchTodo());
  } else if (status === 'loading') {
   content = <div>Loading...</div>;
  } else if (status === 'succeeded') {
   onSubmitForm();
  } else if (status === 'failed') {
   content = <div>{error}</div>;
  } else {
   console.log('peshoDARTA', status, data);
  }
 };
 const onSubmitForm = async (e) => {
  // Fetch the Base64 image string from the backend
  fetch('http://localhost:5000/show-image')
   .then((response) => response.json())
   .then((data) => {
    // Set the Base64 string as the source of the image
    base64Image = data.image;
    document.getElementById('image').src = base64Image;
   })
   .catch((error) => console.error('Error fetching image:', error));
 };
 const navigate = useNavigate();
 let redirectPage = (header, content, date, time, images, todoId) => {
  navigate(`/read?todoId=${todoId}`, {
   state: {
    header: header,
    content: content,
    date: date,
    time: time,
    todoId: todoId,
    images: images,
   },
   search: '/12412412',
  });
 };

 return (
  <div className="card-main">
   <img id="image" alt="Image from Base64" width="300" />
  </div>
 );
};

export default Card;
