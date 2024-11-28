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

const SectionUpload = () => {
    const dispatch = useDispatch();
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

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="section_id" type="number" placeholder="Section ID"
                   onChange={handleInputChange} required/>
            <input name="article_id" type="number" placeholder="Article ID"
                   onChange={handleInputChange} required/>
            <input name="title" type="text" placeholder="Title"
                   onChange={handleInputChange} required/>
            <textarea name="content" placeholder="Content"
                      onChange={handleInputChange}></textarea>
            <input name="position" type="number" placeholder="Position"
                   onChange={handleInputChange} required/>
            <input type="file" onChange={handleImageChange}/>
            <button type="submit">Upload Section</button>
        </form>
    );
};

export default SectionUpload;
