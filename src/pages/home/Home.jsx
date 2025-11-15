import { useEffect } from "react";
import { Helmet } from "react-helmet";
import VideoCarousel from "../../components/Carrusel-videos/VideoCarousel.jsx";
import "./home.css";
import Reviews from "../../components/reviews/Reviews.jsx";

function Home() {
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
        <title>Creo Dental | Sonrisas que Inspiran Confianza en Ciudad Juárez</title>
        <meta
          name="description"
          content="Clínica de Rehabilitación Estética Oral en Ciudad Juárez. Tratamientos para niños y adultos en un ambiente cálido, moderno y profesional."
        />
        <meta property="og:title" content="Creo Dental | Sonrisas que Inspiran Confianza" />
        <meta property="og:description" content="Odontología moderna, ética y humana. Creamos sonrisas con precisión y confianza." />
        <meta property="og:image" content="https://res.cloudinary.com/dcerhiol0/image/upload/v1759950620/logo-white_peh5mv.png" />
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
            SONRISAS QUE <br /> INSPIRAN CONFIANZA
          </h1>

          <p className="fade-in delay-1 arch-subtitle">
            Clínica de Rehabilitación Estética Oral. Tratamientos para niños y adultos
            en un ambiente cálido y profesional.
          </p>

          <a
            href="https://wa.me/526563116130?text=Hola, me interesa agendar una cita en la clínica Creo Dental"
            className="btn-gold fade-in delay-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            AGENDAR CITA
          </a>
        </div>
      </section>

      {/* ========================
          FILOSOFÍA
      ========================= */}
      <section className="mvv-section">
        <div className="mvv-header">
          <h2>FILOSOFÍA</h2>
          <div className="mvv-divider"></div>

          <p>
            En Creo Dental unimos ciencia, precisión y estética para crear una 
            experiencia odontológica moderna. Nuestra filosofía se centra en 
            brindar atención humana, resultados excepcionales y un ambiente 
            donde la confianza y la belleza natural se encuentran.
          </p>
        </div>

        <div className="mvv-grid">
          {/* MISIÓN */}
          <div className="mvv-card">
            <h3>MISIÓN</h3>
            <p>
              Brindar atención odontológica integral con excelencia, precisión y calidez humana,
              usando tecnología de vanguardia con un enfoque personalizado.
            </p>
          </div>

          {/* VISIÓN */}
          <div className="mvv-card">
            <h3>VISIÓN</h3>
            <p>
              Ser la clínica dental de referencia en Ciudad Juárez y el norte de México por
              nuestra calidad profesional, innovación y trato humano.
            </p>
          </div>

          {/* VALORES */}
          <div className="mvv-card">
            <h3>VALORES</h3>
            <ul>
              <li><strong>Excelencia:</strong> Perfección en cada detalle.</li>
              <li><strong>Innovación:</strong> Tecnología moderna y precisa.</li>
              <li><strong>Ética y confianza:</strong> Transparencia total.</li>
              <li><strong>Calidez humana:</strong> Empatía y atención genuina.</li>
              <li><strong>Estética y bienestar:</strong> Sonrisas que transforman vidas.</li>
              <li><strong>Trabajo en equipo:</strong> Especialistas alineados para resultados óptimos.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================
          CARRUSEL DE VIDEOS
      ========================= */}
      <div className="hero-carousel-wrapper">
        <VideoCarousel />
      </div>

      <div className="hero-carousel-wrapper">
        <Reviews />
      </div>
    </> 

    
  );
}

export default Home;