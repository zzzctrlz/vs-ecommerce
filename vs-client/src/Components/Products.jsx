import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";
//import {tshirtClipart} from "../data";

const Container = styled.div`
   padding: 22px 20px 30px 20px;
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
   justify-content: space-around;
   width: 100%;
   background-color: white;
`
const Products = () => {
  return (
   <Container>
      {products.map((item) => (
        <Product itemProp={item} key={item.id} /> 
      ))}
   </Container>
   )
}

export default Products;