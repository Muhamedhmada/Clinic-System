import { useState } from "react"
import { AngleLeft, AngleRight } from "../../../Assets/SVGS"
import Aside from "../../../Component/Dashboard/Aside/Aside"
import Navbar from "../../../Component/Dashboard/Navbar/Navbar"

import './Layout.css'
function Layout({children}){
  const [isClose , setIsClose] = useState(false)
  const handleClose = ()=>{
    setIsClose(prev=>!prev)
  }
  return(
    <div className="layout-container">
      <div className={isClose?'aside-container container' : "aside-container container"}>
        <Aside isClose={isClose} handleClose = {handleClose}/>
        <div className={isClose?'open-close-icon close':'open-close-icon open'} onClick={handleClose}>
          {isClose ? (
            <AngleLeft width='30px' />
          ) : (
            <AngleRight width='30px' />
          )}
        </div>
      </div>
      <div>
        <Navbar/>
        {children}
      </div>
    
    </div>
  )
}
export default Layout