import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
  const sponsors = Array(9).fill({
    logo: "src/assets/UI/techaxis-logo 1.png",
    // name: "TechAxis",
    // tagline: "Learn First To Lead The Rest",
  });

  return (
    <div className="sponsors-section">
        <div> <h1 className="title">
        Locus <span>2025</span> Sponsors
       
      </h1> <hr className="line"/></div>
     
      <h2 className="subtitle">Title Sponsor</h2>
      <div className="sponsors-grid">
        {sponsors.map((sponsor, index) => (
          <div className="sponsor-card" key={index}>
            <img src={sponsor.logo} alt={`${sponsor.name} Logo`} className="sponsor-logo" />
            {/* <h3 className="sponsor-name">{sponsor.name}</h3>
            <p className="sponsor-tagline">{sponsor.tagline}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
