import { useLocation, useParams } from 'react-router-dom'
import DashHeader from '../../../Component/DashHeader/DashHeader'
import Table from '../../../CustomComponent/Table/Table'
import './PatientDetails.css'
import img from '../../../Assets/Images/rosheta1.jpg'
import img1 from '../../../Assets/Images/rosheta2.jpg'
import { useState } from 'react'
import Modal from '../../../CustomComponent/Modal/Modal'
import { Exit } from '../../../Assets/SVGS'
import Icon from '../../../Component/Icon/Icon'
function PatientDetails(route){
  const {patientName} = useParams()
  const [selectedImage , setSelectedImage] = useState(null)
  const [showModal , setShowModal] = useState(false)

  const location = useLocation()
  const patientDetails = location.state

  const medicalVisits = [
    {
      id: 1,
      date: "2025-05-20",
      diagnosis: "Skin Allergy",
      notes: "Prescribed antihistamine",
      attachments: [
        img,
        img1
      ]
    },
    {
      id: 2,
      date: "2024-10-05",
      diagnosis: "Headache",
      notes: "None",
      attachments: [
        img1
      ]
    }
  ];

  const handleSelectedImage = (img)=>{
    setSelectedImage(img)
    setShowModal(true)
  }
  
  return (
    <div className='patientDetails-container'>
      <div className='patientDetails-content'>
        <DashHeader header={`patient details`}></DashHeader>
        <div className='details'>
          <h3>{patientName}</h3>
          <div>
            <p>age:{patientDetails.age}</p>
            <p>gender:{patientDetails.gender}</p>
            <p>phone:{patientDetails.phone}</p>
          </div>
        </div>
        <Table
          data={medicalVisits}
          headers={["date", "diagnosis", "notes", "attachments"]}
          keys={["date", "diagnosis", "notes"]}
          renderAction={(item) => (
            <td className='attachments'>
              {item.attachments.map((img) => (
                <img
                  onClick={() => handleSelectedImage(img)}
                  src={img}
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