import {useEffect, useRef, useState} from "react";
import "./Navbar.css";
import NavComp from "./NavComp";
function Navbar() {
  const navBarRef = useRef();
  const [isFixed, setIsFixed] = useState(false);

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
  });

  return (
    <>
      {isFixed && (
        <div className='navbar-container container animated'>
          <NavComp/>
        </div>
      )}
      <div className='navbar-container container' ref={navBarRef}>
        <NavComp/>
      </div>
    </>
  );
}
export default Navbar;
