import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import FooterLinks from "../Components/FooterLinks"
import Copyright from "../Components/Copyright"

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
   border: 1px solid black;
   overflow-y: auto;
   padding: 20px;
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
               <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error, voluptas eveniet officiis fugiat minus aspernatur reprehenderit ad sed? Ea repellendus culpa sequi dignissimos alias modi hic nihil aliquam, ab sint vel dolores necessitatibus officiis quae blanditiis eligendi voluptates consectetur ipsum atque vitae! At nobis ex aspernatur doloremque laudantium quam similique, possimus perferendis dolore est porro tempore error, consectetur quis minus tenetur vero. Voluptatibus obcaecati magnam ipsum fugit! Sapiente natus magnam voluptatibus esse sed vitae veritatis dolore rem illo impedit, enim provident culpa at alias animi nulla nihil deleniti quidem harum nisi atque? Quaerat quibusdam cum maiores laudantium quidem nisi esse quos soluta a officiis eveniet illo repellendus accusamus voluptatibus, provident, vel numquam porro nulla, iusto aperiam fugit praesentium dolorum! Sint ea libero eligendi modi consectetur repellat, nesciunt rerum eaque a deserunt provident illum accusamus enim dolore? Iure facilis itaque perferendis dolor nihil. Molestiae pariatur, cupiditate exercitationem quisquam vitae iusto quas reiciendis atque quia, maxime deserunt! Repellat, consequatur! Officiis, asperiores molestiae dolore sunt similique maiores tempore itaque veritatis porro quae cum. Praesentium, doloremque nemo vero nam assumenda temporibus saepe non eligendi atque eius excepturi! Officia architecto maiores nulla fuga non culpa consequuntur quisquam aspernatur sint, illo, hic minus. Hic quos tempore magnam sed voluptatum, at in et iste quibusdam. Sequi, laboriosam ad neque culpa accusantium excepturi nemo fugit est repellendus ipsa sed facere obcaecati maiores adipisci, dignissimos voluptates dolor rem quo modi enim quam saepe! Quam, adipisci reprehenderit natus esse pariatur mollitia, laborum magni dolore ducimus cum explicabo non eveniet sapiente? Labore maxime ipsam eum iusto quia eos odit, facere perferendis animi commodi rem explicabo praesentium dolores libero id sunt voluptates non consequatur qui atque? Provident, accusantium dignissimos cum doloribus dolores, praesentium obcaecati, ratione facilis ipsa est sequi? Iusto voluptate fugiat, impedit pariatur facilis repellat voluptatem fugit sequi alias accusamus blanditiis rem perferendis omnis dicta at odit, doloribus fuga enim! Iure temporibus quas reprehenderit, sequi earum reiciendis excepturi ducimus exercitationem. Repellat ipsum sint ratione id fugit commodi temporibus dignissimos, blanditiis molestiae iure. Ab harum officia, nisi fuga mollitia corporis sed ratione. Esse recusandae, alias magnam non ad sit est repudiandae reiciendis aut molestiae sint facilis officiis eius optio. Ratione pariatur dignissimos natus eius sequi dolorem praesentium dolor quaerat enim minus eligendi inventore, vitae aliquam voluptatem neque voluptatibus officia, maxime est cupiditate? A maiores consequatur blanditiis? Non, voluptas magni delectus cumque sint eius, omnis corporis necessitatibus perferendis voluptatibus quisquam fugit tenetur animi!</p>
            </Container>
         </Wrapper>
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default AboutPage