import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import isTokenSlice from '../../../Zustand/isTokenSlice'
import Footer from '../Footer/Footer'
import './Login.css';
import Url from '../../../Assets/Url'
import axios from 'axios'
import Loader from '../../../Component/Loader/Loader'
function Login(){
  const [loader , setLoader] = useState(false)
  const nav = useNavigate()
  const {createAccountSlice} = isTokenSlice()
  const [data , setData] = useState({
    email : "",
    password :""
  })
  const createAccount = async()=>{
    if(!data.email  || !data.password){
      toast.warn("enter all fields first")
      return
    }
    try{
      setLoader(true)
      const res = await axios.post(`${Url}/auth/login` , data)
        if(res.data.accessToken){
          createAccountSlice(res.data.accessToken)
          nav('/', {state:{success:true , msg:res.data.message}})
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
              <button>
                <Loader/>
              </button>
              :
              (
                <>
                  <button onClick={()=>createAccount()}>login</button>
                  <button onClick={()=>nav('/dashboard')}>login as admin</button>
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