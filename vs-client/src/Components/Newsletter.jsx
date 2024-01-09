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
`
const H1 = styled.h1`
   font-size: 60px;
   font-weight: 700;
`
const P = styled.p`
   font-size: 25px;
   font-weight: 500;
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

const Newsletter = () => {
   const user = useSelector((state)=>state.user);
   const dispatch = useDispatch();
   const [email, setEmail] = useState(null);
  return (
    <Wrapper>
      <H1>Newsletter!</H1>
      <P>Sign up for updates on content and products!</P>
      <InputContainer>
         <Input type="text" onChange={(e)=>setEmail(e.target.value)} />
         <Button onClick = {()=> dispatch(addEmail(email)) && alert(user.emailArray)} ><Send /></Button>
      </InputContainer>
      
    </Wrapper>
  )
}

export default Newsletter