import One from "../../../Component/HomeComponents/One/One"
import Two from "../../../Component/HomeComponents/Two/Two"
import Three from "../../../Component/HomeComponents/Three/Three"
import Five from "../../../Component/HomeComponents/Five/Five"
import Six from "../../../Component/HomeComponents/Six/Six"
import HomeLandPage from "../../../Component/sections/HomeLandPage/HomeLandPage"
import Topbar from "../../../Component/common/Topbar/Topbar"
import Navbar from "../../../Component/common/Navbar/Navbar"
import PlansSection from "../../../Component/HomeComponents/PlansSection/PlansSection"
import SponserSection from "../../../Component/HomeComponents/SponserSection/SponserSection"
import Footer from '../../../Component/common/Footer/Footer';
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"

function Home(){
  const location = useLocation()
  useEffect(() => {
    if(location.state?.success){
      toast.success(location.state?.msg)
    }
    if(location.state?.logout){
      toast.success(location.state?.msg)
    }
    window.history.replaceState({}, document.title);
    console.log(window.history)
  }, [location])
  
  return(
    <>
      <ToastContainer/>
      <div className="home-container">
        <Topbar/>
        <Navbar/>
        <HomeLandPage/>
        <One/>
        <Two/>
        <Three/>
        <Five/>
        <Six/> 
        <SponserSection/>
        <PlansSection/>
        <Footer/>
      </div>
    </>
  )
}
export default Home