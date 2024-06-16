import { createSlice, current } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addItem: (state, action) => {
        // RTK uses immerjs behind the scene
      state.items.push(action.payload);
    },
    removeItem: (state,action) => {
      state.items.pop();
    },
    clearCart: (state,action) => {
        /*
        console.log(state);
        console.log(current(state)); //print cart-item
        state=[];
        console.log(state) // print in console that empty cart
        */
        // state.items = []; // This is mutable, but immer from Redux Toolkit handles it safely
        // or
        return {items:[]};
    }
  }
});

export const { addItem, removeItem, clearCart } = cardSlice.actions;
export default cardSlice.reducer;
