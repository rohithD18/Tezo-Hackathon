import { MsalProvider, useMsal } from "@azure/msal-react";
import {
  // InteractionStatus,
  PublicClientApplication,
} from "@azure/msal-browser";
import { msalConfig } from "../authConfig";
import { useNavigate } from "react-router-dom";
import "../App.css";
import hackathonLogo from "../assets/hackathonLogo.png";
import "../styles/Login.css";
import microsoftLogo from "../assets/microsoftLogo.png";
import { useEffect } from "react";
// import { getUsers } from "../services/Services";
import "../styles/Login.css";
import signoutIcon from "../assets/signout.png";
import vectorRight from "../assets/rightVector.png";
import plusSigns from "../assets/plusSigns.png";
import vector from "../assets/vecktorAll.png";

export const pca = new PublicClientApplication(msalConfig);

interface IProps1 {
  userNameFromLogInLogOutComp: (message: string) => void;
}
interface IProps2 {
  setUserName: (message: string) => void;
}

export function LogInLogOutComp({ userNameFromLogInLogOutComp }: IProps1) {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { accounts } = useMsal();
  const username: string = accounts[0]?.username;
  const fullName: string | undefined = accounts[0]?.name;

  useEffect(() => {
    username && localStorage.setItem("username", username);
    fullName && localStorage.setItem("fullName", fullName);
    userNameFromLogInLogOutComp(username);
  }, [username, userNameFromLogInLogOutComp, fullName]);

  const handleLoginPopup = () => {
    instance
      .loginPopup()
      .catch((error) => console.log(error))
      .then((res) => {
        // console.log("response", res);
        localStorage.setItem("userDataL", JSON.stringify(res));
        navigate("/");
      });
  };

  // useEffect(() => {
  //   getUsers();
  //   // username ?
  // }, []);

  const handleLogoutPopup = () => {
    instance
      .logoutPopup({
        mainWindowRedirectUri: "/", // redirects the top level app after logout
      })
      .then((res) => console.log("logOutRes", res));
    localStorage.removeItem("userDataL");
    localStorage.removeItem("username");
  };

  return (
    <div>
      {/* <AuthenticatedTemplate> */}
      {localStorage.getItem("username")?.toString() ? (
        <div className="logoutBtn" onClick={handleLogoutPopup}>
          <img src={signoutIcon} alt="signoutIcon" />
          Sign out
        </div>
      ) : (
        <div className="loginBtn" onClick={handleLoginPopup}>
          <img src={microsoftLogo} alt="microsoftLogo" />
          Sign in with Microsoft
        </div>
      )}
    </div>
  );
}

export const Login = ({ setUserName }: IProps2) => {
  const userNameFromLogInLogOutComp = (data: string) => {
    setUserName(data); // or set the data to a state
  };
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
      {/* <img src={vectorDown} alt="veckto" id="vector4" />
      <img src={vectorUp} alt="veckto" id="vector3" />
      <img src={vectorUp} alt="veckto" id="vector2" />*/}
      <img src={vectorRight} alt="veckto" id="vectorRight" />
      <img src={plusSigns} alt="vecktor" id="plusSigns" />
      <img src={vector} alt="vecktor" id="vector" />

      <div className="logInOutComp">
        <MsalProvider instance={pca}>
          <LogInLogOutComp
            userNameFromLogInLogOutComp={userNameFromLogInLogOutComp}
          />
        </MsalProvider>
      </div>
    </div>
  );
};
