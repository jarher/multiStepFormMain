/* eslint-disable react/prop-types */
import { useContext } from "react";
import { DataContext } from "../Provider";

export default function Card({ dataPlan, cardData, index }) {
  const { setPlan } = useContext(DataContext);

  return (
    <div
      onClick={() => {
        const plan = dataPlan[index];
        plan.isSelected = true;
        setPlan(plan);
      }}
    >
      <img src={cardData.image} alt="card-icon" className="cardIcon" />
      <span className="cardTitle">{cardData.name}</span>
      <span className="cardPrice">{cardData.price}</span>
    </div>
  );
}
