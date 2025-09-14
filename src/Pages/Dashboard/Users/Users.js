import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Call, Edit, Mail } from '../../../Assets/SVGS';
import DashHeader from '../../../Component/sections/DashHeader/DashHeader';
import TwoInputs from '../../../Component/common/TwoInputs/TwoInputs';
import Modal from '../../../Component/custom/Modal/Modal.jsx'
import Table from '../../../Component/custom/Table/Table';
import './Users.css'
function Users(){
  const nav = useNavigate()
  const [modals , setModals] = useState({
    add:false,
    edit:false
  })
  const [rowData , setRowData] = useState()
  const users = [
    {
      id: 1,
      name: "Dr. Ahmed Mostafa",
      email: "ahmed.mostafa@clinic.com",
      phone: "01012345678",
      role: "Doctor",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      name: "Mona Elsayed",
      email: "mona.elsayed@clinic.com",
      phone: "01098765432",
      role: "Secretary",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      name: "Naglaa Adel",
      email: "naglaa.adel@clinic.com",
      phone: "01234567890",
      role: "Nurse",
      status: "Inactive",
      image: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      name: "Karim Fouad",
      email: "kareem.fouad@clinic.com",
      phone: "01122334455",
      role: "Supervisor",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      name: "Dr. Youssef Ibrahim",
      email: "youssef.ibrahim@clinic.com",
      phone: "01055667788",
      role: "Doctor",
      status: "Active",
      image: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      name: "Heba Khaled",
      email: "heba.khaled@clinic.com",
      phone: "01223344556",
      role: "Secretary",
      status: "Inactive",
      image: "https://i.pravatar.cc/150?img=6",
    },
  ];
  
  const addPaitent = ()=>{
    setModals((prev)=>({...prev,add:false}))
    toast.success("patient add succesfully")
  }

  const editUsers = ()=>{
    setModals((prev)=>({...prev,edit:false}))
  }
  return (
    <div className='users-container patients-container'>
      <div className='users-content patients-content'>
        <ToastContainer />
        <DashHeader
          header='patients'
          btnFn={() => setModals((prev) => ({...prev, add: true}))}
        />
        {/* show users as cards */}
        <div className='cards'>
          {users?.map((item) => (
            <div className='userCard'>
              <div className='header'>
                <div className='image'>
                  <img src={item.image} alt='' />
                </div>
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.role}</p>
                </div>
              </div>
              <div className='edit'>
                <Edit width='20px' color='#eee' />
              </div>
              <div className='icons'>
                <a href={`tele:${item.phone}`}>
                  {item.phone} <Call width='20px' />
                </a>
                <a href={`mailto:${item.email}`}>
                  {item.email}
                  <Mail width='20px' />
                </a>
                {/* <a href={`tele:${item.phone}`}><Call width="20px"/></a>
                  <a href={`mailto:${item.email}`}><Mail width="20px"/></a> */}
              </div>
              <button className='detailsBtn'>{item.status}</button>
            </div>
          ))}
        </div>

        {/* show users as table */}
        <Table
          headers={["name", "email", "phone", "role", "state", "actions"]}
          keys={["name", "email", "phone", "role", "status"]}
          data={users}
          renderAction={(item) => (
            <td>
              <button
                className='editBtn'
                onClick={() => {
                  setModals((prev) => ({...prev, edit: true}));
                  setRowData(item);
                  console.log(item)
                }}
              >
                eidt
              </button>
            </td>
          )}
        />
        <Modal
          isOpen={modals.add}
          showModalsBtns={true}
          AcceptBtn={"add"}
          handleAdd={addPaitent}
          CancelBtn={"Cancel"}
          handleCancel={() => setModals((prev) => ({...prev, add: false}))}
        >
          <h3>add new user</h3>
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
        <Modal
          isOpen={modals.edit}
          showModalsBtns={true}
          AcceptBtn={"Edit"}
          handleAdd={editUsers}
          CancelBtn={"Cancel"}
          handleCancel={() => setModals((prev) => ({...prev, edit: false}))}
        >
          <h3>edit</h3>
          <div className='inputs'>
            <TwoInputs
              typeOne={"text"}
              typeTwo={"number"}
              placeOne={"enter name"}
              placeTwo={"enter email"}
              valueOne={rowData?.name}
              valueTwo={rowData?.email}
              fnOne={(e)=>setRowData((prev)=>({...prev,name:e.target.value}))}
              fnTwo={(e)=>setRowData((prev)=>({...prev,email:e.target.value}))}
            />
            <TwoInputs
              typeOne={"number"}
              typeTwo={"number"}
              placeOne={"enter mobile number"}
              placeTwo={"enter age"}
              valueOne={rowData?.name}
              valueTwo={rowData?.email}
              fnOne={(e)=>setRowData((prev)=>({...prev,name:e.target.value}))}
              fnTwo={(e)=>setRowData((prev)=>({...prev,email:e.target.value}))}

            />
          </div>
        </Modal>
      </div>
    </div>
  );
}
export default Users