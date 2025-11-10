import './Notification.css'
import {Notification as NotIcaon} from "../../../Assets/SVGS";
import Icon from '../Icon/Icon';
import { useEffect, useState } from 'react';
import getData from '../../../utils/getData';
import {motion } from 'framer-motion'
import logo from '../../../Assets/Images/clinicLogo.png'
function Notification(){
  const [myNotification , setMyNotification] = useState([])
  const [isOpen , setIsOpen] = useState(true)

  const handleNotificationIcon = ()=>{
    setIsOpen(true)
  }
  const getNotification = async()=>{
    const res = await getData('notifications/my-notifications' )
    console.log(res.data.data[0].message)
    console.log(res.data.data[0].type)
    setMyNotification(res.data.data)
  }
  useEffect(()=>{
    getNotification()
  },[ ])
  return(
    <div className="notification-container">
      <Icon icon={<NotIcaon width="20px"/>} func={handleNotificationIcon}/>
      {
        isOpen && 
        <motion.div
          key={{isOpen}}
          initial={{translateX:100}}
          animate={{translateX:0}}
          transition={{duration: 0.2}}
          className="notifications">
            <h3>notifications</h3>
          {
            myNotification.map((item)=>(
              <div className='notification'>
                <div>
                  <h5>
                    {item.type}
                  </h5>
                  <p>{item.message.slice(0,35)}</p>
                </div>
                <div className="image">
                  <img src={logo} alt="" />
                </div>
            </div>
            ))
          }
        </motion.div>
      }
    </div>
  )
}
export default Notification