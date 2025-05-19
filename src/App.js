import './App.css';
import './Assets/Variable.css'
import {Routes  , Route, useLocation} from 'react-router-dom'
import Home from './Pages/Website/Home/Home';
import ContactUS from './Pages/Website/ContactUs/ContactUs';
import Login from './Pages/Website/Login/Login';
import SignUp from './Pages/Website/SignUp/SignUp';
import Booking from './Pages/Website/Booking/Booking';
import ErrorPage from './Pages/Website/Error/Error';
import ToTop from './Component/ToTop/ToTop';
import { useEffect } from 'react';
import MedicalHistory from './Pages/Website/MedicalHistory/MedicalHistory';
function App() {
  const location = useLocation()
  useEffect(()=>{
    window.scrollTo({top:0,behavior:"smooth"})
  } , [location.pathname])
  return (
    <div className='App'>
      <header className='App-header'>
        <ToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contact-us' element={<ContactUS />} />
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/book-appointment' element={<Booking />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/medical_history' element={<MedicalHistory />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
