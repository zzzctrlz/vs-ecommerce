import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"
import styled from "styled-components"
import tshirt from "../Assets/tshirtClipart.png"
import { Remove, Add } from "@mui/icons-material"

const Wrapper=styled.div`
   display: flex;
   padding: 50px;
`
const ImgContainer=styled.div`
   flex: 1;
   border: 1px solid black;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: black;
`
const Img=styled.img`
   height: 80%;
`
const InfoContainer=styled.div`
   flex: 1;
   padding: 0px 123px;
   display: flex; 
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 30px;
   border: 1px solid black;
`
const FiltersContainer=styled.div`
   display: flex;
   justify-content: flex-start;
   gap: 30px;
   align-items: center;

`
const SizeFilter=styled.select`
   
`
const ColorsContainer=styled.div`
   display:flex;
`
const ColorOption=styled.div`
   border-radius: 50%;
   cursor: pointer;
   height: 33px;
   width: 33px;
   background-color: ${props => props.color};
   border: 1px solid black;
`
const PriceP=styled.p`
`
const AddContainer=styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-start; 
`
const AmountBox=styled.span`
   border: 1px solid black;
   height: 30px;
   width: 30px;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 0px 15px;
`
const Button=styled.button`
padding: 15px;
background-color: white;
cursor: pointer;
font-weight: 500;
font-size: 25;
border: 1px solid black;

&:hover{
   background-color: lightgray;
}

`




const ProductPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Wrapper>
         <ImgContainer>
            <Img src={tshirt} />
         </ImgContainer>

         <InfoContainer>
            <h1>Shirty Shirt</h1>
            
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe tenetur quo ipsa nihil dolor illum. Consectetur maiores dicta magni, perferendis ducimus ipsam molestias, expedita, accusamus quod voluptate quisquam provident!</p>
            <PriceP>Price: $23</PriceP>
            <FiltersContainer>
               <SizeFilter>
                  <option>S</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                  <option>XXXL</option>
               </SizeFilter>
               <ColorsContainer>
                  <ColorOption color='black'></ColorOption>
                  <ColorOption color='white'></ColorOption>
                  <ColorOption color='red'></ColorOption>
               </ColorsContainer>
            </FiltersContainer>
            <AddContainer>
               <Remove sx={{cursor: 'pointer'}}/>
               <AmountBox>1</AmountBox>
               <Add sx={{cursor: 'pointer'}}/>
            </AddContainer>
            <Button>Add</Button>
         </InfoContainer>
      </Wrapper>
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default ProductPage;