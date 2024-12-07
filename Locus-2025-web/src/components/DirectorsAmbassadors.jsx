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
        <h1>
          Locus <span className="highlight">2025</span> <br />
          directors and
        </h1>
        <h2>
          Ambassadors are <br />
          <span className="highlight-secondary">all over country</span>
        </h2>
      </div>
    </div>
  );
};

export default DirectorsAmbassadors;
