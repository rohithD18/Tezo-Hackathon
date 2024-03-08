import React from "react";
import "../styles/MyTeam.css";
import image from "../assets/image.png";
import NavBarCopy from "./NavBarCopy";
const MyTeam: React.FC = () => {
  const dataArray = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      {" "}
      <NavBarCopy />
      <div className="root">
        <div className="container">
          <div className="row topContainer">
            <div className="col-sm-1">
              <label htmlFor="checkbox" className="item">
                All
              </label>
            </div>
            <div className="col-sm-1 item" style={{ width: 110 }}>
              My Team
            </div>
          </div>
        </div>
        <div className="borderStyling"></div>
        <div className="container">
          <div className="row">
            {dataArray.map((value, index) => (
              <div className="cardsStyling col-sm-4 mb-3">
                <div className="cardStyling">
                  <div className="row rowStyling">
                    <div className="col-md-6 w-25">
                      <img
                        src={image}
                        width={64}
                        height={64}
                        className="imgStyling"
                      ></img>
                    </div>
                    <div className="col-md-6 pr-4">
                      <div className="container">
                        <div className="d-flex flex-column">
                          <div className="nameStyling">Sayantan Nath</div>
                          <div className="emailStyling">
                            sayantan.n@gmail.com
                          </div>
                          <div className="empIdStyling">Emp. ID 2456</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyTeam;
