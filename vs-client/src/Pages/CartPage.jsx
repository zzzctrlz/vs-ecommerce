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
import {useSelector, useDispatch} from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import {increaseQuantity, decreaseQuantity, deleteProduct, clearCart} from "../Redux/cartSlice";

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
   //border: 1px solid black;
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
   position: relative; //added so can place absolute remove button (absolute pos. needs a relative pos. parent)
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
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 275px;
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
const Xbutton = styled.button`
   position: absolute;
   top: 55px;
   right: 25px;
   border: none;
   background-color: white;
   color: black;
   font-size: 30px;
   //font-weight: 500;
`


const CartPage = () => {
   const cart = useSelector((state)=>state.cart);
   const dispatch = useDispatch();
   const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

  //dispatch(clearCart());

 /*  
      const onToken = (token)=>{
      setStripeToken(token);
   };
   */

   const handleX = (index)=>{
      if(window.confirm("Are you sure you want to delete this item?")){
         dispatch(deleteProduct(index));
      }
   };

   const handleClearCart = ()=>{
      if(window.confirm("Are you sure you want to clear your entire cart?")){
         dispatch(clearCart())
      }
   }
      


  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
         <Title>Your Cart({cart.quantity})</Title>
         <ButtonContainer>
            <button>Keep Shopping</button>
            <button onClick={handleClearCart}>Clear Cart</button>
            <button>Checkout Now</button>
         </ButtonContainer>
         {cart.products.map((product, index)=> (
            <Product key={index}>
               <Xbutton onClick={()=>handleX(index)}>x</Xbutton>
               <ProductDetails>
                  <Img src={product.img}/>
                  <ProductName>{product.title}</ProductName>
                  <LesserDetails>
                     <ProductSize>size: {product.size}</ProductSize>
                     <ProductColor>color: {product.color}</ProductColor>
                     <ProductId>id: {product._id}</ProductId>
                  </LesserDetails>
               </ProductDetails>
               <PriceDetails>
                  <Remove sx={{cursor: 'pointer'}} onClick={()=> product.quantity > 1 && dispatch(decreaseQuantity(index))}/>
                  <Quantity>{product.quantity}</Quantity>
                  <Add sx={{cursor: 'pointer'}} onClick={()=>dispatch(increaseQuantity(index))}/>
                  <Price>${product.quantity * product.price}</Price>
               </PriceDetails>
            </Product>
         ))}
         <p>{cart.total}</p>
      </Wrapper>
      <FooterLinks />
      <Copyright />
    </Container>
  )
}

export default CartPage