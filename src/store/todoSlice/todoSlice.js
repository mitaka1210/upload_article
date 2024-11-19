import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getTodo from "../../configuration/ api-endpoints";


export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  return fetch(getTodo.GET_ALL_TODOS)
    .then(response => response.json())
    .then(json => {
      return json;
    });
});

const getImages = createAsyncThunk("fetchTodo", async () => {
  return fetch(getTodo.GET_IMAGES)
      .then(response => response.json())
      .then(json => {
        return json;
      });
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
    status: "idle"
  },
  reducers: {
    getAll(state, action) {
      state.todo.push(action.payload);
    },
    add(state, action) {
      state.data.push(action.payload);
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchTodo.pending, (state, action) => {
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(fetchTodo.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log("pesho",action.payload);
      let newArr = [];
      let formatData: string = "";
      state.status = "succeeded";
      for (let i = 0; i < action.payload.length; i++) {
        let createArticle = (new Date(action.payload[i].created_at).toDateString());
        let createTime = (new Date(action.payload[i].time).toLocaleTimeString());
        newArr.push({
          create_article_date: createArticle,
          create_article_time: createTime,
          header_article: action.payload[i].header_article,
          images_id: action.payload[i].images_id,
          images: getImages()
        });
      }
      state.data = newArr;
    });
    builder.addCase(fetchTodo.rejected, (state, action) => {
      state.status = "failed";
      state.error = true;
      state.error = action.error.message;
    });
  }
});


export const {add, getAll} = todoSlice.actions;
export default todoSlice.reducer;
