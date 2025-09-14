import React, { useRef, useState } from 'react';
import { Attach, Notification } from '../../../Assets/SVGS';
import DashHeader from '../../../Component/sections/DashHeader/DashHeader'
import Table from '../../../Component/custom/Table/Table'
import './ConfirmedAppointments.css'
import { Select, Space } from 'antd';

import {toast , ToastContainer } from 'react-toastify'
function ConfirmedAppointments(){
  const confirmedAppointments = [
    {
      id: 7,
      name: "Mohamed Samir",
      phone: "01045678901",
      type: "normal",
      date: "2025-07-23",
      time: "12:00 PM",
      files: ["blood-test.pdf"],
      status: "completed",
      pay: true
    },
    {
      id: 8,
      name: "Salma Adel",
      phone: "01122334455",
      type: "emergency",
      date: "2025-07-23",
      time: "01:30 PM",
      files: [],
      status: "inprogress",
      pay: false
    },
    {
      id: 9,
      name: "Aya Gamal",
      phone: "01233445577",
      type: "normal",
      date: "2025-07-23",
      time: "03:00 PM",
      files: ["xray.jpg", "report.docx"],
      status: "waiting",
      pay: false
    },
    {
      id: 10,
      name: "Tarek Hany",
      phone: "01066778855",
      type: "emergency",
      date: "2025-07-23",
      time: "04:30 PM",
      files: ["scan-result.pdf"],
      status: "canceled",
      pay: false
    },
    {
      id: 11,
      name: "Sara Mostafa",
      phone: "01133445566",
      type: "normal",
      date: "2025-07-23",
      time: "05:00 PM",
      files: [],
      status: "completed",
      pay: true
    }
  ];
  

  const inputRefs = useRef({})
  const [files , setFiles] = useState({})
  // const uploadFiles = ()=>{
  //   console.log("upload")
  // }

  const handleChange = value => {
    console.log(`selected ${value}`);
  };
  const handleNotify = ()=>{
    toast.success("Notification Sent Successfully")
  }

  
  return (
    <>
      <ToastContainer/>
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
              "notify",
              "status",
              "pay",
              "attachments",
            ]}
            keys={["name", "phone", "date", "time", "type"]}
            data={confirmedAppointments}
            renderAction={(item) => {
              if (!inputRefs.current[item.id]) {
                inputRefs.current[item.id] = React.createRef();
              }
              return(
              <>
                <td className='notify' onClick={()=>handleNotify()}><Notification color="red" width="20px"/></td>
                <td>
                  <Space wrap>
                    <Select
                      defaultValue={item.status}
                      style={{ width: 120 }}
                      onChange={handleChange}
                      options={[
                        { value: 'Waiting', label: 'Waiting' },
                        { value: 'In Progress', label: 'In Progress' },
                        { value: 'Completed', label: 'Completed' },
                        { value: 'Canceled', label: 'Canceled' },
                      ]}
                    />
                  </Space>
                </td>
                <td>
                  <button className='detailsBtn'>
                    {item.pay === false? "pay":"paied"}
                  </button>
                </td>
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
                    className='attached-btn addBtn'
                    onClick={() => inputRefs.current[item.id].current.click() }
                  >
                    {files[item.id]?`attached  ${files[item.id].length} file`:<>
                    attach <Attach width='20px' /> 
                    </>
                    }
                  </button>
                </td>
              </>
              )
            }}
          />
        </div>
      </div>
    </>
  );
}
export default ConfirmedAppointments