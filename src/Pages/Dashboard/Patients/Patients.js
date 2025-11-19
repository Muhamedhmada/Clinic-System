import './Patients.css'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashHeader from '../../../Component/sections/DashHeader/DashHeader'
import Table from '../../../Component/custom/Table/Table';
import Modal from '../../../Component/custom/Modal/Modal.jsx'
import TwoInputs from '../../../Component/common/TwoInputs/TwoInputs';
import {toast , ToastContainer} from 'react-toastify'
import getData from '../../../utils/getData';
function Patients(){

  const nav = useNavigate()
  const [addModal , setAddModal] = useState(false)
  const [ patients , setPaitents] = useState([])
  const [ loader , setLoader] = useState(false)

  const [searchValue , setSearchValue] = useState("")

  const getSearchValue = (e)=>{
    setSearchValue(e.target.value)
  }

  const getUsers = async()=>{
    setLoader(true)
    try{
      const res = await getData("user")
      setPaitents(res?.data?.data)
    }
    finally{
      setLoader(false)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])
  const AddPaitent = ()=>{
    setAddModal(false)
    toast.success("patient add succesfully")
  }

  console.log(patients)
  return (
    <div className='patients-container'>
      <div className='patients-content'>
        <ToastContainer/>
        <DashHeader header='patients' btnFn={()=>setAddModal(true)}  getSearchValue = {getSearchValue}/>
        <Table
          searchValue={searchValue}
          loader={loader}
          headers={[
            "name",
            "email",
            "age",
            "mobile",
            "gender",
            "visits",
            "last visites",
            "actions",
          ]}
          keys={["first_name", "email" , "age", "phone", "gender", "visitsCount"]}
          data={patients}
          renderAction={(item) => (
            <>
            <td>
                {new Date(item.updated_at).toLocaleDateString()}
            </td>
            <td>
              <button
                className='detailsBtn'
                onClick={() => nav(`/patients/${item.first_name}`, {state: item})}
                >
                more details
              </button>
            </td>
                </>
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