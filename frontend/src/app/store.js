import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import teacherReducer from "../features/teachers/teacherSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teacherReducer,
  },
});
