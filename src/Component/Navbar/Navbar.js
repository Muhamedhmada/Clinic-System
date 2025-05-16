import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, Bars, Exit } from '../../Assets/SVGS'
import './Navbar.css'
function Navbar(){
  const nav = useNavigate()
  const navBarRef = useRef()
  const [isFixed , setIsFixed] = useState(false)
  useEffect(()=>{
    const observer = new IntersectionObserver(
      ([entry])=>{
        setIsFixed(!entry.isIntersecting)
      },
      {threshold:.1}
    )
    if (navBarRef.current) {
      observer.observe(navBarRef.current);
    }
    // return () => {
    //   if (navBarRef.current) {
    //     observer.unobserve(navBarRef.current);
    //   }
    // };
  })
  const [showMobileMenu , setShowMobileMenu] = useState(false)
  return(
    <>
      {isFixed && <div className="navbar-container container animated">
          <div className="navbar-content content">
            <div className="logo">
              <h2>logo</h2>
            </div>
            <div className="links">
              <a href="/">Home</a>
              <a href="/">doctors</a>
              <a href="/">services</a>
              <a href="/">pages</a>
              <a href="/contact-us">contact us</a>
            </div>
            <div className="btns">
              <button onClick={()=>nav('/book-appointment')}>book appointment</button>
              <button onClick={()=>nav("/login")}>login</button>
            </div>
            <div className="icon" onClick={()=>{setShowMobileMenu((prev)=>!prev);console.log("ge")}}>
              <Bars width="40px"/>
            </div>
          </div>
      </div>}
      <div className="navbar-container container" ref={navBarRef}>
        <div className="navbar-content content">
          <div className="logo">
            <h2>logo</h2>
          </div>
          <div className="links">
            <a href="/">Home</a>
            <a href="/">doctors</a>
            <a href="/">services</a>
            <a href="/">pages</a>
            <a href="/contact-us">contact us</a>
          </div>
          <div className="btns">
            <button onClick={()=>nav('/book-appointment')}>book appointment</button>
            <button onClick={()=>nav("/login")}>login</button>
          </div>
          <div className="icon" onClick={()=>{setShowMobileMenu((prev)=>!prev);console.log("ge")}}>
            <Bars width="40px"/>
          </div>
          <div className={showMobileMenu?"menu show":"menu"}>
            <div className="menu-header">
              <div className="logo">
                <h2>logo</h2>
              </div>
              <div className="icon"  onClick={()=>setShowMobileMenu((prev)=>!prev)}>
                <Exit width="40px" color="white"/>
              </div>
            </div>
            <div className="mobileMenu-links">
              <a href="/">Home  <ArrowRight width="30px" /></a>
              <a href="/">doctors <ArrowRight width="30px" /></a>
              <a href="/">services <ArrowRight width="30px" /></a>
              <a href="/">pages <ArrowRight width="30px"/></a>
              <a href="/contact-us">contact us <ArrowRight width="30px" /></a>
            </div>
             <div className='menu-btns'>
                <button onClick={()=>nav('/book-appointment')}>book appointment</button>
                <button onClick={()=>nav('/login')}>login</button>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Navbar
