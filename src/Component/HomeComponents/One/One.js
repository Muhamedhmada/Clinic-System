import { Ambulance, MedicalEarPhone, Pharmecy } from '../../../Assets/SVGS'
import Header from '../../Header/Header'
import ThreeCards from '../../ThreeCards/ThreeCards'
import './One.css'
function One(){
  return(
    <div className="one-container container">
      <div className="one-content content">
        <div className="threeCards">
          <ThreeCards/>
          <Header header="We Are Always Ready to Help You & Your Family" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"/>
        </div>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <Ambulance width="40px" color="#1a76d1"/>
            </div>
            <h3>Emergency Help</h3>
            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
          </div>
          <div className="card">
            <div className="icon">
              <Pharmecy width="40px" color="#1a76d1"/>
            </div>
            <h3>Emergency Help</h3>
            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
          </div>
          <div className="card">
            <div className="icon">
              <MedicalEarPhone width="40px" color="#1a76d1"/>
            </div>
            <h3>Emergency Help</h3>
            <p>Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default One