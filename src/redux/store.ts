import { configureStore, createSlice } from "@reduxjs/toolkit";
import { usersSlice } from "./slices/Users";

export const store = configureStore({
  reducer: {
    usersData: usersSlice.reducer,
  },
});
