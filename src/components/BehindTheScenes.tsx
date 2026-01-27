import "aos/dist/aos.css";

const BehindTheScenes = () => {
  return (
    <section id="gallery" className="behind-scenes-section">
      <div className="container">
        <div
          className="bs-header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          <h2>Behind the Scenes Inside Longevity Lounge</h2>
          <p>
            Step into a sanctuary of precision and elegance, where science meets
            serenity, creating a timeless space for proactive, personalized
            health journeys.
          </p>
        </div>

        <div className="bs-gallery">
          <div
            className="bs-col bs-col-large"
            data-aos="fade-right"
            data-aos-duration="1100"
            data-aos-delay="200"
            data-aos-easing="ease-out-cubic"
          >
            <img
              src="assets/images/behing-the-scenes/1.png"
              alt="Longevity Lounge interior large view"
              loading="lazy"
            />
          </div>

          <div
            className="bs-col bs-col-split"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-easing="ease-out"
          >
            <div
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="500"
            >
              <img
                src="/assets/images/behing-the-scenes/2.jpg"
                alt="Behind the scenes detail 2"
                loading="lazy"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="900"
              data-aos-delay="600"
            >
              <img
                src="/assets/images/behing-the-scenes/3.jpg"
                alt="Behind the scenes detail 3"
                loading="lazy"
              />
            </div>
          </div>

          <div
            className="bs-col bs-col-large"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="800"
            data-aos-easing="ease-out"
          >
            <img
              src="/assets/images/behing-the-scenes/4.jpg"
              alt="Longevity Lounge spacious area"
              loading="lazy"
            />
          </div>

          <div
            className="bs-col bs-col-split reverse"
            data-aos="fade-right"
            data-aos-duration="1100"
            data-aos-delay="1000"
            data-aos-easing="ease-out"
          >
            <div
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="1100"
              data-aos-easing="ease-out"
            >
              <img
                src="/assets/images/behing-the-scenes/6.jpg"
                alt="Behind the scenes detail 6"
                loading="lazy"
              />
            </div>
            <div
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="1200"
              data-aos-easing="ease-out"
            >
              <img
                src="/assets/images/behing-the-scenes/5.jpg"
                alt="Behind the scenes detail 5"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindTheScenes;
