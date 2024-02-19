import "./summary.css";
import { useState, useContext, useEffect, useMemo } from "react";
import { DataContext } from "../../Providers/Provider";
import Table from "../../components/Table/Table";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import ButtonsContainer from "../../components/button/ButtonsContainer";
import { UserStatesContext } from "../../Providers/userStatesProvider";
import totalCalculator from "../../utils/calculator";

export default function Summary() {
  const { userData, setNavIndex } = useContext(DataContext);
  const { isFilledForm } = useContext(UserStatesContext);
  const [isVisible, setIsVisible] = useState(false);

  const total = useMemo(() => totalCalculator(userData));

  const buttons = [
    {
      url: "/addons",
      text: "Go Back",
      classNm: "btnPrev",
      ariaText: "Return to add-ons section",
      isActive: true,
    },
    {
      url: "/confirm",
      text: "Next Step",
      classNm: "btnNext",
      ariaText: "Go to confirm section",
      isActive: true,
    },
  ];

  useEffect(() => {
    setNavIndex(3);
    isFilledForm();
    setIsVisible(true);
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
