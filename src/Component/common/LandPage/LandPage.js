import { AngleLeft } from '../../../Assets/SVGS'
import './LandPage.css'
function LandPage(props){
  return(
    <div className="landPage-container container">
      <div className="landPage-content content">
        <h2>{props.header}</h2>
        <div className="links">
          <a href="/">home</a>
          <AngleLeft width="24px" color="white"/>
          <a href={props.href}>{props.link}</a>
        </div>
      </div>
    </div>
  )
}
export default LandPage