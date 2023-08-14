import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  isOpenCart: boolean;
}

const initialState: CounterState = {
  isOpenCart: false,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setIsOpenCart: (state, action: PayloadAction<boolean>) => {
      state.isOpenCart = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsOpenCart } = generalSlice.actions;

export default generalSlice.reducer;
