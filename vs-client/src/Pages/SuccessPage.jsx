import {useNavigate} from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";


const SuccessPage = ()=>{
  const navigate = useNavigate();

  useEffect(()=> {
   setTimeout(()=>{
      // console.log("inside redirectToHome");
      navigate("/");
   }, 8000);
  }, [navigate]);

  const Container = styled.div`
   height: max(600px, 100vh);
   width: 100%;
   background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://images.pexels.com/photos/6692117/pexels-photo-6692117.jpeg") center;
   background-size: cover;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 30px 0;
`

const Wrapper = styled.div`
width: max(250px, 43%);
height: auto;
padding: 20px;
background-color: rgba(255, 255, 255, 0.8);
text-align: center;
`
     
 

   return(
      <Container>
         <Wrapper>Success! You will be redirected to the homepage soon...</Wrapper>
      </Container>
   )
};

export default SuccessPage;