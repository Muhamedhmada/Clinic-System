import React, { useRef, useState } from 'react';
import { Attach } from '../../../Assets/SVGS';
import DashHeader from '../../../Component/DashHeader/DashHeader'
import Table from '../../../CustomComponent/Table/Table'
import './ConfirmedAppointments.css'
function ConfirmedAppointments(){
  const confirmedAppointments = [
    { id: 7, name: "Mohamed Samir", phone: "01045678901", type: "normal", date: "2025-07-23", time: "12:00 PM" },
    { id: 8, name: "Salma Adel", phone: "01122334455", type: "emergency", date: "2025-07-23", time: "01:30 PM" },
    { id: 9, name: "Aya Gamal", phone: "01233445577", type: "normal", date: "2025-07-23", time: "03:00 PM" },
    { id: 10, name: "Tarek Hany", phone: "01066778855", type: "emergency", date: "2025-07-23", time: "04:30 PM" },
    { id: 11, name: "Sara Mostafa", phone: "01133445566", type: "normal", date: "2025-07-23", time: "05:00 PM" }
  ];

  const inputRefs = useRef({})
  const [files , setFiles] = useState({})
  const uploadFiles = ()=>{
    console.log("upload")
  }

  
  return (
    <>
      <div className='appointments-container urgentReservations-container'>
        <div className='appointments-content urgentReservations-content'>
          <DashHeader
            header={`Today'S Appointments (${confirmedAppointments.length})`}
          />
          <Table
            headers={[
              "name",
              "phone",
              "date",
              "time",
              "type",
              "attachments",
              // "reason",
              // "note",
              // "actions",
            ]}
            keys={["name", "phone", "date", "time", "type"]}
            data={confirmedAppointments}
            renderAction={(item) => {
              if (!inputRefs.current[item.id]) {
                inputRefs.current[item.id] = React.createRef();
              }
              return(
              <td className='btns'>
                <input
                  type='file'
                  onChange={(e) => {
                    setFiles((prev)=>({
                      ...prev,
                      [item.id]:e.target.files
                    }))
                    console.log(files)
                    
                  }}
                  ref={inputRefs.current[item.id]}
                  style={{display: "none"}}
                  multiple
                />
                <button
                  className='attached-btn'
                  onClick={() => inputRefs.current[item.id].current.click() }
                >
                  {files[item.id]?`attached  ${files[item.id].length} file`:<>
                  attach <Attach width='20px' /> 
                  </>
                  }
                </button>
              </td>
              )
            }}
          />
        </div>
      </div>
    </>
  );
}
export default ConfirmedAppointments