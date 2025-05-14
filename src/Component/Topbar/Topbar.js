import { Call, Mail } from '../../Assets/SVGS'
import './Topbar.css'
function Topbar(){
  return(
    <div className="topbar-container">
      <div className="topbar-content content">
        <div className="links">
          <a href="/">about</a>
          <a href="/">doctors</a>
          <a href="/">contact</a>
          <a href="/">FAQ</a>
        </div>
        <div className="contact">
          <a href="tel:+880123456789">
            <Call width="20px" color="#1a76d1"/>
            +880123456789
          </a>
          <a href="mailto:email@domain.com">
            <Mail width="20px" color="#1a76d1"/>
            email@domain.com
          </a>
        </div>
      </div>
    </div>
  )
}
export default Topbar