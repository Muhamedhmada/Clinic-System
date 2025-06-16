import { Link } from 'react-router-dom'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import {jwtDecode} from 'jwt-decode';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import { toast, ToastContainer } from 'react-toastify'
import TwoInputs from '../../../Component/TwoInputs/TwoInputs'
function SignUp(){
  const handleSuccess = (credentialResponse)=>{
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded); // فيه name, email, picture
    toast.success("successful login")
  }
  const handleError = ()=>{
    toast.error("failed login")
  }
  return(
    <GoogleOAuthProvider clientId='917496785589-3bgc091uf923j4da5vattnoocqir337j.apps.googleusercontent.com'>
      <ToastContainer/>
      <Topbar/>
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
              <TwoInputs 
                typeOne={"text"}
                placeOne={"first name"}
                typeTwo={"text"}
                placeTwo={"last name"}
              />
              <TwoInputs 
                typeOne={"number"}
                placeOne={"phone"}
                typeTwo={"email"}
                placeTwo={"your email"}
              />
              <TwoInputs 
                typeOne={"password"}
                placeOne={"password"}
                typeTwo={"password"}
                placeTwo={"confirm password"}
              />
            </div>
            <div className="btns">
              <button>sign up</button>
              <p>OR</p>
              <GoogleLogin
              onSuccess={handleSuccess}
              onError={handleError}
              >
              </GoogleLogin>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </GoogleOAuthProvider>
  )
}
export default SignUp