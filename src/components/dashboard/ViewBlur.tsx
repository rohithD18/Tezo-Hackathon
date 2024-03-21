import React from "react";
import "../../styles/dashboard/ViewBlur.css"; // Import CSS file for styling
import Rating from "./Rating";
import RejectedFeedback from "./RejectedFeedback";

type Props = {
  isRating: any;
  setIsApplicationDetailsOpen: any;
  isRejectedFeed: any;
  setIsRejectedFeed:any;
  setIsRating:any
};
const ViewBlur = (props: Props) => {
  const { isRating, setIsApplicationDetailsOpen, isRejectedFeed , setIsRejectedFeed,setIsRating} = props;
  return (
    <div className="blur-container">
      <div className="blur-background">
        {isRating && (
          <Rating setIsApplicationDetailsOpen={setIsApplicationDetailsOpen} setIsRating={setIsRating} />
        )}
        {isRejectedFeed && <RejectedFeedback  setIsApplicationDetailsOpen={setIsApplicationDetailsOpen} setIsRejectedFeed={setIsRejectedFeed} />}
      </div>
    </div>
  );
};

export default ViewBlur;
