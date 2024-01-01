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
   ` 
  const Slide = styled.div`
     width: 100%;
     height: 100%;
     display: flex;
     align-items: center;
     justify-content: center;
     transform: translateX(${(props) => props.slideIndex * -100}%);
     transition: all 1s ease;
  `

  const ImgWrapper = styled.div`
   flex: 1 1 auto;
   height: 100%;
   overflow: hidden;
   //padding: 20px 20px;
   background-color: orange;
  `

const TextWrapper = styled.div`
   flex: 1 1 0; //setting flex basis to a larger size doesn't fix slide not filling wrapper problem. it just expands into the imagewrapper area. setting fb to 0 also doesn't fix. 
   color: white;
   background-color: black;
   height: 100%;
  // padding: 185px 185px; //"fixed" slide not filling wrapper width by making text padding match/exceed wrapper width (right around 180px with image being auto sized flex basis). hacky solution. not sure why 100% slide width doesn't just fill it. now going to have to do multiple paddings for various breakpoints bc right now padding prevents shrinking
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   //width: 100%; doesn't work for slide not filling wrapper
   //max-width: 550px; doesn't work for slide not filling wrapper
   min-width: 600px; // also "fixes" slide not filling wrapper width but now it won't dynamically shrink so would also need multiple breakpoints/media queries just like the padding solution...
   padding: 0 50px;
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


  return (
   <Container>

      <LeftArrow onClick={()=> handleArrowClick("left")}><NavigateBefore fontSize="large"/></LeftArrow>

      <Wrapper>
         {slides.map((item)=> (
         <Slide slideIndex ={slideIndex}>
            <ImgWrapper>
               <img src= {item.img} alt={item.alt} />
            </ImgWrapper>

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