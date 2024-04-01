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
};
const ViewBlur: React.FC<Props> = (props: Props) => {
  const { isRating, isRejectedFeed, setIsRejectedFeed, setIsRating } = props;
  return (
    <div className="blur-container">
      <div className="blur-background">
        {isRating && <Rating setIsRating={setIsRating} />}
        {isRejectedFeed && (
          <RejectedFeedback setIsRejectedFeed={setIsRejectedFeed} />
        )}
      </div>
    </div>
  );
};

export default ViewBlur;
