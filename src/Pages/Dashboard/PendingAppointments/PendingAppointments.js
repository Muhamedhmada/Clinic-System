import {useState, useEffect} from "react";
import DashHeader from "../../../Component/sections/DashHeader/DashHeader";
import Table from "../../../Component/custom/Table/Table";
import "./PendingAppointments.css";
import Modal from "../../../Component/custom/Modal/Modal.jsx";
import TwoInputs from "../../../Component/common/TwoInputs/TwoInputs";
import {toast, ToastContainer} from "react-toastify";
import getData from "../../../utils/getData";
import axios from "axios";
import base_url from "../../../config/base_url";
function PendingAppointments() {
  const token = localStorage.getItem("token");
  const [addModal, setAddModal] = useState(false);
  const [appointment , setAppointment] = useState([])
  const [loader , setLoader] = useState(false)

  const acceptAppointment = (id) => {
    console.log("accept", id);
    console.log(id)
    console.log(token)
    id = 257
    // return
    axios.put(`${base_url}/appointment/accept/${id}`,{
      headers:{
        Authorization: `Bearer ${token} `,
      }
    })
    .then((res)=>console.log(res))
    .catch((error)=>console.log(error))
  };
  const regectAppointment = (item) => {
    console.log("reject", item.mobile);
  };

  const AddPaitent = () => {
    setAddModal(false);
    toast.success("patient add succesfully");
  };

  const getAppointments = async () => {
    setLoader(true)
    const res = await getData(`appointment?status=pending`)
    setAppointment(res.data.data)
    setLoader(false)
  };
  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <div className='urgentReservations-container'>
      <div className='urgentReservations-content'>
        <ToastContainer />
        <DashHeader header={`Pending Appointments (${appointment?.length})`} />
        <Table
          headers={[
            "user name",
            "phone",
            "date",
            "time",
            "status",
            "reason",
            // "note",
            "type",
            "price",
            "discount",
            "total price",
            "gender",
            "actions",
          ]}
          searchValue=""
          keys={["name", "phone", "date", "time","status" , "reason"]}
          data={appointment&& appointment}
          renderAction={(item) => (
            <>
              <td>{item.appointment_type.type}</td>
              <td>{item.appointment_type.price}</td>
              <td>{item.appointment_type.discount}</td>
              <td>{item.appointment_type.total_price}</td>
              <td>{item.patient.gender}</td>
              <td className='btns'>
                <button
                  className='addBtn'
                  onClick={() => acceptAppointment(item.slot.id)}
                >
                  accept
                </button>
                <button
                  className='cancelBtn'
                  onClick={() => regectAppointment(item)}
                >
                  regect
                </button>
              </td>
            </>
          )}
          loader={loader}
        />
        <Modal
          isOpen={addModal}
          showModalsBtns={true}
          AcceptBtn={"add"}
          handleAdd={AddPaitent}
          CancelBtn={"Cancel"}
          handleCancel={() => setAddModal(false)}
        >
          <h3>add new patient</h3>
          <div className='inputs'>
            <TwoInputs
              typeOne={"text"}
              typeTwo={"number"}
              placeOne={"enter name"}
              placeTwo={"enter age"}
            />
            <TwoInputs
              typeOne={"number"}
              typeTwo={"number"}
              placeOne={"enter mobile number"}
              placeTwo={"enter age"}
            />
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default PendingAppointments;
