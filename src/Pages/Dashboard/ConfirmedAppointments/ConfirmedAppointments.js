import React, {useEffect, useRef, useState} from "react";
import {Attach, Notification} from "../../../Assets/SVGS";
import DashHeader from "../../../Component/sections/DashHeader/DashHeader";
import Table from "../../../Component/custom/Table/Table";
import "./ConfirmedAppointments.css";
import {Select, Space} from "antd";

import {toast, ToastContainer} from "react-toastify";
import getData from "../../../utils/getData";
function ConfirmedAppointments() {
  const [loader, setLoader] = useState(false);
  const [appointment, setAppointment] = useState([]);
  const getAppointments = async () => {
    setLoader(true);
    const res = await getData(`appointment?status=accepted`);
    setAppointment(res.data.data);
    setLoader(false);
  };

  const inputRefs = useRef({});
  const [files, setFiles] = useState({});
  // const uploadFiles = ()=>{
  //   console.log("upload")
  // }

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const handleNotify = () => {
    toast.success("Notification Sent Successfully");
  };

  useEffect(() => {
    getAppointments();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='appointments-container urgentReservations-container'>
        <div className='appointments-content urgentReservations-content'>
          <DashHeader
            header={`Today'S Appointments (${appointment?.length})`}
          />
          <Table
            loader={loader}
            headers={[
              "name",
              "number",
              "appointment time",
              "type",
              // "reason",
              "notify",
              "status",
              "price",
              "discount",
              "total price",
              "pay",
              "attachments",
            ]}
            keys={["name" , "phone"]}
            data={appointment}
            renderAction={(item) => {
              if (!inputRefs.current[item.id]) {
                inputRefs.current[item.id] = React.createRef();
              }
              return (
                <>
                  <td>{item.slot.date}</td>
                  <td>{item.appointment_type.type}</td>
                  {/* <td>{item.reason}</td> */}
                  <td className='notify' onClick={() => handleNotify()}>
                    <Notification color='red' width='20px' />
                  </td>
                  <td>
                    <Space wrap>
                      <Select
                        defaultValue={item.status}
                        style={{width: 120}}
                        onChange={handleChange}
                        options={[
                          {value: "Waiting", label: "Waiting"},
                          {value: "In Progress", label: "In Progress"},
                          {value: "Completed", label: "Completed"},
                          {value: "Canceled", label: "Canceled"},
                        ]}
                      />
                    </Space>
                  </td>
                  <td>{item.appointment_type.price}</td>
                  <td>{item.appointment_type.discount}</td>
                  <td>{item.appointment_type.total_price}</td>
                  <td>
                    <button className='detailsBtn'>
                      {item.is_paid === false ? "pay" : "paied"}
                    </button>
                  </td>
                  <td className='btns'>
                    <input
                      type='file'
                      onChange={(e) => {
                        setFiles((prev) => ({
                          ...prev,
                          [item.id]: e.target.files,
                        }));
                        console.log(files);
                      }}
                      ref={inputRefs.current[item.id]}
                      style={{display: "none"}}
                      multiple
                    />
                    <button
                      className='attached-btn addBtn'
                      onClick={() => inputRefs.current[item.id].current.click()}
                    >
                      {files[item.id] ? (
                        `attached  ${files[item.id].length} file`
                      ) : (
                        <>
                          attach <Attach width='20px' />
                        </>
                      )}
                    </button>
                  </td>
                </>
              );
            }}
          />
        </div>
      </div>
    </>
  );
}
export default ConfirmedAppointments;
