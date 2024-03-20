import React from "react";
import "../../styles/dashboard/ViewBlur.css"; // Import CSS file for styling
import Rating from "./Rating";
import RejectedFeedback from "./RejectedFeedback";

type Props = {
  isRating: any;
  setIsApplicationDetailsOpen: any;
  isRejectedFeed: any;
};
const ViewBlur = (props: Props) => {
  const { isRating, setIsApplicationDetailsOpen, isRejectedFeed } = props;
  return (
    <div className="blur-container">
      <div className="blur-background">
        {isRating && (
          <Rating setIsApplicationDetailsOpen={setIsApplicationDetailsOpen} />
        )}
        {isRejectedFeed && <RejectedFeedback  setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}/>}
      </div>
    </div>
  );
};

export default ViewBlur;
