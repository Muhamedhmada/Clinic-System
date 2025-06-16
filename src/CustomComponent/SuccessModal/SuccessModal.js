import "./SuccessModal.css";

import {motion} from "framer-motion";
import {Check} from "../../Assets/SVGS";

import "./SuccessModal.css";
import { useEffect } from "react";
const SuccessModal = ({isOpen , onClose , successMsg , welcomeMsg}) => {

  console.log(onClose)
 
  useEffect(() => {
    let timer;
    if (isOpen) {
      timer = setTimeout(() => {
        onClose(); // استدعاء الفنكشن اللي بتخفي المودال بعد 3 ثواني
      }, 3000);
    }

    return () => clearTimeout(timer); // تنظيف التايمر عند إلغاء المكون أو تغيير `show`
  }, [isOpen]);
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
            <Check width='70px' />
          </div>
          <h2>Success</h2>
          <p>
            {successMsg}
            <br />
            {welcomeMsg&& welcomeMsg}
          </p>
        </div>

        <p className={`disappearMsg ${isOpen ? "showMsg" : "hideMsg"}`}>
          This window will disappear in 3 seconds...
        </p>
      </motion.div>
    </div>
  );
};

export default SuccessModal;
