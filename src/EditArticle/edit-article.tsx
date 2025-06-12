import React, { useEffect, useState } from 'react';
import { updateSection } from '../store/editSections/editSectionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import './edit.scss';
// @ts-ignore
import deleteSectionImg from '../assets/delete-svgrepo-com.svg';
import { deleteSection } from '../store/deleteArticleSection/deleteArticleSectionSlice';
import { AppDispatch, RootState } from '../store/storeState/store';

const EditTodo = () => {
 const { articleId } = useParams();
 const dispatch = useDispatch<AppDispatch>();
 const articlesInfo = useSelector((state: RootState) => state.articlesSections.data);
 const info = useSelector((state: RootState) => state.articlesSections.status);
 const [imageName, setImageName] = useState('');
 const [showArticle, setShowArticle] = useState(false);
 const [, setSection] = useState<{ position: number; content: string; title: string }[]>([]);
 const navigate = useNavigate();
 let articleStructure: {
  id: number;
  article_id: string | undefined;
  title: string;
  image: string;
  status: boolean;
  section: { position: number; content: string; title: string }[];
 } = {
  id: 0,
  article_id: undefined,
  title: '',
  image: '',
  status: false,
  section: [],
 };

 useEffect(() => {
  articlesStatus();
 }, [articleId, info]);

 const [formData, setFormData] = useState({
  id: articleId,
  article_id: articleId,
  title: '',
  image: '' as string | File,
  status: false,
  section: [
   {
    position: 0,
    content: '',
    title: '',
   },
  ],
 });

 const articlesStatus = () => {
  if (info === 'idle') {
   dispatch(fetchArticles());
  } else if (info === 'succeeded') {
   let sectionId = Number(articleId);
   articlesInfo.forEach((section: any) => {
    if (section.id === sectionId) {
     articleStructure = section;
     setSection(articleStructure.section);
     setFormData({
      ...articleStructure,
      id: articleStructure.id?.toString(),
     });
     setShowArticle(articleStructure.status);
    }
   });
  }
 };

 const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;

  if (name.startsWith('section[')) {
   const sectionIndex = parseInt(name.split('[')[1].split(']')[0]);
   const sectionName = name.split('.')[1];

   setFormData((prev) => {
    const updatedSections = [...prev.section];
    updatedSections[sectionIndex] = {
     ...updatedSections[sectionIndex],
     [sectionName]: value,
    };
    return { ...prev, section: updatedSections };
   });
  } else {
   setFormData((prevData) => ({
    ...prevData,
    [name]: value,
   }));
  }
 };

 const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
   const truncatedName = truncateString(file.name, 30);
   setImageName(truncatedName);
   setFormData((prevData) => ({
    ...prevData,
    image: file,
   }));
  }
 };

 const deleteSectionFromArticle = async (sectionId: number) => {
  try {
   await dispatch(
    deleteSection({
     articleId: articleId as string,
     sectionId: sectionId,
    })
   ).unwrap();
   await dispatch(fetchArticles()).unwrap();
  } catch (error) {
   console.error('Error:', error);
  }
 };

 const checkBoxValue = (isChecked: boolean) => {
  setShowArticle(isChecked);
 };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  const copy = structuredClone({
   ...formData,
   image: formData.image,
   status: showArticle,
  });
  try {
   // @ts-ignore
   await dispatch(updateSection(copy as { image: string | File; status: boolean; id: string | undefined; article_id: string | undefined; title: string; section: { position: number; content: string; title: string }[] })).unwrap();
   await dispatch(fetchArticles()).unwrap();
   navigate('/home');
  } catch (error) {
   console.error('Error:', error);
  }
 };

 const truncateString = (str: string, num: number): string => {
  if (str.length <= num) {
   return str;
  } else {
   return str.slice(0, num) + '...';
  }
 };

 const handleAddSection = () => {
  setFormData((prevData) => ({
   ...prevData,
   section: [
    ...prevData.section,
    {
     position: prevData.section.length,
     title: '',
     content: '',
    },
   ],
  }));
 };

 return (
  <>
   {info === 'loading' ? (
    <div>Loading...</div>
   ) : (
    <div className="edit-form-bgr">
     <div className="flex-vertical-container align-items-center edit-header">
      <h3 className={showArticle ? 'add-color-green remove-margin-bottom' : 'add-color-orange remove-margin-bottom'}>{showArticle ? 'Статия е побликувана' : 'Статията не е побликувана'}</h3>
      <div className="show-article">
       <input
        type="checkbox"
        id="check"
        checked={showArticle}
        onChange={(e) => {
         const isChecked = e.target.checked;
         checkBoxValue(isChecked);
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
      </div>
      <div className="flex-horizontal-container-raw signup__field justify-content-center margin-15">
       <input type="text" className="signup__input margin-top-15" name="title" value={formData.title || ''} onChange={handleChange} placeholder="Задължително" required />
       <label className="signup__label">Редактиране на заглавието</label>
      </div>
      <div className="flex-vertical-container input-width-100">
       {formData.section.map((section, index) => (
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
       ))}
      </div>
      <div className="file file--uploading">
       <input id="input-file-edit" onChange={handleImageChange} type="file" />
      </div>
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
