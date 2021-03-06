import React from "react";
import './Service.css';

const Service = ({ service }) => {
  const {name, img } = service;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-3">
      <div className="card h-100 text-center bg-light card-transition">
        <img src={img} alt="" />
        <div className="card-body">
          <h5 className="card-title text-danger">{name}</h5>      
          <button className="btn btn-warning">Shop Now Today</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
