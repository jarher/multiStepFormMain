import "./summary.css";
import { useState, useContext, useEffect } from "react";
import { DataContext } from "../../Providers/Provider";
import Table from "../../components/Table/Table";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import ButtonsContainer from "../../components/button/ButtonsContainer";
import { UserStatesContext } from "../../Providers/userStatesProvider";
import totalCalculator from "../../utils/calculator";
import pageTransition from "../../utils/pageTransition";

export default function Summary() {
  const { userData, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [isVisible, setIsVisible] = useState(false);

  const total = totalCalculator(userData);

  const buttons = [
    {
      url: "/addons",
      text: "Go Back",
      classNm: "btnPrev",
      ariaText: "Return to add-ons section"
    },
    {
      url: "/confirm",
      text: "Confirm",
      classNm: "btnConfirm",
      ariaText: "Go to confirm section",
    },
  ];

  useEffect(() => {
    setNavIndex(3);
    isFilledForm();
    pageTransition(setIsVisible);
  }, []);

  return (
    <section className={`summarySection ${!isVisible ? "noVisible" : ""}`}>
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
      <ButtonsContainer data={buttons} />
    </section>
  );
}
