import { Microscope } from "lucide-react";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";

const MostTrusted = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isManuallyControlled, setIsManuallyControlled] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!isManuallyControlled) {
            if (entry.isIntersecting) {
              // Video is in view - unmute
              video.muted = false;
              setIsMuted(false);
              video.play().catch((err) => {
                // If autoplay fails, keep muted
                console.log("Autoplay with sound failed:", err);
                video.muted = true;
                setIsMuted(true);
              });
            } else {
              // Video is out of view - mute
              video.muted = true;
              setIsMuted(true);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px",
      },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, [isManuallyControlled]);

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;

    // Mark as manually controlled
    setIsManuallyControlled(true);

    if (isMuted) {
      video.muted = false;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }

    video.play();

    // Reset manual control after 3 seconds of no interaction
    setTimeout(() => {
      setIsManuallyControlled(false);
    }, 3000);
  };

  return (
    <section id="about" className="most-trusted-section">
      <div className="container">
        <div
          className="trusted-banner-wrap"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <span className="line right-line"></span>

          <div className="trusted-banner">
            <span>Most Trusted Longevity Lounge in India</span>
          </div>

          <span className="line left-line"></span>
        </div>

        <div className="content-wrapper">
          <div
            className="phone-mockup"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <div className="phone-container">
              <div className="phone-glow"></div>
              <img
                src="/assets/images/most-trusted/mobile1.png"
                alt="Phone Frame"
                className="phone-frame"
              />
              <video
                ref={videoRef}
                className="phone-video"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                webkit-playsinline="true"
                poster="/assets/images/video-poster.jpg"
                onClick={handleVideoClick}
                style={{ cursor: "pointer" }}
              >
                <source
                  src="/assets/images/video/LL long video with audio low (1).mp4"
                  type="video/mp4"
                />
              </video>

              {isMuted && (
                <button
                  className="unmute-btn"
                  onClick={handleVideoClick}
                  style={{ pointerEvents: "all" }}
                >
                  Tap for sound
                </button>
              )}
            </div>
          </div>

          <div
            className="text-content"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div
              className="title"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="100"
            >
              <Microscope className="icon-highlight" />
              <h2 className="section-title">
                Expert Led Series Unlock the Power of Personalized Medicine
              </h2>
            </div>

            <div
              className="icon-series"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="300"
            >
              <p>
                Join our leading geneticists and wellness experts as they decode
                the complex relationships between your DNA, lifestyle, and
                longevity. Each episode reveals actionable insights to transform
                your health approach.
              </p>
            </div>

            <ul className="benefits-list">
              <li
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="400"
              >
                <div className="list-disc">
                  <span className="disc"></span>
                  <div className="disc-content">
                    <h3>Genetic Risk Assessment</h3>
                    <p>
                      Understanding your predispositions before they become
                      problems
                    </p>
                  </div>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="500"
              >
                <div className="list-disc">
                  <span className="disc"></span>
                  <div className="disc-content">
                    <h3>Personalized Nutrition</h3>
                    <p>How your genes influence optimal dietary choices</p>
                  </div>
                </div>
              </li>
              <li
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="600"
              >
                <div className="list-disc">
                  <span className="disc"></span>
                  <div className="disc-content">
                    <h3>Longevity Protocols</h3>
                    <p>Science-backed strategies for healthy aging</p>
                  </div>
                </div>
              </li>
            </ul>

            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="700"
            >
              <a href="#" className="cta-button">
                <div className="cta-content">
                  <h4>Explore More</h4>
                  <img
                    src="/assets/images/most-trusted/right-arrow.png"
                    alt=""
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MostTrusted;
