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
    setMyAppointments(res.data.data);
  };

  const handleCancelBtn = async () => {
    console.log(rowData?.id);
    // return
    setLoader(true);
    try {
      const res = await axios.put(
        `${base_url}/appointment/cancel/${rowData?.id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        }
      );
      toast.success("appointment canceled successfully");
      console.log(res);
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
      {myAppointments?.length !== 0 ? (
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
                    <th>type</th>
                    <th>reason</th>
                    <th>cance</th>
                    <th>is confirmed</th>
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
                        <td>{item.type}</td>
                        <td>{item.reason}</td>
                        <td className='btn'>
                          {loader && item.id === rowData.id ? (
                            <BtnLoader />
                          ) : (
                            <button
                              className='cancelBtn'
                              onClick={() => {handleCancelBtn();setRowData(item)}}
                            >
                              cancel
                            </button>
                          )}
                        </td>
                        <td>
                          {item.is_confirmed ? (
                            <Check width='32px' color='#1a76d1' />
                          ) : (
                            "not confirmed"
                          )}
                        </td>
                        <td>
                          {
                            loader?
                            <BtnLoader/>
                            :(
                              <button
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
