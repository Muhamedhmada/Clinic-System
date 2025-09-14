import {create} from 'zustand'

const UserDataSlice = create(()=>{
  
  const userData = localStorage.getItem("userData") || {};
  return{
    userData,

    createUserDataSlice:(userData)=>{
      localStorage.setItem("userData",JSON.stringify(userData))
      // Set({userData:userData})
    }
  }
})
export default UserDataSlice