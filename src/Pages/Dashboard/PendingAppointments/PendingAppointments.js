import { useState } from 'react';
import DashHeader from '../../../Component/DashHeader/DashHeader'
import Table from '../../../CustomComponent/Table/Table';
import './PendingAppointments.css'
import '../../../CustomComponent/Modal/Modal.jsx'
import Modal from '../../../CustomComponent/Modal/Modal.jsx';
import TwoInputs from '../../../Component/TwoInputs/TwoInputs';
import {toast , ToastContainer} from 'react-toastify'
function PendingAppointments(){
  const [addModal , setAddModal] = useState(false)
  const pendingAppointments = [
    { id: 1, name: "Ahmed Youssef", phone: "01012345678", type: "normal", date: "2025-07-23", time: "10:30 AM" },
    { id: 2, name: "Nour Hassan", phone: "01098765432", type: "emergency", date: "2025-07-23", time: "11:00 AM", reason: "Severe chest pain" },
    { id: 3, name: "Mona Tarek", phone: "01111222333", type: "normal", date: "2025-07-23", time: "11:45 AM" },
    { id: 4, name: "Khaled Mahmoud", phone: "01234567890", type: "emergency", date: "2025-07-23", time: "12:15 PM", reason: "High fever and vomiting" },
    { id: 5, name: "Rania Fathi", phone: "01099887766", type: "normal", date: "2025-07-23", time: "01:00 PM" },
    { id: 6, name: "Hassan Ayman", phone: "01155667788", type: "emergency", date: "2025-07-23", time: "02:30 PM", reason: "Accident injury" }
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
        <DashHeader header='Pending Appointments' />
        <Table
          headers={[
            "name",
            "phone",
            "date",
            "time",
            "type",
            "reason",
            // "note",
            "actions",
          ]}
          keys={["name", "phone", "date", "time" , "type" , "reason"]}
          data={pendingAppointments}
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
export default PendingAppointments