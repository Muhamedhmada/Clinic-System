import './Payment.css';
import LandPage from '../../../Component/common/LandPage/LandPage'
import Navbar from '../../../Component/common/Navbar/Navbar'
import Topbar from '../../../Component/common/Topbar/Topbar';
import Footer from '../../../Component/common/Footer/Footer';
import { useState } from 'react';
import CreditCard from '../../../Component/PaymentMethods/CreditCard/CreditCard';
import Paypal from '../../../Component/PaymentMethods/Paypal/Paypal';
import Vcash from '../../../Component/PaymentMethods/Vcash/Vcash';

function Payment(){
  const [method , setMethod] = useState("vcash")

  const renderContent = ()=>{

    switch(method){
      case "creditCard":
        return <CreditCard/>;
      case "paypal":
        return <Paypal/>
      case "vcash":
        return <Vcash/>
      
      default:
        return <CreditCard/>
      
    }
  }
  return(
    <>
      <Topbar />
      <Navbar />
      <LandPage header='payment' link='paymeny' href='/payment' />
      <div className="payment-container container">
        <div className="payment-content content">
          <div className="btns">
            <button className={method==="creditCard"?"active":null} onClick={()=> setMethod("creditCard")}>credit card</button>
            <button className={method==="paypal"?"active":null} onClick={()=> setMethod("paypal")}>pay pal</button>
            <button className={method==="vcash"?"active":null} onClick={()=> setMethod("vcash")}>V-cash</button>
          </div>
          <div className="method">
            {renderContent()}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
export default Payment