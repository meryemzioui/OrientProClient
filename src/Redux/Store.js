import { configureStore } from '@reduxjs/toolkit'
import globalReducer from "./Slices/ModeSlice"
import authReducer from "./Slices/authslice"

export const store = configureStore({
  reducer: {
    auth:authReducer,
    global : globalReducer,
  },
})