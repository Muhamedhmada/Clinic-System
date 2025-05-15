import './App.css';
import './Assets/Variable.css'
import {Routes ,BrowserRouter as Router , Route} from 'react-router-dom'
import Home from './Pages/Website/Home/Home';
import ContactUS from './Pages/Website/ContactUs/ContactUs';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            {/* <Route path="/contact-us" element={<ContactUS/>} /> */}
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
