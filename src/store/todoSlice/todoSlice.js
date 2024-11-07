import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import getTodo from "../../configuration/ api-endpoints";


export const fetchTodo = createAsyncThunk("fetchTodo", async () => {
  return fetch(getTodo.GET_ALL_TODOS)
    .then(response => response.json())
    .then(json => {
      return json;
    });
});

const fetchImage = (file, path) => {
  if (file !== null && path !== null) {
    const blob = new Blob([new Uint8Array(file.data)], {type: `image/${path.split(".").pop()}`});
    return URL.createObjectURL(blob);
  }
};

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
      let newArr = [];
      let formatData: string = "";
      state.status = "succeeded";
      for (let i = 0; i < action.payload.length; i++) {
        let a = (new Date(action.payload[i].date));
        // let b =  action.payload[i].currentTime;
        formatData = a.toLocaleDateString();
        newArr.push({
          description: action.payload[i].description,
          date: formatData,
          currentTime: action.payload[i].time,
          header: action.payload[i].header,
          todoId: action.payload[i].todo_id,
          images: fetchImage(action.payload[i].file_data, action.payload[i].images_path)
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
