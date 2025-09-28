import { toast } from "react-toastify"

const handleApiError = (error)=>{
  // if there is a response... that's mean the problem from 
  // data or un authorization or server
  // const status = error.response.status
//
  // console.log(Array.isArray(error.response.data.message))
 if(Array.isArray(error.response.data.messsage)){
    error.response.data.message.map((item)=>(
      // toast.error(item)
      console.log(item)
    ))
  }else{
    console.log(error.response.data.message)
  //  toast.error(error.response.data.message) 
  }
  // }
}
export default handleApiError