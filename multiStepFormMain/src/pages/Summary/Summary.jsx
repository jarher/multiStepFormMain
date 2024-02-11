import "./summary.css";
import { useContext } from "react";
import { Button } from "../../components/Button";

import { DataContext } from "../../Provider";
import Table from "../../components/Table";

export default function Summary() {
  const { timePlan, planSelected, addonSelected } = useContext(DataContext);

  const planPrice = Number.parseInt(
    planSelected.price.replace(/[+$/a-z^d]/g, "")
  );

  const addonPrice = addonSelected
    .filter((addon) => addon.isSelected === true)
    .map((addon) => Number.parseInt(addon.price.replace(/[+$/a-z^d]/g, "")))
    .reduce((acc, currentPrice) => acc + currentPrice, 0);

  const total = `$${planPrice + addonPrice}/${
    timePlan === "Monthly" ? "mo" : "yr"
  }`;

  return (
    <section className="summarySection">
      <div className="container">
        <div className="summaryWrapper">
          <h1>Finishing up</h1>
          <p>Double check everything looks OK before confirming.</p>
          <Table data={{ planSelected, addonSelected, timePlan, total }} />
        </div>
        <div className="buttonsContainer">
          <Button url={"/addons"} text={"Go Back"} index={2} />
          <Button url={"/confirm"} text={"Confirm"} />
        </div>
      </div>
    </section>
  );
}
