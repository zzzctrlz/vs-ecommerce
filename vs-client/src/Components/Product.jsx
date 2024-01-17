import styled from "styled-components"
import {Link} from "react-router-dom";


const Container = styled.div`
   flex: 1 1 22%;
   //width: 400px;
   min-width: 280px;
   height: 450px;
   display: flex;
   align-items: center;
   justify-content: center;
   //background-color: black;
   //border: 2px solid red;
   overflow: hidden;
   //margin: 10 px;
   //flex: 0 1 25%;
   `
const Img = styled.img`
   //height: 75%;  
   height: 375px;
   width: auto;
  //  cursor: pointer;
   object-fit: contain;
`

const ImgDetailDiv = styled.div`
// height: 50px;
display: flex;
justify-content: center;
align-items: center;
font-weight: bold;
font-size: 16px;
`
const ImgDetailDivTwo = styled.div`
// height: 60px;
display: flex;
justify-content: center;
font-size: 12px;
color: grey;
`
const ImgDetailDivThree = styled.div`
// height: 60px;
display: flex;
justify-content: center;
font-size: 16px;
color: black;
`
const SLink = styled(Link)`
text-decoration: none;
color: black;

&:hover{
   cursor: pointer;
}
`


const Product = ({ item }) => {
  return (
    <Container>
      <SLink to={`/product/${item._id}`}>
         <Img src= {item.img} alt={item.desc} />
         <ImgDetailDiv>{item.title}</ImgDetailDiv>
         <ImgDetailDivTwo>{item.size.length} {item.size.length > 1 ? "sizes" : "size"}, {item.color.length} {item.color.length > 1 ? "colors" : "color"}</ImgDetailDivTwo>
         <ImgDetailDivThree>${item.price}</ImgDetailDivThree>
      </SLink>
    </Container>
  );
};

export default Product;
