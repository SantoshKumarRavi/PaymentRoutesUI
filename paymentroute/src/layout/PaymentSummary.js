import React from 'react'
import {Link}from "react-router-dom"

const PaymentSummary = ({setSuccess}) => {
  function showSuccess(){
    setSuccess(true)
  }
  return (
    <div className='payment-container'>
      <div className='title-container'>
      <div className='title'><h1>Payment</h1></div>
      <div className='title-message'><p>Complete your pro membership</p></div>
      </div>
      <div className='amount-container'> 
      <div className='amount'><span className='dollar-details'>$</span><span className='dollar'>899 </span><span className='dollar-details'>USD</span></div>
      <div className='grid-container'>
        <div className='item1'>Messaging</div>
        <div className='item2'>Analytics</div>
        <div className='item3'>Support</div>
        <div className='item4'>Discounts</div>
      </div>
      <div className='know-more'><p>Know more</p></div>
      </div>
      <div className='card-details-container' >
      <div className='card-details-title'><p>Pay with card</p></div>
      <div className='input-container'><input type="text" placeholder='Enter card number'/></div>
      <div className='date-month'>
      <input type="text" placeholder='mm / yy'/>
      <input type="text" placeholder=' CVV'/>
      </div>
      <div className='btn-container'>
      <div className='success-btn'><Link to="/success"><button  className='success-btn-bg' onClick={()=>showSuccess()}>Make payment</button></Link></div>
      <div className='delete-btn'><Link to="/delete"><button className='delete-btn-bg' >Delete</button></Link></div>
      </div>
      </div>
    </div>
  )
}

export default PaymentSummary