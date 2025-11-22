import './Notification.css'
import {Notification as NotIcaon} from "../../../Assets/SVGS";
import Icon from '../Icon/Icon';
import { useEffect, useState } from 'react';
import getData from '../../../utils/getData';
import {motion , AnimatePresence } from 'framer-motion'
import logo from '../../../Assets/Images/clinicLogo.png'
import { notification } from 'antd';
function Notification(){
  const [myNotification , setMyNotification] = useState([])
  const [isOpen , setIsOpen] = useState(false)

  const handleNotificationIcon = ()=>{
    setIsOpen((prev)=>!prev)
  }
  const getNotification = async()=>{
    const res = await getData('notifications/my-notifications' )
    console.log(res?.data?.data[0]?.message)
    console.log(res?.data?.data[0]?.type)
    setMyNotification(res?.data?.data)
  }
  useEffect(()=>{
    getNotification()
  },[ ])
  return(
    <div className="notification-container">
      <div className="icon">
        {
          myNotification?.length > 0  && 
        <p className='NotificationLength'>{myNotification.length}</p>
        }
        <Icon icon={<NotIcaon width="20px"/>} func={handleNotificationIcon}/>
      </div>
      <AnimatePresence>
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
              notification.length !== 0?(

                myNotification?.map((item)=>(
                  <div className='notification'>
                    <div>
                      <h5>
                        {item?.type}
                      </h5>
                      <p>{item?.message.slice(0,35)}</p>
                    </div>
                    <div className="image">
                      <img src={logo} alt="" />
                    </div>
                </div>
                ))
              ):"no data to preview"
            }
          </motion.div>
      }
      </AnimatePresence>
    </div>
  )
}
export default Notification