import { Moon, Sun } from "../../../Assets/SVGS";
import darkModeSlice from "../../../zustand/DarkModeSlice";
import './DarkMode.css'

function DarkMode(){
  const {theme , changeMode} = darkModeSlice()
  return (
    <div className='darkMode-container'>
      <div className='moon-sun-icon' onClick={changeMode}>
        {theme === "dark" ? (
          <div className='sun'>
            <Sun width='25px' />
          </div>
        ) : (
          <div className='moon'>
            <Moon width='25px' />
          </div>
        )}
        <p> 
          {theme==="dark"?"light":"dark"}
        </p>
      </div>
    </div>
  );
}
export default DarkMode