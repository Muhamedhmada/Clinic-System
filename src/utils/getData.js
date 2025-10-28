import axios from 'axios'
import base_url from "../config/base_url"
import handleApiError from "./handleApiError"
const getData = async(endPoint , data , setLoader)=>{

  console.log("get function worked")
  const token = localStorage.getItem("token")
  
  if(setLoader) setLoader(true)
  try{
    const res = await axios.get(`${base_url}/${endPoint}`, {
      headers:{
        Authorization: `Bearer ${token} `,
      }
    })
    return res
  }
  catch(error){
    console.log(error)
    handleApiError(error)
  }
  finally{
    if(setLoader) setLoader(false)
  }
}
export default getData