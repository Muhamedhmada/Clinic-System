import './DashboardHomeCard.css'
function DashboardHomeCard({header , number , percent}){
  return(
    <div className="dashBoardHomeCard">
      <p>{header}</p>
      <h2>$ {number}</h2>
      <span>saved {percent}%</span>
    </div>
  )
}
export default DashboardHomeCard