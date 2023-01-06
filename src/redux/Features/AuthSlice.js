import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../Api/Api";


export const fetchUserData = createAsyncThunk("/auth/fetchUserData", async () => {
    const {data} = await Api.post('/')
});
const initialState = {
  data: null,
  isLoading: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {},
});
