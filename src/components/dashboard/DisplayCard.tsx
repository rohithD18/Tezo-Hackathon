import React from "react";
import "../../styles/dashboard/DisplayCard.css";

type Props = {
  cardData: any;
};

const DisplayCard = (props: Props) => {
  const { cardData } = props;

  return (
    <div className="displayComponents">
      {cardData.map((item: any, index: number) => (
        <div key={index} className="singleCard">
          <img src={item.image} alt="participant icon" />
          <p className="displayComponentsName">{item.title}</p>
          <p>{item.count}</p>
        </div>
      ))}
    </div>
  );
};

export default DisplayCard;
