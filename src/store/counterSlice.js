import { createSlice } from "@reduxjs/toolkit";

import authSlice, { toggleAuth } from "./authSlice";

const initState = { value: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleAuth, (state, action) => {
      state.value = 0
    });
  },
});

export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
