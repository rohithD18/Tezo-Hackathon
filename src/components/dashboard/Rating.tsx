import React, { useState } from "react";
import "../../styles/dashboard/Rating.css";
import xclose from "../../assets/xclose.png";
type Props = {
  setIsApplicationDetailsOpen: (message:boolean) => void;
  setIsRating: (message:boolean) => void;
};
const Rating = (props: Props) => {
  const { setIsApplicationDetailsOpen, setIsRating } = props;
  const ratings = Array.from({ length: 10 }, (_, index) => index + 1);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleRatingClick = (rating: any) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    setIsApplicationDetailsOpen(false);
    setIsRating(false);
    console.log("Selected rating:", selectedRating);
  };
  const handleClose = () => {
    setIsRating(false);
    setIsApplicationDetailsOpen(false);
  };

  return (
    <div className="ratingComponent">
      <span className="imgSpan" onClick={handleClose}>
        <img src={xclose} alt="Cancel" className="closeImg" />
      </span>
      <div className="ratingContainer">
        <span className="ratingText">
          How would you rate the Topic of the Team?
        </span>
        <div className="ratingCardContainer">
          {ratings.map((rating) => (
            <div
              key={rating}
              className={`ratingCard ${
                selectedRating && rating <= selectedRating ? "selected" : ""
              }`}
              onClick={() => handleRatingClick(rating)}
            >
              <span className="ratingNumber">{rating}</span>
            </div>
          ))}
        </div>
        <div className="descriptionContainer">
          <span className="ratingDescription">Very Poor</span>
          <span className="ratingDescription">Excellent</span>
        </div>
      </div>
      <button className="submitButton" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Rating;
