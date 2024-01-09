import {slides} from "../data";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavigateBefore, NavigateNext } from "@mui/icons-material";

const Container = styled.div`
   width: 100%;
   height: 88vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   padding-bottom: 15px;
`
const Wrapper = styled.div`
   height: 90%;
   width: 95%;
   background-color: black;
   display: flex;
   align-items: center;
   justify-content: flex-start;
   overflow:hidden;
   box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.75);
   border: 5px solid green;
   ` 
  const Slide = styled.div`
     min-width: 100%;
     height: 100%;
     //display: flex;
     //align-items: center;
     //justify-content: center;
     transform: translateX(${(props) => props.slideIndex * -100}%); 
     transition: all 1s ease;
     border: 3px solid yellow;
     position: relative;
  `

//   const ImgWrapper = styled.div`
//    flex: 1 1 content;
//    height: 100%;
//    overflow: hidden;
//    //min-width: 700px;
//    border: 1px solid blue;
//    // //flex-basis: 50%;
//    // //padding: 20px 20px;
//    // background-color: orange;
//    // //width: 100%;
//   `

const TextWrapper = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 30%;
   right: 10%;
   color: white;
   padding-left: 20px;

   @media(max-width: 400px){
      right: 2%;
   }
`
const CircleContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 40px;
   position: absolute;
   bottom: 20px;
`
const Circle = styled.div`
   border-radius: 50%;
   background-color: ${(props) => props.id === "0" ? "#d32f2f" : "black"};
   height: 20px;
   width: 20px;
   cursor: pointer;
`
const LeftArrow = styled.div`
  cursor: pointer;

  &:hover{
   color: #d32f2f;
  }
`
const RightArrow = styled.div`
   cursor: pointer;
   &:hover{
   color: #d32f2f;
   }
`
const H1 = styled.h1`
   font-size: 60px;
   font-weight: 700;
`
const P = styled.p`
   font-size: 30px;
   font-weight: 500;
`

// const Img = styled.img.attrs(props=>({src: props.src, alt: props.alt,}))`
// width:100%;
// height: auto;
// `


const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);
   //let autoSlideChange;
   //commenting out the above line (initializing autoSlideChange) and setting a name for the below setTimeOut didn't work to resovle
   //the issue. still going slideIndex 0, 0, 2, 0, 1, 2, 0, 1, 2, etc.  why the first two 0s???!?
   //useEffect to change circle color when slideIndex changes

   useEffect(()=>{
      let circles = document.querySelectorAll(Circle);
      circles.forEach((value,index)=>{   
         if(index === slideIndex){value.style.backgroundColor = "#d32f2f"}
         else{value.style.backgroundColor = "black"}
      })
   }, [slideIndex]);

   
   useEffect(()=>{
      const timeout = setTimeout(()=>{
         let cur;
         if (slideIndex < 2) {
            cur = slideIndex + 1;
         } else {
            cur = 0;
         }
         setSlideIndex(cur);
      }, 4000);
      //cleanup function (triggered by/runs before next useEffect instance)
      return () => {
         clearTimeout(timeout);
       };
   },[slideIndex])

   //change slide every 8 seconds by updating slideIndex which will trigger useEffect with slideIndex dependency
   /*const timerId = setTimeout(() => {
      console.log(`begin setTimeout ${slideIndex}`);
      let cur;
      if (slideIndex < 2) {
         cur = slideIndex + 1;
      } else {
         cur = 0;
      }
      setSlideIndex(cur);
      //setSlideIndex(slideIndex=>slideIndex < 2 ? slideIndex + 1 : 0);
      console.log(`end setTimeout ${slideIndex}, ${cur}`);
   }, 4000);

   
   
  const clearTimeouts = () => {
   while(timerId--){clearTimeout(timerId)};
  };*/
 
   const handleCircleClick = (circleNum) => {
      //clearInterval(interval);
      console.log(`begin handleCircleClick ${slideIndex}`);
      setSlideIndex(circleNum);
      console.log(`end handleCircleClick ${slideIndex}`);
     // clearInterval(autoSlideChange);
   }

   const handleArrowClick = (direction) => {
      //clearInterval(interval);
      console.log(`begin handleArrowClick ${slideIndex}`);
      if(direction ==="left"){setSlideIndex(slideIndex=>slideIndex > 0 ? slideIndex - 1 : 2)}
      else{setSlideIndex(slideIndex=>slideIndex < 2 ? slideIndex + 1 : 0)}
      // clearInterval(autoSlideChange);
      console.log(`end handleArrowClick ${slideIndex}`);
   }
/* //moved code to anonymous function body of useEffect because setState within a 
   //closure (function inside function) only has access to old state value kind of
   //like an async function but with more limitations like cant use await or settimeout
   const handleCircleColor = () =>{
      let circles = document.querySelectorAll(Circle);
      circles.forEach((value,index)=>{   
         if(index === slideIndex){value.style.backgroundColor = "#d32f2f"}
         else{value.style.backgroundColor = "black"}
      }) 
   }*/
 //style={{width: "100%", height: "auto"}}

//  <ImgWrapper>
//  {/* <Img src={item.img} alt={item.alt} /> // does not work as a styled component with props passed using .attrs for some reason*/}
//  <img src={item.img} alt={item.alt} style={{objectFit: "cover",}}/>
// </ImgWrapper>

// <TextWrapper>
//   <H1>{item.engTitle}</H1>
//   <P>{item.engText}</P>
// </TextWrapper>
  return (
   <Container>

      <LeftArrow onClick={()=> handleArrowClick("left")}><NavigateBefore fontSize="large"/></LeftArrow>

      <Wrapper>
         {slides.map((item)=> (
         <Slide slideIndex ={slideIndex}>
            <img src={item.img} style={{objectFit: "cover",}} />
            <TextWrapper>
               <H1>{item.engTitle}</H1>
               <P>{item.engText}</P>
            </TextWrapper>
         </Slide>   
         ))}
      </Wrapper>

      <RightArrow onClick={()=> handleArrowClick("right")}><NavigateNext fontSize="large" /></RightArrow>

      <CircleContainer>
         <Circle id="0" onClick={()=> handleCircleClick(0)}></Circle>
         <Circle id="1" onClick={()=> handleCircleClick(1)}></Circle>
         <Circle id="2" onClick={()=> handleCircleClick(2)}></Circle>
      </CircleContainer>
   </Container>
   
  );
};

export default Slider