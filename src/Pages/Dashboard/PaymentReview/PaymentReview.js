import './PaymentReview.css'
import DashHeader from '../../../Component/sections/DashHeader/DashHeader'
import Table from '../../../Component/custom/Table/Table';
import {toast , ToastContainer} from 'react-toastify'
import img from '../../../Assets/Images/maximising-user-satisfaction-3.jpg'
import img2 from '../../../Assets/Images/Successful-Payment-Information.png'
import { useState } from 'react';
import { Exit } from '../../../Assets/SVGS';
import Icon from '../../../Component/common/Icon/Icon';
import { AnimatePresence, motion } from 'framer-motion';
function PaymentReview(){
  const [searchValue , setSearchValue] = useState("")

  const paymentSubmissions = [
    {
      name: "Ahmed Mohamed",
      phone: "+201234567890",
      bookingType: "online", // online or onsite
      paymentMethod: "V-Cash", // V-Cash, Visa, MasterCard, Cash...
      amountDue: 350, // in EGP
      paymentConfirmed: false,
      confirmButtonLabel: "Confirm Payment",
      proof: {
        type: "image", // image or code
        value: img // image file or code if type = code
      }
    },
    {
      name: "Sara Ali",
      phone: "+201098765432",
      bookingType: "urgent",
      paymentMethod: "Visa",
      amountDue: 500,
      paymentConfirmed: false,
      confirmButtonLabel: "Confirm Payment",
      proof: {
        type: "code",
        value: "TXN-9856743"
      }
    },
    {
      name: "Mohamed Said",
      phone: "+201112223334",
      bookingType: "normal",
      paymentMethod: "MasterCard",
      amountDue: 250,
      paymentConfirmed: false,
      confirmButtonLabel: "Confirm Payment",
      proof: {
        type: "image",
        value: img2
      }
    },
    {
      name: "Nour Hassan",
      phone: "+201556677889",
      bookingType: "urgent",
      paymentMethod: "Cash",
      amountDue: 400,
      paymentConfirmed: false,
      confirmButtonLabel: "Confirm Payment",
      proof: {
        type: "code",
        value: "CASH-2025-7788"
      }
    }
  ];

  
  
  
  const [showedImage , setShowedImage] = useState(null)
  return (
    <div className='paymentReview-container'>
      <div className='paymentReview-content'>
        <ToastContainer />
        <DashHeader header='Payment Review' getSearchValue = {(e)=>setSearchValue(e.target.value)} />
        <Table
          searchValue={searchValue}
          headers={["name", "mobile", "type", "payment Method" , "total amount", "proof" , "confirm payment"]}
          keys={["name", "phone", "bookingType" , "paymentMethod" , "amountDue" ]}
          data={paymentSubmissions}
          renderAction={(item) => (
            <>
              <td>
                  {item.proof.type === "code" ? (
                  <p>{item.proof.value}</p>
                  ) : (
                    <img onClick={(e)=>setShowedImage(item.proof.value)} src={item.proof.value} alt='noimage' />
                  )}
              </td>
              <td>
                <button className='addBtn'>
                  {
                    item.paymentConfirmed?"conifrmed":"confirm payment"
                  }
                </button>
              </td>
            </>
          )}
        />
            <AnimatePresence>
          {
            showedImage?
            <motion.div
              initial={{opacity:0 , scale:0 }}
              animate={{opacity:1 , scale:1}}
              exit={{opacity:0 , scale:0 }}
              transition={{duration:.3, ease: "easeInOut"}}
              className="fullScreenImage"
            >
              <Icon icon={<Exit width="40px"/>} func={()=>setShowedImage(null)}/>
                <img src={showedImage} alt="fullScreenImage"/>
            </motion.div>
            :null
          }
          </AnimatePresence>
      </div>
    </div>
  );
}
export default PaymentReview