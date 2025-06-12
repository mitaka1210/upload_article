import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './upload.scss';
import InfoDiv from '../more-info/more-Info';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import { addArticle } from '../store/add-new-article/addNewArticleSlice';
import { uploadSection } from '../store/uploadArticleSlice/uploadArticleSlice';
import { AppDispatch, RootState } from '../store/storeState/store';
import logOut from '../assets/sign-out-alt-4-svgrepo-com.svg';
import { useNavigate } from 'react-router-dom';

interface UpdatedForm {
 article_id: number;
 title: string;
 content: string;
 position: string;
 image: File | null;
 status: boolean;
}

interface Article {
 id: number;
 title: string;
}

const SectionUpload = () => {
 const navigate = useNavigate();
 const dispatch = useDispatch<AppDispatch>();
 const [image_name, setImageName] = useState('');
 const [headerName, setHeaderName] = useState(true);
 const [blockAdding, setBlockAdding] = useState(false);
 const [image, setImage] = useState<File | null>(null);
 const [title, setTitle] = useState('');
 const [sameArticleId, setSameArticleId] = useState(0);
 const newArticleId = useSelector((state: RootState) => state.articlesHeader.articles.id) as number;
 const getAllArticles = useSelector((state: RootState) => state.articlesSections.data as Article[]);

 const role = localStorage.getItem('role');
 const userName = localStorage.getItem('username');
 const users = [
  {
   role: role,
   userName: userName,
  },
 ];

 useEffect(() => {
  if (role !== 'admin' && role !== 'super_admin') {
   setBlockAdding(false);
  } else {
   setBlockAdding(true);
  }
 }, [role]);

 const [form, setForm] = useState<UpdatedForm>({
  article_id: 0,
  title: '',
  content: '',
  position: '',
  image: null,
  status: false,
 });

 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
 };

 const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setTitle(e.target.value);
 };

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
   setImageName(e.target.files[0].name);
   setImage(e.target.files[0]);
  }
 };

 const changePrivileges = () => {
  if (role === 'super_admin') {
   navigate(`/change-role`);
  }
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const updatedForm: UpdatedForm = {
   ...form,
   article_id: newArticleId ? newArticleId : sameArticleId,
   image,
  };

  try {
   await dispatch(uploadSection(updatedForm)).unwrap();
   setHeaderName(true);
   await dispatch(fetchArticles()).unwrap();
  } catch (error) {
   console.error('Error submitting form:', error);
  }
 };

 const LogOut = () => {
  localStorage.clear();
  navigate('/login');
 };

 const addArticleHeader = async () => {
  const sameTitle = getAllArticles.filter((article: Article) => article.title === title);
  try {
   if (sameTitle.length > 0) {
    form.title = sameTitle[0].title;
    setSameArticleId(sameTitle[0].id);
    setHeaderName(false);
    setForm((prev) => ({
     ...prev,
     content: '',
     position: '',
     image: null,
    }));
   } else {
    await dispatch(
     addArticle({
      title,
      status: false,
     })
    ).unwrap();
    setHeaderName(false);
   }
  } catch (error) {
   console.error('Error:', error);
  }
 };

 return (
  <div className="flex-horizontal-container-raw justify-content-center">
   <div className="flex-horizontal-container-raw justify-content-space-between input-width-100 position-absolute">
    <div className="log-out" onClick={LogOut}>
     <img src={logOut} alt="logout" />
    </div>
    {role === 'super_admin' ? (
     <button onClick={() => changePrivileges()} className="custom-btn  btn-5">
      <span>change role</span>
     </button>
    ) : null}
   </div>
   <div className={blockAdding ? 'container' : 'container block-adding-article'}>
    <h4>Създаване на статия</h4>
    <hr className="line-after-header" />
    <h5>Как работи качването</h5>
    <InfoDiv />
    <div className="text">
     <img src="https://i.postimg.cc/1zgS8WTF/user.png" alt="icon" height="20" />
     <input name="section_title" className="margin-20" type="text" placeholder="Заглавие на статията" onChange={handleInputTitleChange} required />
    </div>
    <button className="submit upload" onClick={addArticleHeader}>
     Запази заглавието на статията
    </button>
    <form onSubmit={handleSubmit} className="flex-vertical-container-raw flex-item align-items-center">
     <input name="article_id" className="margin-10" type="number" style={{ display: 'none' }} placeholder="Article ID" onChange={handleInputChange} value={newArticleId || 0} />
     <div className="text">
      <img src="https://i.postimg.cc/1zgS8WTF/user.png" alt="icon" height="20" className={headerName ? 'disabled-input' : ''} />
      <input name="title" disabled={headerName} type="text" className={headerName ? 'disabled-input margin-10' : ''} placeholder="Заглавие на секцията" onChange={handleInputChange} required />
     </div>
     <div className="text">
      <img src="https://i.postimg.cc/DZBPRgvC/email.png" alt="icon" height="12" className={headerName ? 'disabled-input' : ''} />
      <input name="position" type="number" className={headerName ? 'disabled-input margin-10' : ''} value={form.position} placeholder="Позиция на секцията" onChange={handleInputChange} required />
     </div>
     <div>
      <textarea className={headerName ? 'disabled-input text text-area-form margin-10' : 'text text-area-form margin-10'} name="content" placeholder="Съдържание на секцията" onChange={handleInputChange}></textarea>
     </div>
     <button className="submit margin-15 upload">Публикуване на статията</button>
    </form>
   </div>
  </div>
 );
};

export default SectionUpload;
