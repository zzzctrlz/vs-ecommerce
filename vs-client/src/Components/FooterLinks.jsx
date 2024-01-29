//import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Container = styled.div`
   display: flex;
   background-color: white;
   color: black;
   justify-content: space-around;
   align-items: flex-start;
   height: auto;
   padding: 25px 0;

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
   font-size: 24px;
   font-weight: 400;
   margin-bottom: 5px;

   @media(max-width: 600px){
      font-size: 20px;
   }
`
const Li = styled.li`
   list-style: none;
   margin-top: 8px;
   @media(max-width: 600px){
      font-size: 14px;
   }
   `

   
const A = styled.a`
color: #424242;
text-decoration: none;
&:hover{
   color: #d32f2f;
}
` 

const LeftCol = styled.div`
   display: flex;   
   flex-direction: column;

   ul{
      ${Li}{

         ${A}{
            text-decoration: line-through;
            cursor: not-allowed;
         }
      }
   }
`

const SLink = styled(Link)`
   text-decoration: none;
   color: #424242;

   &:hover{
      color: #d32f2f;
   }
`

const P = styled.p`
   font-size: 12px;
   margin-top: -5px;
`


const SocialIcons = styled.div`
   display: flex;
   width: 166px;
   justify-content: space-between;
   //border: 1px solid white;

   @media(max-width:700px){
      width: 100px;
   }
`
const SIcon = styled.div`
   &:hover{
      color: #d32f2f;
      cursor: pointer;
   }
`

const FooterLinks = () => {
  return (
    <div>
      <Container>
         <LeftCol>
            <Title>Content <P>(coming soon!)</P></Title>
            <br/>
            <ul>
               <Li><A href="#">Articles</A></Li>
               <Li><A href="#">Art/Comics</A></Li>
               <Li><A href="#">News</A></Li>
               <Li><A href="#">Recipes</A></Li>
            </ul>
         </LeftCol>
         <MidCol>
            <Title>Merch<P>&nbsp;</P></Title>
            <br/>
            <ul>
               <Li><SLink to={`/products/shirt`}>Tshirts</SLink></Li>
               <Li><SLink to={`/products/hat`}>Hats</SLink></Li>
               <Li><SLink to={`/products/patch`}>Patches</SLink></Li>
               <Li><SLink to={`/products`}>All</SLink></Li>
            </ul>
         </MidCol>
         <RightCol>
            <Title>Contact<P>&nbsp;</P></Title>
            <br/>
            <ul>
               <Li><A href="#">Email</A></Li>
               <Li><A href="#">Phone</A></Li>
               <Li><SocialIcons>
                     <A href="https://www.facebook.com/VietShiet" target="_blank"><SIcon><Facebook /></SIcon></A>
                     <A href="https://www.instagram.com/viet_shiet/" target="_blank"><SIcon><Instagram /></SIcon></A>
                     <A href="https://twitter.com/VietShiet" target="_blank"><SIcon><Twitter /></SIcon></A>
                  </SocialIcons></Li>
               {/* <Li><A href="#">Payment Icons</A></Li> */}
            </ul>
         </RightCol>
      </Container>
    </div>
  )
}

export default FooterLinks;