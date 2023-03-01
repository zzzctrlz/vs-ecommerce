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
         state.total += action.payload.price * action.payload.quantity;
      },

      increaseQuantity: (state, action)=>{
         state.products[action.payload].quantity += 1;
         state.total += state.products[action.payload].price;
      },

      decreaseQuantity: (state, action)=>{
         state.products[action.payload].quantity -= 1;
         state.total -= state.products[action.payload].price;
      },

      deleteProduct: (state, action)=>{
         state.total -= (state.products[action.payload].price * state.products[action.payload].quantity);
         state.typeQuantity -= 1;
         state.products.splice([action.payload], 1);
      },

      clearCart: (state)=>{
         state.products = [];
         state.typeQuantity = 0;
         state.total = 0;
      }
   },
});

export const {addProduct, increaseQuantity, decreaseQuantity, deleteProduct, clearCart} = cartSlice.actions;
export default cartSlice.reducer;