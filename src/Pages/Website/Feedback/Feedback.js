import { toast, ToastContainer } from 'react-toastify'
import LandPage from '../../../Component/LandPage/LandPage'
import Navbar from '../../../Component/Navbar/Navbar'
import Topbar from '../../../Component/Topbar/Topbar'
import Footer from '../Footer/Footer'
import './Feedback.css'
import img from '../../../Assets/Images/doctor.jpg'
import { useState } from 'react'
function Feedback(){
  const [comment , setComment] = useState()
  const [feedbackList , setFeedbackList] =useState( [
    {
      name: "John Doe",
      comment: "Great service and friendly staff!",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      timeAgo: "2 hours ago"
    },
    {
      name: "Jane Smith",
      comment: "I had a wonderful experience, highly recommend.",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      timeAgo: "1 day ago"
    },
    {
      name: "Alice Johnson",
      comment: "Quick response and very helpful.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      timeAgo: "3 days ago"
    },
    {
      name: "Michael Brown",
      comment: "Could improve the waiting time but overall satisfied.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      timeAgo: "5 days ago"
    },
    {
      name: "Emma Wilson",
      comment: "Excellent support and clear communication.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      timeAgo: "1 week ago"
    }
  ]
  );

  const submitComment = (e)=>{
    e.preventDefault()
    if(!comment){
      toast.error("enter comment field first")
      return
    }
    const newComment  = {
        name: "user",
        comment,
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        timeAgo: "2 hours ago"
    }
    setFeedbackList((prev)=>[...prev, newComment])
    toast.success("your comment sumbitted successfully")
    setComment("")
  }
  
  
  return(
    <>
      <Topbar/>
      <Navbar/>
      <LandPage
        header='feedback'
        link='feedback'
        href='/feedback'
        />
        <ToastContainer/>
      <div className="feedback-container container">
        <div className="feedback-content content">
          <h2 className='h-after-effect'>feedbacks ({ feedbackList.length})</h2>

          <div className="feedbacks">
            {
              feedbackList.map((item)=>{
                return(
                  <div className="feedback">
                    <p>{item.comment}</p>
                    <div className="user">
                      <div className="image">
                        <img src={img} alt="" />
                      </div>
                      <h3>{item.name.split(" ")[0]}</h3>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <form>
            <textarea onChange={(e)=>setComment(e.target.value)} placeholder='write your comment here'></textarea>
            <button onClick={(e)=>submitComment(e)}>sumbit</button>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Feedback