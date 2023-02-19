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
   min-width: 400px;
`
const Img=styled.img`
   width: clamp(350px, 90%, 1000px);
   object-fit: contain;
   

`
const InfoContainer=styled.div`
   flex: 1;
   padding: 20px 123px;
   display: flex; 
   flex-direction: column;
   justify-content: center;
   align-items: flex-start;
   gap: 30px;
   border: 1px solid black;
   box-sizing: border-box; 
   //didn't make a difference on padding taking more room???
   flex-basis: 50%;
   min-width: 400px;
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
     if(color&&size)
      {dispatch(
         addProduct({...product, quantity, color, size})
       );
       console.log({...product, quantity, color, size});
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
               <SizeFilter onChange ={(e)=>setSize(e.target.value)}>
                <option key="disabled" selected={true} disabled>choose a size!</option>
                {product.size?.map((size)=> (<option key={size}>{size}</option>))}
               </SizeFilter>
               
               <ColorsContainer>
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
            <Button onClick={handleAddToCart}>ADD TO CART</Button>
         </InfoContainer>
      </Wrapper>
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default ProductPage;