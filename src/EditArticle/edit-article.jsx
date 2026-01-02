import React, { useEffect, useState } from 'react';
import { updateSection } from '../store/editSections/editSectionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import upload from '../assets/cloud-computing.png';
import download from '../assets/download.png';
import './edit.scss';
import deleteSectionImg from '../assets/delete-svgrepo-com.svg';
import { deleteSection } from '../store/deleteArticleSection/deleteArticleSectionSlice';

const EditTodo = () => {
 const { articleId } = useParams();
 const dispatch = useDispatch();
 const API_URL = process.env.REACT_APP_API_URL_PROD;
 const articlesInfo = useSelector((state) => state.articlesSections.data);
 const info = useSelector((state) => state.articlesSections.status);
 const [image_name, setImageName] = useState('');
 const [showArticle, setShowArticle] = useState(false);
 const [, setSection] = useState([]);
 const navigate = useNavigate();
 let sections = {};

 useEffect(() => {
  articlesStatus();
 }, [articleId, info]); // Задължително да използваш [id], за да се извиква при промяна
 // на ID.

 const [formData, setFormData] = useState({
  id: articleId,
  article_id: articleId,
  title: '',
  image: '',
  status: false,
  section: [
   {
    position: 1,
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
   let sectionId = Number(articleId);
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
 const handleSectionImageChange = (e, index) => {
  const file = e.target.files[0];
  if (file) {
   const previewUrl = URL.createObjectURL(file); // Генерираме временен линк

   setFormData((prev) => {
    const updatedSections = [...prev.section];
    updatedSections[index] = {
     ...updatedSections[index],
     section_image: file, // Файлът за изпращане към BE
     sectionPreview: previewUrl, // Временният линк за незабавно показване
    };
    return { ...prev, section: updatedSections };
   });
  }
 };
 //delete article function
 const deleteSectionFromArticle = async (sectionId) => {
  try {
   // Първо изчакай `updateSection`
   await dispatch(
    deleteSection({
     articleId: articleId,
     sectionId: sectionId,
    })
   ).unwrap();
   // След това извикай `fetchArticles`
   await dispatch(fetchArticles()).unwrap();
   // Ако всичко е наред, презареди страницата
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

  const data = new FormData();

  // 1. Добавяме основните данни за статията
  data.append('id', articleId);
  data.append('title', formData.title);
  data.append('status', showArticle); // Булева стойност
  data.append('oldMainImage', formData.mainImage || ''); // Използваме за триене в BE

  // 2. Проверка за нова главна снимка
  if (formData.image instanceof File) {
   data.append('image', formData.image);
  }

  // 3. Подготовка и добавяне на секциите
  const processedSections = formData.section.map((sec, index) => {
   const position = sec.position || index + 1;

   // Ако има избран нов файл за секцията, го добавяме в FormData
   if (sec.section_image instanceof File) {
    data.append('section_image', sec.section_image);
    // Маркираме, че тази секция има нов файл, за да знае BE кога да трие стария
    return { ...sec, position, hasNewImage: true };
   }

   return { ...sec, position, hasNewImage: false };
  });

  // Добавяме масива със секции като стринг (BE ще го парсне с JSON.parse)
  data.append('section', JSON.stringify(processedSections));

  try {
   // Изпращаме `data` (FormData), а не `copy` (Object)
   await dispatch(updateSection(data)).unwrap();

   await dispatch(fetchArticles()).unwrap();

   // Почистване на паметта от Blob URL-ите
   if (formData.preview) URL.revokeObjectURL(formData.preview);
   formData.section.forEach((sec) => {
    if (sec.sectionPreview) URL.revokeObjectURL(sec.sectionPreview);
   });

   navigate('/home');
  } catch (error) {
   console.error('Error:', error);
  }
 };
 const handleAddSection = () => {
  setFormData((prevData) => ({
   ...prevData,
   section: [
    ...prevData.section,
    {
     position: prevData.section.length + 1, // Увеличаваме позицията с 1
     title: '',
     content: '',
    },
   ],
  }));
 };

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file) {
   const previewUrl = URL.createObjectURL(file); // Генерираме временен линк за преглед

   setFormData((prevData) => ({
    ...prevData,
    image: file, // Това отива в FormData за бекенда
    preview: previewUrl, // Това се използва за <img> тага
   }));

   // По желание: съкращаване на името за визуализация
   const truncatedName = file.name.length > 30 ? file.name.substring(0, 30) + '...' : file.name;
   setImageName(truncatedName);
  }
 };
 const handleDownload = async (imageUrl, fileName) => {
  try {
   const response = await fetch(imageUrl);
   const blob = await response.blob();
   const url = window.URL.createObjectURL(blob);
   const link = document.createElement('a');
   link.href = url;

   // Вземаме оригиналното име на файла от пътя
   const name = fileName.split('/').pop();
   link.setAttribute('download', name);

   document.body.appendChild(link);
   link.click();

   // Почистване
   link.parentNode.removeChild(link);
   window.URL.revokeObjectURL(url);
  } catch (error) {
   console.error('Грешка при сваляне:', error);
   // Ако не успее, поне я отвори в нов таб
   window.open(imageUrl, '_blank');
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
     <form className="signup edit-form-styles" id="myForm" autoComplete="off" onSubmit={handleSubmit} encType="multipart/form-data">
      <h5 className="center-header text-align-center">Редактиране на статия:</h5>
      <div className="text-align-center">
       <p>{formData.title}</p>
       {(formData.preview || formData.images_id) && (
        <div className="current-image-preview">
         <p>{formData.preview ? 'Нова главна снимка (преглед):' : 'Текуща главна снимка:'}</p>
         <img
          src={formData.preview ? formData.preview : `${API_URL}${formData.images_id}`}
          alt="Main"
          style={{
           width: '150px',
           borderRadius: '8px',
           border: formData.preview ? '2px solid #2196f3' : 'none',
          }}
         />
        </div>
       )}

       <div className="flex-horizontal-container-raw justify-content-center margin-top-15">
        <div className="file file--uploading">
         {/* Уникално ID за главната снимка */}
         <input id="input-file-main" onChange={handleImageChange} type="file" style={{ display: 'none' }} />
         <label htmlFor="input-file-main" className="input-file border-radius-20">
          <img src={upload} alt="upload" />
          <p className="remove-margin-bottom">Смени главна снимка</p>
         </label>
        </div>
       </div>
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
          {/* Показване на текущата снимка на секцията (ако има) */}
          {(section.sectionPreview || section.imageUrl) && <img src={section.sectionPreview ? section.sectionPreview : `${API_URL}${section.imageUrl}`} className="images-section-size" alt="Section-image" style={{ border: section.sectionPreview ? '2px solid #4caf50' : 'none' }} />}{' '}
          <div className="flex-horizontal-container-raw justify-content-center flex-gap">
           <div className="file file--uploading">
            <input id={`file-section-${index}`} onChange={(e) => handleSectionImageChange(e, index)} type="file" style={{ display: 'none' }} />
            <label htmlFor={`file-section-${index}`} className="input-file border-radius-20">
             <img src={upload} alt="upload" />
             <p className="remove-margin-bottom">Качи файл</p>
            </label>
           </div>
           <div className="input-file download-button-style" onClick={() => handleDownload(`${API_URL}${section.imageUrl}`, formData.images_id)}>
            <label htmlFor="input-file-edit" className="input-file text-align-center justify-content-center align-items-center">
             <img src={download} alt="download" style={{ height: '24px', width: '24px' }} />
             <p className="remove-margin-bottom">Свали файл</p>
            </label>
           </div>
          </div>
          <hr className="hr-edit" />
          <div className="delete_section" onClick={() => deleteSectionFromArticle(section.position)}>
           <img src={deleteSectionImg} alt="delete" />
          </div>
         </div>
        );
       })}
      </div>
      {/*upload button*/}
      <button onClick={handleSubmit} type="submit" className="edit-send-button">
       Запази промените
      </button>
     </form>
     <div className="margin-15 text-align-center">
      <button className="padding-15 border-radius-10 border-color-green" onClick={() => handleAddSection()}>
       Добавяне на нова секция
      </button>
     </div>
    </div>
   )}
  </>
 );
};

export default EditTodo;
