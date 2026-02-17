import { configureStore } from '@reduxjs/toolkit'
import boolean from "../src/booleanSlice"

export const store = configureStore({
  reducer: {
    boolean:boolean,
  },
})