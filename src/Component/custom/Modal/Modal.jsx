  import { motion } from "framer-motion";
import ModalLoader from "../ModalLoader/ModalLoader";
// import { Exit } from "../../Assets/SVGS";

  import './Modal.css'
  const Modal = ({ isOpen, onClose, children , modalTitle , CancelBtn , AcceptBtn  ,showModalsBtns , handleAdd , handleCancel , modalLoader}) => {
    if (!isOpen) return null; // Hide the modal when it's closed

    return (
      <div className='modal-container' onClick={()=>handleCancel()}>
        <motion.div
          initial={{opacity: 0, scale: 0.8}}
          animate={{opacity: 1, scale: 1}}
          exit={{opacity: 0, scale: 0.8}}
          transition={{duration: 0.1, ease: "easeOut"}}
          className='modal'
          onClick={(e)=>e.stopPropagation()}
        >
          {/* <button className='btnCloseModal' onClick={onClose}>
            <Exit width='20' />
          </button> */}

          {children}
          {
          modalLoader&&
          <ModalLoader/>
        }

          {showModalsBtns ? (
              <div className='btns'>
                <button className="addBtn" onClick={handleAdd}>{AcceptBtn}</button>
                <button className="cancelBtn" onClick={handleCancel}>{CancelBtn}</button>
              </div>
          ) : null}
        </motion.div>
      </div>
    );
  };

  export default Modal;
