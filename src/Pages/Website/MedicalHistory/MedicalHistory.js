import LandPage from '../../../Component/LandPage/LandPage'
import LastVisits from '../../../Component/LastVisits/LastVisits'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import './MedicalHistory.css'
function MedicalHistory(){
  return(
    <>
      <div className="medicalHistory-container">
        <Topbar/>
        <Navbar/>
        <LandPage header='medical history' link='medical history' href='/medical_history'/>
        <LastVisits/>
        <Footer/>
      </div>
    </>
  )
}
export default MedicalHistory