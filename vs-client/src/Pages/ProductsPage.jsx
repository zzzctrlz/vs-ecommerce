import styled from "styled-components"
import Products from "../Components/Products"
import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"

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
`

const ProductsPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Title>Products</Title> 
      <Products />
      <Newsletter />
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default ProductsPage