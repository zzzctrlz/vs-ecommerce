import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    width: 100%;
    padding: 0 0 10px 0;
`
const Title = styled.h1`
    font-size: 30px;
    font-weight: 500;
    color: black;
    margin-bottom: 15px;
    padding: 0 35px;
`

const ImgDiv = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`
const SLink = styled(Link)`
width: 25%;
`

const Img = styled.img`
    width: 100%;
`

const PopularItems = () =>{

return (
    <Wrapper>
        <Title>Popular Items</Title>
        <ImgDiv>
            <SLink to={`/products/shirt`} title="shirts" alt="gorilla t-shirt"><Img src="https://i.imgur.com/bIhYcCC.png" /></SLink>
            <SLink to={`/products/hat`} title="hats" alt="bamboo hat"><Img src="https://i.imgur.com/2sDwclg.png" /></SLink>
            <SLink to={`/products/patch`} title="patches" alt="pho patch"><Img src="https://i.imgur.com/wozR5E8.png" /></SLink>
        </ImgDiv>
    </Wrapper>
)
};

export default PopularItems;