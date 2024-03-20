import React from "react";
import "../styles/InputSearch.css";
import { getAUser } from "../services/Services";
// import { getAUser } from "../services/Services";
// import { MsalProvider, useIsAuthenticated, useMsal } from "@azure/msal-react";
// import {
//   InteractionStatus,
//   PublicClientApplication,
// } from "@azure/msal-browser";
// import { msalConfig } from "../authConfig";
// const pca = new PublicClientApplication(msalConfig);
const InputSearch: React.FC = () => {
  // const [searchQ, setSearchQ] = useState<string>("");

  // useEffect(() => {

  //   searchQ.length > 2 && getAUser(searchQ);
  //   console.log("aaaaaaaaaa", searchQ, searchQ.length);
  // }, [searchQ]);
  // const isAuthenticated = useIsAuthenticated();
  // useEffect(() => {
  //   console.log(isAuthenticated, inProgress, instance);
  //   if (!isAuthenticated && inProgress === InteractionStatus.None) {
  //     instance.loginPopup();
  //   }
  // }, [isAuthenticated, inProgress, instance]);

  const handleChange = (value: string) => {
    // instance
    //   .acquireTokenSilent({
    //     scopes: ["openid", "profile", "user.read"],
    //     authority:
    //       "https://login.microsoftonline.com/865cc515-a530-4538-8ef8-072b7b2be759",
    //   })
    //   .then((response) => {
    //     console.log(response.accessToken);
    //     // getAUser(response.accessToken)
    //     //   .then((res) => console.log(res))
    //     //   .catch((err) => console.error(err));
    //   })
    //   .catch((err) => console.error("eror", err));
    getAUser();
  };

  return (
    <div className="inputWithSearchIcon">
      <input
        type="text"
        placeholder="Search by names"
        onChange={(e) => handleChange(e.target.value)}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
      </svg>
    </div>
  );
};

export default InputSearch;
