import {toast, ToastContainer} from "react-toastify";
import LandPage from "../../../Component/common/LandPage/LandPage";
import Navbar from "../../../Component/common/Navbar/Navbar";
import Topbar from "../../../Component/common/Topbar/Topbar";
import Footer from "../../../Component/common/Footer/Footer";
import "./Feedback.css";
import img from "../../../Assets/Images/doctor.jpg";
import {useEffect, useState} from "react";
import getData from "../../../utils/getData";
import Loader from "../../../Component/common/Loader/Loader";
import axios from "axios";
import base_url from "../../../config/base_url";
import handleApiError from "../../../utils/handleApiError";
import { Comment, Delete, Edit, Save } from "../../../Assets/SVGS";
function Feedback() {
  const token = localStorage.getItem("token") || null
  const userData = JSON.parse(localStorage.getItem("userData"))|| null
  const [rowData , setRowData] = useState(null)
  const [loader, setLoader] = useState(false);
  const [comment, setComment] = useState();
  const [feedbackList, setFeedbackList] = useState([]);

  console.log(userData.id)
  const getFeedbackList = async () => {
    setLoader(true);
    const res = await getData("feedback");
    setFeedbackList(res.data.data.feedbacks);
    setLoader(false);
  };

  const sendFeedback = async(e)=>{
    e.preventDefault();
    if (!comment) {
      toast.error("enter comment field first");
      return;
    }
    const data = {
      name: userData.first_name,
      feedback:comment,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      timeAgo: "2 hours ago",
      rate:2
    };
    try {
      const res = await axios.post(`${base_url}/feedback`, data,{
        headers:{
          Authorization: `Bearer ${token} `,
        }
      });
      console.log(res)
      if (res.data.data.status === "success") {
        toast.success("your comment sumbitted successfully");
        getFeedbackList()
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setComment("");
    }
  }
  
  const handleEdit = (item)=>{
    setRowData(item)
  }
  const handleSave= async()=>{
    try {
      const res = await axios.put(
        `${base_url}/feedback/${rowData.id}`,
        {
          feedback: rowData.feedback,
          rate: rowData.rate
        },
        {
          headers: {
            Authorization: `Bearer ${token} `,
          }
        }
      );
      if(res.data.status === "success"){
        toast.success("comment updated successfully")
        getFeedbackList()
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setRowData(null)
    }
  }

  const handleDelete= async(id)=>{
    try {
      const res = await axios.delete(
        `${base_url}/feedback/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token} `,
          }
        }
      );
      if(res.data.status === "success"){
        toast.success("comment deleted successfully")
        getFeedbackList()
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setRowData(null)
    }
  }


  useEffect(() => {
    getFeedbackList();
  }, []);

  return (
    <>
      <Topbar />
      <Navbar />
      <LandPage header='feedback' link='feedback' href='/feedback' />
      <ToastContainer />
      <div className='feedback-container container'>
        <div className='feedback-content content'>
          <h2 className='h-after-effect'>feedbacks ({feedbackList.length})</h2>

          { !loader ? (
            <>
              <div className='feedbacks'>
                {feedbackList?.map((item) => {
                  return (
                    <div className='feedback'>
                      {
                        item.id === rowData?.id?
                        (
                          <textarea value={rowData.feedback} onChange={(e)=>setRowData((prev)=>({...prev,feedback:e.target.value}))} >
                          </textarea>
                        ):
                        <p>{item.feedback}</p>

                      }
                      {
                        userData.id === item.user.id &&
                      <div className="icons">
                        {
                          item.id === rowData?.id?(
                            <div className="icon" onClick={()=>handleSave()}>
                              <Save width="20px"/>
                            </div>
                          ):
                          <div className="icon" onClick={()=>handleEdit(item)}>
                            <Edit width="20px"/>
                          </div>
                        }
                        <div className="icon" onClick={()=>handleDelete(item.id)}>
                          <Delete width="20px"/>
                        </div>
                      </div>
                      }
                      <div className='user'>
                        <div className='image'>
                          <img src={img} alt='' />
                        </div>
                        <h4>{item.user.first_name}</h4>
                      </div>
                    </div>
                  );
                })}
              </div>
              <form>
                <textarea
                  onChange={(e) => setComment(e.target.value)}
                  placeholder='write your comment here'
                ></textarea>
                <button onClick={(e) => sendFeedback(e)}>comment <Comment width="20px"/></button>
              </form>
            </>
          ) : (
            <Loader />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Feedback;
