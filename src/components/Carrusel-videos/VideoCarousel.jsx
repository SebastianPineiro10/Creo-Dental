import { useState, useEffect, useMemo, useRef } from "react";
import "./VideoCarousel.css";

function VideoCarousel() {
  const slides = useMemo(
    () => [
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691245/alineadores_tt3uur.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691246/allon4_kpr1mv.jpg" },

      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691246/alineadoress_rpmdmt.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691248/allonx_lmlh5r.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691247/allonx_1_xody5a.jpg" },

      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691249/blanqueamiento_fjqgek.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691250/carillas_bsrmgb.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691251/carillas0_t0blpn.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691251/carillas1_eu272q.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691253/carillas2_dduocs.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691254/carillas3_vtxeia.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691255/carillas4_j0pwl7.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691256/carillas5_ah9izt.jpg" },

      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691257/carillas6_utzovc.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691258/carillas7_ds5eb0.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691259/cirugiaguiada_xtdqdo.jpg" },

      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691260/disen%CC%83odesonrisa_1_mlq6g8.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691262/disen%CC%83odesonrisa_zyht1i.jpg" },
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691263/endodoncia_fwr6wp.jpg"},
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691264/escaneointraoral_y7fzx0.jpg"},
      { type: "image", src: "https://res.cloudinary.com/dcerhiol0/image/upload/v1766691265/fotoestetica_rdhpyb.jpg"
      }
    ],
    []
  );

  const [current, setCurrent] = useState(0);

  // ========================================
  // AUTO-SLIDE
  // ========================================
  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      6000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  // ========================================
  // TOUCH SWIPE
  // ========================================
  const startX = useRef(0);
  const endX = useRef(0);

  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = startX.current - endX.current;

    if (distance > 50) {
      //  swipe left
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (distance < -50) {
      //                                      swipe right
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  return (
    <section className="video-carousel-section">
      <h2 className="carousel-title">Nuestro Trabajo en Acción</h2>

      <div className="carousel-wrapper">
        <div
          className="hero-carousel"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
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
                      poster={slide.poster}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="carousel-video"
                    />
                  ) : (
                    <img src={slide.src} alt={`slide-${index}`} loading="lazy" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
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