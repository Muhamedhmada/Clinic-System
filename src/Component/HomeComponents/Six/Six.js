import { Blood, Eart, Eye, Heart, Teeth, Time } from '../../../Assets/SVGS'
import Header from '../../Header/Header'
import './Six.css'
import SixCard from './SixCard/SixCard'
function Six(){
  return(
    <div className="six-container container">
      <Header header="We Offer Different Services To Improve Your Health" desc="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"/>
      <div className="six-content content">
        <SixCard header="General Treatment" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet." icon={<Time width="40px"/>}/>
        <SixCard header="Teeth Whitening" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet." icon={<Teeth width="40px"/>}/>
        <SixCard header="Heart Surgery" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet." icon={<Heart width="40px"/>}/>
        <SixCard header="Ear Treatment" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet." icon={<Eart width="40px"/>}/>
        <SixCard header="Vision Problems" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet." icon={<Eye width="40px"/>}/>
        <SixCard header="Blood Transfusion" desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus dictum eros ut imperdiet." icon={<Blood width="40px"/>}/> 
      </div>
    </div>
  )
}
export default Six