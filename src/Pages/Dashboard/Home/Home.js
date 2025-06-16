import Charts from '../../../Component/Charts/Charts'
import DashboardHomeCard from '../../../Component/DashboardHomeCard/DashboardHomeCard'
import './Home.css'
function Home(){
  return(
    <div className="dashboardHome-container ">
      <div className="cards">
        <DashboardHomeCard header="patient number" number="1509" percent="25%"/>
        <DashboardHomeCard header="Appointments today" number="9" percent="25%"/>
        <DashboardHomeCard header="Records" number="85" percent="25%"/>
        <DashboardHomeCard header="total income" number="579000" percent="25%"/>
      </div>
      <div className="charts">
        <Charts/>
      </div>
    </div>
  )
}
export default Home