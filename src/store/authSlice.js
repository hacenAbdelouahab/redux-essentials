import { createSlice } from "@reduxjs/toolkit";

const initState = {
  isAuthenticated: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initState,
  reducers: {
    toggleAuth: (state, action) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  }
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
