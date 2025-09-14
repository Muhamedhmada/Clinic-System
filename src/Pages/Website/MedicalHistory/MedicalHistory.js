import LandPage from '../../../Component/common/LandPage/LandPage'
import LastVisits from '../../../Component/sections/LastVisits/LastVisits'
import Navbar from '../../../Component/common/Navbar/Navbar'
import Topbar from '../../../Component/common/Topbar/Topbar'
import Footer from '../../../Component/common/Footer/Footer';
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