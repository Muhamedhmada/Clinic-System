import './Logo.css'
import logo from '../../../Assets/Images/clinicLogo.png' 
import { useNavigate } from 'react-router-dom'
function Logo(){
  const nav = useNavigate()
  return(
    <div className='logo' onClick={()=>nav('/')}>
      <img src={logo} alt='logo' loading="lazy" />
    </div>
  )
}
export default Logo