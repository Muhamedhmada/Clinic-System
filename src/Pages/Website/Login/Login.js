import { Link } from 'react-router-dom'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import './Login.css'
function Login(){
  return(
    <>
      <Topbar/>
      <Navbar/>
      <LandPage header='Login' link='Login' href='/login'/>
      <div className="login-container container">
        <div className="login-content content">
          <div className="leftLogin"></div>
          <div className="rightLogin">
            <div className="header">
              <h2 className='h-after-effect'>login here</h2>
              <p>Didn't you account yet ?
                <Link to="/sign-up">
                  Register Here
                </Link>
                </p>
            </div>
            <div className='inputs'>
              <div className="twoInputs">
                {/* <input type="text" placeholder='First name' /> */}
                <input type="email" placeholder='your email' />
              </div>
              <div className="twoInputs">
                <input type="password" autoComplete='' placeholder='password' />
                {/* <input type="password" placeholder='confirm password' /> */}
              </div>
            </div>
            <button>login</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Login