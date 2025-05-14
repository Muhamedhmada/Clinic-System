import { Ambulance, List, Time } from '../../Assets/SVGS'
import './ThreeCards.css'
function ThreeCards(){
  return(
    <div className="threeCards-container container">
      <div className="threeCards-content">
        <div className="card">
          <h3>opening Hours</h3>
          <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          <button>learn more</button>
          <div className="icon">
            <Ambulance width="120px"/>
          </div>
        </div>
        <div className="card">
          <h3>opening Hours</h3>
          <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          <button>learn more</button>
          <div className="icon">
            <List width="100px"/>
          </div>
        </div>
        <div className="card">
          <h3>opening Hours</h3>
          <p>Lorem ipsum sit amet consectetur adipiscing elit. Vivamus et erat in lacus convallis sodales.</p>
          <button>learn more</button>
          <div className="icon">
            <Time width="100px"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ThreeCards