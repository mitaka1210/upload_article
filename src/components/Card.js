import React, {useEffect} from "react";
import "./card.scss";
import dataM from "../services/listTodosData";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import getTodo from "../configuration/ api-endpoints";
import {fetchTodo} from "../store/todoSlice/todoSlice";
import mitaka from "../assets/tetiana-grypachevska-O-dWPPAOgEU-unsplash.jpg";


const Card = () => {
  let arr = [];
  arr = dataM;
  //? properties
  let todosData = [];
  let err = "";
  let content;
  const dispatch = useDispatch();
  const status = useSelector((state) => state.todo.status);
  const error = useSelector((state) => state.todo.error);
  useEffect(() => {
    getTodos();
  }, [status, dispatch]);
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
    } else if (status === "failed") {
      content = <div>{error}</div>;
    } else {
      console.log("peshoDARTA", status, data);
    }
  };
  const navigate = useNavigate();
  let redirectPage = (header, content, date, time, images, todoId) => {
    navigate(`/read?todoId=${todoId}`, {
      state: {
        header: header,
        content: content,
        date: date,
        time: time,
        todoId: todoId,
        images: images
      },
      search: "/12412412"
    });
  };

  return (
    <div className="card-main">
      {
        todosData.data.map((todo: any, index) => {
          return <div className="container-card" key={index}>
            <div className="card">
              <div className="image-wrapper">
                <img alt="traveller"
                     src={todo.images === null ? mitaka : todo.images}/>
              </div>
              <div className="content">
                <h2>{todo.header}</h2>
                <h5>{todo.date}</h5>
                <h6>{todo.currentTime}</h6>
                <p>{todo.description.substring(0, 150) + " ..."}</p>
              </div>
              <button className="card-read"
                      onClick={() => redirectPage(todo.header, todo.description, todo.date, todo.currentTime, todo.images, todo.todoId)}>Go
                to
              </button>
            </div>
          </div>;
        })
      }
    </div>
  );
};

export default Card;
