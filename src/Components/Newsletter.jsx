import { Send } from "@mui/icons-material"
import styled from "styled-components"

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 20px;
   justify-content: center;
   align-items: center;
   padding: 100px 50px;
   //background-color: #3e3e3e;
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
   height: 40px;
   background-color: white;
   justify-content: space-between;
   //border: 2px solid #d32f2f;
`
const Input = styled.input`
flex: 9;
border: none;
padding-left: 20px;
height: 35px;
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
  return (
    <Wrapper>
      <H1>Newsletter!</H1>
      <P>Sign up for updates on content and products!</P>
      <InputContainer>
         <Input type="text" />
         <Button><Send /></Button>
      </InputContainer>
      
    </Wrapper>
  )
}

export default Newsletter