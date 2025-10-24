import axios from 'axios'
import { toast } from 'react-toastify'
import base_url from "../config/base_url"
import handleApiError from './handleApiError'
const Logout = async({openModal  , nav  , setLoader})=>{
  console.log("test first one")
  setLoader(true)
  try{
     const res = await axios.post(`${base_url}/auth/logout`)
      console.log(res)
      if(localStorage.getItem("token")){
        localStorage.removeItem("token")
        localStorage.removeItem("userData")
        toast.success("logout successfully")
        nav('/login' , {state:{logout:true , msg:"logout successfully"}})
      }else{
        toast.warn("you are logout already")
      }
    
  }
  catch(error){
    handleApiError()
  }
  finally{
    openModal(false)
    setLoader(false)
  }
}
export default Logout