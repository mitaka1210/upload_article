import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './list.scss';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import { useNavigate } from 'react-router-dom';
import { deleteArticle } from '../store/deleteArticle/deleteArticleSlice';
import AccessDeniedDialog from '../dialogs/no-privilegest/accessDeniedDialog';
import ConfirmDeleteDialog from '../dialogs/you-sure-delete-article/confirmDeleteDialog';
import Snackbar from '../dialogs/show-error/show-error';

interface RootState {
 articlesSections: {
  isLoading: boolean;
  status: string;
  data: {
   isLoading: boolean;
   title: string;
   create_article_date: string;
   create_article_time: string;
  }[];
 };
}

interface Section {
 id: number;
 title: string;
 create_article_date: string;
 create_article_time: string;
}

const ListArticles = () => {
 let err = '';
 const dispatch = useDispatch();
 const status = useSelector((state: RootState) => state.articlesSections.status);
 const articlesInfo = useSelector((state: RootState) => state.articlesSections.data);
 const [showDialog, setShowDialog] = useState(false);
 const [dialog, setDialog] = useState(false);
 const [showConfirmDialog, setShowConfirmDialog] = useState(false);
 const [showDeleteDialog, setShowDeleteDialog] = useState(false);
 const [articleId, setArticleId] = useState(0);
 const [snackbarOpen, setSnackbarOpen] = useState(false);
 const [snackbarMsg, setSnackbarMsg] = useState({ message: '' });
 const [statusDelete, setStatusDelete] = useState('error');
 const role = localStorage.getItem('role');
 const navigate = useNavigate();

 useEffect(() => {
  getTodos();
 }, []);

 const editSection = (section: Section) => {
  let articleId = section.id;
  if (role === 'admin' || role === 'super_admin') {
   navigate(`/update-section/${articleId}`);
  } else {
   setDialog(true);
   setShowDialog(true);
  }
 };

 const deleteTodo = async (id: number) => {
  setArticleId(id);
  if (role === 'admin' || role === 'user') {
   setDialog(true);
   setShowDialog(true);
  } else {
   try {
    setShowConfirmDialog(true);
    setShowDeleteDialog(true);
   } catch (error) {
    console.error('Error:', error);
   }
  }
 };

 const openAgain = (data: string) => {
  setShowConfirmDialog(false);
  setShowDeleteDialog(false);
  if (data === 'delete') {
   dispatch<any>(deleteArticle(articleId))
    .unwrap()
    .then((response: any) => {
     console.log('pesho', response);
     // Show success snackbar
     setSnackbarMsg({ message: response?.message || 'Article deleted successfully!' });
     setStatusDelete('success');
     setSnackbarOpen(true);
     dispatch<any>(fetchArticles());
    })
    .catch((error: string) => {
     console.log('err', error);
     setSnackbarMsg(error);
     setStatusDelete('error');
     setSnackbarOpen(true);
     console.error('Error deleting article:', error);
    });
  } else {
   setShowDialog(false);
  }
 };

 const getTodos = () => {
  if (status === 'idle') {
   dispatch<any>(fetchArticles());
  } else if (status === 'loading') {
   // TODO add logic
  } else if (status === 'succeeded') {
   /* empty */
  } else if (status === 'failed') {
   // TODO add logic
  }
 };

 // @ts-ignore
 return (
  <div>
   {showDialog && <AccessDeniedDialog onClose={() => setShowDialog(false)} />}
   {showDeleteDialog && <ConfirmDeleteDialog onClose={(data) => openAgain(data)} />}
   {<Snackbar message={snackbarMsg} status={status} open={snackbarOpen} onClose={() => setSnackbarOpen(false)} />}
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
      {articlesInfo.map((section: Section, index: number) => {
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
