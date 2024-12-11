import React, { useRef } from "react";
import "./AboutLocus.css"; // Import the CSS for this component
import locusvideo from "../assets/Locus Exhibition 2021 Promo Video - Pulchowk Campus.mp4";
import locusvideoimg from "../assets/Screenshot from 2024-12-07 18-49-39.png";

const AboutLocus = () => {
  const videoRef = useRef(null);
  const buttonRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      videoRef.current.setAttribute("controls", "controls"); // Add controls once the video is playing
    }
    if (buttonRef.current) {
      buttonRef.current.style.display = "none"; // Hide the play button
    }
  };

  return (
    <div className="about-section">
      <div className="about-video-container">
        <video
          ref={videoRef}
          className="about-video"
          src={locusvideo}
          poster={locusvideoimg}
        ></video>
        <button
          ref={buttonRef}
          className="play-button"
          onClick={handlePlayVideo}
        >
          ▶{/* Play symbol */}
        </button>
      </div>
      <div className="about-text">
        <h2 className="about-title">
          About <span className="highlight">Locus</span>
        </h2>
        <p className="about-description">
          LOCUS is a non-profit organization led by undergraduate students of
          Electrical, Electronics, and Computer Engineering departments from
          IOE, Pulchowk Campus. Since its inception in 2003, LOCUS has been
          providing a platform for young innovators from schools and colleges
          all over Nepal to showcase their skills and knowledge. LOCUS 2025
          marks the 21st edition of the National Level Technological Exhibition.
          All its activities are guided by a single compass: fostering
          collaboration, promoting individual development, and facilitating
          innovation.
        </p>
      </div>
    </div>
  );
};

export default AboutLocus;