import { Check } from "../../../../Assets/SVGS"

function PlansCard({icon , header , price , list}){
  return(
    <div className="card">
      <div className="cardHeader">
        <div className="icon">
          {icon}
        </div>
        <h3>{header}</h3>
        <p><span>${price}</span> / Per Visit</p>
      </div>
      <ul>
        {
          list?.map((item)=>{
            return(
              <li>
                <p>{item}</p>
                <div className="icon">
                  <Check width="24px"/>
                </div>
              </li>
            )
          })
        }
      </ul>
      <button>book now</button>
    </div>
  )
}
export default PlansCard