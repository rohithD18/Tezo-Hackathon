import React from "react";
import "../styles/ShimmerCard.css";
import { FaHashtag } from "react-icons/fa";

const ShimmerCardUI: React.FC = () => {

  return (
    <div>
      <div className="cardAll shimmerCardBody">
        <div className="card1">
          <div className="cardLogo">
            <div className="cardgroup">
              <span className="cardRank"></span>
              <FaHashtag className="hashIcon" />
            </div>
            <div className="cardPoint1">
              <div className="cardPoint2">
                <div className="skeleton starIcon"></div>
                <div className="skeleton cardPoint"></div>
              </div>
            </div>
          </div>
          <div className="team">
            <div className="skeleton teamNames"></div>
          </div>
        </div>
        <div className="card2">
          <span className="captainTitle">Captain</span>
          <div className="cardCaptain">
            <div className="skeleton captainImage"></div>
            <div className="skeleton captainName"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCardUI;
