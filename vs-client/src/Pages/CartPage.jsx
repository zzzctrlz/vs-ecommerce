//component imports
import Announcement from "../Components/Announcement"
import Copyright from "../Components/Copyright"
import FooterLinks from "../Components/FooterLinks"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"

//style imports
import styled from "styled-components"
import { Remove, Add } from "@mui/icons-material"

//React/Router/Axios/Redux/Stripe imports
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userRequest } from "../requests";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { increaseQuantity, decreaseQuantity, deleteProduct, clearCart } from "../Redux/cartSlice";

//import {useHistory } from "react-router"; legacy. change to useNavigate

const KEY = "pk_test_51MZNj8KBBl0FI90RtwddiNG0UKzSJdM0snYnmklKZrXPA4PpJ7fhwykFWsoztKD1L7H52LKeU8GWaFekyomHGjrc00eEYm4Zf5";
//got notification about missing KEY when pressing checkout button so trying moving const declaration into component body
//moving into component body still yielded missing key alert ??
//maybe from the missing API secret key for the Stripe routing?
//probably just because it's in demo mode???


const Container = styled.div`

`
const WrapperWrapper = styled.div`
   display: flex;
   width: 100%;
   //border: 2px solid green;
   flex-wrap: wrap;
`

const Wrapper1 = styled.div`
   flex: 2;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   min-height: 600px;
   min-width: 370px;
   //width: 100%;
   padding: 20px;
   //border: 2px solid yellow;
`

const Wrapper2 = styled.div`
   flex: 1;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
   padding: 20px;
   //border: 1px solid blue;
`

const Wrapper2Inner = styled.div`
   height: auto;
   width: 80%;
   min-width: 300px;
   border: 1px solid lightgrey;
   border-radius: 4px;
   padding: 20px;
`

const Total = styled.div`
   font-size: 20px;
   font-weight: bold;
   padding: 20px 0 0 0;
   border-top: 1px solid lightgrey;
   //border-bottom: 1px solid lightgrey;
`

const Title = styled.h1`
   margin-bottom: 20px;
`
const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   justify-content: space-around;
   width: 100%;
`
const Product = styled.div`
   display: flex; 
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   width: 100%;
   padding: 50px 0px;
   border-bottom: 2px solid red;
   //border: 1px solid blue;
   position: relative; //added so can place absolute remove button (absolute pos. needs a relative pos. parent)
`
const ProductDetails = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   flex: 2;
   //border: 1px solid red;
`
//const DetailBox= styled.div`
//0 border: 1px solid black;
//`

const LesserDetails = styled.div`
   display:flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-between;
   width: 275px;
   //border-top: 1px solid black;
`
const Img = styled.img`
   height: 300px;
`
const ProductName = styled.p`
   font-weight: bold;
`
const ProductSize = styled.p`

`
const ProductColor = styled.p`

`
const ProductId = styled.p`

`
const PriceDetails = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex: 1;
   margin-top: 10px;
   //border: 1px solid green;

`
const Quantity = styled.div`
   height: 40px;
   width: 40px;
   border: 1px solid black;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0 10px;
`

const Price = styled.p`
   margin-left: 30px;
   font-weight: bold;
   font-size: 18px;
`
const Xbutton = styled.button`
   position: absolute;
   top: 55px;
   right: 0px;
   border: none;
   background-color: white;
   color: black;
   font-size: 30px;
   //font-weight: 500;
`

const Button = styled.button.attrs(props =>({className: props.className,}))`
   color: white;
   background-color: #d32f2f;
   border: none;
   border-radius: 2px;
   padding: 5px;
   cursor: pointer;

   &:hover{
      background-color: black;
   }

    &.big{
      margin-top: 15px;
       font-size: 25px;
       width: 100%;
    }
`
const Uwrapper = styled.div`
   font-size: 30px;
`
const SLink = styled(Link)`
   text-decoration: none;
   color: white;
