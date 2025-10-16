// import { toast } from "react-toastify"

// const handleApiError = (error)=>{
//   // if there is a response... that's mean the problem from 
//   // data or un authorization or server
//   // const status = error.response.status
// //
//   // console.log(Array.isArray(error.response.data.message))
//  if(Array.isArray(error.response.data.messsage)){
//     error.response.data.message.map((item)=>(
//       // toast.error(item)
//       console.log(item)
//     ))
//   }else{
//     console.log(error.response.data.message)
//   //  toast.error(error.response.data.message) 
//   }
//   // }
// }
// export default handleApiError


import { toast } from "react-toastify";

const handleApiError = (error) => {
  // 1. حاول تجيب رسالة الخطأ من الباك
  const message = error?.response?.data?.message;

  // 2. لو الرسالة عبارة عن array (مثلاً validation errors)
  if (Array.isArray(message)) {
    message.forEach((msg) => toast.error(msg));
    return;
  }

  // 3. لو الرسالة نص واحد (string)
  if (typeof message === "string") {
    toast.error(message);
    return;
  }

  // 4. لو مفيش response (مثلاً المشكلة في الإنترنت أو السيرفر وقع)
  if (!error.response) {
    toast.error("لا يوجد اتصال بالسيرفر. تأكد من الإنترنت.");
    return;
  }

  // 5. fallback عام لأي حالة غير متوقعة
  toast.error("حدث خطأ غير متوقع. حاول مرة أخرى.");
};

export default handleApiError;
