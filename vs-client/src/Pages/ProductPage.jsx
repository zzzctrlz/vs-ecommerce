//component imports
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"
//style imports
import styled from "styled-components"
import { Remove, Add } from "@mui/icons-material"
//react and redux imports
import { useState, useEffect } from "react"
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {publicRequest} from "../requests";
import {addProduct} from "../Redux/cartSlice";


//styled components
const Wrapper=styled.div`
   display: flex;
   padding: 50px;
   flex-wrap: wrap;
   min-width: 375px;
   box-sizing: border-box;

   @media(max-width: 850px){
      padding: 50px 0px;
   }
`
const ImgContainer=styled.div`
   flex: 1;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: black;
 //  overflow: hidden;
   box-sizing: border-box;
   padding: 40px;
   flex-basis: 50%;
   min-width: 350px;
`
const Img=styled.img`
   width: clamp(300px, 90%, 1000px);
   object-fit: contain;
   

`
const InfoContainer=styled.div`
   flex: 1;
   padding: 20px 20px; //20 123
   display: flex; 
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 30px;
   border: 1px solid black;
   //box-sizing: border-box; 
   //didn't make a difference on padding taking more room???
   flex-basis: 50%;
   min-width: 350px;
`
const FiltersContainer=styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
   gap: 30px;
   align-items: center;
   min-width: 205px;
   border: 1px solid green;

`
const SizeFilter=styled.select`
   
`
const ColorsContainer=styled.div`
   display:flex;
   align-items: center;
`
const ColorOption=styled.div`
   border-radius: 50%;
   cursor: pointer;
   height: 33px;
   width: 33px;
   background-color: ${props => props.color};
   border: 1px solid black;
   margin-left: 3px;
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
//.attrs(props=>({className: props.className,}))   .attrs worked once when trying but failed upon attempt to replicate
padding: 15px;
width: 150px;
height 60px;
cursor: pointer;
font-weight: 500;
font-size: 25;
// border: 3px solid red;
color: white;
border: none;
border-radius: 3px;
background-color: #d32f2f;
// transition: all 1s ease-in;

&:hover{
   background-color: red;

// & .activeButton{
//    border: 3px solid blue;
//    height: 300px;
//    background-color: blue;
// }
}
`


const ProductPage = () => {
  const dispatch = useDispatch();
  const loc = useLocation();
  const id = loc.pathname.split("/")[2]; 
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  useEffect(()=>{
   const getProduct = async()=>{
      try{
         const res = await publicRequest.get("/products/find/" + id);
         setProduct(res.data);
      }catch(err){console.log(err.response.data)}
   };
   getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if(type ==="dec"){
      quantity > 1 && setQuantity(quantity -1);
    }else{
      setQuantity(quantity+1);
    }
  };

  const handleSetColor = (e) =>{
    let colorOptions = document.querySelectorAll(ColorOption);
    colorOptions.forEach((colorOption)=>{
      if(colorOption.dataset.color === e.target.dataset.color){colorOption.style.border = "3px solid black"}
      else{colorOption.style.border = "1px solid black"}
    })
    setColor(e.target.dataset.color);
  }

  const handleAddToCart = ()=>{
   let addButton = document.getElementById("addButton");
     if(color&&size)
      {dispatch(
         addProduct({...product, quantity, color, size})
       );
                  addButton.disabled = true; 
                  addButton.style.backgroundColor = "#d32f2f";
                  addButton.style.color = "white";
                  addButton.innerHTML = "ADDED!"
                  addButton.style.cursor = "not-allowed";
          //addButton.className = "activeButton";
          //console.log(addButton.classList);
                  setTimeout(()=>{
                  addButton.disabled = false;
                  addButton.style.color = "white";
                  addButton.innerHTML = "ADD TO CART";
                  addButton.style.cursor = "pointer";
         // addButton.className = "";
         // console.log(addButton.className);
                    }, 4000);
       //console.log({...product, quantity, color, size});
      } 
     else{alert("please pick a color AND size!"); 
          console.log(color + " " + size)}
   };
  
  return (
    <div>
      <Announcement />
      <Navbar />
      <Wrapper>
         <ImgContainer>
            <Img src={product.img} />
         </ImgContainer>

         <InfoContainer>
            <h1>{product.title}</h1>
            
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis saepe tenetur quo ipsa nihil dolor illum. Consectetur maiores dicta magni, perferendis ducimus ipsam molestias, expedita, accusamus quod voluptate quisquam provident!</p>
            <PriceP>Price: ${product.price}</PriceP>

            <FiltersContainer>
               <SizeFilter defaultValue="disabledOption" onChange ={(e)=>setSize(e.target.value)}>
                <option key="disabled" value="disabledOption" disabled>choose a size!</option>
                {product.size?.map((size)=> (<option key={size}>{size}</option>))}
               </SizeFilter>
               
               <ColorsContainer>
                  <p>Select Color:</p>
                  {product.color?.map((c)=>
                     (<ColorOption color={c} data-color={c} key={c} alt={c} onClick={(e)=>handleSetColor(e)} />)
                  )}   
               </ColorsContainer>
            </FiltersContainer>

            <AddContainer>
               <Remove onClick={()=>handleQuantity("dec")} sx={{cursor: 'pointer'}}/>
               <AmountBox>{quantity}</AmountBox>
               <Add onClick={()=>handleQuantity("inc")} sx={{cursor: 'pointer'}}/>
            </AddContainer>
            <Button id="addButton" onClick={handleAddToCart}>ADD TO CART</Button>   
         </InfoContainer>
      </Wrapper>
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default ProductPage;