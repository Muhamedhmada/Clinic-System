import axios from "axios";
import base_url from "../config/base_url";

export const sendTokenToBackend = async (userId, fcmToken) => {
  console.log(fcmToken)
  const token = localStorage.getItem("token")
  console.log("token in send Notification to backend file" , token)
  localStorage.setItem("fcmToken" , fcmToken)
  console.log("FCM Token:", fcmToken, typeof fcmToken);
  console.log("Auth Token:", token, typeof token)
  // return
  try {
    const res = await axios.post(`${base_url}/firebase/register-token`,{token:fcmToken},
    {
      headers: {
        Authorization: `Bearer ${token}`, // حط هنا التوكن اللي من الـ login
      },
    })
    console.log(res.data.data.message)  
    localStorage.setItem("fcmToken" , fcmToken)
  } catch (error) {
    console.error("Error sending token to backend:", error);
  }
};