`


const CartPage = () => {

   const cart = useSelector((state) => state.cart);
   const dispatch = useDispatch();
   const [stripeToken, setStripeToken] = useState(null);
   // const KEY = process.env.PUB_STRIPE_KEY; even after moving key to inside component body, getting alert of missing key when pressing checkout button
   // const history = useHistory();
   const navigate = useNavigate();

   const onToken = (token) => {
      setStripeToken(token);
   };

   let tax = (cart.total * 0.1).toFixed(2);
   let shipping = (cart.total < 50 ? 10 : 0).toFixed(2);
   let subtotal = (cart.total).toFixed(2);
   
   
   useEffect(() => {
      const makePayRequest = async () => {
         try {
            console.log('inside makePayRequest');
            const res = await userRequest.post("/checkout/payment", {
               tokenId: stripeToken.id,
               amount: 100,
            });
            navigate.push("/success", {
               stripeData: res.data,
               products: cart,
            });
         } catch { }
      };
      stripeToken && makePayRequest();
   }, [stripeToken, cart.total,]);


   const handleX = (index) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
         dispatch(deleteProduct(index));
      }
   };

   const handleClearCart = () => {
      if (window.confirm("Are you sure you want to clear your entire cart?")) {
         dispatch(clearCart())
      }
   }



   return (
      <Container>
         <Announcement />
         <Navbar />
         <WrapperWrapper>
            <Wrapper1>
               <Title>Your Cart({cart.typeQuantity})</Title>
               <ButtonContainer>
                  <Button><SLink to={`/products`}>Keep Shopping</SLink></Button>
                  <Button onClick={handleClearCart}>Clear Cart</Button>
                  <StripeCheckout
                     name="Viet Shop"
                     image="https://i.imgur.com/t1oZ1QO.png"
                     billingAddress
                     shippingAddress
                     description={`Your total is $${cart.total}`}
                     amount={cart.total * 100}
                     token={onToken}
                     stripeKey={KEY}
                  >
                     <Button>CHECKOUT</Button>
                  </StripeCheckout>
               </ButtonContainer>
               {cart.products.map((product, index) => (
                  <Product key={index}>
                     <Xbutton onClick={() => handleX(index)}>x</Xbutton>
                     <ProductDetails>
                        <Img src={product.img} />
                        <ProductName>{product.title}</ProductName>
                        <LesserDetails>
                           <ProductSize>size: {product.size}</ProductSize>
                           <ProductColor>color: {product.color}</ProductColor>
                        </LesserDetails>
                     </ProductDetails>
                     <PriceDetails>
                        <Remove sx={{ cursor: 'pointer' }} onClick={() => product.quantity > 1 && dispatch(decreaseQuantity(index))} />
                        <Quantity>{product.quantity}</Quantity>
                        <Add sx={{ cursor: 'pointer' }} onClick={() => dispatch(increaseQuantity(index))} />
                        <Price>${product.quantity * product.price}</Price>
                     </PriceDetails>
                  </Product>
               ))}
               <br />

            </Wrapper1>
            <Wrapper2>
               <Wrapper2Inner>
                  <Title>Summary:</Title>
                  <p>Subtotal: ${subtotal}</p>
                  <br/>
                  <p>Tax: ${tax}</p>
                  <br/>
                  <p>Shipping: ${shipping}</p>
                  <br/>
                  <Total>Total: ${(Number(subtotal) + Number(tax) + Number(shipping)).toFixed(2)}</Total>
                  <StripeCheckout
                     name="Viet Shop"
                     image="https://i.imgur.com/t1oZ1QO.png"
                     billingAddress
                     shippingAddress
                     description={`Your total is $${cart.total}`}
                     amount={cart.total * 100}
                     token={onToken}
                     stripeKey={KEY}
                  ><Button className="big">CHECKOUT</Button></StripeCheckout>
                  {/*<Uwrapper></Uwrapper>*/}
               </Wrapper2Inner>
            </Wrapper2>
         </WrapperWrapper>
         <Newsletter />
         <FooterLinks />
         <Copyright />
      </Container>
   )
}

export default CartPage