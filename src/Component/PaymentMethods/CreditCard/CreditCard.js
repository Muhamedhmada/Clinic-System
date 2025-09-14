import { useState } from 'react'
import BtnLoader from '../../common/BtnLoader/BtnLoader'
import './CreditCard.css'
function CreditCard (){
  const [loader , setLoader] = useState(false)
  const [data , setData] = useState({
    owner:"",
    number:"",
    month:"",
    year:"",
    cvv:""
  })
  const handleConfirmPayment = (e)=>{
    console.log(data)
    e.preventDefault()
    setLoader(true)
    setTimeout(()=>{
      setLoader(false)
    },1000)
  }
  return (
    <div className='creditCard-container'>
      <form>
        <div>
          <label htmlFor='owner'>card owner</label>
          <input
            id='owner'
            type='text'
            onChange={(e) =>
              setData((prev) => ({...prev, owner: e.target.value}))
            }
            placeholder='card owner name'
          />
        </div>
        <div>
          <label htmlFor='number'>card number</label>
          <input
            id='number'
            type='number'
            onChange={(e) =>
              setData((prev) => ({...prev, number: e.target.value}))
            }
            placeholder='card owner number'
          />
        </div>
        <div>
          <label htmlFor='date'>expiration date</label>
          <div className='inputs'>
            <input
              id='date'
              type='number'
              onChange={(e) =>
                setData((prev) => ({...prev, month: e.target.value}))
              }
              placeholder='MM'
            />
            <input
              type='number'
              onChange={(e) =>
                setData((prev) => ({...prev, year: e.target.value}))
              }
              placeholder='YY'
            />
          </div>
        </div>
        <div>
          <label htmlFor='cvv'>CVV</label>
          <input
            id='cvv'
            type='number'
            onChange={(e) =>
              setData((prev) => ({...prev, cvv: e.target.value}))
            }
            placeholder='CVV'
          />
        </div>

        {loader ? (
          <BtnLoader />
        ) : (
          <button className='addBtn' onClick={(e) => handleConfirmPayment(e)}>
            confirm payment
          </button>
        )}
      </form>
    </div>
  );
}
export default CreditCard