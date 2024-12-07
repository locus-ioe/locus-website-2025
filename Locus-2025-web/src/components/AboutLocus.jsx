import React from "react";
import "./AboutLocus.css"; // Import the CSS for this component

const AboutLocus = () => {
  const handlePlayVideo = () => {
    const video = document.getElementById("about-video");
    if (video) {
      video.play();
      video.setAttribute("controls", "controls"); // Add controls once the video is playing
      const playButton = document.getElementById("play-button");
      if (playButton) playButton.style.display = "none"; // Hide the play button
    }
  };

  return (
    <div className="about-section">
      <div className="about-video-container">
        <video
          id="about-video"
          className="about-video"
          src="/path/to/about-video.mp4" // Replace with the actual video path
          poster="/path/to/video-poster.jpg" // Optional: Replace with a poster image for the video
        ></video>
        <button
          id="play-button"
          className="play-button"
          onClick={handlePlayVideo}
        >
          ▶
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
