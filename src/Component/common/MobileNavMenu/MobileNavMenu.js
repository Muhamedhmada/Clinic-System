import { useNavigate } from 'react-router-dom'
import { ArrowRight, Exit } from '../../../Assets/SVGS'
import Logo from '../Logo/Logo'
import './MobileNavMenu.css'
import isTokenSlice from "../../../zustand/TokenSlice";


function MobileNavMenu({isNavMobileMenuOpen , navMobileMenuFunc}){
  const {isToken} = isTokenSlice();
  const nav = useNavigate()
  return(
    <div className={isNavMobileMenuOpen ? "menu show" : "menu"}>
    <div className='menu-header'>
      <Logo />
      <div
        className='icon'
        onClick={() => navMobileMenuFunc()}
      >
        <Exit width='40px' />
      </div>
    </div>
    <div className='mobileMenu-links'>
      <a href='/'>
        Home <ArrowRight width='30px' />
      </a>
      {/* <a href="/">doctors <ArrowRight width="30px" /></a> */}
      <a href='/book-appointment'>
        book appointment <ArrowRight width='30px' />
      </a>
      {/* <a href="/">pages <ArrowRight width="30px"/></a> */}
      <a href='/medical_history'>
        medical history <ArrowRight width='30px' />
      </a>
      <a href='/contact-us'>
        contact us <ArrowRight width='30px' />
      </a>
      <a href='/feedback'>
        feedback <ArrowRight width='30px' />
      </a>
      <a href='/feedback' aria-disabled="true">
        settings <ArrowRight width='30px' />
        <div className="subMenu">
          <ul>
            <li>Logout</li>
          </ul>
        </div>
      </a>
      {/* <button>
        settings
      </button> */}
      
    </div>
    <div className='menu-btns'>
      <button onClick={() => nav("/booking")}>book appointment</button>
      <button onClick={() => nav(isToken ? "/dashboard" : "/login")}>
        {isToken ? "dashboard" : "login"}
      </button>
    </div>
  </div>
  )
}
export default MobileNavMenu