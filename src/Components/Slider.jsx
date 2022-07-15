import {slides} from "../data";
import styled from "styled-components";
import { useState, useEffect } from "react";


const Container = styled.div`
   width: 100%;
   height: 88vh;
   display: flex;
   justify-content: center;
   align-items: center;
   position: relative;
   padding-bottom: 15px;
   //background-color: #2e2e2e;
   //background-color: white;
`
const Wrapper = styled.div`
   height: 90%;
   width: 95%;
   background-color: black;
   //position: relative;
   //background-color: yellow; for testing
   //border: 2px solid red;
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
     //border: solid 1px white;
     //overflow: hidden;
  `

const ImgWrapper = styled.div`
   flex: 1 1 auto;
   height: 100%;
   overflow: hidden;
   //padding: 20px 20px;
   background-color: orange;
`
//const Img = styled.img`
  /* object-fit: cover;*/
//`

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

const Slider = () => {
   const [slideIndex, setSlideIndex] = useState(0);

   //should i put the following into a useEffect body?
  /* useEffect(()=>{
      const slideChange = setInterval(()=>{
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
      }, 5000);
   },);*/
   

   const handleCircleClick = (circleNum) => {
      setSlideIndex(circleNum);
      let circles = document.querySelectorAll(Circle);
      circles.forEach((value,index)=>{
         
         if(index === circleNum){value.style.backgroundColor = "#d32f2f"}
         else{value.style.backgroundColor = "black"}
         
      })
   }


  return (
   <Container>
      <Wrapper>
         {slides.map((item)=> (
         <Slide slideIndex ={slideIndex}>
            <ImgWrapper>
               <img src= {item.img} alt={item.alt} />
            </ImgWrapper>

            <TextWrapper>
               
               <h1>{item.engTitle}</h1>
               <p>{item.engText}</p>
               
            </TextWrapper>
         </Slide>   
         ))}
      </Wrapper>
      <CircleContainer>
         <Circle id="0" onClick={()=> handleCircleClick(0)}></Circle>
         <Circle id="1" onClick={()=> handleCircleClick(1)}></Circle>
         <Circle id="2" onClick={()=> handleCircleClick(2)}></Circle>
      </CircleContainer>
   </Container>
   
  );
};



export default Slider