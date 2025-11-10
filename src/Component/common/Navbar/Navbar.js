import {useEffect, useRef, useState} from "react";
import "./Navbar.css";
import NavComp from "./NavComp";
function Navbar() {
  const navBarRef = useRef();
  const [isFixed, setIsFixed] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      const newState = !entry.isIntersecting;
      if (navBarRef.current !== newState) {
        setIsFixed(newState);
        navBarRef.current = newState;
      }
    },
    { threshold: 0.1 }
  );

  if (navBarRef.current) observer.observe(navBarRef.current);
  return () => observer.disconnect();
}, []);

  return (
    <>
      {isFixed && (
        <div className={isFixed?"navbar-container container animated":"navbar-container container"} ref={navBarRef}>
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
