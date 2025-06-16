import { toast, ToastContainer } from 'react-toastify'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import TwoInputs from '../../../Component/TwoInputs/TwoInputs'
import Footer from '../Footer/Footer'
import './FastBooking.css'
function FastBooking(){
  const sendForm = (e)=>{
    e.preventDefault()
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
            <button onClick={(e)=>sendForm(e)}>send</button>
            <p>we will confirm your booking within two hours</p>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default FastBooking