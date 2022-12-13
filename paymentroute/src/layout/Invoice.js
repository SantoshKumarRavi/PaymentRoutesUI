import React from "react";

const Invoice = () => {
  return (
    <div className="invoice-container">
      <div className="invoice-title">
        <div className="title">
          <h1>Invoice</h1>
        </div>
        <div className="title-message">
          <a href="/download"><p>Download</p></a>
        </div>
      </div>
      <div className="invoice-title">
        <div className="title">
          <p>Pro membership</p>
        </div>
        <div className="title-message">
          <p>$899</p>
        </div>
      </div>
      <div className="invoice-title">
        <div className="title">
          <p>Platform fee</p>
        </div>
        <div className="title-message">
          <p>$10</p>
        </div>
      </div>
      <div className="invoice-title">
        <div className="title">
          <h1>Total Amount</h1>
        </div>
        <div className="title-message">
          <p>$909</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
