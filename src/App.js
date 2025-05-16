import './App.css';
import './Assets/Variable.css'
import {Routes ,BrowserRouter as Router , Route} from 'react-router-dom'
import Home from './Pages/Website/Home/Home';
import ContactUS from './Pages/Website/ContactUs/ContactUs';
import Login from './Pages/Website/Login/Login';
import SignUp from './Pages/Website/SignUp/SignUp';
import Booking from './Pages/Website/Booking/Booking';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact-us" element={<ContactUS/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/sign-up" element={<SignUp/>} />
            <Route path="/book-appointment" element={<Booking/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
