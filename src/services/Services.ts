import axios from "axios";

const userData: any = localStorage.getItem("userDataL");
// console.log("token", JSON.parse(t).accessToken);

const token: string = JSON.parse(userData)?.accessToken;

export const getUsers = async () => {
  let url = "https://graph.microsoft.com/v1.0/users?$top=100";
  // while(url){
  await axios
    .get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data["@odata.nextLink"]) {
        url = res.data["@odata.nextLink"];
        console.log(url);
      }
      console.log("apiResponse", res.data["@odata.nextLink"], res);
    })
    .catch((err) => console.error(err));
  // }
};

export const getAUser = () => {
  // const { instance } = useMsal();
  console.log(token);

  axios
    .get("https://graph.microsoft.com/v1.0/users", {
      headers: {
        Authorization: "Bearer" + token,
        ConsistencyLevel: "eventual",
      },
    })
    .then((res) => console.log("responseUser", res))
    .catch((err) => console.error(err));
};

// axios
//     .post(
//       ("https://graph.microsoft.com/beta/search/query",
//       {
//         headers: {
//           Authorization: "Bearer" + token,
//           // ConsistencyLevel: "eventual",
//           ContentType: "application/json",
//           // Content-Type: "application/json",
//         },
//         body: {
//           requests: [
//             {
//               entityTypes: ["person"],
//               query: {
//                 queryString: "Rohith",
//               },
//             },
//           ],
//         },
//       })
//     )

// const handleChange = (value) => {
//   instance
//     .acquireTokenSilent({
//       scopes: ["openid", "profile", "user.read"],
//       authority:
//         "https://login.microsoftonline.com/865cc515-a530-4538-8ef8-072b7b2be759",
//     })
//     .then((response) => {
//       console.log(response.accessToken);
//       // getAUser(response.accessToken)
//       //   .then((res) => console.log(res))
//       //   .catch((err) => console.error(err));
//     })
//     .catch((err) => console.error("eror", err));
// }
