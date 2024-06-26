import React, { useEffect, useRef, useState } from "react";
import "../styles/HomePageMain.css";
import { eventDate } from "../services/Profile";

const RemainingTime = () => {
  const [remainingTimeArray, setRemainingTimeArray] = useState<number[]>([
    0, 0, 0, 0,
  ]);
  
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null); // Create a ref for intervalId

  useEffect(() => {
    const calculateRemainingTime = () => {
      // const eventDate = new Date("April 1, 2024 00:00:00").getTime();
      

      const nowDate = new Date().getTime();
      const dateDiff = eventDate - nowDate;

      const remainingDays = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
      const remainingHours = Math.floor(
        (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const remainingMinutes = Math.floor(
        (dateDiff % (1000 * 60 * 60)) / (1000 * 60)
      );
      const remainingSeconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

      const newRemainingTimeArray = [
        remainingDays,
        remainingHours,
        remainingMinutes,
        remainingSeconds,
      ];

      setRemainingTimeArray(newRemainingTimeArray);
    };

    calculateRemainingTime();
    intervalIdRef.current = setInterval(calculateRemainingTime, 1000);

    return () => clearInterval(intervalIdRef.current!);
  }, []);

  return (
    <div className="cards">
      {remainingTimeArray.map((item, index) => (
        <div className="card" key={index}>
          <label className="number">{item < 0 ? "00" : item <10 ? "0" + item : item}</label>
          {index === 0 ? (
            <label className="timeValue">days</label>
          ) : index === 1 ? (
            <label className="timeValue">hours</label>
          ) : index === 2 ? (
            <label className="timeValue">minutes</label>
          ) : (
            <label className="timeValue">seconds</label>
          )}
        </div>
      ))}
    </div>
  );
};

export default RemainingTime;
