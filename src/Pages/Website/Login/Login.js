import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import isLoginSlice from '../../../Zustand/IsLoginSlice'
import Footer from '../Footer/Footer'
import './Login.css'
function Login(){
  const {createAccountSlice} = isLoginSlice()
  const [data , setData] = useState({
    email : "",
    password :""
  })
  const createAccount = ()=>{
    if(!data.email  || !data.password){
      toast.warn("enter all fields first")
    }
    createAccountSlice(data)
    toast.success("account created successfully")
  }
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
            <button onClick={()=>createAccount()}>login</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Login