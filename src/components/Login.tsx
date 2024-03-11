import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
  useMsal,
} from "@azure/msal-react";
import {
  // InteractionStatus,
  PublicClientApplication,
} from "@azure/msal-browser";
import { msalConfig } from "../authConfig";
import { useNavigate } from "react-router-dom";
import "../App.css";
import hackathonLogo from "../assets/hackathonLogo.png";
import vector from "../assets/upVector.png";
import "../styles/Login.css";
import microsoftLogo from "../assets/microsoftLogo.png";
import { useEffect } from "react";
import { getAUser, getUsers } from "../services/Services";
import "../styles/Login.css";

const pca = new PublicClientApplication(msalConfig);

interface IProps1 {
  userNameFromLogInLogOutComp: (message: string) => void;
}
interface IProps2 {
  setUserName: (message: string) => void;
}

function LogInLogOutComp({ userNameFromLogInLogOutComp }: IProps1) {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { accounts } = useMsal();
  const username: string = accounts[0]?.username;
  useEffect(() => {
    username && localStorage.setItem("username", username);
    userNameFromLogInLogOutComp(username);
  }, [username, userNameFromLogInLogOutComp]);

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

  useEffect(() => {
    getUsers();
    // username ?
  }, []);

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
    <div className="logInOutComp">
      <AuthenticatedTemplate>
        <div className="loginLogoutBtn" onClick={handleLogoutPopup}>
          Logout
        </div>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <div className="loginLogoutBtn" onClick={handleLoginPopup}>
          <img src={microsoftLogo} alt="microsoftLogo" />
          Sign in with Microsoft
        </div>
      </UnauthenticatedTemplate>
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
      {/* <img src={vector} alt="veckto" /> */}

      <MsalProvider instance={pca}>
        <LogInLogOutComp
          userNameFromLogInLogOutComp={userNameFromLogInLogOutComp}
        />
      </MsalProvider>
    </div>
  );
};
