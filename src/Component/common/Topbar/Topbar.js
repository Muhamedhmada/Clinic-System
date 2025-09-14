import { Call, Mail } from '../../../Assets/SVGS'
import './Topbar.css'
function Topbar(){
  return(
    <div className="topbar-container container">
      <div className="topbar-content content">
        <div className="links">
          <a href="/">about</a>
          <a href="/">doctors</a>
          <a href="/feedback">feedback</a>
          <a href="/contact-us">contact</a>
          <a href="/">FAQ</a>
        </div>
        <div className="contact">
          <a href="tel:+201000473458">
            <Call width="20px"/>
            +2 0100 047 3458
          </a>
          <a href="mailto:hmada@gmail.com">
            <Mail width="20px"/>
            hmada@gamil.com
          </a>
        </div>
      </div>
    </div>
  )
}
export default Topbar