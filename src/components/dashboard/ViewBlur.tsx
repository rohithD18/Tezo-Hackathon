import React from "react";
import "../../styles/dashboard/ViewBlur.css"; // Import CSS file for styling
import Rating from "./Rating";
import RejectedFeedback from "./RejectedFeedback";
import { Shedule } from "./Shedule";
import EventSchedulePopUp from "./EventSchedulePopUp";

type Props = {
  isRating: boolean;
  isRejectedFeed: boolean;
  setIsRejectedFeed: (message: boolean) => void;
  setIsRating: (message: boolean) => void;
  selectedRatingValue?:(data:number)=>void
};
const ViewBlur: React.FC<Props> = (props: Props) => {
 
  const { isRating, isRejectedFeed, setIsRejectedFeed, setIsRating,selectedRatingValue } = props;
  const handleChildData = (data:number) => {
    selectedRatingValue && selectedRatingValue(data)
    // Do something with the data received from the child
  };
  return (
    <div className="blur-container">
      <div className="blur-background">
        {isRating && <Rating setIsRating={setIsRating} selectedRatingValue={handleChildData} />}
        {isRejectedFeed && (
          <RejectedFeedback setIsRejectedFeed={setIsRejectedFeed} />
        )}
      </div>
    </div>
  );
};

export default ViewBlur;
