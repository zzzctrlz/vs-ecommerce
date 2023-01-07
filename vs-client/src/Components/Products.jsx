import styled from "styled-components";
import { products } from "../data";
import Product from "./Product";
import {useEffect, useState} from "react";
import axios from "axios";

const Container = styled.div`
   padding: 22px 20px 30px 20px;
   display: flex;
   gap: 10px;
   flex-wrap: wrap;
   justify-content: space-around;
   width: 100%;
   background-color: white;
`
const Products = ({cat, filters, sort}) => {
   const [products, setProducts] = useState([]);
   const [filteredProducts, setFilteredProducts] = useState([]);

   //initial get/setProducts (with or without category)
   useEffect(()=>{
      const getAndSetProducts = async()=>{
         try{
            const res = await axios.get(
               cat ? `http://localhost:5000/api/products?category=${cat}`
                   : `http://localhost:5000/api/products`
            );
            setProducts(res.data);

         } catch(err){console.log(err)}
      };
      getAndSetProducts();
   },[cat]);

   
   //handle filters
   useEffect(()=>{
      //why would there have to be a category to filter products?
      //what if just filtering base products with no category? commenting out that condition v
      //cat &&
      setFilteredProducts(
         products.filter(
            (product)=>Object.entries(filters).every(
               ([key,value])=>product[key].includes(value))
         )
      )
   }, [products, filters]); //[changed from products, cat filters]   
                           //if cat changes, first useEffect will change products which will trigger this useEffect
   

   //handle sorts
   //changed from tut example to allow sorting nonfiltered products too
   useEffect(()=>{
      if(Object.entries(filters).length > 0){
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
      }
      else{
         if(sort==="new"){
            setProducts(
               (prev)=>[...prev].sort((a,b)=> a.createdAt - b.createdAt)
            );
         }
         if(sort==="asc"){
            setProducts(
               (prev)=>[...prev].sort((a,b)=> a.price - b.price)
            );
         }
         else{
            setProducts(
               (prev)=>[...prev].sort((a,b)=>b.price - a.price)
            );
         }
      }
   },[filters, sort]);

   return (
      <Container>
      
         {Object.entries(filters).length > 0 ?  //originally 'cat ?' makes no sense
              filteredProducts.map((item)=> <Product item={item} key={item.id} />)
            : products.map((item)=><Product item={item} key={item.id} />) 
         } 
      </Container>
   );
};

export default Products;