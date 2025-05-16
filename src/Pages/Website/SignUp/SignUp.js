import { Link } from 'react-router-dom'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Footer from '../Footer/Footer'
import './SignUp.css'
function SignUp(){
  return(
    <>
      <Navbar/>
      <LandPage header='Sign up' link='Sign up' href='/sign-up'/>
      <div className="login-container container">
        <div className="login-content content">
          <div className="leftLogin"></div>
          <div className="rightLogin">
            <div className="header">
              <h2 className='h-after-effect'>sign up</h2>
              <p>Already have an account ? 
              <Link to="/login">
                Login Here
              </Link>  
              </p>
            </div>
            <div className='inputs'>
              <div className="twoInputs">
                <input type="text" placeholder='First name' />
                <input type="text" placeholder='last name' />
              </div>
              <div className="twoInputs">
                <input type="number" placeholder='phone' />
                <input type="email" placeholder='your email' />
              </div>
              <div className="twoInputs">
                <input type="password" placeholder='password' />
                <input type="password" placeholder='confirm password' />
              </div>
            </div>
            <button>sign up</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default SignUp