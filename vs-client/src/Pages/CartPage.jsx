//component imports
import Announcement from "../Components/Announcement"
import Copyright from "../Components/Copyright"
import FooterLinks from "../Components/FooterLinks"
import Navbar from "../Components/Navbar"
//style imports
import styled from "styled-components"
import { Remove, Add } from "@mui/icons-material"
//React/Router/Axios/Redux/Stripe imports
import {useEffect, useState} from "react";
import {userRequest} from "../requests";
import {useSelector } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
//import {useHistory } from "react-router"; legacy. change to useNavigate

const KEY = process.env.PUB_STRIPE_KEY;


const Container = styled.div`

`
const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   min-height: 600px;
   flex: 1 0 auto;
   width: 100%;
   //height: 80vh;
   border: 1px solid black;
   padding: 20px;
`
const Title = styled.h1`
   margin-bottom: 20px;
`
const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 66.6%;
`
const Product = styled.div`
   display: flex; 
   justify-content: space-between;
   align-items: center;
   width: 40%;
   padding: 50px 0px;
   border-bottom: 2px solid red;
`
const ProductDetails = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   flex: 2;
`
const LesserDetails = styled.div`
   display:flex;
   align-items: center;
   justify-content: space-between;
   width: 200px;
   border-top: 1px solid black;
`
const Img = styled.img`
   height: 300px;
`
const ProductName = styled.p`

`
const ProductSize = styled.p`

`
const ProductColor = styled.p`

`
const ProductId = styled.p`

`
const PriceDetails = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex: 1;

`
const Quantity = styled.div`
   height: 40px;
   width: 40px;
   border: 1px solid black;
   display: flex;
   align-items: center;
   justify-content: center;
`

const Price=styled.p`

`


const CartPage = () => {
   const cart = useSelector((state)=>state.cart);
   const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

   const onToken = (token)=>{
      setStripeToken(token);
   };

  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
         <Title>Your Cart({cart.quantity})</Title>
         <ButtonContainer>
            <button>Keep Shopping</button>
            <button>Checkout Now</button>
         </ButtonContainer>
         {cart.products.map((product)=> (
            <Product>
               <ProductDetails>
                  <Img src={product.img}/>
                  <ProductName>{product.title}</ProductName>
                  <LesserDetails>
                     <ProductSize>{product.size}</ProductSize>
                     <ProductColor>{product.color}</ProductColor>
                     <ProductId>{product._id}</ProductId>
                  </LesserDetails>
               </ProductDetails>
               <PriceDetails>
                  <Remove />
                  <Quantity>{product.quantity}</Quantity>
                  <Add />
                  <Price>{product.quantity * product.price}</Price>
               </PriceDetails>
            </Product>
         ))}
      </Wrapper>
      <FooterLinks />
      <Copyright />
    </Container>
  )
}

export default CartPage