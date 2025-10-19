import {useEffect, useState} from "react";
import "./Booking.css";
import LandPage from "../../../Component/common/LandPage/LandPage";
import Navbar from "../../../Component/common/Navbar/Navbar";
import Topbar from "../../../Component/common/Topbar/Topbar";
import Footer from "../../../Component/common/Footer/Footer";
import Modal from "../../../Component/custom/Modal/Modal.jsx";
import {AngleLeft, AngleRight, Angle_Left, Check, NotAvailable} from "../../../Assets/SVGS";
import Icon from "../../../Component/common/Icon/Icon";
import SuccessModal from "../../../Component/custom/SuccessModal/SuccessModal";
import MyAppointments from "../../../Component/sections/MyAppointments/MyAppointments";
import getData from "../../../utils/getData";
import Loader from "../../../Component/common/Loader/Loader";
import TwoInputs from "../../../Component/common/TwoInputs/TwoInputs";
import handleApiError from "../../../utils/handleApiError";
import axios from "axios";

import base_url from "../../../config/base_url";
import { motion } from "framer-motion";
function Booking() {
  const token = localStorage.getItem("token")
  const [totalDays , setTotalDays] = useState(0)
  const [dayPerPage , setdayPerPage] = useState(7);
  const [ startIndex , setStartIndex] = useState(0)
  let lastIndex = startIndex + dayPerPage
  let pageCounter = Math.ceil((totalDays-startIndex)/dayPerPage) + Math.ceil((startIndex-0)/dayPerPage)

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
    number:"",
    id:null
  })

  const [showBookingTable, setShowBookingTable] = useState(true);
  const [schedule, setSchedule] = useState();

  const selectAppointment = (day, hour , id) => {
    console.log(day , hour)
    setModal((prev) => ({...prev, confirmation: true}));
    setAppointment((prev)=>({...prev ,day:day , hour:hour , id:id}))
  };

  const handleNextStep = () => {
    setModal((prev) => ({...prev, confirmation: false, data: true}));
  };

  const confirmAppointment = async() => {
    console.log("confirmed")
    setModal((prev) => ({...prev, data: false, success: true}));
    console.log(appointmentData)

    console.log(appointment)
    let dataSend = {
      name:appointmentData.name + appointment.id,
      phone:appointmentData.number,
      reason:"test",
      type:"normal",
      time_slot_id:appointment.id
    }
    console.log(dataSend)
    try{
      const res = await axios.post(`${base_url}/appointment/book`,dataSend,{
        headers:{
          Authorization: `Bearer ${token} `,
        }
      }
      
      )
      console.log(res)
    }
    catch(error){
      handleApiError(error)
    }
    finally{
      console.log("finaly of booked")
      setAppointmentData((prev) => ({...prev, name: "", number: true}));
    }
  };
  
  const CancelAppointment = () => {
    setModal((prev) => ({...prev, data: false}))
    setAppointmentData((prev) => ({...prev, name: "", number: true}));
  };


  const getAppointments = async () => {
    const res = await getData(`time-slot`);
    setSchedule(res.data.data.data);
    setTotalDays(res.data.data.paginationMeta.totalItems)
  };
  // handle next page in table
  const handleNextPage = ()=>{
    if(lastIndex >= totalDays){
      return
    }
    setStartIndex(startIndex+dayPerPage)
    lastIndex = lastIndex+dayPerPage
  }
  // handle prev page in table
  const handlePrevPage = ()=>{
    if(startIndex <= 0){
      return
    }
    setStartIndex(startIndex-dayPerPage < 0 ? 0 : startIndex - dayPerPage)
    lastIndex = (lastIndex - dayPerPage)

  }
  // handle next page from number
  // const handlePageNumber = (n)=>{
  //   let currentPage = Math.ceil((startIndex-0)/dayPerPage)+1
  //   let targetPage = n+1
  //   console.log("prevPage" ,  currentPage)
  //   console.log("targetPage" , targetPage)
  //   console.log('startIndex' , startIndex)
  //   if(currentPage < targetPage){
  //     console.log("+++++++++++++++++++++++++")
  //     setStartIndex((startIndex+dayPerPage)*((targetPage - currentPage)-2))
  //     lastIndex = lastIndex+dayPerPage
  //   }
  //   if(currentPage > targetPage){
  //     console.log("--------------------")
  //   }
  // }
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
              my appointment
            </button>
          </div>
          {showBookingTable ? (
            schedule ? (
              <>
                  <di className="select-day">
                    <p>number of day</p>
                    <select name="" id=""  value={dayPerPage} onChange={(e)=>{setdayPerPage(+e.target.value) ; console.log( e.target.value)}}>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                    </select>
                  </di>
                <table>
                  <thead> 
                    <tr>
                      <th>time</th>
                      {schedule?.slice(startIndex, lastIndex)?.map((item, index) => {
                        return <th key={index}>{item.slot_date}</th>;
                      })}
                    </tr>
                  </thead>
                  <motion.tbody
                     key={startIndex}
                     initial={{translateX: -100, opacity: 0}}
                     animate={{translateX: 0, opacity: 1}}
                     transition={{duration: 0.5}}
                  >
                    {schedule?.[0].slots?.slice(0,2).map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className='hour'>
                            <p>{item.time > 12 ? item.time - 12 : item.time}</p>
                          </td>
                          {schedule?.slice( startIndex , lastIndex )?.map((day, index) => {
                            const slot = day?.slots?.find(
                              (s) => s.time === item.time
                            );
                            return (
                              <td
                                key={index}
                                onClick={() => {
                                  slot?.status === "available" &&
                                    selectAppointment(day.slot_date, item.time , item.id);
                                }}
                                className={
                                  slot?.status === "available"
                                    ? "available"
                                    : "booked"
                                }
                              >
                                {slot?.status === "available"
                                  ? "Available"
                                  : "Booked"}
                                {slot?.status !== "available" && (
                                  <Icon icon={<NotAvailable />} />
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      );
                    })}
                  </motion.tbody>
                </table>
                <div className="slider-controls">
                    <button onClick={()=>handlePrevPage()}><AngleRight width="30px"/></button>
                      {Array.from({ length: pageCounter}, (_, i) => 0 + i).map((item)=>{
                        return(
                          // <p onClick={()=>handlePageNumber(item)} className={Math.ceil((startIndex-0)/dayPerPage)== item ?"active":null}>{item+1}</p>
                          <p className={Math.ceil((startIndex-0)/dayPerPage)== item ?"active":null}>{item+1}</p>
                        )
                      })}
                    <button onClick={()=>handleNextPage()}><AngleLeft width="30px" /></button>
                  </div>
              </>
            ) : (
              <Loader />
            )
          ) : (
            <MyAppointments />
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
            <h3>confirm your booking</h3>

            <TwoInputs
              typeOne='text'
              valueOne={appointmentData.name}
              fnOne={(e) =>
                setAppointmentData((prev) => ({...prev, name: e.target.value}))
              }
              placeOne={"enter your name"}
              typeTwo='number'
              valueTwo={appointmentData.number}
              fnTwo={(e) =>
                setAppointmentData((prev) => ({
                  ...prev,
                  number: e.target.value,
                }))
              }
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
