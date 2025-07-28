import "./SuccessModal.css";

import {motion} from "framer-motion";
import {Check} from "../../Assets/SVGS";

import "./SuccessModal.css";
import { useEffect, useState } from "react";
const SuccessModal = ({isOpen , onClose , successMsg , welcomeMsg}) => {
 
  const [timer , setTimer] = useState(3)
  useEffect(() => {
    console.log(timer)
    if (isOpen) {
      let counterInterval = setInterval(() => {
        console.log(timer)
          setTimer(prev=>{
            if(prev > 0){
              return prev-1
            }
            else{
              onClose()
              clearInterval(counterInterval)
            }
          })
      }, 1000);
      return () => clearInterval(counterInterval); // تنظيف التايمر عند إلغاء المكون أو تغيير `show`
    }
  }, [ isOpen]);
  return (
    <div className='successModal-container'>
      <motion.div
        initial={{opacity: 0, scale: 0.8}}
        animate={{opacity: 1, scale: 1}}
        exit={{opacity: 0, scale: 0.8}}
        transition={{duration: 0.1, ease: "easeOut"}}
        className='modal'
      >
        <div className={`successModal ${isOpen ? "show" : "hide"}`}>
          <div className='icon'>
            <Check width='70px' color="#1a76d1" />
          </div>
          <h2>Success</h2>
          <p>
            {successMsg}
            <br />
            {welcomeMsg&& welcomeMsg}
          </p>
        </div>

        <p className={`disappearMsg ${isOpen ? "showMsg" : "hideMsg"}`}>
          This window will disappear in {timer} seconds...
        </p>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
