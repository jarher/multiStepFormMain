/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import "./InputRange.css";
import { DataContext } from "../../Providers/Provider";

export default function InputRange({ timePlan, changeTimePlan }) {
  const { userData, data } = useContext(DataContext);

  useEffect(() => {
    const index = userData.planSelected.planIndex;

    userData.planSelected =
      timePlan === "Monthly"
        ? data.monthly.plan[index]
        : data.yearly.plan[index];

    userData.planSelected.isSelected = true;
    
  }, [timePlan]);

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
          changeTimePlan(e.target.value === "0" ? "Monthly" : "Yearly");
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
