import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import VideoCarousel from "../../components/Carrusel-videos/VideoCarousel.jsx";
import ReviewsUsa from "../../components/reviews/ReviewsUsa";
import ModalCita from "../../components/Modal-Cita/ModalCita.jsx";
import "./home.css";

function HomeUsa() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll(".mvv-card");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ========================
          SEO
      ========================= */}
      <Helmet>
        <title>Creo Dental | Smiles That Inspire Confidence in Ciudad Juárez</title>
        <meta
          name="description"
          content="Oral Aesthetic Rehabilitation Clinic in Ciudad Juárez. Dental treatments for children and adults in a warm and professional environment."
        />
        <meta property="og:title" content="Creo Dental | Smiles That Inspire Confidence" />
        <meta property="og:description" content="Modern, ethical and human-centered dentistry. We create smiles with precision and confidence." />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dcerhiol0/image/upload/v1759950620/logo-white_peh5mv.png"
        />
        <meta property="og:url" content="https://creo-dental.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      {/* ========================
          HERO
      ========================= */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-container">
          <h1 className="fade-in arch-title">
            ADVANCED SOLUTIONS FOR COMPLEX CASES
          </h1>

          <p className="fade-in delay-1 arch-subtitle">
            Comprehensive care with cutting-edge technology, digital scanning,
            and an in-house laboratory. Complete rehabilitations with natural
            aesthetic precision and optimized treatment times.
          </p>

          <button
            className="btn-gold fade-in delay-2"
            onClick={() => setOpenModal(true)}
          >
            START YOUR TREATMENT
          </button>
        </div>
      </section>

      {/* ========================
          YOUR PATH TO A NEW SMILE
      ========================= */}
      <section className="steps-section">
        <h2 className="steps-title">A CLEAR PATH TO YOUR NEW SMILE</h2>
        <div className="steps-divider"></div>

        <div className="steps-grid">

          <div className="step-card">
            <h3>STEP 1 — Schedule an evaluation</h3>
            <p>
              Initial visit to understand your needs. We discuss your goals and
              evaluate your oral health to determine the treatment that best fits your case.
            </p>
          </div>

          <div className="step-card">
            <h3>STEP 2 — Digital diagnosis and planning</h3>
            <p>
              Advanced planning with 3D technology. We integrate clinical diagnosis
              and digital data to design reliable solutions that optimize time and enhance the patient experience.
            </p>
          </div>

          <div className="step-card">
            <h3>STEP 3 — Treatment begins</h3>
            <p>
              Digitally guided procedures for optimal results. We execute your personalized plan
              using advanced techniques to achieve function, stability, and natural aesthetics.
            </p>
          </div>

          <div className="step-card">
            <h3>STEP 4 — Ongoing care and follow-up</h3>
            <p>
              We monitor your progress and make necessary adjustments to ensure
              the rehabilitation evolves properly and remains stable over time.
            </p>
          </div>

        </div>
      </section>

      {/* ========================
          PHILOSOPHY
      ========================= */}
      <section className="mvv-section">
        <div className="mvv-header">
          <h2>PHILOSOPHY</h2>
          <div className="mvv-divider"></div>

          <p>
            At Creo Dental, we combine science, precision, and aesthetics to create
            a modern dental experience. Our philosophy focuses on providing human-centered care,
            exceptional results, and an environment where trust and natural beauty meet.
          </p>
        </div>

        <div className="mvv-grid">
          {/* MISSION */}
          <div className="mvv-card">
            <h3>MISSION</h3>
            <p>
              To provide comprehensive dental care with excellence, precision, and human warmth,
              using cutting-edge technology with a personalized approach.
            </p>
          </div>

          {/* VISION */}
          <div className="mvv-card">
            <h3>VISION</h3>
            <p>
              To be the leading dental clinic in Ciudad Juárez and northern Mexico,
              recognized for professional quality, innovation, and human-centered care.
            </p>
          </div>

          {/* VALUES */}
          <div className="mvv-card">
            <h3>VALUES</h3>
            <ul>
              <li><strong>Excellence:</strong> Perfection in every detail.</li>
              <li><strong>Innovation:</strong> Modern and precise technology.</li>
              <li><strong>Ethics and trust:</strong> Complete transparency.</li>
              <li><strong>Human warmth:</strong> Empathy and genuine care.</li>
              <li><strong>Aesthetics and well-being:</strong> Smiles that transform lives.</li>
              <li><strong>Teamwork:</strong> Aligned specialists for optimal results.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================
          VIDEO CAROUSEL
      ========================= */}
      <div className="hero-carousel-wrapper">
        <VideoCarousel />
      </div>

      <div className="hero-carousel-wrapper">
        <ReviewsUsa />
      </div>

      {/* ========================
          SCHEDULE YOUR APPOINTMENT
      ========================= */}
      <ModalCita open={openModal} onClose={() => setOpenModal(false)} />
    </>
  );
}

export default HomeUsa;
