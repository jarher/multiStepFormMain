/* eslint-disable react/prop-types */
import "./Card.css";
import { useContext, useState } from "react";
import { DataContext } from "../../Provider";

export default function Card({ dataPlan, cardData, index }) {
  const { setPlan } = useContext(DataContext);

  return (
    <div
      onClick={() => {
        const plan = dataPlan[index];
        plan.isSelected = true;
        setPlan(plan);
      }}
      className={`card`}
    >
      <img src={cardData.image} alt="card-icon" className="cardIcon" />
      <div className="cardTextWrapper">
        <span className="cardTitle">{cardData.name}</span>
        <span className="cardPrice">{cardData.price}</span>
      </div>
    </div>
  );
}
