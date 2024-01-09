import styled from "styled-components"

const Wrapper = styled.div`
   height: 35px;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: #d32f2f;
   color: black;
   font-weight: 500;
   flex-wrap: wrap;
   //padding: 5px 0 5px 0;

   @media(max-width: 555px){
    height: 45px;
   }
`
const Span = styled.span`
Margin-left: 4px;
//min-width: 300px;
`

const Announcement = () => {
  return (
    <Wrapper><p>Grand Opening Sale! Everything 10% Off!</p> <Span> Free Shipping on Orders Over $50!</Span></Wrapper>
  )
};

export default Announcement