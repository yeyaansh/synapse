import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosClient from "../axios";

export const authCheckGlobal = createAsyncThunk(
  "auth/exist",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosClient.get("/auth/exist");
      console.log(response);
      return response.data.user;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err);
    }
  }
);

export const registerGlobal = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      // console.log("user ka data ye hai client side ----> server side")
      console.log(userData);

      const response = await axiosClient.post("/auth/register", userData);
      // console.log("yahi response hai register karne par..")
      console.log(response);
      return response.data.user;
    } catch (err) {
      // console.log("ye error hai register karne par..")
      console.log(err);

      return rejectWithValue(err);
    }
  }
);

export const loginGlobal = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosClient.post("/auth/login", userData);
      // console.log("data from the server:");
      console.log(response.data);
      return response.data.user;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    isLoading: false,
    isCompletedChecks: false,
    user: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authCheckGlobal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(authCheckGlobal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCompletedChecks = true;
        state.isAuthenticated = !!action.payload;
        state.error = null;
        state.user = action.payload;
      })
      .addCase(authCheckGlobal.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isCompletedChecks = true;
        state.error = action.payload?.message || "user is not authenticated";
        state.isLoading = false;
        state.user = null;
      })
      .addCase(registerGlobal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerGlobal.fulfilled, (state, action) => {
        state.isAuthenticated = !!action.payload;
        state.isCompletedChecks = true;
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(registerGlobal.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.isCompletedChecks = true;
        state.isLoading = false;
        state.error = action.payload?.message || "something went wrong!";
        state.user = null;
      })
      .addCase(loginGlobal.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginGlobal.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCompletedChecks = true;
        state.isAuthenticated = !!action.payload;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginGlobal.rejected, (state, action) => {
        state.isLoading = false;
        state.isCompletedChecks = true;
        state.isAuthenticated = false;
        state.error = action.payload?.message || "could not login!";
        state.user = null;
      });
  },
});

export default authSlice.reducer;
