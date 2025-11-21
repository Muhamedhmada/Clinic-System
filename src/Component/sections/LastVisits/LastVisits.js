import {useState, useEffect, useRef} from "react";
import Modal from "../../custom/Modal/Modal.jsx";
import "./LastVisits.css";
import Icon from "../../common/Icon/Icon";
import {Download, Exit, Upload} from "../../../Assets/SVGS.jsx";
import Table from "../../custom/Table/Table";
import {ToastContainer} from "react-toastify";
import getData from "../../../utils/getData.js";
import donwloadImage from "../../../utils/downloadImage.js";
import img from '../../../Assets/Images/rosheta1.jpg'
import axios from "axios";
import base_url from "../../../config/base_url.js";
import handleApiError from "../../../utils/handleApiError.js";
function LastVisits() {
  const token = localStorage.getItem("token")
  const uploadRef = useRef("")
  const [loader, setLoader] = useState(false);
  const [patientRecords, setPatientRecords] = useState(null);
  const [attachments, setAttachments] = useState();
  const [rowData , setRowData] = useState(null)
  const [attachmentsModal, setAttachmentsModal] = useState(false);
  const [uploadModal , setUploadModal] = useState(false)
  const [uploadedImages , setUploadedImages] = useState([])

  const ShowAttachments = (attachment) => {
    setAttachments(attachment);
    setAttachmentsModal(true);
  };
  
  const ShowUploadModal = (item) =>{
    setRowData(item)
    setUploadModal(true)
    console.log(item)
    
  }

  const handleRemoveImage = (index)=>{
    console.log(index)
    setUploadedImages(prevImages => {
      // نستخدم دالة filter لإنشاء مصفوفة جديدة تستثني العنصر الذي يتطابق فهرسه
      const updatedImages = prevImages.filter((_, i) => i !== index);
      
      // **ملاحظة هامة:** يجب أيضاً إلغاء الـ URL المؤقت لتحرير الذاكرة
      // (إذا كنت تستخدمه كما في الكود السابق)
      // إذا كنت تريد تحرير الذاكرة هنا:
      // URL.revokeObjectURL(prevImages[indexToRemove].path_or_url); 
      // لكن هذا قد يكون معقداً قليلاً، لذلك نركز على الحذف من الـ State أولاً.

      return updatedImages;
  });

  }

  const handleUploadFiles = async()=>{
    console.log(rowData.id)
    console.log(uploadedImages)
    const formData = new FormData();
    uploadedImages.forEach((file, index) => {
      formData.append("files", file, file.name);
    });
  console.log(formData)
    try{
      const res = await axios.put(`${base_url}/medical-history/${rowData?.id}`, formData ,{
        headers:{
          Authorization: `Bearer ${token} `,
        }
      })
      console.log(res)
    }
    catch(error){
      handleApiError(error)
    }
    finally{
      setUploadedImages([])
    }
  }

  const getMyMedicalVisits = async () => {
    setLoader(true);
    const res = await getData('medical-history/my-medical-histories')
    setPatientRecords(res?.data?.data);
    setLoader(false);
  };

  useEffect(() => {
    getMyMedicalVisits();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className='lastVisits-container container'>
        <div className='lastVisits-content content'>
          <Table
            data={patientRecords}
            headers={[
              "date",
              "doctor",
              "diagnosis",
              "treatments",
              "notes",
              "attachments",
            ]}
            keys={["date", "doctor", "diagnosis", "treatment", "notes"]}
            renderAction={(item) => (
              <td className='btns'>
                <button
                  className='detailsBtn'
                  onClick={() => ShowAttachments(item.attachments)}
                >
                  view
                </button>
                <button
                  className='addBtn'
                  onClick={() => ShowUploadModal(item)}
                >
                  upload
                </button>
              </td>
            )}
            loader={loader}
          />
          <Modal isOpen={attachmentsModal}>
            <div className='icon' onClick={() => setAttachmentsModal(false)}>
              <Icon icon={<Exit width='30px' />} />
            </div>

            <div className='images'>
              {attachments?.length > 0 ? (
                attachments?.map((item) => {
                  return (
                    <div className='image'>
                      <img src={img} alt='attachment' />

                      <Icon icon={<Download />} func={() => donwloadImage()} />
                    </div>
                  );
                })
              ) : (
                <p>no attachments to show</p>
              )}
            </div>
            <div className='btns'></div>
          </Modal>
          <Modal isOpen={uploadModal}>
            <div className='icon' onClick={() => setUploadModal(false)}>
              <Icon icon={<Exit width='30px' />} />
            </div>
            <div className='uploadedModal'>
              <div className='upload'>
                <input
                  style={{display: "none"}}
                  type='file'
                  multiple
                  onChange={(e) => {
                    const newFiles = [...e.target.files];
                    setUploadedImages(prev=>{
                      const updatedFiles = [...prev, ...newFiles];
                      return updatedFiles
                    });
                    console.log(uploadedImages);
                  }}
                  ref={uploadRef}
                />
                <Icon
                  icon={<Upload width='100px' />}
                  func={() => uploadRef.current.click()}
                />
                <h3>upload your images</h3>
              </div>
              {uploadedImages ? (
                <div className='uploadedImages'>
                  {uploadedImages.map((item , index) => (
                    <div className="image">
                      <div className="imageOverLay" onClick={()=>handleRemoveImage(index)}>
                        <Exit width="15px"/>
                      </div>
                      <img src={URL.createObjectURL(item)} alt='attachment' />
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className='btns'>
              {uploadedImages.length > 0 && <button className="addBtn" onClick={()=>handleUploadFiles()}>upload file</button>}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}
export default LastVisits;
