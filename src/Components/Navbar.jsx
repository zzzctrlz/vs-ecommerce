import { Facebook, Instagram, SearchOutlined, ShoppingCartOutlined, Twitter } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import logo from "../Assets/VietShietLogo500px.png";


const Wrapper = styled.div`
   padding: 11px 30px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   background-color: black; 
   box-shadow: 0 5px 13px -5px #000000;
   margin-bottom: 5px;
   //opacity: 0;
`

const Left = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;
   gap: 6px;
`
const Center = styled.div`
   flex: 1;
   display: flex;
   justify-content: center;

`
const Right = styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: flex-end;
`
const Title = styled.h1`
   color: #d32f2f;
   font-weight: 700;
`
const RightItem = styled.div`
   font-size: 16px;
   cursor: pointer;
   margin-left: 40px;
   color: #d32f2f;
   font-weight: 500;

   &:hover{
      color: white;
   }
`
const SocialIcons = styled.div`
   color: #d32f2f;
   display: flex;
   width: 166px;
   justify-content: space-between;
`
const SIcon = styled.div `
   &:hover{
      color: white;
      cursor: pointer;
   }
`
const SearchWrapper = styled.div`
   border: 0.5px solid #d32f2f;
   display: flex;
   align-items: center;
   
`
const Search = styled.input`
   border: none;
   background-color: black;
   color: #d32f2f;
   text-align: center;
   font-size: 16px;
   &:focus{
      outline: none;
   }

   &::placeholder{
      color: #d32f2f;
      font-size: 14px;
   }
   
   &:focus::placeholder{
      color: transparent;
   }
`
const WhiteDiv = styled.div`
   width: 100%;
   height: 5px;
   background-color: white;
`




const Navbar = () => {
  return (
      <Wrapper>
         <Left>
            <Title>VIET SHIET.</Title>
            <SocialIcons>
               <SIcon><Facebook /></SIcon>
               <SIcon><Instagram /></SIcon>
               <SIcon><Twitter /></SIcon> 
            </SocialIcons>
         </Left>
         <Center>
            <img src={logo} alt="viet shiet logo" width="77px" height="77px"/>  
         </Center>
         <Right>
            <RightItem>
               <SearchWrapper>
                  <Search placeholder="Search"/>
                  <SearchOutlined />
               </SearchWrapper>
            </RightItem>
            <RightItem>ABOUT</RightItem>
            <RightItem>REGISTER/LOGIN</RightItem>
            <RightItem><Badge badgeContent={0} color="error" showZero>
                           <ShoppingCartOutlined />
                       </Badge>
            </RightItem>
         </Right>
      </Wrapper>  

    
  )
}

export default Navbar