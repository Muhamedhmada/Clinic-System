import { Link, useNavigate } from 'react-router-dom'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import {jwtDecode} from 'jwt-decode';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import { toast, ToastContainer } from 'react-toastify'
import TwoInputs from '../../../Component/TwoInputs/TwoInputs'
import axios from 'axios'
import Url from '../../../Assets/Url'
import Loader from '../../../Component/Loader/Loader'
import { useState } from 'react'
import isTokenSlice from '../../../Zustand/isTokenSlice'
function SignUp(){
  const handleSuccess = (credentialResponse)=>{
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded); // فيه name, email, picture
    toast.success("successful login")
  }
  const handleError = ()=>{
    toast.error("failed login")
  }

  const [loader , setLoader] = useState(false)
  const nav = useNavigate()
  const {createAccountSlice} = isTokenSlice()
  const [data , setData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email : "",
    password :"",
    confirmPassword:""
  })
  const createAccount = async()=>{
    if (
      !data.firstName ||
      !data.lastName ||
      !data.phone ||
      !data.email ||
      !data.password ||
      !data.confirmPassword
    ) {
      toast.warn("enter all fields first");
      return;
    }
    try{
      setLoader(true)
      const res = await axios.post(`${Url}/auth/register` , JSON.stringify(data))
        if(res.status == "201"){
          createAccountSlice(res.data.accessToken)
          toast.success(res.data.message)
          setTimeout(()=>{
            nav('/')
          },1000)
        }
    }
    catch (error){
      toast.error(error.response.data.message)
    }
    finally{
      setLoader(false)
    }
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
                valueOne={data.firstName}
                fnOne={(e)=>setData((prev)=>({...prev,firstName:e.target.value}))}
                typeTwo={"text"}
                placeTwo={"last name"}
                valueTwo={data.lastName}
                fnTwo={(e)=>setData((prev)=>({...prev,lastName:e.target.value}))}
              />
              <TwoInputs 
                typeOne={"number"}
                placeOne={"phone"}
                valueOne={data.phone}
                fnOne={(e)=>setData((prev)=>({...prev,phone:e.target.value}))}
                typeTwo={"email"}
                placeTwo={"your email"}
                valueTwo={data.email}
                fnTwo={(e)=>setData((prev)=>({...prev,email:e.target.value}))}
              />
              <TwoInputs 
                typeOne={"password"}
                placeOne={"password"}
                valueOne={data.password}
                fnOne={(e)=>setData((prev)=>({...prev,password:e.target.value}))}
                typeTwo={"password"}
                placeTwo={"confirm password"}
                valueTwo={data.confirmPassword}
                fnTwo={(e)=>setData((prev)=>({...prev,confirmPassword:e.target.value}))}
              />
            </div>
            <div className="btns">
              {
              loader?
              <button>
                <Loader/>
              </button>
              :
            <button onClick={()=>createAccount()}>SignUp</button>
            }
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