import ContactCard from "../../../Component/ContactCard/ContactCard";
import ContactForm from "../../../Component/ContactForm/ContactForm";
import LandPage from "../../../Component/LandPage/LandPage"
import Navbar from "../../../Component/Navbar/Navbar";
import Topbar from "../../../Component/Topbar/Topbar";
import Footer from "../Footer/Footer";

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