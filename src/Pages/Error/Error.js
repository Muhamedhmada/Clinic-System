import Navbar from "../../Component/common/Navbar/Navbar";
import Topbar from "../../Component/common/Topbar/Topbar";
import Footer from "../../Component/common/Footer/Footer";
import Error from "../../Component/sections/Error/Error";

function ErrorPage(){
  return(
    <>
      <Topbar/>
      <Navbar/>
      <Error/>
      <Footer/>
    </>
  )
}
export default ErrorPage