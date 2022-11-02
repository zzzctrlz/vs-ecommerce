import styled from "styled-components"
import Announcement from "../Components/Announcement"
import Copyright from "../Components/Copyright"
import FooterLinks from "../Components/FooterLinks"
import Navbar from "../Components/Navbar"
import tshirt from "../Assets/tshirtClipart.png"
import { Remove, Add } from "@mui/icons-material"




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


const Cart = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
         <Title>Your Cart(3)</Title>
         <ButtonContainer>
            <button>Keep Shopping</button>
            <button>Checkout Now</button>
         </ButtonContainer>
         
         <Product>
            <ProductDetails>
               <Img src={tshirt}/>
               <ProductName>Shirty Shirt</ProductName>
               <LesserDetails>
                  <ProductSize>M</ProductSize>
                  <ProductColor>Black</ProductColor>
                  <ProductId>3134</ProductId>
               </LesserDetails>
            </ProductDetails>
            <PriceDetails>
               <Remove />
               <Quantity>1</Quantity>
               <Add />
               <Price>$23.00</Price>
            </PriceDetails>
         </Product>
         <Product>
         <ProductDetails>
               <Img src={tshirt}/>
               <ProductName>Pho Shirt</ProductName>
               <LesserDetails>
                  <ProductSize>L</ProductSize>
                  <ProductColor>White</ProductColor>
                  <ProductId>3135</ProductId>
               </LesserDetails>
            </ProductDetails>
            <PriceDetails>
               <Remove />
               <Quantity>2</Quantity>
               <Add />
               <Price>$46.00</Price>
            </PriceDetails>
         </Product> 
      </Wrapper>
      <FooterLinks />
      <Copyright />
    </Container>
  )
}

export default Cart