import axios from 'axios'
import base_url from "../config/base_url"
import handleApiError from "./handleApiError"
const getData = async(endPoint , data , loader)=>{
  const token = localStorage.getItem("token")
  try{
    const res = await axios.get(`${base_url}/${endPoint}`, {
      headers:{
        Authorization: `Bearer ${token} `,
      }
    })
    return res
  }
  catch(error){
    handleApiError(error)
  }
}
export default getData