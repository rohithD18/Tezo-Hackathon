import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../authConfig";
import { useNavigate } from "react-router-dom";
import "../App.css";
import hackathonLogo from "../assets/hackathonLogo.png";
import "../styles/Login.css";
import microsoftLogo from "../assets/microsoftLogo.png";
import { useEffect } from "react";
import "../styles/Login.css";
import signoutIcon from "../assets/signout.png";
import vectorRight from "../assets/rightVector.png";
import plusSigns from "../assets/plusSigns.png";
import vector from "../assets/vecktorAll.png";

export const pca = new PublicClientApplication(msalConfig);

export function LogInLogOutComp() {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { accounts } = useMsal();
  const username: string = accounts[0]?.username;
  const fullName: string | undefined = accounts[0]?.name;
  console.log("login", username, fullName);

  useEffect(() => {
    username && localStorage.setItem("username", username);
    fullName && localStorage.setItem("fullName", fullName);
  }, [username, fullName]);

  const handleLoginPopup = () => {
    instance
      .loginRedirect()
      .catch((error) => console.log(error))
      .then((res) => {
        localStorage.setItem("userDataL", JSON.stringify(res));
        navigate("/");
      });
  };
  const handleLogoutPopup = () => {
    instance
      .logout()
      .then((res) => {
        console.log("logOutRes", res);
      })
      .catch((err) => console.error(err));
    localStorage.removeItem("userDataL");
    localStorage.removeItem("username");
    localStorage.removeItem("fullName");
    navigate("/");
  };

  return (
    <div>
      <AuthenticatedTemplate>
        <div className="logoutBtn" onClick={handleLogoutPopup}>
          <img src={signoutIcon} alt="signoutIcon" />
          Sign out
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="loginBtn" onClick={handleLoginPopup}>
          <img src={microsoftLogo} alt="microsoftLogo" />
          Sign in with Microsoft
        </div>
      </UnauthenticatedTemplate>
    </div>
  );
}

export const Login = () => {
  return (
    <div className="loginSection">
      <div className="welcomeDiv">
        <img src={hackathonLogo} alt="Hackathon logo" />
        <p>Welcome to</p>
        <h4>TEZO</h4>
        <h4>HACKATHON</h4>
        <p id="welComeDesc">
          Unlock creativity, foster collaboration and code your way to
          innovation in Tezo-Hackathon-where brilliant minds converge to shape
          the future of technology!
        </p>
      </div>
      <img src={vectorRight} alt="veckto" id="vectorRight" />
      <img src={plusSigns} alt="vecktor" id="plusSigns" />
      <img src={vector} alt="vecktor" id="vector" />

      <div className="logInOutComp">
        <LogInLogOutComp />
      </div>
    </div>
  );
};
