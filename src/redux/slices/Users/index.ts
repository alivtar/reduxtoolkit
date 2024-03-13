import { createSlice } from "@reduxjs/toolkit";

const USERS_INITIAL_STATE = {
  user: {
    username: "",
  },
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: USERS_INITIAL_STATE,
  reducers: {
    userLogin: (state, action) => {
      state.user = action.payload;
    },
    userLogout: (state) => {
      state.user = USERS_INITIAL_STATE.user;
    },
  },
});

export const { userLogin, userLogout } = usersSlice.actions;
