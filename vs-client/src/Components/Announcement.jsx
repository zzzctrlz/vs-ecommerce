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
`

const Announcement = () => {
  return (
    <Wrapper>Grand Opening Sale! Everything 10% Off! Free Shipping on Orders Over $50!</Wrapper>
  )
};

export default Announcement