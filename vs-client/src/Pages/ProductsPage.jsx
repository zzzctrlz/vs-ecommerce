import styled from "styled-components"
import Products from "../Components/Products"
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"

import {useState} from "react"

/*const Container = styled.div`
    display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw; 
   `*/
const Title = styled.h1`
   color: black;
   font-weight: 500;
   font-size: 40;
   display: flex;
   justify-content: center;
   align-items: flex-end;
   padding: 20px 0px;
`
const FiltersContainer = styled.div`
   display: flex;
   justify-content: space-around;
   align-items: center;
   padding: 20px 10px;
`
const CatFilter = styled.select`
   
`
const SizeFilter = styled.select`
   
`
const ColorFilter = styled.select`
   
`

const Sort = styled.select`
   
`

const ProductsPage = () => {

   const [filters, setFilters] = useState({});
   const [sort, setSort] = useState("newest");

  return (
    <div>
      <Announcement />
      <Navbar />
      <Title>Products</Title> 
      <FiltersContainer>
         <CatFilter defaultValue="disabledOption" onChange={(e)=>setFilters({...filters, cat: e.target.value})}>
            <option value="disabledOption" disabled>Category</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="children">children</option>
            <option value="shirts">shirts</option>
            <option value="hats">hats</option>
            <option value="patches">patches</option>
         </CatFilter>
         <SizeFilter defaultValue="disabledOption" onChange={(e)=>setFilters({...filters, size: e.target.value})}>
            <option value="disabledOption" disabled>Size</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
         </SizeFilter>
         <ColorFilter defaultValue="disabledOption" onChange={(e)=>setFilters({...filters, color: e.target.value})}>
            <option value="disabledOption" disabled>Color</option>
            <option value="red">red</option>
            <option value="black">black</option>
            <option value="white">white</option>
         </ColorFilter>
         <Sort defaultValue="disabledOption" onChange={(e)=>setSort(e.target.value)}>
            <option value="disabledOption" disabled>Sort</option>
            <option value="new">new</option>
            <option value="asc">price(low to high)</option>
            <option value="desc">price(high to low)</option>
         </Sort>
      </FiltersContainer>
      <Products sort={sort} filters={filters}/>
      <Newsletter />
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default ProductsPage