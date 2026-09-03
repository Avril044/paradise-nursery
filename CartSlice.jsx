import { createSlice } from '@reduxjs/toolkit';
export const CartSlice = createSlice({
 name: 'cart',
 initialState: { items: [] },
 reducers: {
  addItem: (state, action) => {
   const e = state.items.find(i=>i.name===action.payload.name);
   if(e){ e.quantity+=1 } else { state.items.push({...action.payload, quantity:1}) }
  },
  removeItem: (state, action) => {
   state.items = state.items.filter(i=>i.name!==action.payload);
  },
  updateQuantity: (state, action) => {
   const it = state.items.find(i=>i.name===action.payload.name);
   if(it) it.quantity = action.payload.quantity;
  }
 }
});
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;
export default CartSlice.reducer;
