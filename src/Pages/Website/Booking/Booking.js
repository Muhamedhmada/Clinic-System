import {useEffect, useState} from "react";
import "./Booking.css";
import LandPage from "../../../Component/common/LandPage/LandPage";
import Navbar from "../../../Component/common/Navbar/Navbar";
import Topbar from "../../../Component/common/Topbar/Topbar";
import Footer from "../../../Component/common/Footer/Footer";
import Modal from "../../../Component/custom/Modal/Modal.jsx";
import {Check, NotAvailable} from "../../../Assets/SVGS";
import Icon from "../../../Component/common/Icon/Icon";
import SuccessModal from "../../../Component/custom/SuccessModal/SuccessModal";
import AppointmentCard from "../../../Component/sections/AppointmentCard/AppointmentCard";
import getData from "../../../utils/getData";
import Loader from "../../../Component/common/Loader/Loader";
import TwoInputs from "../../../Component/common/TwoInputs/TwoInputs";
function Booking() {
  const [modal, setModal] = useState({
    confirmation: false,
    data: false,
    success: false,
  });
  
  const [appointment , setAppointment] = useState({
    day:null,
    hour:null
  })
  const [appointmentData , setAppointmentData] = useState({
    name:"",
    number:""
  })
  const [showBookingTable, setShowBookingTable] = useState(true);
  const [schedule, setSchedule] = useState();

  const selectAppointment = (day, hour) => {
    console.log(day , hour)
    setModal((prev) => ({...prev, confirmation: true}));
    setAppointment((prev)=>({...prev ,day:day , hour:hour}))
  };

  const handleNextStep = () => {
    setModal((prev) => ({...prev, confirmation: false, data: true}));
  };

  const confirmAppointment = () => {
    setModal((prev) => ({...prev, data: false, success: true}));
    setAppointmentData((prev) => ({...prev, name: "", number: true}));
    console.log(appointmentData)
  };
  
  const CancelAppointment = () => {
    setModal((prev) => ({...prev, data: false}))
    setAppointmentData((prev) => ({...prev, name: "", number: true}));
  };


  const getAppointments = async () => {
    const res = await getData("time-slot");
    setSchedule(res.data.data.data);
  };
  useEffect(() => {
    getAppointments();
  }, []);
  return (
    <>
      <Topbar />
      <Navbar />
      <LandPage header='booking' link='booking' href='/booking' />
      <div className='booking-container container'>
        <div className='booking-content content'>
          <div className='tabs'>
            <button
              onClick={() => setShowBookingTable(true)}
              className={showBookingTable ? "active" : null}
            >
              book appointment
            </button>
            <button
              onClick={() => setShowBookingTable(false)}
              className={!showBookingTable ? "active" : null}
            >
              comming appointment
            </button>
          </div>
          {showBookingTable ? (
            schedule ? (
              <table>
                <thead>
                  <tr>
                    <th>time</th>
                    {schedule?.map((item, index) => {
                      return <th key={index}>{item.slot_date}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {schedule?.[0].slots.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className='hour'>
                          <p>{item.time > 12 ? item.time - 12 : item.time}</p>
                        </td>
                        {schedule?.map((day, index) => {
                          const slot = day.slots.find(
                            (s) => s.time === item.time
                          );
                          return (
                            <td
                              key={index}
                              onClick={() => {
                                slot.status === "available" &&
                                  selectAppointment(day.slot_date, item.time);
                              }}
                              className={
                                slot.status === "available"
                                  ? "available"
                                  : "booked"
                              }
                            >
                              {slot.status === "available"
                                ? "Available"
                                : "Booked"}
                              {slot.status !== "available" && (
                                <Icon icon={<NotAvailable />} />
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            ) : (
              <Loader />
            )
          ) : (
            <AppointmentCard />
          )}
          {/* confirmation modal */}
          <Modal
            isOpen={modal.confirmation}
            onClose={() => setModal((prev) => ({...prev, confirmation: false}))}
            handleCancel={() =>
              setModal((prev) => ({...prev, confirmation: false}))
            }
            AcceptBtn=' next step'
            handleAdd={() => handleNextStep()}
            CancelBtn='cancel'
            showModalsBtns='true'
          >
            <div className='icon'>
              <Check width='70px' color='#1a76d1' />
            </div>
            <h3>confirm your booking</h3>

            <div className='bookingInfo'>
              <p style={{textAlign: "center"}}>
                are you sure you want to book this time
              </p>
              <div>
                <p>
                  <span>Date</span>: {appointment.day}
                </p>
                <p>
                  <span>Time</span>:{" "}
                  {appointment.hour > 12
                    ? appointment.hour - 12 
                    : appointment.hour}
                </p>
              </div>
            </div>
          </Modal>

          {/* user data collection modal */}
          <Modal
            isOpen={modal.data}
            onClose={() => setModal((prev) => ({...prev, data: false}))}
            handleCancel={CancelAppointment}
            AcceptBtn='confrirm'
            handleAdd={confirmAppointment}
            CancelBtn='cancel'
            showModalsBtns='true'
          >
            {/* <div className='icon'>
                <Check width='70px' />
              </div> */}
            <h3>confirm your booking</h3>

            <TwoInputs
              typeOne="text"
              valueOne={appointmentData.name}
              fnOne={(e)=>setAppointmentData((prev)=>({...prev , name:e.target.value}))}
              placeOne={"enter your name"}
              typeTwo="number"
              valueTwo={appointmentData.number}
              fnTwo={(e)=>setAppointmentData((prev)=>({...prev , number:e.target.value}))}
              placeTwo={"enter your number"}
            />
          </Modal>
          {/* success modal */}
          {modal.success ? (
            <SuccessModal
              isOpen={modal.success}
              onClose={() => setModal((prev) => ({...prev, success: false}))}
              successMsg={"appointment created successfully"}
              welcomeMsg={"we are waiting for you"}
            />
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Booking;
