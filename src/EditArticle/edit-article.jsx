import React, { useEffect, useState } from 'react';
import { updateSection } from '../store/editSections/editSectionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import './edit.scss';
import deleteSectionImg from '../assets/delete-svgrepo-com.svg';
import { deleteSection } from '../store/deleteArticleSection/deleteArticleSectionSlice';

const EditTodo = () => {
 const { id } = useParams();
 const dispatch = useDispatch();
 const articlesInfo = useSelector((state) => state.articlesSections.data);
 const info = useSelector((state) => state.articlesSections.status);
 const [setImageName] = useState('');
 const [showArticle, setShowArticle] = useState(false);
 const [image] = useState(null);
 const [, setSection] = useState([]);
 const navigate = useNavigate();
 let sections = {};

 useEffect(() => {
  articlesStatus();
 }, [id, info]); // Задължително да използваш [id], за да се извиква при промяна
 // на ID.

 const [formData, setFormData] = useState({
  id: id,
  article_id: id,
  title: '',
  image: '',
  status: false,
  section: [
   {
    position: 0,
    content: '',
    title: '',
   },
  ],
 });
 // TODO add logic for  info === 'loading'
 const articlesStatus = () => {
  if (info === 'idle') {
   dispatch(fetchArticles());
  } else if (info === 'succeeded') {
   let sectionId = Number(id);
   articlesInfo.forEach((section) => {
    if (section.id === sectionId) {
     sections = section;
     setSection(sections.section);
     setFormData(sections);
     setShowArticle(sections.status);
    }
   });
  }
  // TODO add logic for info === 'failed'
 };

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name.startsWith('section[')) {
   const sectionIndex = parseInt(name.split('[')[1].split(']')[0]);
   const sectionName = name.split('.')[1]; // пример: section[0].position

   setFormData((prev) => {
    const updatedSections = [...prev.section];
    updatedSections[sectionIndex] = {
     ...updatedSections[sectionIndex],
     [sectionName]: value,
    };
    return { ...prev, section: updatedSections };
   });
  } else {
   const { name, value } = e.target;
   setFormData((prevData) => ({
    ...prevData,
    [name]: value, // Актуализираме полето по неговото име
   }));
  }
 };
 const handleImageChange = (name) => {
  const file = name.target.files[0].name;
  if (file) {
   const truncatedName = truncateString(file, 30);
   setImageName(truncatedName);
  }
 };
 //delete article function
 const deleteSectionFromArticle = async (id) => {
  try {
   // Първо изчакай `updateSection`
   await dispatch(deleteSection(id)).unwrap();
   // След това извикай `fetchArticles`
   await dispatch(fetchArticles()).unwrap();
   // Ако всичко е наред, презареди страницата
   window.location.reload();
  } catch (error) {
   console.error('Error:', error);
  }
 };
 const checkBoxValue = () => {
  if (showArticle) setShowArticle(false);
  else setShowArticle(true);
 };
 const handleSubmit = async (e) => {
  e.preventDefault();
  const copy = structuredClone({
   ...formData,
   image: image,
   status: showArticle,
  });

  try {
   // Първо изчакай `updateSection`
   await dispatch(updateSection(copy)).unwrap();

   // След това извикай `fetchArticles`
   await dispatch(fetchArticles()).unwrap();

   // Ако всичко е наред, пренасочи към началната страница
   navigate('/');
  } catch (error) {
   console.error('Error:', error);
  }
 };
 const truncateString = (str, num) => {
  if (str.length <= num) {
   return str;
  } else {
   return str.slice(0, num) + '...';
  }
 };

 return (
  <>
   {info === 'loading' ? (
    <div>Loading...</div>
   ) : (
    <div className="edit-form-bgr">
     <div className="flex-vertical-container align-items-center edit-header">
      <h3 className={showArticle ? 'add-color-green' + ' remove-margin-bottom' : 'add-color-orange remove-margin-bottom'}>{showArticle ? 'Статия е' + ' побликувана' : 'Статията не' + ' е побликувана'}</h3>
      <div className="show-article">
       <input
        type="checkbox"
        id="check"
        checked={showArticle}
        onChange={(e) => {
         const isChecked = e.target.checked;
         console.log('Checkbox is checked:', isChecked);
         checkBoxValue(isChecked); // Извикайте функцията си с новата стойност
        }}
       />
       <label htmlFor="check">
        <div id="plug"></div>
        <div id="flugHead"></div>
       </label>
      </div>
     </div>
     <form className="signup edit-form-styles" id="myForm" autoComplete="off" onSubmit={handleSubmit}>
      <h5 className="center-header text-align-center">Редактиране на статия:</h5>
      <div className="text-align-center">
       <p>{formData.title}</p>
      </div>
      <div
       className="flex-horizontal-container-raw
       signup__field justify-content-center margin-15"
      >
       <input type="text" className="signup__input margin-top-15" name="title" value={formData.title || ''} onChange={handleChange} placeholder="Задължително" required />
       <label className="signup__label">Редактиране на заглавието</label>
      </div>

      <div className="flex-vertical-container input-width-100">
       {formData.section.map((section, index) => {
        return (
         <div className="section-title-content flex-vertical-container margin-15" key={index}>
          <div className="signup__field">
           <input type="text" className="signup__input margin-top-15" name={`section[${index}].title`} value={section.title || ''} onChange={handleChange} placeholder="Задължително" required />
           <label className="signup__label" htmlFor="email">
            редактиране на заглавието на секцията {index + 1}
           </label>
          </div>
          <h6>Съдържание към секцията {index + 1}</h6>
          <textarea name={`section[${index}].content`} value={section.content || ''} onChange={handleChange} placeholder="Content" className="add-textarea-height padding-20" />
          <br />
          <br />
          <div className="delete_section" onClick={() => deleteSectionFromArticle(section.position)}>
           <img src={deleteSectionImg} alt="delete" />
          </div>
         </div>
        );
       })}
      </div>
      {/*upload button*/}
      <div className="file file--uploading">
       <input id="input-file-edit" onChange={handleImageChange} type="file" />
       {/*<label htmlFor="input-file" className="input-file">*/}
       {/* <img src={upload} alt="upload" />*/}
       {/* <p>Качване на снимка към статия</p>*/}
       {/*</label>*/}
       {/*<p className="upload-image-name-edit">{image_name}</p>*/}
      </div>
      <button onClick={handleSubmit} type="submit" className="edit-send-button">
       Запази промените
      </button>
     </form>
    </div>
   )}
  </>
 );
};

export default EditTodo;
