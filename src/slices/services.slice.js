import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk('fetchServices', async() => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN_URL}/api/services`)
  const data = res.json()
  return data
})

const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    isLoading: false,
    data: [],
    error: null
  },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state) => {
      state.isLoading = true
    })

    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.isLoading = false
      state.data = action.payload
    })
    
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.error = action.error
    })
  }
})

export default serviceSlice.reducer