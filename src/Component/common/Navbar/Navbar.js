import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ArrowRight, Bars, Exit} from "../../../Assets/SVGS";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import isTokenSlice from "../../../zustand/TokenSlice";
import userImage from "../../../Assets/Images/doctor.jpeg";
import UserMenu from "../UserMenu/UserMenu";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
function Navbar() {
  const nav = useNavigate();
  const navBarRef = useRef();
  const [isFixed, setIsFixed] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const {isToken} = isTokenSlice();

  // const [isToken , setisToken] = useState(localStorage.getItem("newAcc")||false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {threshold: 0.1}
    );
    if (navBarRef.current) {
      observer.observe(navBarRef.current);
    }
    // return () => {
    //   if (navBarRef.current) {
    //     observer.unobserve(navBarRef.current);
    //   }
    // };
  });
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <>
      {isFixed && (
        <div className='navbar-container container animated'>
          <div className='navbar-content content'>
            <Logo />
            <div className='links'>
              <a href='/'>Home</a>
              {/* <a href="/">doctors</a> */}
              <a href='/book-appointment'>book appointment</a>
              {/* <a href="/">pages</a> */}
              <a href='/medical_history'>medical history</a>
              <a href='/contact-us'>contact us</a>
            </div>
            <div style={{display: "flex", gap: "20px"}}>
              <div className='btns'>
                {/* <button onClick={() => nav("/booking")}>book appointment</button> */}
                <button onClick={() => nav(isToken ? "/dashboard" : "/login")}>
                  {isToken ? "dashboard" : "login"}
                </button>
              </div>
              <img
                className='userImage'
                onClick={() => setIsUserMenuOpen((prev) => !prev)}
                src={userImage}
                alt=''
              />
              <UserMenu isOpen={isUserMenuOpen} />
            </div>
            <div
              className='icon'
              onClick={() => {
                setShowMobileMenu((prev) => !prev);
                console.log("ge");
              }}
            >
              <Bars width='40px' />
            </div>
          </div>
        </div>
      )}
      <div className='navbar-container container' ref={navBarRef}>
        <div className='navbar-content content'>
          <Logo />
          <div className='links'>
            <a href='/'>Home</a>
            {/* <a href="/">doctors</a> */}
            <a href='/book-appointment'>book appointment</a>
            {/* <a href="/">pages</a> */}
            <a href='/medical_history'>medical history</a>
            <a href='/contact-us'>contact us</a>
          </div>
          <div style={{display: "flex", gap: "20px"}}>
            <div className='btns'>
              {/* <button onClick={() => nav("/booking")}>book appointment</button> */}
              <button onClick={() => nav(isToken ? "/dashboard" : "/login")}>
                {isToken ? "dashboard" : "login"}
              </button>
            </div>
            <img
              className='userImage'
              onClick={() => setIsUserMenuOpen((prev) => !prev)}
              src={userImage}
              alt=''
            />
            <UserMenu
              isOpen={isUserMenuOpen}
              func={() => setIsUserMenuOpen((prev) => !prev)}
            />
          </div>
          <div
            className='icon'
            onClick={() => {
              setShowMobileMenu((prev) => !prev);
              console.log("ge");
            }}
          >
            <Bars width='40px' />
          </div>
          {/* mobile nav menu */}
          <MobileNavMenu
            isNavMobileMenuOpen={showMobileMenu}
            navMobileMenuFunc={() => setShowMobileMenu((prev) => !prev)}
            // isUserMenuOpen={isUserMenuOpen}
            // userMenuFunc={() => setIsUserMenuOpen((prev) => !prev)}
          />
        </div>
      </div>
    </>
  );
}
export default Navbar;
