import React, { useState } from "react";
import PaymentSummary from "./layout/PaymentSummary";
import Success from "./layout/Success";
import Delete from "./layout/Delete";
import Invoice from "./layout/Invoice";
import {BrowserRouter,Route, Routes}from "react-router-dom"
function App() {
  const[success,setSuccess]=useState(false)
  return (
    <>
    <BrowserRouter>
    
    <Routes>
    <Route path={"/summary"} element={<PaymentSummary setSuccess={setSuccess}/>}></Route>
    <Route  path={"/success"} element={<Success success={success} setSuccess={setSuccess}/>}></Route>
    <Route  path={"/delete"} element={<Delete/>}></Route>
    <Route  path={"/invoice"} element={<Invoice />}></Route>
    </Routes>
    </BrowserRouter>
    
    </>
  )
}
export default App;