import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from '@/slices/services.slice.js'
import solutionSlice from '@/slices/solutions.slice.js'
import courseSlice from '@/slices/courses.slice.js'

export const store = configureStore({
  reducer: {
    services: serviceSlice,
    solutions: solutionSlice,
    courses: courseSlice
  }
})