import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchArticles = createAsyncThunk("getArticles", async () => {
  return fetch("http://localhost:5000/articles")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
});

const articlesSlice = createSlice({
  name: "articles",
  initialState: {
    isLoading: false,
    data: [],
    error: false,
    status: "idle",
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
      state.status = "loading";
      state.isLoading = true;
    });
    builder.addCase(fetchArticles.fulfilled, (state, action) => {
      state.isLoading = false;
      let articlesArr = [];
      state.status = "succeeded";
      for (let i = 0; i < action.payload.length; i++) {
        let createArticle = new Date(
          action.payload[i].createData,
        ).toDateString();
        let createTime = new Date(
          action.payload[i].createData,
        ).toLocaleTimeString();
        articlesArr.push({
          create_article_date: createArticle,
          create_article_time: createTime,
          id: action.payload[i].id,
          header_article: action.payload[i].title,
          images_id: action.payload[i].images,
          section: action.payload[i].sections,
        });
      }
      state.data = articlesArr;
    });
    builder.addCase(fetchArticles.rejected, (state, action) => {
      state.status = "failed";
      state.error = true;
      state.error = action.error.message;
    });
  },
});

export const { add, getAll } = articlesSlice.actions;
export default articlesSlice.reducer;
