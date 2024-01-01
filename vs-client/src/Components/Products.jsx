import styled from "styled-components";
import Product from "./Product";
import {useEffect, useState} from "react";
import axios from "axios";

const Container = styled.div`
   //padding: 22px 20px 30px 20px;
   padding-bottom: 20px;
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
   justify-content: space-around;
   width: 100%;
   background-color: white;
`
const Products = ({filters, sort}) => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);
   console.log(filters);
   console.log(Object.keys(filters).length);

   
   useEffect(()=>{
      const getAndSetProducts = async()=>{
         try{
            const res = await axios.get(
               `http://localhost:5000/api/products`
            );
            setProducts(res.data);
            setFilteredProducts(res.data); //populate filteredProducts w/ all products in case no filters but yes sort so sort doesn't have to modify setProducts directly
         }catch(err){console.log(err)}
      };
      getAndSetProducts();
   },[]);

   
   //handle filters
   useEffect(()=>{
      setFilteredProducts(
         products.filter(
            (product)=>Object.entries(filters).every(
               ([key,value])=>product[key].includes(value))
         )
      )
   }, [products, filters]); 
   

   //handle sorts
   useEffect(()=>{
         if(sort==="new"){
            setFilteredProducts(
               (prev)=>[...prev].sort((a,b)=> a.createdAt - b.createdAt)
            );
         }
         if(sort==="asc"){
            setFilteredProducts(
               (prev)=>[...prev].sort((a,b)=> a.price - b.price)
            );
         }
         else{
            setFilteredProducts(
               (prev)=>[...prev].sort((a,b)=>b.price - a.price)
            );
         }
   },[sort, filters]);

 
   return (
      <Container>
         {
            
            Object.keys(filters).length === 0 ?
               products.map((item)=> <Product item={item} key={item._id} />)
               :
               filteredProducts.map((item)=><Product item={item} key={item._id} />)
         }
      </Container>
   );
   
  /* console.log(filters);
   {Object.entries(filters).length > 0 ?  //originally 'cat ?' makes no sense
        filteredProducts.map((item)=> <Product item={item} key={item.id} />)
      : products.map((item)=><Product item={item} key={item.id} />) 
   } */
};

export default Products;