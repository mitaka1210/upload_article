import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './list.scss';
import { fetchArticles } from '../store/getArticleData/getArticlesDataSlice';
import { useNavigate } from 'react-router-dom';

const ListTodos = () => {
  //? properties
  let err = '';
  // eslint-disable-next-line no-unused-vars
  let content = '';
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  useEffect(() => {
    getTodos();
  }, [1]);
  const articlesInfo = useSelector((state) => state.articlesSections.data);
  const navigate = useNavigate();

  const editSection = (section) => {
    navigate(`/update-section/${section.id}`);
  };

  //delete todo function

  const deleteTodo = async () => {
    // TODO
    // try {
    //   const deleteTodo = await fetch(`${getTodo.DELETE_ALL_TODOS}/${id}`, {
    //     method: 'DELETE',
    //   });
    // } catch (err) {}
  };

  const getTodos = () => {
    if (status === 'idle') {
      dispatch(fetchArticles());
    } else if (status === 'loading') {
      content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
      /* empty */
    } else if (status === 'failed') {
      content = <div>{error}</div>;
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
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {articlesInfo.map((section, index) => {
              return (
                <tr key={index}>
                  <td>{section.title}</td>
                  <td>{section.create_article_date}</td>
                  <td>{section.create_article_time}</td>
                  <td>
                    <button onClick={() => editSection(section)}>Edit</button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(section.todo_id)}
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
