import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, setToken } from "../../api/instance";
import {
  apiLogOut,
  apiLogin,
  apiRefreshUser,
  apiRegister
} from "../../api/authorization.js"

export const register = createAsyncThunk(
  "auth/register",
  async ({ formData, formik }, thunkAPI) => {
    try {
      const { data } = await apiRegister(formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    } finally {
      formik.resetForm();
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ formData, formik }, thunkAPI) => {
    try {
      const { data } = await apiLogin(formData);
      setToken(data.token);
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    } finally {
      formik.resetForm();
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await apiLogOut();
    clearToken();
    return;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refresh = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = state.auth.token;

  if (!persistedToken) return thunkAPI.rejectWithValue("Unable to fetch user");

  try {
    setToken(persistedToken);
    const { data } = await apiRefreshUser();
    return data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const token = state.auth.token;
      setToken(token);
      const { data } = await instance.get("/users/current");

      return data;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  },
  {
    condition: (_, thunkApi) => {
      const state = thunkApi.getState();
      const token = state.auth.token;
      if (!token) return false;
      return true;
    },
  }
);