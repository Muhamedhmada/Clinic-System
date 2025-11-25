import './ModalLoader.css'
import img from '../../../Assets/Images/doctorLoader.jpeg'
import { motion } from 'framer-motion'
function ModalLoader(){
  return(
    <motion.div
    initial={{opacity: 0, scale: 0.8 , x: "-50%", y: "-50%"}}
    animate={{opacity: 1, scale: 1 , x: "-50%", y: "-50%" }}
    exit={{opacity: 0, scale: 0.8}}
    transition={{duration: 0.1, ease: "easeOut"}}   
    className="modalLoader">
      {/* <img src={img} alt="" /> */}
      {/* <div className="loader"></div> */}

      {/* <p>loading....</p> */}

      <div class="spinner center">
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
    <div class="spinner-blade"></div>
</div>
    </motion.div>
  )
}
export default ModalLoader