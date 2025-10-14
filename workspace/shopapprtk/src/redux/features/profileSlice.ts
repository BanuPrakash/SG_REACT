import { createSlice } from '@reduxjs/toolkit'

const profileSlice = createSlice({
  name: 'profile',
  initialState : {"avatar": "roger.png", "name": "Roger"},
  reducers: {
  }
});

export default profileSlice.reducer