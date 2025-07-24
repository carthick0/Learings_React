import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: []
  },
  reducers: {
    addCart: (state, action) => {

        const item=action.payload;
        const existingItem=state.items.find((i)=>i.id===item.id);
        if(existingItem){
            existingItem.quantity +=1
        }
        else {
            state.items.push({...item,quantity:1})
        }
      
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    }
  }
});

export const { addCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
