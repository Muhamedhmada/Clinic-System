import './Aside.css'
import Logo from '../../Logo/Logo'
import { AngleLeft, AngleRight, Calender, Home, Payment, Pending, Settings, Users } from '../../../Assets/SVGS'
function Aside({isClose , handleClose}){
  return (
    <>
      <div className={isClose?'aside-content close content' : "aside-content open content"}>
        <Logo />
        <ul>
          <li>
            <Home width='20px' />
            <a href='/dashboard'>dashboard</a>
          </li>
          <li>
            <Users width='20px' />
            <a href='/patients'>Patients</a>
          </li>
          <li>
            <Calender width='20px' />
            <a href='/confirmed-appointments'>appointments</a>
          </li>
          <li>
            <Pending width='20px' />
            <a href='/pending-appointments'>Pending Appointments</a>
          </li>
          <li>
            <Payment width='20px' />
            <a href='/payment-review'>Payment Review</a>
          </li>
          <li>
            <Home width='20px' />
            <a href='/records'>records</a>
          </li>
          <li>
            <Settings width='20px' />
            <a href='/settings'>settings</a>
          </li>
          <li>
            <Users width='20px' />
            <a href='/users'>users</a>
          </li>
        </ul>
      </div>
        {/* <div className={isClose?'open-close-icon close':'open-close-icon open'} onClick={handleClose}>
          {isClose ? (
            <AngleLeft width='30px' />
          ) : (
            <AngleRight width='30px' />
          )}
        </div> */}
    </>
  );
}
export default Aside