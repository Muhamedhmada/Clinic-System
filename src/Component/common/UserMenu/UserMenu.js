import {AnimatePresence, motion} from "framer-motion";
import {Exit, Logout, Moon, Settings, User} from "../../../Assets/SVGS";
import "./UserMenu.css";
import userImage from "../../../Assets/Images/doctor.jpeg";
import Modal from "../../custom/Modal/Modal";
import Icon from "../Icon/Icon";
import { useState } from "react";
import SuccessModal from "../../custom/SuccessModal/SuccessModal";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import base_url from "../../../config/base_url";
import handleApiError from "../../../utils/handleApiError";
function UserMenu({isOpen}) {
  const nav = useNavigate("")
  
  const [isLogoutModalOpen , setIsLogoutModalOpen] = useState(false)
  const handleLogout = async()=>{
    try{
      axios.post(`${base_url}/auth/logout`).then((res)=>{
        console.log(res)
        if(localStorage.getItem("token")){
          localStorage.removeItem("token")
        }else{
          toast.warn("you are logout already")
        }
        nav('/login' , {state:{logout:true , msg:"logout successfully"}})
      })
    }
    catch(error){
      handleApiError()
    }
    finally{
      setIsLogoutModalOpen(false)
      console.log("logout")
    }
    // toast.success("logout successfully")
  }
  return (
    <div className="userMenu-container">
      <ToastContainer/>
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
            <div onClick={()=>setIsLogoutModalOpen(true)}>
                <Logout width='20px' />
                <span>logout</span>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Modal isOpen={isLogoutModalOpen}
        // modalTitle="are you sure you want to logout"
        // showModalsBtns={true}
        // AcceptBtn="yes"
        // CancelBtn="no"
      >  
            <div className="logout">
              <Icon icon={<Logout width="72px"/>}/>
              <h4>are you sure you want to logout?</h4>
              <div className="">
                <button onClick={()=>handleLogout()}>logout</button>
                <button onClick={()=>setIsLogoutModalOpen(false)}>no</button>
              </div>
            </div>
          </Modal>
        
        {/* /> */}
    </div>
  );
}
export default UserMenu;
