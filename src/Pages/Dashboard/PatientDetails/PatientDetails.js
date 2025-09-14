import './PatientDetails.css'
import { useLocation, useParams } from 'react-router-dom'
import DashHeader from '../../../Component/sections/DashHeader/DashHeader'
import Table from '../../../Component/custom/Table/Table'
import { useState , useEffect } from 'react'
import Modal from '../../../Component/custom/Modal/Modal.jsx'
import { Exit } from '../../../Assets/SVGS'
import Icon from '../../../Component/common/Icon/Icon'
import getData from '../../../utils/getData'
function PatientDetails(route){
  const {patientName} = useParams()
  const [selectedImage , setSelectedImage] = useState(null)
  const [showModal , setShowModal] = useState(false)
  const location = useLocation()
  const patientDetails = location.state
  const [loader , setLoader] = useState(false)
  const [medicalVisits , setMedicalVisits] = useState([])

  console.log(patientDetails.id)

  // get data
  const getMedicalVisits = async()=>{
    setLoader(true)
    try{
      const res = await getData(`medical-history/user/${patientDetails.id}`)
      console.log(res)
      setMedicalVisits(res.data.data)
    }
    finally{
      setLoader(false)
    }
  } 
  const handleSelectedImage = (img)=>{
    setSelectedImage(img)
    setShowModal(true)
  }

  useEffect(()=>{
    getMedicalVisits()
  } , [])
  
  return (
    <div className='patientDetails-container'>
      <div className='patientDetails-content'>
        <DashHeader header={`patient details`}></DashHeader>
        <div className='details'>
          <h3>{patientName}</h3>
          <div>
            <p>age: {patientDetails.age}</p>
            <p>gender: {patientDetails.gender}</p>
            <p>phone: {patientDetails.phone}</p>
          </div>
        </div>
        <Table
          loader={loader}
          data={medicalVisits}
          headers={["date", "diagnosis", "notes", "attachments"]}
          keys={["date", "diagnosis", "notes"]}
          renderAction={(item) => (
            <td className='attachments'>
              {item.attachments.map((item) => (
                <img
                  onClick={() => handleSelectedImage(item.url)}
                  src={item.url}
                  alt='img'
                />
              ))}
            </td>
          )}
        />

        <Modal isOpen={showModal}>

          <div className='icon' onClick={() => setShowModal(false)}>
            <Icon icon={<Exit width='30px' />} />
          </div>

          <div className='images'>
            <div className='image'>
              <img src={selectedImage} alt='attachment' />
              <a href={selectedImage} download>
                <button>download</button>
              </a>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default PatientDetails