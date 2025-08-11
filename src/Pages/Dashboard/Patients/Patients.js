import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashHeader from '../../../Component/DashHeader/DashHeader'
import Table from '../../../CustomComponent/Table/Table';
import './Patients.css'
import '../../../CustomComponent/Modal/Modal.jsx'
import Modal from '../../../CustomComponent/Modal/Modal.jsx';
import TwoInputs from '../../../Component/TwoInputs/TwoInputs';
import {toast , ToastContainer} from 'react-toastify'
function Patients(){
  const nav = useNavigate()
  const [addModal , setAddModal] = useState(false)
  const patients = [
    {
      id: 1,
      name: "Ahmed Gamal",
      phone: "01012345678",
      age: 32,
      gender: "Male",
      visitsCount: 3,
      lastVisit: "2025-05-25",
    },
    {
      id: 2,
      name: "Sara Ali",
      phone: "01123456789",
      age: 26,
      gender: "Female",
      visitsCount: 1,
      lastVisit: "2025-05-20",
    },
    {
      id: 3,
      name: "Mohamed Tarek",
      phone: "01234567890",
      age: 40,
      gender: "Male",
      visitsCount: 5,
      lastVisit: "2025-05-18",
    },
    {
      id: 4,
      name: "Laila Hassan",
      phone: "01099887766",
      age: 30,
      gender: "Female",
      visitsCount: 2,
      lastVisit: "2025-05-27",
    },
    {
      id: 5,
      name: "Youssef Adel",
      phone: "01555667788",
      age: 36,
      gender: "Male",
      visitsCount: 4,
      lastVisit: "2025-05-22",
    },
  ];

  
  const AddPaitent = ()=>{
    setAddModal(false)
    toast.success("patient add succesfully")
  }
  return (
    <div className='patients-container'>
      <div className='patients-content'>
        <ToastContainer/>
        <DashHeader header='patients' btnFn={()=>setAddModal(true)} />
        <Table
          headers={[
            "name",
            "age",
            "mobile",
            "gender",
            "visits",
            "last visites",
            "actions",
          ]}
          keys={["name", "age", "phone", "gender", "visitsCount", "lastVisit"]}
          data={patients}
          renderAction={(item) => (
            <td>
              <button
                className='detailsBtn'
                onClick={() => nav(`/patients/${item.name}`, {state: item})}
              >
                more details
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
export default Patients