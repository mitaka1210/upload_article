import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getTodo from "../configuration/ api-endpoints";
import "./list.scss";
import { fetchArticles } from "../store/getArticleData/getArticlesDataSlice";
import EditTodo from "../components/EditTodo";

const ListTodos = () => {
  //? properties
  let err = "";
  let content;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todo.status);
  const [file, setFile] = useState();
  const error = useSelector((state) => state.todo.error);
  useEffect(() => {
    getTodos();
  }, [dispatch]);
  const articlesInfo = useSelector((state) => state.articlesSections.data);

  //delete todo function

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await fetch(`${getTodo.DELETE_ALL_TODOS}/${id}`, {
        method: "DELETE",
      });
    } catch (err) {}
  };

  const getTodos = () => {
    if (status === "idle") {
      dispatch(fetchArticles());
    } else if (status === "loading") {
      content = <div>Loading...</div>;
    } else if (status === "succeeded") {
    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
    }
  };

  //TODO трябва да се оправи async заявките да се изчака отговора че са получени данните преди да се заредят в data.data.map

  return (
    <div>
      {articlesInfo.isLoading ? (
        <div>
          <h1>Loading........{err}</h1>
        </div>
      ) : (
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
            {articlesInfo.map((todo, index) => {
              return (
                <tr key={index}>
                  <td>{todo.header_article}</td>
                  <td>{todo.create_article_date}</td>
                  <td>{todo.create_article_time}</td>
                  <td>
                    <EditTodo todo={todo} />
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
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ListTodos;
