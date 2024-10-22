import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import serverReducer from "./slices/serverSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    servers: serverReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
