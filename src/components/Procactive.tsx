import "aos/dist/aos.css";

const Procactive = () => {
  return (
    <section className="proactive-section">
      <video
        className="proactive-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="assets/images/video/beams.mp4" type="video/mp4" />
      </video>

      <div className="proactive-overlay"></div>

      <div className="container">
        <div
          className="ps-header"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-easing="ease-out"
          data-aos-once="true"
        >
          <h2>Why Proactive Healthcare Matters</h2>
          <p>
            Comprehensive genetic-based health services designed to prevent,
            protect, and optimize your well-being.
          </p>
        </div>

        <div className="ps-grid">
          <div
            className="ps-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="100"
            data-aos-easing="ease-out"
          >
            <span className="ps-number">01</span>
            <h4>
              Early Detection Saves Lives Identifying risks before symptoms
              appear allows interventions when they’re most effective.
            </h4>
          </div>

          <div
            className="ps-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
            data-aos-easing="ease-out"
          >
            <span className="ps-number">02</span>
            <h4>
              Personalized Prevention Your genetics reveal unique
              vulnerabilities, enabling strategies designed specifically for
              you.
            </h4>
          </div>

          <div
            className="ps-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
            data-aos-easing="ease-out"
          >
            <span className="ps-number">03</span>
            <h4>
              Long-Term Wellness Focusing on prevention preserves vitality,
              energy, and quality of life over decades.
            </h4>
          </div>

          <div
            className="ps-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
            data-aos-easing="ease-out"
          >
            <span className="ps-number">04</span>
            <h4>
              Cost and Stress Reduction Avoiding severe illness reduces medical
              costs, hospitalizations, and emotional burden.
            </h4>
          </div>

          <div
            className="ps-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
            data-aos-easing="ease-out"
          >
            <span className="ps-number">05</span>
            <h4>
              Empowered Decision-Making Knowledge of your health blueprint
              allows confident, informed lifestyle and treatment choices.
            </h4>
          </div>

          <div
            className="ps-item"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
            data-aos-easing="ease-out"
          >
            <span className="ps-number">06</span>
            <h4>
              Shifts Mindset from Reactive to Proactive Taking control of your
              health creates a sense of mastery and security.
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Procactive;
