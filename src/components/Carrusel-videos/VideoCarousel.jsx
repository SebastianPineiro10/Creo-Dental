import { useState, useEffect } from "react";
import "./VideoCarousel.css";

function VideoCarousel() {
  const slides = [
    { type: "image", src: "/videos-cliente-Fernando/WhatsApp Image 2025-10-12 at 14.02.19.jpeg" },
    { type: "image", src: "/videos-cliente-Fernando/WhatsApp Image 2025-10-12 at 14.02.38.jpeg" },
    { type: "video", src: "/videos-cliente-Fernando/WhatsApp Video 2025-10-12 at 14.02.18.mp4" },
    { type: "video", src: "/videos-cliente-Fernando/WhatsApp Video 2025-10-12 at 14.02.38.mp4" },
    { type: "video", src: "/videos-cliente-Fernando/WhatsApp Video 2025-10-12 at 14.02.40.mp4" },
  ];

  const [current, setCurrent] = useState(0);

  // Auto cambio cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="video-carousel-section">
      <h2 className="carousel-title">Nuestro Trabajo en Acción</h2>

      <div className="carousel-wrapper">
        <div className="hero-carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div className="carousel-item" key={index}>
                <div className="carousel-content">
                  {slide.type === "video" ? (
                    <video src={slide.src} controls muted />
                  ) : (
                    <img src={slide.src} alt={`slide-${index}`} />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bolitas de navegación */}
        <div className="carousel-dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VideoCarousel;