import Announcement from "../Components/Announcement"
import Copyright from "../Components/Copyright"
import FooterLinks from "../Components/FooterLinks"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Slider from "../Components/Slider"


const HomePage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Newsletter />
      <FooterLinks />
      <Copyright />
    </div>
  )
}

export default HomePage