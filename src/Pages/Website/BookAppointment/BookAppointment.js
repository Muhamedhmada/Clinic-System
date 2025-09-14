import { Teeth } from '../../../Assets/SVGS';
import PlansCard from '../../../Component/HomeComponents/PlansSection/PlansCard/PlansCard';
import LandPage from '../../../Component/common/LandPage/LandPage'
import Navbar from '../../../Component/common/Navbar/Navbar'
import Topbar from '../../../Component/common/Topbar/Topbar'
import Footer from '../../../Component/common/Footer/Footer';
function Booking(){
  return (
    <div className='services-container'>
      <Topbar />
      <Navbar />
      <LandPage
        header='book appointment'
        link='book appointment'
        href='/book-appointment'
      />
      <div className='plansSection-container container'>
        <div className='plansSection-content content'>
          <PlansCard
            icon={<Teeth width='50px' />}
            header='normal booking'
            price='100'
            list={[
              "Lorem ipsum dolor sit",
              "Cubitur sollicitudin fentum",
              "Nullam interdum enim",
              "Donec ultricies metus",
              "Pellentesque eget nibh",
            ]}
            link="booking"
          />
          <PlansCard
            icon={<Teeth width='50px' />}
            header='fast booking'
            price='150'
            list={[
              "Lorem ipsum dolor sit",
              "Cubitur sollicitudin fentum",
              "Nullam interdum enim",
              "Donec ultricies metus",
              "Pellentesque eget nibh",
            ]}
            link="fast-booking"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Booking