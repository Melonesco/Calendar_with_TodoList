import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.tasks += 1;
    },
    removeItem: (state, action) => {
      state.tasks -= 1;
    },
  },
});

export const { addItem, removeItem } = tasksSlice.actions;

export default tasksSlice.reducer;
