import React from "react";
import "./DirectorsAmbassadors.css";
import networkimg from '../assets/4.svg'

const DirectorsAmbassadors = () => {
  return (
    <div className="directors-container">
      <img
        src={networkimg} // Replace with the actual image path
        alt="Network Logo"
        className="network-logo"
      />
      <div className="text-content">
        <div className="text-locus highlight">
          Locus
        </div>
        <div className="text-96">2025</div>
        <div className="text-96"><span className="highlight">directors</span> <span className="text-64">and</span></div>
        <div className="text-ambassadors ">
          Ambassadors <span className="text-64">are</span>
        </div>
        <span className=" text-64 "><span className="highlight">all over </span>country</span>
      </div>
    </div>
  );
};

export default DirectorsAmbassadors;
