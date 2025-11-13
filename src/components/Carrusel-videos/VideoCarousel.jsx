import { useState, useEffect, useMemo } from "react";
import "./VideoCarousel.css";

function VideoCarousel() {
  // MEMO evita recalcular la lista completa en cada render
  const slides = useMemo(() => [
    { type: "image", src: "/videos-cliente-fernando/img-1.jpeg" },
    { type: "image", src: "/videos-cliente-fernando/img-2.jpeg" },
    { type: "video", src: "/videos-cliente-fernando/video-1.mp4" },
    { type: "video", src: "/videos-cliente-fernando/video-2.mp4" },
    { type: "video", src: "/videos-cliente-fernando/video-3.mp4" },
    { type: "image", src: "/videos-cliente-fernando/alineadores.png"},
    { type: "image", src: "/tratamiento/alineadoress.png"},
    { type: "image", src: "/tratamiento/allon4.jpg"},
    { type: "image", src: "/tratamiento/allonx.jpg"},
    { type: "image", src: "/tratamiento/blanqueamiento.png"},
    { type: "image", src: "/tratamiento/carillas.png"},
    { type: "image", src: "/tratamiento/carillas0.png"},
    { type: "image", src: "/tratamiento/carillas1.png"},
    { type: "image", src: "/tratamiento/carillas2.png"},
    { type: "image", src: "/tratamiento/carillas3.png"},
    { type: "image", src: "/tratamiento/carillas4.png"},
    { type: "image", src: "/tratamiento/carillas5.png"},
    { type: "image", src: "/tratamiento/carillas6.png"},
    { type: "image", src: "/tratamiento/carillas7.png"},
    { type: "image", src: "/tratamiento/cirugiaguiada.png"},
    { type: "image", src: "/tratamiento/diseñodesonrisa.jpg"},
    { type: "image", src: "/tratamiento/endodoncia.png"},
    { type: "image", src: "/tratamiento/escaneointraoral.jpg"},
    { type: "image", src: "/tratamiento/fotoestetica.jpg"}
  ], []);

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides]);

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
                    <video
                      src={slide.src}
                      controls
                      muted
                      preload="metadata"   //  solo carga lo esencial
                    />
                  ) : (
                    <img
                      src={slide.src}
                      alt={`slide-${index}`}
                      loading="lazy"      //  carga diferida
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bolitas */}
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