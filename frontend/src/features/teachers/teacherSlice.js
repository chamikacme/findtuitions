import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teacherService from "./teacherService";

const initialState = {
  teachers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  numberOfTeachers: 0,
};

export const getTeachers = createAsyncThunk(
  "teachers/getTeachers",
  async (filterData, thunkAPI) => {
    try {
      const teacherData = await teacherService.getTeachers(filterData);

      return teacherData;
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

export const getTeacher = createAsyncThunk(
  "teacher/:username",
  async (_, thunkAPI) => {
    try {
      return await teacherService.getTeacher();
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

export const checkUserName = createAsyncThunk(
  "teachers/checkusername",
  async (usernameData, thunkAPI) => {
    try {
      return await teacherService.checkUserName(usernameData);
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

export const teacherSlice = createSlice({
  name: "teacher",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTeachers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeachers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teachers = action.payload.teachers;
        state.numberOfTeachers = action.payload.numberOfTeachers;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.teacherData = null;
      })
      .addCase(checkUserName.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(checkUserName.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teachers = action.payload;
      })
      .addCase(checkUserName.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.teacherData = null;
      })
      .addCase(getTeacher.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTeacher.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teachers = action.payload;
      })
      .addCase(getTeacher.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.teacherData = null;
      });
  },
});

export const { reset } = teacherSlice.actions;
export default teacherSlice.reducer;
