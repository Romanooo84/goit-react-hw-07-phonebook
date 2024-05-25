import { createSlice } from "@reduxjs/toolkit";
import { fetchTasks } from "./opertations";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state, action)=> {
                state.isLoading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action)=> {
          state.isLoading = false;
          state.error = null;
          state.items = action.payload;
            })
            .addCase(fetchTasks.rejected, (state, action)=> {
          state.isLoading = false;
          state.error = action.payload;
            })
  },
});

export const userReducer = userSlice.reducer;