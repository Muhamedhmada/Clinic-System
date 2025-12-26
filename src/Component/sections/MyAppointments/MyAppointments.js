import {Check, NotAvailable} from "../../../Assets/SVGS";
import Table from "../../custom/Table/Table";
import "./MyAppointments.css";
import {toast, ToastContainer} from "react-toastify";
import {useNavigate} from "react-router-dom";
import getData from "../../../utils/getData";
import {useEffect, useState} from "react";
import Loader from "../../common/Loader/Loader";
import axios from "axios";
import base_url from "../../../config/base_url";
import handleApiError from "../../../utils/handleApiError";
import BtnLoader from "../../common/BtnLoader/BtnLoader";
function MyAppointments() {
  const token = localStorage.getItem("token");
  const [rowData , setRowData] = useState()
  const nav = useNavigate();
  const [myAppointments, setMyAppointments] = useState();
  const [loader, setLoader] = useState(false);

  const getMyAppointments = async () => {
    const res = await getData("appointment/my-appointments");
    setMyAppointments(res?.data?.data);
  };

  const handleCancelBtn = async (id) => {
    // return
    setLoader(true);
    try {
      const res = await axios.put(
        `${base_url}/appointment/cancel/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      toast.success("appointment canceled successfully");
      console.log(res);
      getMyAppointments()
    } catch (error) {
      handleApiError(error);
    } finally {
      console.log("finished");
      setLoader(false);
    }
  };

  const handlePay = (item) => {
    if (item.pay) {
      toast.warning("you already paid");
    } else {
      nav("/payment");
    }
  };

  useEffect(() => {
    getMyAppointments();
  }, []);

  return (
    <div className='myAppointments container'>
      <ToastContainer />
      {myAppointments? (
        <>
          {myAppointments ? (
            <>
              <h2>you have ({myAppointments?.length}) appointment</h2>
              <table>
                <thead>
                  <tr>
                    <th>patient name</th>
                    <th>mobile</th>
                    <th>day</th>
                    <th>time</th>
                    <th>reason</th>
                    <th>type</th>
                    <th>price</th>
                    <th>cancel</th>
                    <th>status</th>
                    <th>pay</th>
                  </tr>
                </thead>
                <tbody>
                  {myAppointments?.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.phone}</td>
                        <td>{new Date(item.slot.date).toLocaleDateString()}</td>
                        <td>
                          {new Date(item.slot.date).toLocaleString(undefined, {
                            timeZone: "UTC",
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        <td>{item.reason}</td>
                        <td>{item.appointment_type.type}</td>
                        <td>{item.appointment_type.price}</td>
                        <td className='btn'>
                          {loader && item.id === rowData.id ? (
                            <BtnLoader />
                          ) : (
                            <button
                              // title={item.status === "pending"?null:"wa"}
                              disabled={item.status !== "pending" }
                              className='cancelBtn'
                              onClick={() => {handleCancelBtn(item.id);setRowData(item)}}
                            >
                              cancel
                            </button>
                          )}
                        </td>
                        <td>
                          {item.status}
                        </td>
                        <td>
                          {
                            loader?
                            <BtnLoader/>
                            :(
                              <button
                                title={item.status === "accepted"?null:"wait for confirmation"}
                                disabled={item.status !== "accepted" }
                                className='detailsBtn'
                                onClick={() => handlePay(item)}
                              >
                                {item.is_paid ? "paied" : "pay"}
                              </button>
                            )
                          }
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </>
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <div>you have no appointment </div>
      )}
    </div>
  );
}
export default MyAppointments;
