/* eslint-disable react/prop-types */
import "./InputRange.css";

export default function InputRange({ timePlan, changeTimePlan }) {
  return (
    <div className="inputWrapper">
      <span
        className={`planName ${timePlan === "Monthly" ? "planSelected" : ""}`}
      >
        Monthly
      </span>
      <input
        type="range"
        name="switchPlanInput"
        id="switchPlanInput"
        min="0"
        max="1"
        defaultValue={timePlan === "Monthly" ? 0 : 1}
        onChange={(e) => {
          changeTimePlan(e.target.value === 0 ? "Monthly" : "Yearly");
        }}
      />
      <span
        className={`planName ${timePlan === "Yearly" ? "planSelected" : ""}`}
      >
        Yearly
      </span>
    </div>
  );
}
