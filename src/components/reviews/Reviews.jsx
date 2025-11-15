// src/components/reviews/Reviews.jsx
import { useState } from "react";
import "./reviews.css";
import { reviewsJuarez, reviewsAmericas } from "./reviewsData";

function Reviews() {
  const [branch, setBranch] = useState("juarez");
  const [page, setPage] = useState(1);

  const reviews = branch === "juarez" ? reviewsJuarez : reviewsAmericas;

  const reviewsPerPage = 6;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  const startIndex = (page - 1) * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);

  const changeBranch = (newBranch) => {
    setBranch(newBranch);
    setPage(1); // reset al cambiar sucursal
  };

  return (
    <section className="reviews-section">
      {/* HEADER */}
      <div className="reviews-header">
        <h2 className="reviews-title">Reseñas de Google</h2>

        <div className="reviews-tabs">
          <button
            className={branch === "juarez" ? "active" : ""}
            onClick={() => changeBranch("juarez")}
          >
            Creo Dental Juárez
          </button>

          <button
            className={branch === "americas" ? "active" : ""}
            onClick={() => changeBranch("americas")}
          >
            Creo Dental Américas
          </button>
        </div>
      </div>

      {/* GRID */}
      <div className="reviews-grid animated-grid">
        {currentReviews.map((review, index) => (
          <div className="review-card fade-ojiva" key={index}>
            <div className="review-google-icon">
              <img
                src="/reviews/google-letra.svg"
                alt="Google logo"
              />
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
      <div className="reviews-pagination">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`page-btn ${page === i + 1 ? "active" : ""}`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Reviews;