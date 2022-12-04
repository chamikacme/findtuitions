import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import teacherService from "./teacherService";

const initialState = {
  teachers: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addFilter = createAsyncThunk(
  "teachers/addFilter",
  async (filterData, thunkAPI) => {
    try {
      return await teacherService.addFilter(filterData);
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

export const getTeachers = createAsyncThunk(
  "teachers/getAll",
  async (_, thunkAPI) => {
    try {
      return await teacherService.getTeachers();
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
        state.teachers = action.payload;
      })
      .addCase(getTeachers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.teacherData = null;
      })
      .addCase(addFilter.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addFilter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.teachers = action.payload;
      })
      .addCase(addFilter.rejected, (state, action) => {
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
