import { Send } from "@mui/icons-material"
import styled from "styled-components"
import {useState} from "react"
import {addEmail} from "../Redux/userSlice";
import {useSelector, useDispatch} from "react-redux";

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   justify-content: center;
   align-items: center;
   padding: 50px 50px;
   background-color: black;
   color: white;

   @media(max-width: 600px){
      padding: 30px 30px;
   }
`
const H1 = styled.h1`
   font-size: 45px;
   font-weight: 600;

   @media(max-width: 600px){
      font-size: 35px;
   }
`
const P = styled.p`
   font-size: 20px;
   font-weight: 500;
   text-align: center;

   @media(max-width: 600px){
      18px;
   }
`
const InputContainer = styled.div`
   display: flex;
   width: 40%;
   min-width: 300px;
   height: 40px;
   background-color: white;
   justify-content: space-between;

`
const Input = styled.input`
flex: 9;
border: none;
padding-left: 20px;
height: 40px;
font-size: 20px;
&:focus{
   outline: none;
}
`
const Button = styled.button`
flex: 1;
background-color: #d32f2f;
border: none;
color: white;
cursor: pointer;
`
const NLConfirm = styled.p`
color: red;
font-size: 14px;
display: none;
`
const Newsletter = () => {
   const user = useSelector((state)=>state.user);
   const dispatch = useDispatch();
   const [email, setEmail] = useState(null);

   const showNLConfirm = ()=>{
      let nLConfirm = document.getElementById("confirm");
      nLConfirm.style.display = "block";
   };

   const handleAddEmail = ()=>{
      console.log("insidehandleAddEmailBody");
      if (!(user.emailArray.includes(email)))
         {dispatch(addEmail(email)) && showNLConfirm()} 
      else alert("This email is already signed up for our newsletter!");
   };

  return (
    <Wrapper>
      <H1>Newsletter!</H1>
      <P>Sign up for updates on content and products!</P>
      <InputContainer>
         <Input type="email" onChange={(e)=>setEmail(e.target.value)} />
         <Button onClick = {()=> handleAddEmail()}><Send /></Button>
      </InputContainer>
      <NLConfirm id="confirm">Thanks for joining our newsletter!</NLConfirm>
      
    </Wrapper>
  )
}

export default Newsletter