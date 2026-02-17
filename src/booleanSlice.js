import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  bool: false,
}

export const boolean = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
  
    boolRecup: (state) => {
      state.bool=!state.bool
      console.log("voici le state",state.bool)
    },
  },
})

// Action creators are generated for each case reducer function
export const { boolRecup } = boolean.actions

export default boolean.reducer