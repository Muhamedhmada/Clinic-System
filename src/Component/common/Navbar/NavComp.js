import Logo from "../Logo/Logo";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Bars} from "../../../Assets/SVGS";
import isTokenSlice from "../../../zustand/TokenSlice";
import userImage from "../../../Assets/Images/doctor.jpeg";
import UserMenu from "../UserMenu/UserMenu";
import MobileNavMenu from "../MobileNavMenu/MobileNavMenu";
import Notification from "../Notification/Notification";
function NavbarC() {
  const nav = useNavigate();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const {isToken} = isTokenSlice();
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  console.log(userData.role);

  return (
    <div className='navbar-content content'>
      <Logo />
      <div className='links'>
        <a href='/'>Home</a>
        <a href='/book-appointment'>book appointment</a>
        <a href='/medical_history'>medical history</a>
        <a href='/contact-us'>contact us</a>
      </div>
      <div style={{display: "flex", gap: "20px"}}>
        <div className='btns'>
          {isToken ? (
            userData.role === "admin" ? (
              <button onClick={() => nav("/dashboard")}>dashboard</button>
            ) : (
              "no"
            )
          ) : (
            <button onClick={() => nav("/login")}>login</button>
          )}
        </div>
        {isToken && (
          <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
            <Notification />
            <div
              className='icon bars'
              onClick={() => {
                setShowMobileMenu((prev) => !prev);
                console.log("ge");
              }}
            >
              <Bars width='40px' />
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
        )}
      </div>

      {/* mobile nav menu */}
      <MobileNavMenu
        isNavMobileMenuOpen={showMobileMenu}
        navMobileMenuFunc={() => setShowMobileMenu((prev) => !prev)}
        // isUserMenuOpen={isUserMenuOpen}
        // userMenuFunc={() => setIsUserMenuOpen((prev) => !prev)}
      />
    </div>
  );
}
export default NavbarC;
