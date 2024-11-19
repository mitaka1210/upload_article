import React, {useEffect, useState} from "react";
import EditTodo from "../components/EditTodo";
import {useDispatch, useSelector} from "react-redux";
import {fetchTodo} from "../store/todoSlice/todoSlice";
import getTodo from "../configuration/ api-endpoints";
import "./list.scss";

const ListTodos = () => {
  //? properties
  let todosData = [];
  let err = "";
  let content;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todo.status);
  const [file, setFile] = useState();
  const error = useSelector((state) => state.todo.error);
  useEffect(() => {
    getTodos();
  }, [dispatch]);
  const data = useSelector((state) => {
    todosData = state.todo;
  });

  //delete todo function

  const deleteTodo = async id => {
    console.log("pesho",);
    try {
      const deleteTodo = await fetch(`${getTodo.DELETE_ALL_TODOS}/${id}`, {
        method: "DELETE"
      });
      console.log("pesho", deleteTodo);
    } catch (err) {
      console.error("err", err);
    }
  };

  const getTodos = () => {
    if (status === "idle") {
      dispatch(fetchTodo());
    } else if (status === "loading") {
      content = <div>Loading...</div>;
    } else if (status === "succeeded") {
      console.log("pesho", todosData);
    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
      console.log("peshoDARTA", status, data);
    }
  };


  //TODO трябва да се оправи async заявките да се изчака отговора че са получени данните преди да се заредят в data.data.map

  return (
    <div>
      {todosData.isLoading ? <div><h1>Loading........{err}</h1></div> :
        <table className="table mt-5 text-center">
          <thead>
          <tr>
            <th>Header</th>
            <th>Date</th>
            <th>Time</th>
            <th>Edit</th>
            <th>Images</th>
            <th>Delete</th>
          </tr>
          </thead>
          <tbody>
          {todosData.data.map((todo, index) => {
            return <tr key={index}>
              <td>{todo.header_article}</td>
              <td>{todo.create_article_date}</td>
              <td>{todo.create_article_time}</td>
              <td>
                <EditTodo todo={todo}/>
              </td>
              <td>
                {/*<form method="POST" className="upload-img" action="/upload"*/}
                {/*      encType="multipart/form-data" type="file" name="'file">*/}
                {/*  <div>*/}
                {/*    <label>Upload profile picture</label>*/}
                {/*    <input type="file" name="profile-file" required/>*/}
                {/*  </div>*/}
                {/*  <div>*/}
                {/*    <input type="submit" value="Upload" onClick={upload}/>*/}
                {/*  </div>*/}
                {/*</form>*/}
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>;
          })}
          </tbody>
        </table>
      }
    </div>);
};

export default ListTodos;
