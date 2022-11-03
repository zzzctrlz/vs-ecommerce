import styled from "styled-components"
//import {tshirtClipart} from '../data'

const Container = styled.div`
   flex: 1 1 22%;
   //margin: 5px;
   //width: 400px;
   min-width: 280px;
   height: 375px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: black;
   border: 2px solid red;
   //margin: 10 px;
   //flex: 0 1 25%;
   `
const Img = styled.img`
   height: 75%;  
   cursor: pointer;
`


const Product = ({ itemProp }) => {
  return (
    <Container>
      <Img src= {itemProp.img} alt={itemProp.alt} />
    </Container>
  )
}

export default Product;