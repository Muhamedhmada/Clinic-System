import './App.css';
import './styles/Variable.css';
import './styles/darkMode.css'
import {Routes  , Route, useLocation} from 'react-router-dom'
import Home from './Pages/Website/Home/Home';
import ContactUS from './Pages/Website/ContactUs/ContactUs';
import Login from './Pages/Website/Login/Login';
import SignUp from './Pages/Website/SignUp/SignUp';
import Booking from './Pages/Website/Booking/Booking';
import BookAppointment from './Pages/Website/BookAppointment/BookAppointment';
import Services from './Pages/Website/BookAppointment/BookAppointment';
import ErrorPage from './Pages/Error/Error';
import ToTop from './Component/custom/ToTop/ToTop';
import { useEffect, useState } from 'react';
import MedicalHistory from './Pages/Website/MedicalHistory/MedicalHistory';
import FastBooking from './Pages/Website/FastBooking/FastBooking';
import DarkMode from './Component/custom/DarkMode/DarkMode';
import Feedback from './Pages/Website/Feedback/Feedback';
// dashobard
import Dashboard from './Pages/Dashboard/Home/Home';
import Layout from './Pages/Dashboard/Layout/Layout';
import Patients from './Pages/Dashboard/Patients/Patients';
import PatientDetails from './Pages/Dashboard/PatientDetails/PatientDetails';
import PendingAppointments from './Pages/Dashboard/PendingAppointments/PendingAppointments';
import ConfirmedAppointments from './Pages/Dashboard/ConfirmedAppointments/ConfirmedAppointments';
import Users from './Pages/Dashboard/Users/Users';
import Payment from './Pages/Website/Payment/Payment';
import PaymentReview from './Pages/Dashboard/PaymentReview/PaymentReview';
// firebase
import { onMessageListener } from "./firebase/onMessageListener";
import { toast } from "react-toastify";
import Preloader from './Component/custom/SiteLoader/SiteLoader';
import Whatsapp from './Component/custom/Whatsapp/Whatsapp';
// import { requestForToken, onMessageListener } from "./config/firebase";


function App() {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  } , [location.pathname])

  // firebase
  useEffect(() => {
    // 🟢 أول ما الصفحة تفتح، اطلب الإذن
    Notification.requestPermission().then(permission => {
      if(permission === 'granted'){
        console.log("Notification permission granted.");
      } else {
        console.log("Notification permission denied.");
      }
    });

    // 🟢 اسمع لأي إشعارات جديدة
  //   onMessageListener()
  //     .then((payload) => {
  //       console.log("📩 إشعار جديد:", payload);
  //       toast.info(`${payload.notification.title}: ${payload.notification.body}`);
  //     })
  //     .catch((err) => console.error("FCM Listener Error:", err));
  }, []);

  // loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    console.log(document)
    console.log(document.readyState)

    // Check if the document is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      // Listen for the 'load' event on the window object
      window.addEventListener('load', handleLoad);
    }

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <div className='App'>
      
      <header className='App-header'>
      {
        loading &&
        <Preloader/>
      }
        <ToTop />
        <DarkMode/>
        {/* <Whatsapp/> */}
        <Routes>
          {/* dashboard */}
          <Route path='/dashboard'element={<Layout children={<Dashboard/>}/>}/>
          <Route path='/confirmed-appointments'element={<Layout children={<ConfirmedAppointments/>}/>}/>
          <Route path='/patients'element={<Layout children={<Patients/>}/>}/>
          <Route path='/patients/:patientName'element={<Layout children={<PatientDetails/>}/>}/>
          <Route path='/pending-appointments'element={<Layout children={<PendingAppointments/>}/>}/>
          <Route path='/users'element={<Layout children={<Users/>}/>}/>
          <Route path='/payment-review'element={<Layout children={<PaymentReview/>}/>}/>

          {/* Website  */}
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUS />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/book-appointment' element={<BookAppointment />} />
          <Route path='/booking' element={<Booking />} />
          <Route path='/fast-booking' element={<FastBooking />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/medical_history' element={<MedicalHistory />} />
          <Route path='/services' element={<Services />} />
          <Route path='/feedback' element={<Feedback />} />
          <Route path='/payment' element={<Payment />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
