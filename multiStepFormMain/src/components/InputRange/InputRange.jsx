/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import "./InputRange.css";
import { DataContext } from "../../Providers/Provider";
import saveInLocalStorage from "../../utils/saveLocally";

export default function InputRange({data}) {
  const { userData } = useContext(DataContext);
  const {timePlan, changeTimePlan} = data;

  useEffect(() => {
    const data = [userData.planSelected, userData.addonsSelected];
    data.forEach((element) => {
      element.forEach((subElement) => {
        timePlan == "Monthly"
          ? (subElement.isMonthly = true)
          : (subElement.isMonthly = false);
      });
    });
    userData.timePlan = timePlan;
    saveInLocalStorage(userData);
  }, [timePlan]);

  return (
    <form className="inputRangeWrapper">
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
        aria-valuemax={1}
        aria-valuemin={0}
        aria-valuenow={0}
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
    </form>
  );
}
