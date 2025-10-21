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
function Login(){
  const [loader , setLoader] = useState(false)
  const nav = useNavigate()
  const {createAccountSlice} = TokenSlice()
  const {createUserDataSlice} = UserDataSlice()
  const [data , setData] = useState({
    email : "",
    password :""
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
        }
    }
    catch (error){
      handleApiError(error)
    }
    finally{
      setLoader(false)
    }
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
                <>
                  <button onClick={()=>createAccount()}>login</button>
                  {/* <button onClick={()=>nav('/dashboard')}>login as admin</button> */}
                </>
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