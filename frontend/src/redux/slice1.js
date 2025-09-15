import { createSlice } from "@reduxjs/toolkit";

const slicer1 = createSlice({
    name: slice1,
    initialState:{
        isAuthenticated:false, isLoading:false, user:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase()
    }
    }
})