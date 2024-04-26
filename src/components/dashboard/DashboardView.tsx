import React, { useEffect, useState } from "react";
import Participant from "../../assets/participant.png";
import RegistrationIcon from "../../assets/registrationIcon.png";
import Submittedicon from "../../assets/submittedIcon.png";
import image from "../../assets/image.png";
import "react-circular-progressbar/dist/styles.css";
import { Teams } from "../../services/Data";
import { DisplayCount } from "./DisplayCount";
import "../../styles/dashboard/DashboardView.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import DashboardNav from "./DashboardNav";
import { useCount, useFecthApis } from "../../services/CustomHooks";
import { IPointsTable } from "../../services/Interface/HackathonInterface";
import Skeleton from "@mui/material/Skeleton";
import { Box, CircularProgress } from "@mui/material";

const DashboardView: React.FC = () => {
  const {
    allTeams,
    allProjects,
    allTeamMembers,
    pointsTable,
    allEvents,
    usersData,
  } = useFecthApis();
  const { countParticipant, countRegisteredTeams, countSubmittedProjects } =
    useCount();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      
      <div className="DashboardView">
        <div className="countDiv">
          <DisplayCount />
          <div className="itenary">
            <h5>Itenary</h5>
            <div>
              <p>Opening ceremony</p>
              <p>15th March</p>
            </div>
            <div>
              <p>Registeration</p>
              <p>15th March</p>
            </div>
            <div>
              <p>Project Submission</p>
              <p>15th March</p>
            </div>
            <div>
              <p>Hackathon Begins</p>
              <p>15th March</p>
            </div>
            <div>
              <p>Project Presentation</p>
              <p>15th March</p>
            </div>
            <div>
              <p>Closing & Awards</p>
              <p>15th March</p>
            </div>
          </div>
        </div>
        <div className="rates">
          <div className="SubmissionRateDiv">
            <p>Submission rate</p>
            <div className="progressRate">
              <div className="progressData">
                <div>
                  <p>Total registrations</p>
                  <p>{countRegisteredTeams}</p>
                </div>
                <div className="projectSubmissionData">
                  <p>Total submissions</p>
                  <p>{countSubmittedProjects}</p>
                </div>
              </div>
              
                <div className="progressBar">
                 {
                  loading ?<Box  className="loadspinner" sx={{ display: 'flex' }}>
                  <CircularProgress />
                </Box>:
                 
                <CircularProgressbar
                  value={Math.round(
                    (countSubmittedProjects / countRegisteredTeams) * 100
                  )}
                  text={`${(
                    (countSubmittedProjects / countRegisteredTeams) *
                    100
                  ).toFixed(2)}%`}
                  styles={buildStyles({
              
                    rotation: 0.5,
                    strokeLinecap: "butt",
                    pathTransitionDuration: 0.5,
                    pathColor: `#FFD54F`,
                    textColor: "#EEEEEE",
                    trailColor: "#d6d6d6",
                  })}
                />}
              </div>
              
              
            </div>
          </div>
               
          <div className="topPerformingComponent">
            <p>Top-performing Teams</p><>
            {loading ? (
              <Box  className="skeltonPoint" >
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </Box>
            ) : ( 
              pointsTable
                .sort((a, b) => b.overAllScore - a.overAllScore)
                .map((item, index) => {
                  const teamDetail = allTeams.filter(
                    (team1) => team1.id === item.teamId
                  )[0];
                  return (
                    <div key={index} className="topScoredisplay">
                      <div>
                        <p className="rank">{index + 1}</p>
                        <img src={image} alt="teamlogo" />
                        <p className="teamName">{teamDetail.teamName}</p>
                      </div>
                      <div>
                        <div className="points">{item.overAllScore}pts</div>
                      </div>
                    </div>
                  );
                })
            )}</>
          </div>
                    
        </div>
      </div>
    </>
  );
};

export default DashboardView;
