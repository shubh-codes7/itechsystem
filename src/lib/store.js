import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from '@/slices/services.slice.js'

export const store = configureStore({
  reducer: {
    services: serviceSlice
  }
})