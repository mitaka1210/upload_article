// import React, {Fragment, useEffect, useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {add, fetchTodo} from "../store/todoSlice/todoSlice";
// import Upload from "./Upload";
//
// const InputTodo = () => {
//   const dispatch = useDispatch();
//   const [description, setDescription] = useState("");
//   const [header, setHeader] = useState("");
//   // const [artists, setArtists] = useState(todoL);
//   const products = useSelector((state) => state.todo.data);
//   const date = new Date();
//   const time = new Date().toLocaleTimeString();
//   // TODO need to add useEffect hook here
//   const onSubmitForm = async e => {
//     e.preventDefault();
//     try {
//       const body = {description, date, time, header};
//       const response = await fetch("http://localhost:5000/todos", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(body)
//       });
//       // window.location = "/";
//
//       resetInput(e);
//       dispatch(fetchTodo());
//     } catch (err) {
//       console.error(err.message);
//     }
//   };
//   useEffect(() => {
//     // dispatch(fetchTodo())
//   }, [products, dispatch]);
//
//   const addTodo = (description, header, file) => {
//     if (description.trim() && header.trim()) {
//       dispatch(add({
//         username: header,
//         header: "",
//         time: new Date().toLocaleTimeString(),
//         email: "",
//         date: date.toDateString(),
//         phone: "",
//         description: description,
//         file: file
//       }));
//     }
//   };
//
//   const resetInput = (event) => {
//     event.preventDefault();
//     setDescription("");
//     // allTodoList();
//   };
//   const [file, setFile] = useState();
//
//   return (
//     <Fragment>
//       <h1 className="text-center mt-5">Pern Todo List</h1>
//       <form className="d-flex mt-5 flex-column" onSubmit={onSubmitForm}>
//         <input
//           type="text"
//           className="form-control"
//           value={header}
//           placeholder="Заглавие"
//           onChange={e => setHeader(e.target.value)}
//         />
//
//         <input
//           type="text"
//           className="form-control"
//           value={description}
//           placeholder="текст"
//           onChange={e => setDescription(e.target.value)}
//         />
//         <Upload/>
//         <button className="btn btn-success" onClick={() => addTodo(description, header, file)}>Add</button>
//       </form>
//     </Fragment>
//   );
// };
//
// export default InputTodo;
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {uploadSection} from "../store/uploadArticleSlice/uploadArticleSlice";
import {addArticle} from "../store/add-new-article/addNewArticleSlice";
import "./upload.scss";
import upload from "../assets/cloud-computing.png";

const SectionUpload = () => {
    const dispatch = useDispatch();
    const [image_name, setImageName] = useState("");
    const [title, setTitle] = useState("");
    const [form, setForm] = useState({
        article_id: "",
        title: "",
        content: "",
        position: "",
    });
    const [image, setImage] = useState(null);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setForm((prev) => ({...prev, [name]: value}));
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
        const formData = new FormData();
        formData.append("article_id", form.article_id);
        formData.append("title", form.title);
        formData.append("content", form.content);
        formData.append("position", form.position);
        if (image) {
            formData.append("image", image);
        }

        dispatch(uploadSection(formData));
        dispatch(addArticle(title));
    };

    const addArticleHeader = () => {
        dispatch(addArticle(title));
    }

    return (
        <div className="upload-form">
            <div>
                <input name="section_title" type="text" placeholder="Title ID"
                       onChange={handleInputTitleChange} required/>
                <button onClick={addArticleHeader}>add</button>
            </div>
            <form onSubmit={handleSubmit}>
            <input name="section_id" type="number" placeholder="Section ID"
                       onChange={handleInputChange} required/>
                <input name="article_id" type="number" placeholder="Article ID"
                       onChange={handleInputChange} required/>
                <input name="title" type="text" placeholder="Title"
                       onChange={handleInputChange} required/>
                <input name="position" type="number" placeholder="Position"
                       onChange={handleInputChange} required/>
                <textarea className="text-area-form" name="content"
                          placeholder="Content"
                          onChange={handleInputChange}></textarea>
                {/*?<input type="file" onChange={handleImageChange}/>*/}
                {/*upload button*/}
                <div className="file file--uploading">
                    <input id="input-file" onChange={handleImageChange}
                           type="file"/>
                    <label htmlFor="input-file">
                        <img src={upload} alt="upload"/>
                        <p>Uploading</p>
                    </label>
                    <p>{image_name}</p>
                </div>
                <button type="submit">Upload Section</button>
            </form>
        </div>
    );
};

export default SectionUpload;
