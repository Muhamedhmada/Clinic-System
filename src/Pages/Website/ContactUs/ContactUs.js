import ContactCard from "../../../Component/sections/ContactCard/ContactCard";
import ContactForm from "../../../Component/sections/ContactForm/ContactForm";
import LandPage from "../../../Component/common/LandPage/LandPage"
import Navbar from "../../../Component/common/Navbar/Navbar";
import Topbar from "../../../Component/common/Topbar/Topbar";
import Footer from '../../../Component/common/Footer/Footer';

function ContactUS(){
  return (
    <>
      <div className='contact-container'>
        <Topbar/>
        <Navbar/>
        <LandPage header='Contact Us' link='contact us' href='/contact-us' />
        <ContactForm/>
        <ContactCard/>
        <Footer/>
      </div>
    </>
  );
}
export default ContactUS