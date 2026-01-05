// src/components/reviews/Reviews.jsx
import { useState, useRef } from "react";
import "./reviews.css";

import { reviewsJuarez } from "./reviewsJuarez";

function Reviews() {
  const [page, setPage] = useState(1);
  const [fadeKey, setFadeKey] = useState(0);

  const reviews = reviewsJuarez;

  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const startIndex = (page - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const changePage = (newPage) => {
    if (newPage === page || newPage < 1 || newPage > totalPages) return;
    setPage(newPage);
    setFadeKey((prev) => prev + 1);
  };

  /* ======================
     PAGINACIÓN (máx 5)
  ======================= */
  const MAX_VISIBLE = 5;

  const getVisiblePages = () => {
    let start = Math.max(1, page - Math.floor(MAX_VISIBLE / 2));
    let end = start + MAX_VISIBLE - 1;

    if (end > totalPages) {
      end = totalPages;
      start = Math.max(1, end - MAX_VISIBLE + 1);
    }

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const nextPage = () => changePage(page + 1);
  const prevPage = () => changePage(page - 1);

  /* ======================
     TOUCH SWIPE
  ======================= */
  const touchX = useRef(0);

  const handleTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchX.current;
    if (delta > 40) prevPage();
    if (delta < -40) nextPage();
  };

  return (
    <section className="reviews-section">
      {/* TÍTULO */}
      <div className="reviews-header">
        <h2 className="reviews-title">Reseñas de Google</h2>

        <div className="reviews-tabs">
          <button className="active">Creo Dental Juárez</button>
        </div>
      </div>

      {/* GRID */}
      <div
        key={fadeKey}
        className="reviews-grid fade-slide"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {currentReviews.map((review, index) => (
          <div className="review-card" key={index}>
            <div className="review-google-icon">
              <img src="/reviews/google-letra.svg" alt="Google logo" />
            </div>

            <div className="review-header">
              <h3>{review.name}</h3>
              <span className="review-stars">
                {"⭐".repeat(review.stars)}
              </span>
            </div>

            <p className="review-date">{review.date}</p>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
      </div>

      {/* PAGINACIÓN */}
      {totalPages > 1 && (
        <div className="reviews-pagination">

          <button
            className="page-arrow"
            onClick={prevPage}
            disabled={page === 1}
          >
            ‹
          </button>

          {getVisiblePages().map((n) => (
            <button
              key={n}
              className={`page-btn ${page === n ? "active" : ""}`}
              onClick={() => changePage(n)}
            >
              {n}
            </button>
          ))}

          <button
            className="page-arrow"
            onClick={nextPage}
            disabled={page === totalPages}
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
}

export default Reviews;
