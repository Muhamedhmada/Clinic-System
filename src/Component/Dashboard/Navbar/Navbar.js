import { Messages, Notification } from '../../../Assets/SVGS'
import './Navbar.css'
import doctor from '../../../Assets/Images/doctor.jpeg'
import SearchInput from '../../SearchInput/SearchInput'
import Icon from '../../Icon/Icon'
function Navbar(){
  return(
    <div className='dash-nav-container'>
      <div className="dash-nav-content content">
        <SearchInput/>
        <div className="icons">
          <Icon icon={<Notification  width="20px"/>}/>
          <Icon icon={<Messages  width="20px"/>}/>
          <div className="profileImage">
            <img src={doctor} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar