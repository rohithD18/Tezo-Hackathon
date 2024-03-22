import axios from "axios";
import { membersArray } from "../components/registration/MembersA";
import { UsersData } from "./Data";
import { useEffect, useState } from "react";

export const getAMember = (value: string) => {
  const member = UsersData.filter((entry) =>
    entry.Name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
  );
  console.log("memeber", member);
  // AllTeams.TeamMembers[0] = member[0];
  return member;
};

export const useFetch = (
  queary: string,
  setQueary: (message: string) => void
) => {
  // const [queary, setQueary] = useState<string>("");
  const [isQA, setIsQA] = useState<boolean>(false);
  const [isLimitAchieved, setIsLimitAchieved] = useState<boolean>(false);
  // console.log(membersArray, isQA);

  useEffect(() => {
    if (membersArray.filter((item) => item?.Department === "QA").length > 0) {
      setIsQA(true);
      // setQueary("");
    }
    if (membersArray.length >= 8) {
      setIsLimitAchieved(true);
      alert("Your team limit has achieved!");
      // setQueary("");
    } else {
      if (queary.length > 3) {
        if (
          membersArray.filter(
            (item) => item?.Name === getAMember(queary)[0]?.Name
          ).length > 0 ||
          getAMember(queary).length === 0
        ) {
          getAMember(queary).length === 0
            ? alert("no user with " + queary)
            : alert("Alredy present");
          // setQueary("");
        } else {
          membersArray.filter((item) => item?.Department === "QA").length ==
            1 && getAMember(queary)[0]?.Department === "QA"
            ? alert("You already have a QA")
            : membersArray.push(getAMember(queary)[0]);
          setQueary("");
        }
      }
    }
  }, [queary, setQueary]);

  return { queary, isQA, isLimitAchieved, membersArray };
};
