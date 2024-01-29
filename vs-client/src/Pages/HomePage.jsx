import Announcement from "../Components/Announcement"
import Copyright from "../Components/Copyright"
import FooterLinks from "../Components/FooterLinks"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Slider from "../Components/Slider"
import PopularItems from "../Components/PopularItems"



const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <PopularItems />
      <Newsletter />
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default HomePage