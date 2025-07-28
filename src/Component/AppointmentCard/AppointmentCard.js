import { Check } from '../../Assets/SVGS';
import Table from '../../CustomComponent/Table/Table';
import './AppointmentCard.css'
import {toast , ToastContainer} from 'react-toastify'
function AppointmentCard(){
  const appointments = [
    {
      patientName: "Ahmed Mohamed",
      day: "Monday",
      time: "3:00 PM",
      date: "2025-07-28",
      type: "urgent",
      reason: "Back pain",
      isConfirmed: true
    },
    {
      patientName: "Sara Ali",
      day: "Tuesday",
      time: "10:30 AM",
      date: "2025-07-29",
      type: "normal",
      reason: "Blood test results",
      isConfirmed: false
    },
    {
      patientName: "Mohamed Said",
      day: "Wednesday",
      time: "1:00 PM",
      date: "2025-07-30",
      type: "urgent",
      reason: "Medication follow-up",
      isConfirmed: true
    },
    {
      patientName: "Nour Hassan",
      day: "Thursday",
      time: "11:00 AM",
      date: "2025-07-31",
      type: "normal",
      reason: "General checkup",
      isConfirmed: false
    }
  ];

  const handleCancelBtn = ()=>{
    toast.success("appointment deleted successfully")
  }
  
  return(
    <div className="appointmentCard">
      <ToastContainer/>
      {
        appointments?.length>0?(
          <>
            <h2>you have ({appointments.length}) appointment</h2>
            <Table
            headers={[
              "patientName",
              "day",
              "time",
              "date",
              "type",
              "reason",
              "cancel",
              "isConfirmed",
            ]}
            keys={["patientName", "day", "time", "date", "type" , "reason"]}
            data={appointments}
            renderAction={(item) => (
              <>
              <td className='btn'>
                <button onClick={()=>handleCancelBtn()}>cancel</button>
              </td>
              <td>
                  {item.isConfirmed?(
                  <Check width="32px" color="#1a76d1"/>
                  ):
                  "not confirmed"}
              </td>
              </>
            )}
          />
          </>

        )
        :<div>you have no appointment </div>
      }
    </div>
  )
}
export default AppointmentCard