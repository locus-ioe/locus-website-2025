import React from "react";
import "./LocusHighlights.css";
import highimg from '../assets/tech-jobs-in-India.webp'

const LocusHighlights = () => {
  const images = [
    { src: highimg, alt: "Highlight 1" },
    { src: highimg, alt: "Highlight 2" },
    { src: highimg, alt: "Highlight 3" },
    { src: highimg, alt: "Highlight 4" },
    { src: highimg, alt: "Highlight 5" },
    { src: highimg, alt: "Highlight 6" },
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
