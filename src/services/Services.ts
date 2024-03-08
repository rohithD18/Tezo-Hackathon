import axios from "axios";

const token: string =
  "eyJ0eXAiOiJKV1QiLCJub25jZSI6IjQ0X2ZwbkdWR011N2tJbDZiMDFvc2d1X3lSUEp1akJtdlVPMkxFczBZMmsiLCJhbGciOiJSUzI1NiIsIng1dCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSIsImtpZCI6IlhSdmtvOFA3QTNVYVdTblU3Yk05blQwTWpoQSJ9.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTAwMDAtYzAwMC0wMDAwMDAwMDAwMDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC84NjVjYzUxNS1hNTMwLTQ1MzgtOGVmOC0wNzJiN2IyYmU3NTkvIiwiaWF0IjoxNzA5NjQxMzk3LCJuYmYiOjE3MDk2NDEzOTcsImV4cCI6MTcwOTcyODA5OCwiYWNjdCI6MCwiYWNyIjoiMSIsImFpbyI6IkFWUUFxLzhXQUFBQUJqWmtaODNjQUo0OTZhVTQ1dWNlN1Q0M3Q4U0FkNklYTzFMY1o5NFI1WDkvakRtQTJFZGJ2YmxsL1RPV0lib1c0K0tKa2VKRFBWYTRjaW1xZUdPOWZOb2hLaFZMMU8yOW1RbmFTRzZTYmhJPSIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwX2Rpc3BsYXluYW1lIjoiR3JhcGggRXhwbG9yZXIiLCJhcHBpZCI6ImRlOGJjOGI1LWQ5ZjktNDhiMS1hOGFkLWI3NDhkYTcyNTA2NCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiRHVkYW0iLCJnaXZlbl9uYW1lIjoiUm9oaXRoIiwiaWR0eXAiOiJ1c2VyIiwiaXBhZGRyIjoiNDkuMjQ5Ljg1LjIiLCJuYW1lIjoiUm9oaXRoIER1ZGFtIiwib2lkIjoiMDRlMTNhYTctNGFlOS00NWVjLTkxYTYtOGI4ODQ3MTFiYjg0Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTIyMzA3NjMwMjItMjM4NDA0MDE5MC0xOTI4Nzc2NTI0LTY3MjciLCJwbGF0ZiI6IjMiLCJwdWlkIjoiMTAwMzIwMDI2RTY5QzYzQiIsInJoIjoiMC5BU3NBRmNWY2hqQ2xPRVdPLUFjcmV5dm5XUU1BQUFBQUFBQUF3QUFBQUFBQUFBQXJBS0EuIiwic2NwIjoiQ2FsZW5kYXJzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkV3JpdGUgRmlsZXMuUmVhZFdyaXRlLkFsbCBNYWlsLlJlYWRXcml0ZSBOb3Rlcy5SZWFkV3JpdGUuQWxsIG9wZW5pZCBQZW9wbGUuUmVhZCBwcm9maWxlIFNpdGVzLlJlYWRXcml0ZS5BbGwgVGFza3MuUmVhZFdyaXRlIFVzZXIuUmVhZEJhc2ljLkFsbCBVc2VyLlJlYWRXcml0ZSBlbWFpbCBVc2VyLlJlYWQiLCJzaWduaW5fc3RhdGUiOlsiaW5rbm93bm50d2siXSwic3ViIjoicExHYzlvcXdIYkh6bmN2eFp0ZzZiV2k3c1BlZXFlRWNNNUJnZDhNTkFDcyIsInRlbmFudF9yZWdpb25fc2NvcGUiOiJBUyIsInRpZCI6Ijg2NWNjNTE1LWE1MzAtNDUzOC04ZWY4LTA3MmI3YjJiZTc1OSIsInVuaXF1ZV9uYW1lIjoicm9oaXRoLmRAVGVjaG5vdmVydC5jb20iLCJ1cG4iOiJyb2hpdGguZEBUZWNobm92ZXJ0LmNvbSIsInV0aSI6IllaalJYbXdZWlUydTZraDBUVUlHQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfY2MiOlsiQ1AxIl0sInhtc19zc20iOiIxIiwieG1zX3N0Ijp7InN1YiI6InJFM1hJdzFlVXhjVi1KUUJ1dnRrM0kxVVowRUZKeS10Ym10T3BaUjNCRG8ifSwieG1zX3RjZHQiOjE1Mjg2MjQ3MjR9.iXYn0ql63NpKHw5IW_q_t3UEdwRRYUwfCor9fduodwSKaUx0iST-yjhNQEdhoEQPvCaJZehGzkPt9_R3lAdNGF7pYGSNNzR7nEqmdZ0ma4DMfayQdqE10DWKt9ikm35TN0bVTO4gtznspqcIMTU8aLhvXFSwwT0bYSkRru9YyKQWBn1cRYiw8Ciek8ntQoHkgIe_ukJjAdj6ceWYqpRhYfCHFglXEN26EkezVRRn23x6IczeBfg_OssvJBt4vKZB1g0f5Rb4aFnMRT8J8x3sgJ-KqnnQ28mBuwXfE0TFPkbN7-HkGWOD5rj4Xs6GMKQ9K9XEktqxG6N7MPUfaTalBA";

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
  axios
    .get(
      "https://graph.microsoft.com/v1.0/users?$filter=startsWith(displayName,'Rohith')",
      {
        headers: {
          Authorization: "Bearer" + token,
          ConsistencyLevel: "eventual",
        },
      }
    )
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
