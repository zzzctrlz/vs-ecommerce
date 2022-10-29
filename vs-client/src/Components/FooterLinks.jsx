import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
   display: flex;
   background-color: white;
   color: black;
   justify-content: space-around;
   align-items: center;
   height: 25vh;
   //padding: 0 20px;
`
const LeftCol = styled.div`
   display: flex;   
   flex-direction: column;
`
const MidCol = styled.div`
   display: flex;
   flex-direction: column;

`
const RightCol = styled.div`
   display: flex;
   flex-direction: column;
`
const Title = styled.h1`
   font-size: 30px;
   font-weight: 400;
   margin-bottom: 10px;
`
const Li = styled.li`
   list-style: none;
   margin-top: 8px;
   `
const A = styled.a`
   color: #424242;
   text-decoration: none;
   
   &:hover{
      color: #d32f2f;
   }
`

const FooterLinks = () => {
  return (
    <div>
      <Container>
         <LeftCol>
            <Title>Content</Title>
            <hr/>
            <br/>
            <ul>
               <Li><A href="#">Articles</A></Li>
               <Li><A href="#">Art/Comics</A></Li>
               <Li><A href="#">News</A></Li>
               <Li><A href="#">Recipes</A></Li>
            </ul>
         </LeftCol>
         <MidCol>
            <Title>Merch</Title>
            <hr/>
            <br/>
            <ul>
               <Li><A href="#">Clothes</A></Li>
               <Li><A href="#">Patches</A></Li>
               <Li><A href="#">Stickers</A></Li>
               <Li><A href="#">Misc</A></Li>
            </ul>
         </MidCol>
         <RightCol>
            <Title>Contact</Title>
            <hr/>
            <br/>
            <ul>
               <Li><A href="#">Email</A></Li>
               <Li><A href="#">Phone</A></Li>
               <Li><A href="#">Social</A></Li>
               <Li><A href="#">Payment Icons</A></Li>
            </ul>
         </RightCol>
      </Container>
    </div>
  )
}

export default FooterLinks