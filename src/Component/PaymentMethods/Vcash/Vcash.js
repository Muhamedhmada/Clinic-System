import { useRef, useState } from 'react'
import { Copy } from '../../../Assets/SVGS'
import BtnLoader from '../../common/BtnLoader/BtnLoader'
import './Vcash.css'
function Vcash(){
  const inputRef = useRef()
  const [copy , setCopy] = useState(false)
  const [image , setImage] = useState(null)
  const [loader , setLoader] = useState(false)
  const handleCopy = async()=>{
    try{
      navigator.clipboard.writeText("01000473458")
      setCopy(true)
      setTimeout(() => {
        setCopy(false);
      }, 1000);
    }
    catch{
      setCopy(false)
    }
  }
  const uploadImage = (e)=>{
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },1000)
    setImage(e.target.files[0])
  }
  return (
    <div className='vcash-container'>
      <div className='vcash-content'>
        <div>
          <p>
            transfer to this number <span>01000473458</span>
          </p>
          <p onClick={() => handleCopy()}>
            {copy ? "copied" : "copy"}
            <Copy width='18px' />
          </p>
        </div>
        <span>
          <mark>Notes:</mark>
        </span>
        <ul>
          <li>
            Transfer must be done through V-Cash app or any cash application
          </li>
          <li>Don’t forget to save a screenshot of your transfer</li>
        </ul>
        <p></p>
        <input
          ref={inputRef}
          type='file'
          onChange={(e) => uploadImage(e)}
          name=''
          id=''
        />
        {loader ? (
          <BtnLoader />
        ) : (
          <button className='addBtn' onClick={() => inputRef.current.click()}>
            {image ? "save" : "upload screen"}
          </button>
        )}
      </div>
    </div>
  );
}
export default Vcash