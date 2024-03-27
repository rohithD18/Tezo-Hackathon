import React from "react";
import "../../styles/dashboard/ViewBlur.css"; // Import CSS file for styling
import Rating from "./Rating";
import RejectedFeedback from "./RejectedFeedback";
import { Shedule } from "./Shedule";
import EventSchedulePopUp from "./EventSchedulePopUp";

type Props = {
  setIsProjectManagementDetailsOpen?:boolean;
  isRating: boolean;
  setIsApplicationDetailsOpen: (message: boolean) => void;
  isRejectedFeed: boolean;
  setIsRejectedFeed: (message: boolean) => void;
  setIsRating: (message: boolean) => void;
  isShedule:boolean;
  setShedule:(message : boolean) => void
};
const ViewBlur: React.FC<Props> = (props: Props) => {
  const {
    setIsProjectManagementDetailsOpen,
    isRating,
    setIsApplicationDetailsOpen,
    isRejectedFeed,
    setIsRejectedFeed,
    setIsRating,
    isShedule,
    setShedule
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
        {isShedule && (
          <Rating
          setIsApplicationDetailsOpen={setIsApplicationDetailsOpen}
          setIsProjectManagementDetailsOpen={setIsProjectManagementDetailsOpen}
          setIsRating={setIsRating}
        />

        )}
      </div>
    </div>
  );
};

export default ViewBlur;
