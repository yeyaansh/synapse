import {configureStore} from "@reduxjs/toolkit"
import authReducer from "./slice1"
const store = configureStore({
    reducer:{
        auth:authReducer,
    }
})

export default store;