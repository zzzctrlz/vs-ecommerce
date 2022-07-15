import Announcement from "../Components/Announcement"
import Navbar from "../Components/Navbar"
import Newsletter from "../Components/Newsletter"
import Slider from "../Components/Slider"


const Homepage = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Newsletter />
    </div>
  )
}

export default Homepage