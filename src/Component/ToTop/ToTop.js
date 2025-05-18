import { useEffect, useState } from 'react'
import { ArrowLeft } from '../../Assets/SVGS'
import './ToTop.css'
function ToTop(){
  const [scroll , setScroll] = useState(0)

  useEffect(()=>{
    setScroll(window.scrollY)
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  },[])
  const handleToTOP = ()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  }
  return(
    <>
    {
      scroll > 500 ?
    <div className="toTop-container" onClick={()=>handleToTOP()}>
      <div className="toTop-content">
        <ArrowLeft width="30px"/>
      </div>
    </div>
    :null
    }
    </>
  )
}
export default ToTop