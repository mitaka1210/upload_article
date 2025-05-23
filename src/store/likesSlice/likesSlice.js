import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = `${process.env.REACT_APP_API_URL_PROD}`;

// getAll likesDislikes from server
export const fetchLikesDislikes = createAsyncThunk('fetchLikesDislikes', async () => {
 return fetch(`${url}/api/likes-dislikes`)
  .then((response) => response.json())
  .then((json) => {
   if (json.status === 401) {
    localStorage.clear();
    window.location.href = '/';
   }
   return json;
  });
});

const initialState = {
 likes: 0,
 dislikes: 0,
 data: [],
 error: false,
 status: 'idle',
};

const likesSlice = createSlice({
 name: 'likesDislikes',
 initialState,
 reducers: {
  incrementLike: (state) => {
   state.likes += 1;
  },
  incrementDislike: (state) => {
   state.dislikes += 1;
  },
 },
 extraReducers: (builder) => {
  builder.addCase(fetchLikesDislikes.pending, (state, action) => {
   state.status = 'loading';
   state.isLoading = true;
  });
  builder.addCase(fetchLikesDislikes.fulfilled, (state, action) => {
   let likesDislikesArr = [];
   state.isLoading = false;
   state.status = 'succeeded';
   for (let i = 0; i < action.payload.length; i++) {
    likesDislikesArr.push({
     tour_id: action.payload[i].id,
     likes: action.payload[i].likes,
     dislikes: action.payload[i].dislikes,
    });
   }
   state.data = likesDislikesArr;
   console.log('pesho', likesDislikesArr);
  });
  builder.addCase(fetchLikesDislikes.rejected, (state, action) => {
   state.status = 'failed';
   state.error = true;
   state.error = action.error.message;
  });
 },
});

export const { incrementLike, incrementDislike } = likesSlice.actions;

export default likesSlice.reducer;
