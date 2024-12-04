import React, { useEffect, useState } from "react";
import { updateSection } from "../store/editSections/editSectionsSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchArticles } from "../store/getArticleData/getArticlesDataSlice";

const EditTodo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const articlesInfo = useSelector((state) => state.articlesSections.data);
  const info = useSelector((state) => state.articlesSections.status);
  const [section, setSection] = useState([]);
  let sections = {};
  let content = "";
  let error = "";
  useEffect(() => {
    articlesStatus();
    console.log("pesho", info);
  }, [3]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    image_url: "",
    sections: "",
  });
  const articlesStatus = () => {
    if (info === "idle") {
      dispatch(fetchArticles());
    } else if (info === "loading") {
      console.log("pesho", info);

      content = <div>Loading...</div>;
    } else if (info === "succeeded") {
      let sectionId = Number(id);
      for (const sectionIdKey in articlesInfo) {
        if (Number(sectionIdKey) + 1 === sectionId) {
          sections = articlesInfo[sectionIdKey];
          setSection(sections.section);
          setFormData(sections);
        }
      }
    } else if (info === "failed") {
      content = <div>{error}</div>;
    } else {
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSection(formData));
  };

  return (
    <>
      {info.isLoading ? (
        <div>
          <h1>Loading........{error}</h1>
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              placeholder="Section ID"
              required
            />
            <input
              type="text"
              name="title"
              value={formData.header_article}
              onChange={handleChange}
              placeholder="Title"
              required
            />
            {section.map((section, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    name="position"
                    value={section.position}
                    onChange={handleChange}
                    placeholder="Position"
                    required
                  />
                  <textarea
                    name="content"
                    value={section.content}
                    onChange={handleChange}
                    placeholder="Content"
                  />
                </div>
              );
            })}
            <input
              type="text"
              name="image_url"
              value={formData.images_id}
              onChange={handleChange}
              placeholder="Image URL"
            />
            <button type="submit">Update Section</button>
          </form>
        </div>
      )}
    </>
  );
};

export default EditTodo;
