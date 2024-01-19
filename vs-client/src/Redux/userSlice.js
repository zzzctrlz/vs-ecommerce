import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
   name: "user", 
   initialState: {
      currentUser: null,
      isFetching: false,
      error: false,
      emailArray: [],
   },
   //will use loginStart/Success/Error for register too
   reducers: {
      loginStart: (state)=>{
         state.error = false;
         state.isFetching = true;
      },
      loginSuccess: (state, action)=>{
         state.isFetching = false;
         state.currentUser = action.payload;
      },
      loginError: (state)=>{
         state.isFetching = false;
         state.error = true;
      },
      signOut: (state)=>{
         state.currentUser = null;
      },
      addEmail: (state, action)=>{
         state.emailArray.push(action.payload);
      },
      resetError: (state)=>{
         state.error = false;
      }
   },
});

export const {loginStart, loginSuccess, loginError, signOut, addEmail, resetError} = userSlice.actions;
export default userSlice.reducer;