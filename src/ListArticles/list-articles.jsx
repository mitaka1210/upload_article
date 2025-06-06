import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './list.scss';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import { useNavigate } from 'react-router-dom';
import { deleteArticle } from '../store/deleteArticle/deleteArticleSlice';
import AccessDeniedDialog from '../dialogs/no-privilegest/accessDeniedDialog';

const ListArticles = () => {
 //? properties
 let err = '';
 //react-redux and react
 const dispatch = useDispatch();
 const status = useSelector((state) => state.articlesSections.status);
 const [showDialog, setShowDialog] = useState(false);
 const [dialog, setDialog] = useState(false);

 // storage
 const role = localStorage.getItem('role');
 useEffect(() => {
  getTodos();
 }, [1]);
 const articlesInfo = useSelector((state) => state.articlesSections.data);
 const navigate = useNavigate();

 const editSection = (section) => {
  let articleId = section.id;
  if (role === 'admin' || role === 'super_admin') {
   navigate(`/update-section/${articleId}`);
  } else {
   setDialog(true); // Задаваме true, за да покажем диалога
   setShowDialog(true); // Показва диалога
  }
 };

 //delete article function
 const deleteTodo = async (id) => {
  if (role === 'admin' || role === 'user') {
   setDialog(true); // Задаваме true, за да покажем диалога
   setShowDialog(true); // Показва диалога
  } else {
   try {
    // Първо изчакай `updateSection`
    await dispatch(deleteArticle(id)).unwrap();
    // След това извикай `fetchArticles`
    await dispatch(fetchArticles()).unwrap();
    // Ако всичко е наред, пренасочи към началната страница
    navigate('/home');
   } catch (error) {
    console.error('Error:', error);
   }
  }
 };

 const getTodos = () => {
  if (status === 'idle') {
   dispatch(fetchArticles());
  } else if (status === 'loading') {
   // TODO add logic
  } else if (status === 'succeeded') {
   /* empty */
  } else if (status === 'failed') {
   // TODO add logic
  }
 };

 //TODO трябва да се оправи async заявките да се изчака отговора че са получени данните преди да се заредят в data.data.map

 return (
  <div>
   {showDialog && <AccessDeniedDialog onClose={() => setShowDialog(false)} />} {/* Подава функцията за затваряне */}
   {articlesInfo.isLoading ? (
    <div>
     <h1>Loading........{err}</h1>
    </div>
   ) : (
    <table className="table mt-5 text-center">
     <thead>
      <tr>
       <th>Header</th>
       <th>Date</th>
       <th>Time</th>
       <th>Edit</th>
       <th>Delete</th>
      </tr>
     </thead>
     <tbody>
      {articlesInfo.map((section, index) => {
       return (
        <tr key={index}>
         <td style={{ position: 'relative', top: '25px' }}>{section.title}</td>
         <td style={{ position: 'relative', top: '25px' }}>{section.create_article_date}</td>
         <td style={{ position: 'relative', top: '25px' }}>{section.create_article_time}</td>
         <td>
          <button onClick={() => editSection(section)} className="custom-btn  btn-5">
           <span>Edit</span>
          </button>
         </td>
         <td className="flex-horizontal-container-raw justify-content-center">
          <button onClick={() => deleteTodo(section.id)} className="btn first edit-btn">
           Delete
          </button>
         </td>
        </tr>
       );
      })}
     </tbody>
    </table>
   )}
  </div>
 );
};

export default ListArticles;
