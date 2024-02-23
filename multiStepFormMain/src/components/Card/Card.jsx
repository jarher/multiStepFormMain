/* eslint-disable react/prop-types */
import getPrice from "../../utils/getPrice";
import "./Card.css";

export default function Card({ data }) {
  const { plan, timePlan, cardIndex, setCardIndex, index } = data;

  return (
    <div
      className={`card ${cardIndex === index ? "elementSelected" : ""}`}
      onClick={() => {
        setCardIndex(index);
      }}
    >
      <img src={plan.image} alt="card-icon" className="cardIcon" />
      <div className="cardTextWrapper">
        <span className="cardTitle">{plan.name}</span>
        <span className="cardPrice">
          {getPrice(timePlan, plan)}
        </span>

        {timePlan !== "Monthly" && (
          <span className="cardDescription">2 months free</span>
        )}
      </div>
    </div>
  );
}
