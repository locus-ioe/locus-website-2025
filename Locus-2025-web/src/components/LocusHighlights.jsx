import React from "react";
import "./LocusHighlights.css";
import highimg from '../assets/tech-jobs-in-India.webp'
import cit1 from "../assets/highlight/cit1.jpg"
import cit2 from "../assets/highlight/cit2.jpg"
import cit3 from "../assets/highlight/cit3.jpg"
import img4 from "../assets/highlight/mainevent1.jpg"
import img5 from "../assets/highlight/robosoccor.jpg"
import img6 from "../assets/highlight/flashmob.jpg"

const LocusHighlights = () => {
  const images = [
    { src: cit1, alt: "Highlight 1" },
    { src: cit2, alt: "Highlight 2" },
    { src: cit3, alt: "Highlight 3" },
    { src: img4, alt: "Highlight 4" },
    { src: img5, alt: "Highlight 5" },
    { src: img6, alt: "Highlight 6" },
  ];

  return (
    <div className="locus-container">
      <h2 className="locus-title">
        <span>Locus</span> Highlights
      </h2>
      <div className="locus-grid">
        {images.map((image, index) => (
          <div className="locus-item" key={index}>
            <img src={image.src} alt={image.alt} className="locus-image" />
          </div>
        ))}
      </div>
      <button className="locus-button">Show More</button>
    </div>
  );
};

export default LocusHighlights;
