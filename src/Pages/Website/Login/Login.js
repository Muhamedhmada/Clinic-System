import './Login.css';
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import LandPage from '../../../Component/common/LandPage/LandPage'
import Navbar from '../../../Component/common/Navbar/Navbar'
import Topbar from '../../../Component/common/Topbar/Topbar'
import Footer from '../../../Component/common/Footer/Footer';
import base_url from '../../../config/base_url'
import axios from 'axios'
import BtnLoader from '../../../Component/common/BtnLoader/BtnLoader'
import TokenSlice from '../../../zustand/TokenSlice.js'
import UserDataSlice from '../../../zustand/UserDataSlice'
import handleApiError from '../../../utils/handleApiError'
import { sendTokenToBackend } from '../../../firebase/sendTokenToBackend';
import { getFCMToken } from '../../../firebase/getFCMToken';
import { Google } from '../../../Assets/SVGS';
function Login(){
  const [loader , setLoader] = useState(false)
  const nav = useNavigate()
  const {createAccountSlice} = TokenSlice()
  const {createUserDataSlice} = UserDataSlice()
  const [data , setData] = useState({
    email : "ahmed.admin1@example.com",
    password :"12345678"
  })
  // const clearInputValue = ()=>{
  //   setData((prev)=>({
  //     ...prev,
  //     email:"",
  //     password:""
  //   }))
  // }
  const createAccount = async()=>{
    if(!data.email  || !data.password){
      toast.warn("enter all fields first")
      return
    }
    try{
      setLoader(true)
      const res = await axios.post(`${base_url}/auth/login` , data)
        if(res.status){
          createAccountSlice(res.data.data.accessToken)
          createUserDataSlice(res.data.data.user)
          nav('/', {state:{success:true , msg:res.data.message}})
          const fcmToken = await getFCMToken();
          await sendTokenToBackend("userId", fcmToken);
        }
    }
    catch (error){
      handleApiError(error)
    }
    finally{
      setLoader(false)
    }
  }

  const handleGoogleLogin = ()=>{
    window.open(
      `${base_url}/auth/google`,
      "_blank",
      "noopener,noreferrer"
    )
  }
  

  const location = useLocation()
  useEffect(() => {
    console.log("effect")
    if(location.state?.logout){
      const timeToShowToast =  setTimeout(()=>{
        toast.success(location.state?.msg)
      },1000)
      return ()=>clearTimeout(timeToShowToast)
    }
  }, [])
  return(
    <>
      <ToastContainer/>
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
                <input onChange={(e)=>setData((prev)=>({...prev , email:e.target.value}))}  value={data.email} type="email" placeholder='your email' />
                <input onChange={(e)=>setData((prev)=>({...prev , password:e.target.value}))}  value={data.password} type="password" autoComplete='' placeholder='password' />
            </div>
            {
              loader?
                <BtnLoader/>
              :
              (
                <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
                  <button onClick={()=>createAccount()}>login</button>
                  <button className='googleBtn' onClick={()=>handleGoogleLogin()}><Google width="60px" heigth="20px"/> </button>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Login