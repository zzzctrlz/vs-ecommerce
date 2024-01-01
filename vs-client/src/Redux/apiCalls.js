import {loginError, loginStart, loginSuccess} from "./userSlice";
import {publicRequest} from "../requests";

export const login = async (dispatch, user) =>{
   dispatch(loginStart());
   try{
      const res = await publicRequest.post("/auth/login", user);
      dispatch(loginSuccess(res.data));
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