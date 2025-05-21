import { useEffect, useState } from 'react'
import './Booking.css'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import Modal from '../../../CustomComponent/Modal/Modal.jsx'
import { Check, NotAvailable } from '../../../Assets/SVGS'
function Booking(){
  const [minutes , setMinutes] = useState(5)
  const [modal , setModal] = useState({
    confirmation:false,
    data:false,
    success:false
  })
  const [selectedDay , setSelectedDay] = useState()
  const [selectedHour , setSelectedHour] = useState()
  const weeklySchedule = [
    {
      date: "2025-05-11", // Sunday
      slots: [
        { hour: 0, booked: false },
        { hour: 1, booked: true },
        { hour: 2, booked: false },
        { hour: 3, booked: false },
        { hour: 4, booked: false },
        { hour: 5, booked: false },
        { hour: 6, booked: false },
        { hour: 7, booked: true },
        { hour: 8, booked: false },
        { hour: 9, booked: false },
        { hour: 10, booked: true },
        { hour: 11, booked: false },
        { hour: 12, booked: false },
        { hour: 13, booked: false },
        { hour: 14, booked: false },
        { hour: 15, booked: false },
        { hour: 16, booked: false },
        { hour: 17, booked: false },
        { hour: 18, booked: true },
        { hour: 19, booked: false },
        { hour: 20, booked: false },
        { hour: 21, booked: false },
        { hour: 22, booked: false },
        { hour: 23, booked: false }
      ]
    },
    {
      date: "2025-05-12", // Monday
      slots: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        booked: hour === 10 || hour === 14
      }))
    },
    {
      date: "2025-05-13", // Tuesday
      slots: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        booked: hour === 8 || hour === 12 || hour === 17
      }))
    },
    {
      date: "2025-05-14", // Wednesday
      slots: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        booked: hour === 9 || hour === 15
      }))
    },
    {
      date: "2025-05-15", // Thursday
      slots: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        booked: false
      }))
    },
    {
      date: "2025-05-16", // Friday
      slots: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        booked: hour % 2 === 0 // ساعات زوجية محجوزة
      }))
    },
    {
      date: "2025-05-17", // Saturday
      slots: Array.from({ length: 24 }, (_, hour) => ({
        hour,
        booked: false
      }))
    }
  ];

  console.log(weeklySchedule[0].slots)
  const AppointmentConfirm = (day , hour)=>{
    setModal((prev)=>({...prev,confirmation:true}))
    setSelectedDay(day)
    setSelectedHour(hour)
  }

  const handleNextStep = ()=>{
    setModal((prev)=>({...prev,confirmation:false , data:true}))
  }

  const handleConfirm =()=>{
    console.log("ge")
    setModal((prev)=>({...prev,data:false,success:true}))
    setTimeout(() => {
            setModal((prev) => ({ ...prev, success: false }));
    }, 5000);
    
  }
  // useEffect(() => {
  //   if (!modal.data && modal.success) {
  //     const timeout = setTimeout(() => {
  //       setModal((prev) => ({ ...prev, success: false }));
  //     }, 5000);
  
  //     const interval = setInterval(() => {
  //       setMinutes((prev) => {
  //         const updated = prev - 1;
  //         if (prev <= 1) {
  //           clearInterval(interval);
  //           return 5;
  //         }
  //         return updated;
  //       });
  //     }, 1000);
  
  //     return () => {
  //       clearTimeout(timeout);
  //       clearInterval(interval);
  //     };
  //   }
  // }, [modal.data]);
  return (
    <>
      <Topbar />
      <Navbar />
      <LandPage
        header='booking'
        link='booking'
        href='/booking'
      />
      <div className='booking-container container'>
          <div className='booking-content content'>
            <table>
              <tr>
                <th>time</th>
                {weeklySchedule.map((item, index) => {
                  return (
                    <>
                      <th>{item.date}</th>
                    </>
                  );
                })}
              </tr>
              {Array.from({length: 8}, (_, i) => i + 14).map((hour, index) => {
                return (
                  <tr>
                    <td className='hour'>
                      <p>{hour > 12 ? hour - 12 + ":00 Pm" : hour + ":00 Am"}</p>
                    </td>
                    {weeklySchedule.map((day) => {
                      const slot = day.slots.find((s) => s.hour === hour);
                      return (
                        <td
                          onClick={() => {
                            !slot.booked && AppointmentConfirm(day, hour);
                          }}
                          key={day.date + hour}
                          className={slot.booked ? "booked" : "available"}
                        >
                          {slot.booked ? "Booked" : "Available"}
                          {
                            slot.booked&&(
                              <div className="icon">
                                <NotAvailable/>
                              </div>
                            )
                          }
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </table>

              {/* confirmation modal */}
            <Modal
              isOpen={modal.confirmation}
              onClose={() =>setModal((prev)=>({...prev,confirmation:false}))}
              handleCancel={() =>setModal((prev)=>({...prev,confirmation:false}))}
              AcceptBtn=' next step'
              handleAdd={()=>handleNextStep()}
              CancelBtn='cancel'
              showModalsBtns='true'
            >
              <div className='icon'>
                <Check width='70px' />
              </div>
              <h3>confirm your booking</h3>

              <div className='bookingInfo'>
                <p style={{textAlign:"center"}}>are you sure you want to book this time</p>
                <div>
                  <p>
                    <span>Date</span>: {selectedDay?.date}
                  </p>
                  <p>
                    <span>Time</span>:{" "}
                    {selectedHour > 12
                      ? selectedHour - 12 + ":00 Pm"
                      : selectedHour + ":00 Am"}
                  </p>
                  </div>
                  
              </div>
            </Modal>

            {/* user data collection modal */}
            <Modal
              isOpen={modal.data}
              onClose={() =>setModal((prev)=>({...prev,data:false}))}
              handleCancel={() =>setModal((prev)=>({...prev,data:false}))}
              AcceptBtn='confrirm'
              handleAdd={handleConfirm}
              CancelBtn='cancel'
              showModalsBtns='true'
            >
              {/* <div className='icon'>
                <Check width='70px' />
              </div> */}
              <h3>confirm your booking</h3>

              <div className='userData'>
                {/* <div className="twoInputs"> */}
                  <input type="text" placeholder='enter your name' />
                  <input type="number" placeholder='enter your number' />
                {/* </div> */}
              </div>
            </Modal>
            {/* success modal */}

            <Modal
              className="successModal"
              isOpen={modal.success}
            >
              <div className="successModal">
                <div className='icon'>
                  <Check width='70px' />
                </div>
                <h2>success</h2>
                <p>appointment confirmed successfull<br></br>we are waiting for you</p>
              </div>
              <p className='disappearMsg'>this window will disappear in five secondes...</p>
              {/* <p className='disappearMsg'>this window will disappear in {minutes} secondes...</p> */}

            </Modal>
          </div>
      </div>
      <Footer />

    </>
  );
}
export default Booking