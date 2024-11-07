import {configureStore} from "@reduxjs/toolkit";
import todoSlice from "../todoSlice/todoSlice";
import commentsReducer from "../commentForm/commentSlice";
import likesSlice from "../likesSlice/likesSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
    comments: commentsReducer,
    likes: likesSlice

  }
});

export default store;
