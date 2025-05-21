import { useState } from "react";
import { Moon, Sun } from "../../Assets/SVGS";
import darkModeSlice from "../../Zustand/DarkModeSlice";
import './DarkMode.css'

function DarkMode(){
  const {theme , changeMode} = darkModeSlice()
  console.log(theme)
  return (
    <div className='darkMode-container'>
      <div className='moon-sun-icon' onClick={changeMode}>
        {theme === "light" ? (
          <div className='sun'>
            <Sun width='25px' />
          </div>
        ) : (
          <div className='moon'>
            <Moon width='25px' />
          </div>
        )}
        <p> 
          {theme}
        </p>
      </div>
    </div>
  );
}
export default DarkMode