import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchSolutions = createAsyncThunk('fetchSolutions', async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/solutions`)
  const data = res.json()
  return data
})

const solutionSlice = createSlice({
  name: 'solutions',
  initialState: {
    isLoading: false,
    data: [],
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSolutions.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchSolutions.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    
    builder.addCase(fetchSolutions.rejected, (state, action) => {
      state.error = action.error
    })
  }
})

export default solutionSlice.reducer