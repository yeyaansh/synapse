import { createSlice, isAllOf } from "@reduxjs/toolkit";

const registerUser = createSlice({
    name: 'registerUser',
    initialState:{isLoading:false,isAuthenticated:false,}
})