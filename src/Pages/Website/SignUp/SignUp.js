import { Link, useNavigate } from 'react-router-dom'
import LandPage from '../../../Component/common/LandPage/LandPage'
import Navbar from '../../../Component/common/Navbar/Navbar'
import Topbar from '../../../Component/common/Topbar/Topbar'
import Footer from '../../../Component/common/Footer/Footer';
import {jwtDecode} from 'jwt-decode';
import {GoogleLogin, GoogleOAuthProvider} from '@react-oauth/google'
import { toast, ToastContainer } from 'react-toastify'
import TwoInputs from '../../../Component/common/TwoInputs/TwoInputs'
import axios from 'axios'
import Url from '../../../config/base_url'
import BtnLoader from '../../../Component/common/BtnLoader/BtnLoader'
import { useState } from 'react'
import isTokenSlice from '../../../zustand/TokenSlice'
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
    first_name:"",
    last_name:"",
    phone:"",
    email : "",
    password :"",
    confirmPassword:"",
    gender:""
  })
  const createAccount = async()=>{
    console.log(data.gender)
    // return
    if (
      !data.first_name ||
      !data.last_name ||
      !data.phone ||
      !data.email ||
      !data.password ||
      !data.confirmPassword ||
      !data.gender
    ) {
      toast.warn("enter all fields first");
      return;
    }
    try{
      setLoader(true)
      const res = await axios.post(`${Url}/auth/signup` , data)
      console.log(res.data.data.accessToken)
        if(res.data.data.accessToken){
          createAccountSlice(res.data.data.accessToken)
          nav('/' , {state:{success:true , msg:res.data.message}})
        }
    }
    catch (error){
      console.log(error.response.data.message)
      error.response.data.message.map((item)=>(
        toast.error(item)
      ))
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
                valueOne={data.first_name}
                fnOne={(e)=>setData((prev)=>({...prev,first_name:e.target.value}))}
                typeTwo={"text"}
                placeTwo={"last name"}
                valueTwo={data.last_name}
                fnTwo={(e)=>setData((prev)=>({...prev,last_name:e.target.value}))}
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
              <select onChange={(e)=>setData((prev)=>({...prev,gender:e.target.value}))}>
                <option value="" selected disabled>choose gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>
            <div className="btns">
              {
              loader?
                <BtnLoader/>
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