import React, { useEffect, useState } from 'react';
import { updateSection } from '../store/editSections/editSectionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import upload from '../assets/cloud-computing.png';

const EditTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articlesInfo = useSelector((state) => state.articlesSections.data);
  const info = useSelector((state) => state.articlesSections.status);
  const [image_name, setImageName] = useState('');
  const [, setImage] = useState(null);
  const [, setSection] = useState([]);
  const navigate = useNavigate();
  let sections = {};
  // eslint-disable-next-line no-unused-vars
  let content = '';
  let error = '';

  useEffect(() => {
    articlesStatus();
  }, [id]); // Задължително да използваш [id], за да се извиква при промяна
  // на ID.

  const [formData, setFormData] = useState({
    id: id,
    article_id: id,
    title: '',
    images_id: '',
    section: [
      {
        position: '',
        content: '',
        title: '',
      },
    ],
  });

  const articlesStatus = () => {
    if (info === 'idle') {
      dispatch(fetchArticles());
    } else if (info === 'loading') {
      content = <div>Loading...</div>;
    } else if (info === 'succeeded') {
      let sectionId = Number(id);
      for (const sectionIdKey in articlesInfo) {
        if (Number(sectionIdKey) + 1 === sectionId) {
          sections = articlesInfo[sectionIdKey];
          setSection(sections.section);
          setFormData(sections);
        }
      }
    } else if (info === 'failed') {
      content = <div>{error}</div>;
    }
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
  const handleImageChange = (e) => {
    setImageName(e.target.files[0].name);
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const copy = structuredClone(formData);

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

  return (
    <>
      {info === 'loading' ? (
        <div>Loading...</div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              value={formData.title || ''}
              onChange={handleChange}
              placeholder="Title"
              required
            />
            {formData.section.map((section, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    name={`section[${index}].title`}
                    value={section.title || ''}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                  />
                  <textarea
                    name={`section[${index}].content`}
                    value={section.content || ''}
                    onChange={handleChange}
                    placeholder="Content"
                  />
                </div>
              );
            })}
            {/*upload button*/}
            <div className="file file--uploading">
              <input id="input-file" onChange={handleImageChange} type="file" />
              <label htmlFor="input-file">
                <img src={upload} alt="upload" />
                <p>Uploading</p>
              </label>
              <p>{image_name}</p>
            </div>
            <button type="submit">Update Section</button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditTodo;
