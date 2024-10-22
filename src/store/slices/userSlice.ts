import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/lib/types";

interface UserState {
  user: User | null;
  authenticated: boolean;
  isInviteModalOpen: boolean;
}

const initialState: UserState = {
  user: null,
  authenticated: false,
  isInviteModalOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setInviteModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isInviteModalOpen = action.payload;
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.authenticated = true;
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
      }
    },
    clearUser: (state) => {
      state.user = null;
      state.authenticated = false;
    },
    setAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.authenticated = action.payload;
    },
  },
});

export const {
  setUser,
  updateUser,
  clearUser,
  setAuthenticated,
  setInviteModalOpen,
} = userSlice.actions;
export default userSlice.reducer;
