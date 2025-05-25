import './App.css';
import './Assets/Variable.css';
import './Assets/darkMode.css'
import {Routes  , Route, useLocation} from 'react-router-dom'
import Home from './Pages/Website/Home/Home';
import ContactUS from './Pages/Website/ContactUs/ContactUs';
import Login from './Pages/Website/Login/Login';
import SignUp from './Pages/Website/SignUp/SignUp';
import Booking from './Pages/Website/Booking/Booking';
import BookAppointment from './Pages/Website/BookAppointment/BookAppointment';
import Services from './Pages/Website/BookAppointment/BookAppointment';
import ErrorPage from './Pages/Website/Error/Error';
import ToTop from './Component/ToTop/ToTop';
import { useEffect } from 'react';
import MedicalHistory from './Pages/Website/MedicalHistory/MedicalHistory';
import FastBooking from './Pages/Website/FastBooking/FastBooking';
import DarkMode from './Component/DarkMode/DarkMode';
import Feedback from './Pages/Website/Feedback/Feedback';
function App() {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  } , [location.pathname])
  return (
    <div className='App'>
      <header className='App-header'>
        <ToTop />
        <DarkMode/>
        <Routes>
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
        </Routes>
      </header>
    </div>
  );
}

export default App;
