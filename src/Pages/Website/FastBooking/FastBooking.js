import { toast, ToastContainer } from 'react-toastify'
import LandPage from '../../../Component/common/LandPage/LandPage'
import Navbar from '../../../Component/common/Navbar/Navbar'
import Topbar from '../../../Component/common/Topbar/Topbar'
import TwoInputs from '../../../Component/common/TwoInputs/TwoInputs'
import Footer from '../../../Component/common/Footer/Footer';
import './FastBooking.css'
function FastBooking(){
  const token = localStorage.getItem("token")

  const sendForm = (e)=>{
    e.preventDefault()
    if(!token){
      toast.error("pls login first")
      console.log("login frist")
      return
    }
    toast.success("form send successfully")
  }
  return(
    <>
      <Topbar/>
      <Navbar/>
      <LandPage
        header='fast booking'
        link='fast booking'
        href='/fast-booking'
        />
        <ToastContainer/>
      <div className="fastBooking-container container">
        <div className="fastBooking-content content">
          <h2 className='h-after-effect'>please fill this form</h2>
          <form>
            <TwoInputs typeOne={"text"} placeOne={"your name"} typeTwo={"number"} placeTwo={"mobile number"}/>
            <div className="twoInputs">
              <input type="date" placeholder='f,' />
            </div>
            <textarea placeholder='write the reason' ></textarea>
            <textarea placeholder='write any notes' ></textarea>
            <button className='addBtn' onClick={(e)=>sendForm(e)}>send</button>
            <p>we will confirm your booking within two hours</p>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default FastBooking