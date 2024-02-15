import "./summary.css";
import { useContext, useEffect } from "react";
import { Button } from "../../components/button/Button";
import { DataContext } from "../../Provider";
import Table from "../../components/Table/Table";
import HeaderSection from "../../components/HeaderSection/HeaderSection";

export default function Summary() {
  const { userData, setNavIndex } = useContext(DataContext);

  const planPrice = Number.parseInt(
    userData.planSelected.price.replace(/[+$/a-z^d]/g, "")
  );

  const addonPrice = userData.addonsSelected
    .filter((addon) => addon.isSelected === true)
    .map((addon) => Number.parseInt(addon.price.replace(/[+$/a-z^d]/g, "")))
    .reduce((acc, currentPrice) => acc + currentPrice, 0);

  const total = `$${planPrice + addonPrice}/${
    userData.timePlan === "Monthly" ? "mo" : "yr"
  }`;

  useEffect(() => {
    setNavIndex(3);
  }, []);

  return (
    <section className="summarySection">
      <div className="container">
        <div className="summaryWrapper">
          <HeaderSection
            title={"Finishing up"}
            description={"Double check everything looks OK before confirming."}
          />
          <Table data={{ userData }} />
          <div className="totalWrapper">
            <span>
              Total (per {userData.timePlan === "Monthly" ? "month" : "year"})
            </span>
            <span>{total}</span>
          </div>
        </div>
      </div>
      <div className="buttonsContainer">
        <Button
          url={"/addons"}
          text={"Go Back"}
          classNm={"btnPrev"}
          isActive={true}
        />
        <Button
          url={"/confirm"}
          text={"Confirm"}
          classNm={"btnConfirm"}
          isActive={true}
        />
      </div>
    </section>
  );
}
