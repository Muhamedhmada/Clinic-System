import { useState } from 'react';
import Modal from '../../CustomComponent/Modal/Modal';
import './LastVisits.css'
import img from '../../Assets/Images/rosheta1.jpg'
import img2 from '../../Assets/Images/rosheta2.jpg'
import { Exit } from '../../Assets/SVGS';
import Icon from '../Icon/Icon';
function LastVisits(){
  const patientRecords = [
    {
      id: 1,
      date: "2025-05-18",
      doctor: "Dr. Mohamed Ahmed",
      diagnosis: "Common Cold",
      treatment: "Rest, warm fluids, and Paracetamol",
      attachments: [
        img,
        img2,
        img
      ]
    },
    {
      id: 2,
      date: "2025-04-22",
      doctor: "Dr. Sara Ali",
      diagnosis: "Skin Allergy",
      treatment: "Topical Cortisone cream twice daily",
      attachments: []
    },
    {
      id: 3,
      date: "2025-03-15",
      doctor: "Dr. Ahmed Mahmoud",
      diagnosis: "Back Pain",
      treatment: "Physical therapy sessions for 2 weeks",
      attachments: [
        img2
      ]
    }
  ];
  const [attachments , setAttachments] = useState()
  const [attachmentsModal , setAttachmentsModal] = useState(false)

  const ShowAttachment = (attachment)=>{
    console.log(attachment)
    setAttachments(attachment)
    setAttachmentsModal(true)
  }

  const downloadImage = ()=>{

  }
  
  return(
    <div className="lastVisits-container container">
      <div className="lastVisits-content content">
        <table>
          <thead>
            <tr>
              <th>date</th>
              <th>doctor</th>
              <th>diagnosis</th>
              <th>treatment</th>
              <th>Attachments</th>
            </tr>
          </thead>
          <tbody>
            {
              patientRecords.map((item , index)=>{
                return (
                  <tr>
                    <td>{item.date}</td>
                    <td>{item.doctor}</td>
                    <td>{item.diagnosis}</td>
                    <td>{item.treatment}</td>
                    <td
                      className='attachments'
                      onClick={() => ShowAttachment(item.attachments)}
                    >
                      view
                    </td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <Modal
          isOpen={attachmentsModal}
        >
          {/* <div className="modalHeader"> */}
            <div className="icon" onClick={()=>setAttachmentsModal(false)}>
              <Icon icon={<Exit width="30px"/>}/>
            </div>

          {/* </div> */}
          <div className="images">
            {attachments?.length>0?
              attachments?.map((item)=>{
                return(
                  <div className='image'>
                    <img src={item} alt="attachment"  onClick={()=>downloadImage()}/>
                    <a href={item} download>
                      <button>download</button>
                    </a>
                  </div>

                )
              })
              :<p>no attachments to show</p>
            }
          </div>
          <div className="btns">
          </div>
        </Modal>
      </div>
    </div>
  )
}
export default LastVisits