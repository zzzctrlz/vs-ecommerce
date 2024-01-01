import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"
import Newsletter from "../Components/Newsletter"

import styled from "styled-components";

const Wrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   height: 60vh;
`
const Container = styled.div`
   width: 50%;
   height: 50%;
   border: 3px solid red;
   overflow-y: auto;
   padding: 20px;
   background-color: black;
   color: white;
`

const AboutPage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
         <Wrapper>
            <Container>
               <h1>About Us!</h1>
               <br />
               <p>Viet Shiet encompasses all things Vietnamese from culture to media to merch and more! Started by a Vietnamese-American in sunny Southern California! We hope you enjoi what we have to offer and thank you for joining us on our journey as we continue to grow! Cam on!</p>
            </Container>
         </Wrapper>
      <Newsletter />
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default AboutPage