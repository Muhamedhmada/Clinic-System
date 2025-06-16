import { useState } from 'react';
import DashHeader from '../../../Component/DashHeader/DashHeader'
import Table from '../../../CustomComponent/Table/Table';
import './UrgentReservations.css'
import '../../../CustomComponent/Modal/Modal.jsx'
import Modal from '../../../CustomComponent/Modal/Modal.jsx';
import TwoInputs from '../../../Component/TwoInputs/TwoInputs';
import {toast , ToastContainer} from 'react-toastify'
function UrgentReservations(){
  const [addModal , setAddModal] = useState(false)
  const urgentReservations = [
    {
      name: "Alice Johnson",
      mobile: "+1122334455",
      date: "2025-05-31",
      reason: "Last-minute meeting",
      notes: "Prefers morning slots"
    },
    {
      name: "Bob Lee",
      mobile: "+5566778899",
      date: "2025-06-02",
      reason: "Unexpected travel",
      notes: "Needs confirmation call"
    }
  ];  

  const acceptAppointment = (item)=>{
    console.log("accept" , item.mobile)
  }
  const regectAppointment = (item)=>{
    console.log("reject" , item.mobile)
  }
  
  const AddPaitent = ()=>{
    setAddModal(false)
    toast.success("patient add succesfully")
  }
  return (
    <div className='urgentReservations-container'>
      <div className='urgentReservations-content'>
        <ToastContainer/>
        <DashHeader header='urgentReservations' />
        <Table
          headers={[
            "name",
            "mobile",
            "date",
            "reason",
            "note",
            "actions",
          ]}
          keys={["name", "mobile", "date", "reason", "notes"]}
          data={urgentReservations}
          renderAction={(item) => (
            <td className='btns'>
              <button
                onClick={() => acceptAppointment(item)}
              >
                accept
              </button>
              <button
                onClick={() => regectAppointment(item)}
              >
                regect
              </button>
            </td>
          )}
        />
        <Modal isOpen={addModal} showModalsBtns={true} AcceptBtn={"add"} handleAdd={AddPaitent} CancelBtn={"Cancel"} handleCancel={()=>setAddModal(false)}>
          <h3>add new patient</h3>
         <div className="inputs">
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
export default UrgentReservations