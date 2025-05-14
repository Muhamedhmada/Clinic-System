import Five from "../../../Component/HomeComponents/Five/Five"
import One from "../../../Component/HomeComponents/One/One"
import PlansSection from "../../../Component/HomeComponents/PlansSection/PlansSection"
import Six from "../../../Component/HomeComponents/Six/Six"
import SponserSection from "../../../Component/HomeComponents/SponserSection/SponserSection"
import Three from "../../../Component/HomeComponents/Three/Three"
import Two from "../../../Component/HomeComponents/Two/Two"
import HomeLandPage from "../../../Component/HomeLandPage/HomeLandPage"
import Navbar from "../../../Component/Navbar/Navbar"
import Topbar from "../../../Component/Topbar/Topbar"
import Footer from "../Footer/Footer"

function Home(){
  return(
    <>
      <div className="home-container">
        <Topbar/>
        <Navbar/>
        <HomeLandPage/>
        <One/>
        <Two/>
        <Three/>
        <Five/>
        <Six/>
        <PlansSection/>
        <SponserSection/>
        <Footer/>
      </div>
    </>
  )
}
export default Home