import { Teeth } from '../../../Assets/SVGS'
import Header from '../../Header/Header'
import PlansCard from './PlansCard/PlansCard'
import './PlansSection.css'
function PlansSection(){
  return(
    <div className="plansSection-container container">
      <Header header="We Provide You The Best Treatment In Resonable Price" desc ="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"/>
      <div className="plansSection-content content">
        <PlansCard icon={<Teeth width="50px"/>} header="Plastic Suggery" price="199" list={["Lorem ipsum dolor sit" , "Cubitur sollicitudin fentum" , "Nullam interdum enim" , "Donec ultricies metus" , "Pellentesque eget nibh"]} link="book-appointment"/>
        <PlansCard icon={<Teeth width="50px"/>} header="Teeth Whitening" price="299" list={["Lorem ipsum dolor sit" , "Cubitur sollicitudin fentum" , "Nullam interdum enim" , "Donec ultricies metus" , "Pellentesque eget nibh"]} link="book-appointment"/>
        <PlansCard icon={<Teeth width="50px"/>} header="Heart Suggery" price="399" list={["Lorem ipsum dolor sit" , "Cubitur sollicitudin fentum" , "Nullam interdum enim" , "Donec ultricies metus" , "Pellentesque eget nibh"]} link="book-appointment"/>
      </div>
    </div>
  )
}
export default PlansSection