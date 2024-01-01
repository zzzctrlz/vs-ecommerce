import styled from "styled-components"

const Wrapper = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   background-color: black;
   color: #d32f2f;
   padding: 8px 16px;
   font-weight: 500;
`

const Copyright = () => {
  return (
    <Wrapper>© 2023 Viet Shiet</Wrapper>
  )
}

export default Copyright;