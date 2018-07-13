import React from "react";
import "./Champions.css";

const Champions = props => (
  <div onClick={() => props.scoreCount(props.name)} className="card">
    <div className="img-container">
      <img alt={props.name} src={`${props.name}`} />
    </div>
    <div className="content">
          <strong>{props.name}</strong> 
    </div>
  </div>
);

export default Champions;