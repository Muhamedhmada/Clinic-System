import './Logo.css'
import logo from '../../Assets/Images/clinicLogo.png' 
function Logo(){
  return(
    <div className='logo'>
      <img src={logo} alt='logo' />
    </div>
  )
}
export default Logo