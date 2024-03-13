import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UsersStateValue {
  username: string;
}

interface UsersState {
  user: UsersStateValue;
}

const USERS_INITIAL_STATE: UsersState = {
  user: {
    username: "",
  },
};

export const usersSlice = createSlice({
  name: "usersSlice",
  initialState: USERS_INITIAL_STATE,
  reducers: {
    userLogin: (state: UsersState, action: PayloadAction<UsersStateValue>) => {
      state.user = action.payload;
    },
    userLogout: (state: UsersState) => {
      state.user = USERS_INITIAL_STATE.user;
    },
  },
});

export const { userLogin, userLogout } = usersSlice.actions;
