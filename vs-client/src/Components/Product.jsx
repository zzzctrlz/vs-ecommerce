import styled from "styled-components"
import {Link} from "react-router-dom";


const Container = styled.div`
   flex: 1 1 22%;
   //width: 400px;
   min-width: 280px;
   height: 375px;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: black;
   //border: 2px solid red;
   overflow: hidden;
   //margin: 10 px;
   //flex: 0 1 25%;
   `
const Img = styled.img`
   //height: 75%;  
   height: 375px;
   width: auto;
   cursor: pointer;
   object-fit: contain;
`


const Product = ({ item }) => {
  return (
    <Container>
      <Link to={`/product/${item._id}`}>
         <Img src= {item.img} alt={item.desc} />
      </Link>
    </Container>
  );
};

export default Product;
