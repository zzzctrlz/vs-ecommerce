import { Facebook, Instagram, SearchOutlined, ShoppingCartOutlined, Twitter } from "@mui/icons-material";
import { Badge } from "@mui/material";
import styled from "styled-components";
import logo from "../Assets/VietShietLogo500px.png";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {signOut} from "../Redux/userSlice";

//import {clearCart} from "../Redux/cartSlice"; remember to add useDispatch ^^




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
  // color: #d32f2f;
  // color: white;
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
const A = styled.a`
color: #d32f2f;

//&:visited{
  // color: white;
//}
`
const SocialIcons = styled.div`
   //color: #d32f2f;
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

const SLink = styled(Link)`
text-decoration: none;
color: white;

&:hover{
   //color: #d32f2f;
   cursor: pointer;
   //text-decoration: underline;
}
`


const Navbar = () => {
   const cart = useSelector((state)=>state.cart);
   const user = useSelector((state)=>state.user.currentUser);
   const dispatch = useDispatch();
   //const dispatch = useDispatch(); remember to import useDispatch with useSelector in react-redux; 

   /*
    onClick ={()=> {
      dispatch(clearCart());
      console.log(cart.products, cart.typeQuantity, cart.total)} 
    }}
    add to any component to make clearCart test
   */

    const handleSignout = ()=>{
      dispatch(signOut())
    };

    return (
      <Wrapper>
         <Left>
            <SLink to={`/`}><Title>VIET SHIET.</Title></SLink>
            <SocialIcons>
               <A href="https://www.facebook.com/VietShiet" target="_blank"><SIcon><Facebook /></SIcon></A>
               <A href="https://www.instagram.com/viet_shiet/" target="_blank"><SIcon><Instagram /></SIcon></A>
               <A href="https://twitter.com/VietShiet" target="_blank"><SIcon><Twitter /></SIcon></A>
            </SocialIcons>
         </Left>
         <Center>
            <img src={logo} alt="viet shiet logo" width="77px" height="77px"/>  
         </Center>
         <Right>
            <RightItem>
               {/*
               <SearchWrapper>
                  <Search placeholder="Search"/>
                  <SearchOutlined />
               </SearchWrapper>
               */}
            </RightItem>
            <SLink to={`/about`}><RightItem>ABOUT</RightItem></SLink>
            <SLink to={`/products`}><RightItem>SHOP</RightItem></SLink>
            {user ? <RightItem onClick={handleSignout}>SIGN OUT</RightItem> : <SLink to={`/login`}><RightItem>SIGN IN</RightItem></SLink>}
            <SLink to={`/cart`}>
               <RightItem>
                  <Badge badgeContent={cart.typeQuantity} color="error" showZero>
                     <ShoppingCartOutlined />
                  </Badge>
               </RightItem>
            </SLink>
         </Right>
      </Wrapper>  

    
  )
}

export default Navbar