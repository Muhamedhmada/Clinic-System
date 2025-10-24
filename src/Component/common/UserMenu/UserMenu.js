import {AnimatePresence, motion} from "framer-motion";
import { Logout as LogoutIcon, Settings, User} from "../../../Assets/SVGS";
import "./UserMenu.css";
import userImage from "../../../Assets/Images/doctor.jpeg";
import Modal from "../../custom/Modal/Modal";
import Icon from "../Icon/Icon";
import { useState } from "react";
import {  ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Logout from "../../../utils/logout";
import BtnLoader from "../BtnLoader/BtnLoader";
function UserMenu({isOpen , func}) {
  const nav = useNavigate("")
  const [loader , setLoader] = useState(false)
  const [isLogoutModalOpen , setIsLogoutModalOpen] = useState(false)
  const handleLogout = ()=>{
    Logout({openModal : setIsLogoutModalOpen , nav  , setLoader}) 
  }
  return (
    <div className='userMenu-container'>
      <ToastContainer />
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className='userMenu'
            initial={{scaleY: 0, opacity: 0, transformOrigin: "top"}}
            animate={{scaleY: 1, opacity: 1}}
            exit={{scaleY: 0, opacity: 0}}
            transition={{duration: 0.2}}
          >
            <div className='userInfo'>
              <img src={userImage} alt='' />
              <div className=''>
                <p>hamada</p>
                <span>user</span>
              </div>
            </div>
            <div>
              <a href='/#'>
                <User width='20px' />
                <span>profile</span>
              </a>
              <a href='/#'>
                <Settings width='20px' />
                <span>setting</span>
              </a>
            </div>
            <div onClick={() => setIsLogoutModalOpen(true)}>
              <LogoutIcon width='20px' />
              <span>logout</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Modal isOpen={isLogoutModalOpen}>
        <div className='logout'>
          <Icon icon={<LogoutIcon width='72px' />} />
          <h4>are you sure you want to logout?</h4>
          <div className=''>
            {
              loader?
              <BtnLoader/>:
            <button onClick={() => handleLogout()}>logout</button>
            }
            <button onClick={() => setIsLogoutModalOpen(false)}>no</button>
          </div>
        </div>
      </Modal>

      {/* /> */}
    </div>
  );
}
export default UserMenu;
