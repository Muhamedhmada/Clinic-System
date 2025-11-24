import {useNavigate} from "react-router-dom";
import { Exit , Home , Call , Logout as LogoutIcon , Feedback , MedicalHistory , BookAppointment , Sun , Moon, Login} from "../../../Assets/SVGS";
import "./MobileNavMenu.css";
import userImage from "../../../Assets/Images/doctor.jpeg";
import { useState } from "react";
import { motion  , AnimatePresence} from "framer-motion";
import darkModeSlice from "../../../zustand/DarkModeSlice";
import Logout from "../../../utils/logout";
import BtnLoader from "../BtnLoader/BtnLoader";

function MobileNavMenu({isNavMobileMenuOpen, navMobileMenuFunc}) {
  const [loader , setLoader] = useState(false)
  const userData = JSON.parse(localStorage.getItem("userData"))
  const {theme , changeMode} = darkModeSlice()
  const nav = useNavigate();
  const [isLogoutModalOpen , setIsLogoutModalOpen] = useState(false)
  return (
    <div className={isNavMobileMenuOpen ? "menu show" : "menu"}>
      <div className='menu-header'>
        {/* <Logo /> */}
        <div class="userData">
          <img src={userData?.img?userData.img:userImage} loading="lazy" alt="userimage"/>
          <div>
            <h3>{userData?(userData.first_name +" " + userData.last_name):"user name"}</h3>
            <p>{userData?userData.role:"user"}</p>
          </div>
        </div>
        <div className='icon close' onClick={() => navMobileMenuFunc()}>
          <Exit width='40px' />
        </div>
      </div>
      <div className='mobileMenu-links'>
        <a href='/'>
          <Home width='20px' />
          Home 
        </a>
        {
          userData.role === "admin" &&
        <a href='/dashoard'>
          <Home width='20px' />
          dashboard 
        </a>
        }
        <a href='/book-appointment'>
          <BookAppointment width='20px' />
          book appointment 
        </a>
        {/* <a href="/">pages <ArrowRight width="30px"/></a> */}
        <a href='/medical_history'>
          <MedicalHistory width='20px' />
          medical history 
        </a>
        <a href='/contact-us'>
          <Call width='20px' />
          contact us 
        </a>
        <a href='/feedback'>
          <Feedback width='20px' />
          feedback 
        </a>
      </div>
      <div>
        <div class="darkMode" onClick={()=>changeMode()}>
          {
            theme==="dark"?<Moon width="20"/>:<Sun width="20"/>
          }
          <p>dark mode</p>
        </div>
        {
          userData ?
          (
            <p onClick={()=>setIsLogoutModalOpen((prev)=>!prev)}>
              <LogoutIcon width='20px' />
              Logout 
            </p>
          ):
          (
            <p onClick={()=>nav('/login')}>
            <Login width='20px' />
            Login 
            </p>
          )
        }
        <div>

        </div>
      </div>

      
      {/* logout modal in mobile */}
      <AnimatePresence>
      {
        isLogoutModalOpen &&

          <motion.div
            
            initial={{translateY: 100, opacity: 0}}
            animate={{translateY: 0, opacity: 1}}
            exit={{translateY: 100, opacity: 0}}
            transition={{duration: 0.2}}
          
          className="logout-modal-mobile">
            {
              loader?
              <BtnLoader/>:
            <button onClick={()=>Logout({openModal : setIsLogoutModalOpen , nav , setLoader})}>logout</button>
            }
            <button onClick={()=>setIsLogoutModalOpen((prev)=>false)}>no</button>
          </motion.div>
    }
    </AnimatePresence>
    </div>
  );
}
export default MobileNavMenu;
