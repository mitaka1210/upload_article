import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle } from '../store/add-new-article/addNewArticleSlice';
import './upload.scss';
import { uploadSection } from '../store/uploadArticleSlice/uploadArticleSlice';
import upload from '../assets/cloud-computing.png';

const SectionUpload = () => {
 const dispatch = useDispatch();
 const [image_name, setImageName] = useState('');
 const [headerName, setHeaderName] = useState(true);
 const [image, setImage] = useState(null);
 const [title, setTitle] = useState('');
 const newArticleId = useSelector((state) => state.articlesHeader.articles.id);
 const [form, setForm] = useState({
  article_id: '',
  title: '',
  content: '',
  position: '',
  image: '',
 });
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setForm((prev) => ({ ...prev, [name]: value }));
 };
 const handleInputTitleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  setTitle(e.target.value);
 };
 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setImageName(e.target.files[0].name);
  if (e.target.files && e.target.files[0]) {
   setImage(e.target.files[0]);
  }
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  form.article_id = newArticleId;
  form.image = image;
  dispatch(uploadSection(form));
  // dispatch(addArticle(title));
 };

 const addArticleHeader = async () => {
  try {
   // След това извикай `addArticle`
   await dispatch(addArticle(title));
   // Ако всичко е наред, смени стойността на `headerName` на `false`
   setHeaderName(false);
  } catch (error) {
   console.error('Error:', error);
  }
 };

 return (
  <div className="flex-horizontal-container-raw justify-content-center">
   <div className="container">
    <h2>Създаване на статия</h2>
    <hr className="line-after-header" />
    <div className="text">
     <img src="https://i.postimg.cc/1zgS8WTF/user.png" alt="icon"
          height="20" />
     <input name="section_title" className="margin-20"
            type="text"
            placeholder="Заглавие на статията"
            onChange={handleInputTitleChange} required />
    </div>
    <button className="submit upload"
            onClick={addArticleHeader}>Запази заглавието на статията
    </button>
    <form onSubmit={handleSubmit}
          className="flex-vertical-container-raw flex-item align-items-center">
     <input name="article_id" className="margin-10" type="number"
            style={{ display: 'none' }}
            placeholder="Article ID"
            onChange={handleInputChange}
            value={newArticleId > 0 ? newArticleId : ''} required />
     <div className="text">
      <img src="https://i.postimg.cc/1zgS8WTF/user.png" alt="icon"
           height="20"
           className={headerName ? 'disabled-input' : ''} />
      <input name="title" disabled={headerName}
             type="text"
             className={headerName ? 'disabled-input margin-10' : ''}
             placeholder="Заглавие на секцията"
             onChange={handleInputChange} required />
     </div>
     <div className="text">
      <img src="https://i.postimg.cc/DZBPRgvC/email.png" alt="icon"
           height="12" className={headerName ? 'disabled-input' : ''} />
      <input name="position" type="number"
             className={headerName ? 'disabled-input margin-10' : ''}
             placeholder="Позиция на секцията"
             onChange={handleInputChange} required />
     </div>
     <div>
        <textarea className={headerName ? 'disabled-input text' +
         ' text-area-form margin-10' : 'text text-area-form margin-10'}
                  name="content"
                  placeholder="Съдържание на секцията"
                  onChange={handleInputChange}></textarea>
     </div>
     {/*upload button*/}
     <div className="file file--uploading">
      <input id="input-file" onChange={handleImageChange}
             type="file" />
      <label htmlFor="input-file" className="input-file">
       <img src={upload} alt="upload" />
       <p>Качване на снимка към статия</p>
      </label>
      <p className="upload-image-name">{image_name}</p>
     </div>
     <button className="submit upload">Запиши новата статия</button>
    </form>
   </div>
  </div>
 );
};

export default SectionUpload;
