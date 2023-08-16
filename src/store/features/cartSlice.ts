import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initCart: any = JSON.parse(localStorage.getItem('cart')!);

export interface CartState {
  cart: any[];
}

const initialState: CartState = {
  cart: initCart ?? [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const cloneCart = [...state.cart];
      const newCart = cloneCart.map((cartItem) => {
        if (cartItem.id === action.payload.id && cartItem.grindType === action.payload.grindType && cartItem.size === action.payload.size) {
          return {
            ...cartItem,
            quantity: cartItem.quantity + action.payload.quantity,
          };
        } else {
          return {
            ...cartItem,
          };
        }
      });

      if (JSON.stringify(state.cart) === JSON.stringify(newCart)) {
        state.cart = [...newCart, { ...action.payload }];
        localStorage.setItem('cart', JSON.stringify([...newCart, { ...action.payload }]));
      } else {
        state.cart = [...newCart];
        localStorage.setItem('cart', JSON.stringify([...newCart]));
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cloneCart = [...state.cart];
      cloneCart.splice(action.payload, 1);
      state.cart = [...cloneCart];
      localStorage.setItem('cart', JSON.stringify([...cloneCart]));
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
