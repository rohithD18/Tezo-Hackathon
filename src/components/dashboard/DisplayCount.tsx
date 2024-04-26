import React, { useEffect, useState } from "react";
import Participant from "../../assets/participant.png";
import RegistrationIcon from "../../assets/registrationIcon.png";
import Submittedicon from "../../assets/submittedIcon.png";
import "../../styles/dashboard/DashboardView.css";
import { useCount } from "../../services/CustomHooks";
import { Skeleton } from "@mui/material";

export const DisplayCount = () => {
  const { countParticipant, countRegisteredTeams, countSubmittedProjects } = useCount();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="displayComponent">
      <div>
        <img src={Participant} alt="participant icon" />
        <p className="displayComponentName">Total Participants</p>
        {loading ? (
          <Skeleton variant="rectangular" width={50} height={50} />
        ) : (
          <p>{countParticipant}</p>
        )}
      </div>
      <div>
        <img src={RegistrationIcon} alt="" />
        <p className="displayComponentName">Registered Teams</p>
        {loading ? (
          <Skeleton variant="rectangular" width={50} height={50} />
        ) : (
          <p>{countRegisteredTeams}</p>
        )}
      </div>
      <div>
        <img src={Submittedicon} alt="" />
        <p className="displayComponentName">Total Submitted Projects</p>
        {loading ? (
          <Skeleton variant="rectangular" width={50} height={50} />
        ) : (
          <p>{countSubmittedProjects}</p>
        )}
      </div>
    </div>
  );
};
