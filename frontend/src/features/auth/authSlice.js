import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// get teacher from local storage
const teacher = JSON.parse(localStorage.getItem("teacher"));

const initialState = {
  teacher: teacher ? teacher : null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// Register the teacher
export const register = createAsyncThunk(
  "auth/register",
  async (teacher, thunkAPI) => {
    try {
      return await authService.register(teacher);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Login the teacher
export const login = createAsyncThunk(
  "auth/login",
  async (teacher, thunkAPI) => {
    try {
      return await authService.login(teacher);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await authService.logout();
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teacher = action.payload;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.teacher = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teacher = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.teacher = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.teacher = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
