import React, { useEffect } from 'react'
import {useNavigate}from "react-router-dom"
const Success = ({success,setSuccess}) => {
    const navigate=useNavigate()
    useEffect(()=>{
        if(success){
            setTimeout(()=>{
                setSuccess(false)
                navigate("/invoice")
            },2000)
        }
    },[setSuccess,success,navigate])
  return (
    <>
    {success&& 
    <>
    <div className="success-wrapper">
      <div className="circle-tick-wrapper">
        <div className="circle-tick">
        ✔️
        </div>
      </div>
      <div className="sucess-wrapper-text">
        <p className="success-text">Success</p>
      </div>
      <div className="response-wrapper">
        <p className="res-text">Your payment was processed</p>
      </div>
    </div>
  </>
    
    
    }
    </>
  )
}

export default Success