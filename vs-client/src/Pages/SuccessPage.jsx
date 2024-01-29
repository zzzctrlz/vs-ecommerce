import {useNavigate} from "react-router-dom";
import { useEffect } from "react";


const SuccessPage = ()=>{
  const navigate = useNavigate();

  useEffect(()=> {
   setTimeout(()=>{
      // console.log("inside redirectToHome");
      navigate("/");
   }, 5000);
  }, [navigate]);
     
 

   return(
      <div>Success! You will be redirected to the homepage soon...</div>
   )
};

export default SuccessPage;