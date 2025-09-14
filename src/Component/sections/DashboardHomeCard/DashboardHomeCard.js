import { Info } from "../../../Assets/SVGS";
import "./DashboardHomeCard.css";
function DashboardHomeCard({header, number, percent, children}) {
  return (
    <div className='dashBoardHomeCard'>
      <div>
        <p>{header}</p>
        <div className='icon'>
          <Info width='20px' />
        </div>
      </div>
      <div>
        <h2>{number}</h2>
        <div className="chart">
          {children}
        </div>
      </div>
    </div>
  );
}
export default DashboardHomeCard;
