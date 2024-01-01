import Products from "../Components/Products"
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"

import styled from "styled-components"
import {useState, useEffect} from "react"
import {useLocation} from "react-router"

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
   padding: 15px 10px 40px 10px;
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
   
   const [sort, setSort] = useState("newest");
   const [filters, setFilters] = useState({});
   
   const location =useLocation();
   //console.log(location);
   const qCat = location.pathname.split("/")[2];
  // console.log(qCat);

  useEffect(()=>{
   if(qCat !== undefined) {setFilters({cat:qCat})};
   if(qCat === undefined) {setFilters({})};
  },[qCat]);

  //useEffect to reset filters anytime hat or patch is selected since only one color/size available and otherwise no products would show
//   useEffect(()=>{
//    if(filters.cat === "hat"){
//       setFilters({cat:"hat"})
//    }
//    if(filters.cat === "patch"){
//       setFilters({cat:"patch"})
//    }
// }, [filters.cat]);

//console.log(filters);
   
  return (
    <div>
      <Announcement />
      <Navbar />
      <Title>Products</Title> 
      <FiltersContainer>
         <CatFilter defaultValue="disabledOption" onChange={(e)=>{
            if(e.target.value === "hat" || e.target.value === "patch"){
               setFilters({cat: e.target.value})
            }
            else{
               setFilters({...filters, cat: e.target.value});
            }
         }}>
            <option value="disabledOption" disabled>Category</option>
            <option value="men">men</option>
            <option value="women">women</option>
            <option value="children">children</option>
            <option value="shirt">shirts</option>
            <option value="hat">hats</option>
            <option value="patch">patches</option>
         </CatFilter>
         <SizeFilter defaultValue="disabledOption" onChange={(e)=>{
            if(filters.cat === "hat"){
               setFilters({cat: "hat"});
            }
            else if(filters.cat === "patch"){
               setFilters({cat: "patch"});
            }
            else{
               setFilters({...filters, size: e.target.value});
            }
         }}>
            <option value="disabledOption" disabled>Size</option>
            <option value="s">s</option>
            <option value="m">m</option>
            <option value="l">l</option>
            <option value="xl">xl</option>
         </SizeFilter>
         <ColorFilter defaultValue="disabledOption" onChange={(e)=>{
            if(filters.cat === "hat"){
               setFilters({cat: "hat"});
            }
            else if(filters.cat === "patch"){
               setFilters({cat: "patch"});
            }
            else{
               setFilters({...filters, color: e.target.value});
            }
         }}>
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