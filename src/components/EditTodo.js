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
  }, [id]); // Задължително да използваш [id], за да се извиква при промяна на ID.

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    image_url: "",
    section: [
      {
        position: "",
        content: "",
        title: "",
      },
    ],
  });

  const articlesStatus = () => {
    if (info === "idle") {
      dispatch(fetchArticles());
    } else if (info === "loading") {
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
    }
  };

  const handleChange = (e) => {
    const { name, value, dataset } = e.target;

    if (name.startsWith("section[")) {
      const sectionIndex = parseInt(name.split("[")[1].split("]")[0]);
      const sectionName = name.split(".")[1]; // пример: section[0].position

      setFormData((prev) => {
        const updatedSections = [...prev.section];
        updatedSections[sectionIndex] = {
          ...updatedSections[sectionIndex],
          [sectionName]: value,
        };
        return { ...prev, section: updatedSections };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSection(formData));
  };

  return (
    <>
      {info === "loading" ? (
        <div>Loading...</div>
      ) : (
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="id"
              value={formData.id || ""}
              onChange={handleChange}
              placeholder="Section ID"
              required
            />
            <input
              type="text"
              name="title"
              value={formData.header_article || ""}
              onChange={handleChange}
              placeholder="Title"
              required
            />
            {formData.section.map((section, index) => {
              return (
                <div key={index}>
                  <input
                    type="text"
                    name={`section[${index}].position`}
                    value={section.position || ""}
                    onChange={handleChange}
                    placeholder="Position"
                    required
                  />
                  <textarea
                    name={`section[${index}].content`}
                    value={section.content || ""}
                    onChange={handleChange}
                    placeholder="Content"
                  />
                </div>
              );
            })}
            <input
              type="text"
              name="image_url"
              value={formData.images_id || ""}
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
