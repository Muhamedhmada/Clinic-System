import { useEffect, useState } from 'react'
import { Teeth } from '../../../Assets/SVGS'
import Header from '../../common/Header/Header'
import PlansCard from './PlansCard/PlansCard'
import './PlansSection.css'
import getData from '../../../utils/getData'
function PlansSection(){
  const [types , setTypes] = useState([])
  const getMyTypes = async()=>{
    const res = await getData('appointment-type')
    console.log(res?.data?.data)
    setTypes(res?.data?.data)
  }
  useEffect(()=>{
    getMyTypes()
  },[])
  return(
    <div className="plansSection-container container">
      <Header header="We Provide You The Best Treatment In Resonable Price" desc ="Lorem ipsum dolor sit amet consectetur adipiscing elit praesent aliquet. pretiumts"/>
      <div className="plansSection-content content">
        {
          types?.map((item)=>(
            <PlansCard icon={<Teeth width="50px"/>} header={item.type} price={item.price} list={["Lorem ipsum dolor sit" , "Cubitur sollicitudin fentum" , "Nullam interdum enim" , "Donec ultricies metus" , "Pellentesque eget nibh"]} link="book-appointment"/>
            )
          )
        }
      </div>
    </div>
  )
}
export default PlansSection