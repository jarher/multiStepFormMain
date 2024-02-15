/* eslint-disable react/prop-types */
import "./Card.css";
import { useContext } from "react";
import { DataContext } from "../../Provider";

export default function Card({
  cardData,
  dataPlan,
  cardIndex,
  setCardIndex,
  index,
}) {
  const { userData } = useContext(DataContext);

  const newPlan = dataPlan[index];

  return (
    <div
      className={`card ${cardIndex === index ? "elementSelected" : ""}`}
      onClick={() => {
        newPlan.isSelected = true;
        userData.planSelected = newPlan;
        setCardIndex(index);
      }}
    >
      <img src={cardData.image} alt="card-icon" className="cardIcon" />
      <div className="cardTextWrapper">
        <span className="cardTitle">{cardData.name}</span>
        <span className="cardPrice">{cardData.price}</span>
      </div>
    </div>
  );
}
