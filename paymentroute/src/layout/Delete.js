import React from "react";
import { Link } from "react-router-dom";

const Delete = () => {
  return (
    <>
      <div className="delete-container">
        <div><h1>Remove ?</h1></div>
        <div className="delete-message"><p>Please confirm the changes, you can't redo this again</p></div>
        <div className="del-confirm"><button>Confirm</button></div>
        <div className="prev" ><Link className="link" to={"/summary"}>Take me back</Link></div>

      </div>
    </>
  );
};

export default Delete;
