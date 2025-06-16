import './ContactForm.css'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import {toast, ToastContainer} from 'react-toastify'
import TwoInputs from '../TwoInputs/TwoInputs';

function ContactForm(){
  const handleSendBtn = (e)=>{
    e.preventDefault()
    toast.success("your message send successfully")
  }
  return (
    <>
      <ToastContainer/>
    <div className='contactForm-container container'>
      <div className='contactForm-content content'>
        <div className='leftSide'>
          <MapContainer center={[30.7675933734605, 30.813904985641262]} zoom={13} className='map'>
            <TileLayer
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
              attribution='&copy; OpenStreetMap contributors'
            />
            <Marker position={[30.7675933734605, 30.813904985641262]}>
              <Popup>كفر العيص</Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className='rightSide'>
          <div className='header'>
            <h2 className='h-after-effect'>contact with us</h2>
            <p>
              If you have any questions please fell free to contact with us.
            </p>
          </div>
          <form>
            <TwoInputs typeOne={"text"} placeOne={"name"} typeTwo={"email"} placeTwo={"email"}/>
            <TwoInputs typeOne={"number"} placeOne={"phone"} typeTwo={"text"} placeTwo={"subject"}/>
            <textarea placeholder='your message'></textarea>
            <button onClick={(e)=>handleSendBtn(e)}>send</button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
}
export default ContactForm