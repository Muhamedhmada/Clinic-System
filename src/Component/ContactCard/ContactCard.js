import { Call, Location, Time } from '../../Assets/SVGS'
import './ContactCard.css'
function ContactCard(){
  return(
    <div className="contactCard-container container" >
      <div className="contactCard-content content">
        <div className="card">
          <div className="icon">
            <Call width="50px"/>
          </div>
          <div className="info">
            <h3>0100 473 0458</h3>
            <p>info@company.com</p>
          </div>
        </div>
        <div className="card" onClick={()=>window.open("https://maps.app.goo.gl/ibDiAeqBXe44qmj76" , '_blank')}>
          <div className="icon">
            <Location width="50px"/>
          </div>
          <div className="info">
            <h3>2 Fir e Brigade Road</h3>
            <p>Chittagonj, Lakshmipur</p>
          </div>
        </div>
        <div className="card">
          <div className="icon">
            <Time width="50px"/>
          </div>
          <div className="info">
            <h3>Mon - Sat: 8am - 5pm</h3>
            <p>Sunday Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ContactCard