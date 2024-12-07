import React from "react";
import "./DirectorsAmbassadors.css";

const DirectorsAmbassadors = () => {
  return (
    <div className="directors-container">
      <img
        src="src/assets/4.svg" // Replace with the actual image path
        alt="Network Logo"
        className="network-logo"
      />
      <div className="text-content">
        <div className="text-locus highlight">
          Locus
        </div>
        <div className="text-96">2025</div>
        <div className="text-96"><span className="highlight">directors</span> <span className="text-64">and</span></div>
        <div className="text-ambassadors line">
          Ambassadors <span className="text-64">are</span>
        </div>
        <span className=" text-64 line"><span className="highlight">all over </span>country</span>
      </div>
    </div>
  );
};

export default DirectorsAmbassadors;
