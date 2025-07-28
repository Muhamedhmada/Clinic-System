import { useNavigate } from "react-router-dom"
import { Check } from "../../../../Assets/SVGS"
import Icon from "../../../Icon/Icon"

function PlansCard({icon , header , price , list , link}){
  const nav  = useNavigate()
  return(
    <div className="card">
      <div className="cardHeader">
        <Icon icon={icon}/>
        <h3>{header}</h3>
        <p><span>${price}</span> / Per Visit</p>
      </div>
      <ul>
        {
          list?.map((item)=>{
            return(
              <li>
                <p>{item}</p>
                <Icon icon={<Check width="24px" color="#1a76d1"/>}/>
              </li>
            )
          })
        }
      </ul>
      <button onClick={()=>nav(`/${link}`)}>book now</button>
    </div>
  )
}
export default PlansCard