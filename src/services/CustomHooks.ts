import { useEffect, useState } from "react";
import { ITeams } from "../Interfaces";
import {
  IAllEvents,
  IAllProject,
  IAllTeams,
  IPointsTable,
  ITeamMember,
} from "./Interface/HackathonInterface";
import {
  getAllTeamMembers,
  getEvents,
  getPointsTable,
  getProjects,
  getTeams,
} from "./Services";

export const useFecthApis = () => {
  const [allTeams, setAllTeams] = useState<IAllTeams[]>([]);
  const [allProjects, setAllProjects] = useState<IAllProject[]>([]);
  const [allTeamMembers, setAllTeamMembers] = useState<ITeamMember[]>([]);
  const [pointsTable, setPointsTable] = useState<IPointsTable[]>([]);
  const [allEvents, setAllEvents] = useState<IAllEvents[]>([]);

  useEffect(() => {
    getTeams().then((res) => setAllTeams(res));
    getProjects().then((res) => setAllProjects(res));
    getAllTeamMembers().then((res) => setAllTeamMembers(res));
    getPointsTable().then((res) => setPointsTable(res));
    getEvents().then((res) => setAllEvents(res));
  });

  return { allTeams, allProjects, allTeamMembers, pointsTable, allEvents };
};
