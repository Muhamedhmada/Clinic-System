import One from "../../../Component/HomeComponents/One/One"
import Two from "../../../Component/HomeComponents/Two/Two"
import Three from "../../../Component/HomeComponents/Three/Three"
import Five from "../../../Component/HomeComponents/Five/Five"
import Six from "../../../Component/HomeComponents/Six/Six"
import HomeLandPage from "../../../Component/HomeLandPage/HomeLandPage"
import Topbar from "../../../Component/Topbar/Topbar"
import Navbar from "../../../Component/Navbar/Navbar"
import PlansSection from "../../../Component/HomeComponents/PlansSection/PlansSection"
import SponserSection from "../../../Component/HomeComponents/SponserSection/SponserSection"
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