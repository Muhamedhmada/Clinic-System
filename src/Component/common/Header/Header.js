import { Waves } from "../../../Assets/SVGS"
import Icon from "../Icon/Icon"

function Header(props){
  return(
    <div className="header content" style={{margin:"50px auto" , textAlign:"center"}}>
          <h2>{props.header}</h2>
          <div className="icon" style={{color:"#1a76d1"}}>
            <Icon icon={<Waves  width="72px" colorr="#1a76d1"/>}/>
          </div>
          <p>{props.desc}</p>
        </div>
  )
}
export default Header