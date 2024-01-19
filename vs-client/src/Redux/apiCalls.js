import {loginError, loginStart, loginSuccess} from "./userSlice";
import {publicRequest} from "../requests";
import { redirect } from "react-router-dom";

export const login = async (dispatch, user) =>{
   dispatch(loginStart());
   try{
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
      return redirect("/")
   }catch(err){
      dispatch(loginError());
   }
};

export const register = async (dispatch, user) =>{
   dispatch(loginStart());
   try{
      const res = await publicRequest.post("/auth/register", user);
      dispatch(loginSuccess(res.data));
   }catch(err){
      //console.log("dispatching loginError");
      dispatch(loginError());
   }
};