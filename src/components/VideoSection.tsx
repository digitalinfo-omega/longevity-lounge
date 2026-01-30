import { useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (!videoRef.current) return;

    // Toggle mute
    videoRef.current.muted = !videoRef.current.muted;

    // Ensure playing (mobile safari fix)
    videoRef.current.play().catch(() => {});
  };

  return (
    <section id="home" className="hero-video-section">
      <video
        ref={videoRef}
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/assets/images/video/poster.jpg"
        onClick={handleVideoClick}
      >
        <source src="/assets/images/video/video.mp4" type="video/mp4" />
      </video>
    </section>
  );
};

export default VideoSection;
