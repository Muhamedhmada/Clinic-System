import {useState, useEffect} from "react";
import Modal from "../../custom/Modal/Modal.jsx";
import "./LastVisits.css";
import Icon from "../../common/Icon/Icon";
import {Download, Exit} from "../../../Assets/SVGS.jsx";
import Table from "../../custom/Table/Table";
import {ToastContainer} from "react-toastify";
import getData from "../../../utils/getData.js";
import donwloadImage from "../../../utils/downloadImage.js";
function LastVisits() {
  const [loader, setLoader] = useState(false);
  const [patientRecords, setPatientRecords] = useState(null);
  const [attachments, setAttachments] = useState();
  const [attachmentsModal, setAttachmentsModal] = useState(false);

  const ShowAttachments = (attachment) => {
    setAttachments(attachment);
    setAttachmentsModal(true);
  };

  const getMyMedicalVisits = async () => {
    setLoader(true);
    try {
      const res = await getData(`medical-history/my-medical-histories`);
      setPatientRecords(res.data.data);
      console.log(res.data.data);
    } finally {
      setLoader(false);
    }
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
              <td className='attachments'>
                <button
                  className='detailsBtn'
                  onClick={() => ShowAttachments(item.attachments)}
                >
                  view
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
                      <img src={item.url} alt='attachment' />
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
        </div>
      </div>
    </>
  );
}
export default LastVisits;
