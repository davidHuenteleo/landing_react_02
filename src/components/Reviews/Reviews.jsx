import { REVIEWS } from "../../utils/index"
import "./Reviews.css";

const Reviews = () => {
  return (
    <section className="reviews-section" id="reviews">
      <div className="reviews-container">
        <h2 className="reviews-title">Reviews</h2>
        <p className="reviews-subtitle">{REVIEWS.text}</p>

        <div className="reviews-list">
          {REVIEWS.reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-text">{review.review}</p>

              <div className="review-author">
                <img
                  src={review.image}
                  alt={review.name}
                  className="review-image"
                />
                <div>
                  <p className="review-name">{review.name}</p>
                  <p className="review-role">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
