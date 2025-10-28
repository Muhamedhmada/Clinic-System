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
import { async } from "@firebase/util";
function Feedback() {
  const token = localStorage.getItem("token") || null
  const [userData , setUserData] = useState(localStorage.getItem("userData")|| null)
  const [loader, setLoader] = useState(false);
  const [comment, setComment] = useState();
  const [feedbackList, setFeedbackList] = useState([]);

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
    const newComment = {
      name: userData.first_name,
      feedback:comment,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      timeAgo: "2 hours ago",
      rate:2
    };
    try {
      const res = await axios.post(`${base_url}/feedback`, newComment,{
        headers:{
          Authorization: `Bearer ${token} `,
        }
      });
      console.log(res)
      if (res.data.data.status === "success") {
        toast.success("your comment sumbitted successfully");
      }
    } catch (error) {
      handleApiError(error);
    } finally {
      setComment("");
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

          {feedbackList.length > 0 ? (
            <>
              <div className='feedbacks'>
                {feedbackList?.map((item) => {
                  return (
                    <div className='feedback'>
                      <p>{item.feedback}</p>
                      <div className='user'>
                        <div className='image'>
                          <img src={img} alt='' />
                        </div>
                        <h3>{item.user.first_name}</h3>
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
                <button onClick={(e) => sendFeedback(e)}>sumbit</button>
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
