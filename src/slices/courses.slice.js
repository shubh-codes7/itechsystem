import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCourses = createAsyncThunk('fetchCourses', async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/courses`)
  const data = res.json()
  return data
})

const courseSlice = createSlice({
  name: 'courses',
  initialState: {
    isLoading: false,
    data: [],
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourses.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchCourses.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    
    builder.addCase(fetchCourses.rejected, (state, action) => {
      state.error = action.error
    })
  }
})

export default courseSlice.reducer