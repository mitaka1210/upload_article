import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Асинхронна функция за актуализиране на секция
export const updateSection = createAsyncThunk(
  "sections/updateSection",
  async ({ ...data }, { rejectWithValue }) => {
    let id = data.id;
    try {
      const response = await fetch(`http://localhost:5000/sections/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to update section");
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const editSectionsSlice = createSlice({
  name: "sections",
  initialState: {
    isLoading: false,
    section: null,
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateSection.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.isLoading = true;
      })
      .addCase(updateSection.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.isLoading = false;
        state.section = action.payload;
        state.error = null;
      })
      .addCase(updateSection.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default editSectionsSlice.reducer;
// Забележка: Този ред е добавен във файлът src/store/index.js