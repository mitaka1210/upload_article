import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchArticles = createAsyncThunk('getArticles', async () => {
 return fetch('http://localhost:5000/articles')
  .then((response) => response.json())
  .then((json) => {
   return json;
  });
});

const articlesSlice = createSlice({
 name: 'articles',
 initialState: {
  isLoading: false,
  data: [],
  error: false,
  status: 'idle',
 },
 reducers: {
  getAll(state, action) {
   state.todo.push(action.payload);
  },
  add(state, action) {
   state.data.push(action.payload);
  },
 },
 extraReducers: (builder) => {
  builder.addCase(fetchArticles.pending, (state, action) => {
   state.status = 'loading';
   state.isLoading = true;
  });
  builder.addCase(fetchArticles.fulfilled, (state, action) => {
   state.isLoading = false;
   let articlesArr = [];
   state.status = 'succeeded';
   for (let i = 0; i < action.payload.length; i++) {
    // let createArticle = new Date(action.payload[i].createData).toDateString();
    let createArticle = new Date(action.payload[i].createData).toLocaleString(undefined, {
     year: 'numeric',
     month: '2-digit',
     day: '2-digit',
     weekday: 'long',
    });
    let createTime = new Date(action.payload[i].createData).toLocaleString(undefined, {
     hour: '2-digit',
     hour12: false, //AM or PM
     minute: '2-digit',
    });
    articlesArr.push({
     create_article_date: createArticle,
     status: action.payload[i].status,
     create_article_time: createTime,
     id: action.payload[i].id,
     title: action.payload[i].title,
     images_id: action.payload[i].images,
     section: action.payload[i].sections,
    });
   }
   //? return last created article first
   //return articlesArr.reverse();
   state.data = articlesArr.reverse();
  });
  builder.addCase(fetchArticles.rejected, (state, action) => {
   state.status = 'failed';
   state.error = true;
   state.error = action.error.message;
  });
 },
});

export const { add, getAll } = articlesSlice.actions;
export default articlesSlice.reducer;
