import React from "react";
import "../../styles/dashboard/ViewBlur.css"; // Import CSS file for styling
import Rating from "./Rating";
import RejectedFeedback from "./RejectedFeedback";
import { Shedule } from "./Shedule";

type Props = {
  isRating: boolean;
  setIsApplicationDetailsOpen: (message: boolean) => void;
  isRejectedFeed: boolean;
  setIsRejectedFeed: (message: boolean) => void;
  setIsRating: (message: boolean) => void;
};
const ViewBlur: React.FC<Props> = (props: Props) => {
  const {
    isRating,
    setIsApplicationDetailsOpen,
    isRejectedFeed,
    setIsRejectedFeed,
    setIsRating,
  } = props;
  return (
    <div className="blur-container">
      <div className="blur-background">
        {isRating && (
          <Rating
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            setIsRating={setIsRating}
          />
        )}
        {isRejectedFeed && (
          <RejectedFeedback
            setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
            setIsRejectedFeed={setIsRejectedFeed}
          />
        )}
      </div>
    </div>
  );
};

export default ViewBlur;
