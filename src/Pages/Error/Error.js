import Navbar from "../../Component/Navbar/Navbar";
import Topbar from "../../Component/Topbar/Topbar";
import Footer from "../Website/Footer/Footer";
import Error from "../../Component/Error/Error";

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