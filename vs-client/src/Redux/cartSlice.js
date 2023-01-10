import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({
   name: "cart",
   initialState: {
      products: [],
      typeQuantity: 0,
      total: 0,
   },
   reducers: {
      addProduct: (state, action)=>{
         state.products.push(action.payload);
         state.typeQuantity += 1;
         state.total += action.payload.price * action.payload.productQuantity;
      },
   },
});

export const {addProduct} = cartSlice.actions;
export default cartSlice.reducer;