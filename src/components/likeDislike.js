import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchLikesDislikes,
  incrementDislike,
  incrementLike,
} from '../store/likesSlice/likesSlice';
import axios from 'axios';
import { fetchTodo } from '../store/todoSlice/todoSlice';
import { useLocation } from 'react-router-dom';

const LikeDislike = ({ articleId }) => {
  const { likes, dislikes } = useSelector((state) => state.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [results, setResults] = useState({});
  const [todoResults, settodoResults] = useState({});
  const [isDisliked, setIsDisliked] = useState(false);
  const status = useSelector((state) => state.likes.status);
  const error = useSelector((state) => state.likes.error);
  const dispatch = useDispatch();
  let todosData = [];
  let content;
  let likesData = {};
  const location = useLocation();
  const todoId = location.state.todoId;
  useEffect(() => {
    findTodo();
    findLikesDislikeCurrentPage();
  }, [status]);
  const dataLikesDislikes = useSelector((state) => {
    likesData = state.likes;
  });
  const data = useSelector((state) => {
    todosData = state.todo;
  });
  let todoExists = {};
  const findTodo = () => {
    todoExists = todosData.data.find((todo) => todo.todoId === todoId);
  };
  const findLikesDislikeCurrentPage = () => {
    if (status === 'idle') {
      dispatch(fetchLikesDislikes());
      dispatch(fetchTodo());
    } else if (status === 'loading') {
      content = <div>Loading...</div>;
    } else if (status === 'succeeded') {
      likesData.data.map((likes, i) => {
        if (likes.tour_id === todoId) {
          setResults({
            likes: likes.likes,
            dislikes: likes.dislikes,
            todoId: likes.tour_id,
          });
        }
      });
    } else if (status === 'failed') {
      content = <div>{error}</div>;
    }
  };
  const handleLike = async () => {
    dispatch(incrementLike());
    setIsLiked(true);
    try {
      await axios.post('http://localhost:5000/api/like', { likes, results });
    } catch (error) {
      console.error('Error liking the article', error);
    }
  };

  const handleDislike = async () => {
    dispatch(incrementDislike());
    setIsDisliked(true);
    try {
      await axios.post('http://localhost:5000/api/dislike', {
        dislikes,
        results,
      });
    } catch (error) {
      console.error('Error disliking the article', error);
    }
  };

  return (
    <div>
      {likesData.isLoading ? (
        <div>
          <h1>Loading........</h1>
        </div>
      ) : (
        <div>
          <button onClick={handleLike} disabled={isLiked || isDisliked}>
            👍 Харесвам <span>{results.likes}</span>
          </button>
          <button onClick={handleDislike} disabled={isLiked || isDisliked}>
            👎 Не харесвам <span>{results.dislikes}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LikeDislike;
