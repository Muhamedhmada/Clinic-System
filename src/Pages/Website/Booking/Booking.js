import { useState } from 'react'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import './Booking.css'
import Modal from '../../../CustomComponent/Modal/Modal.jsx'
import { Check } from '../../../Assets/SVGS'
function Booking(){
  const [modal , setModal] = useState(false)
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
    setModal(true)
    setSelectedDay(day)
    setSelectedHour(hour)
  }
  return (
    <>
      <Topbar />
      <Navbar />
      <LandPage
        header='book appointment'
        link='book appointment'
        href='/book-appointment'
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
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </table>

          <Modal
            isOpen={modal}
            onClose={() => setModal(false)}
            handleCancel={() => setModal(false)}
            AcceptBtn='confrirm & pay'
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
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Booking