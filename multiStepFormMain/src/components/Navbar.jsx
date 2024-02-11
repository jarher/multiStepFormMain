import { useContext } from "react";
import { DataContext } from "../Provider";

export default function Navbar() {
  const { navbarIndex } = useContext(DataContext);
  console.log(navbarIndex);
  return (
    <div className="navbarWrapper">
      <nav className="main-nav">
        <ul>
          <li>
            <span className={`index ${navbarIndex === 0 ? "indexActive" : ""}`}>
              1
            </span>
            <div>
              <span className="stepNumber">STEP 1</span>
              <span className="stepDescription">YOUR INFO</span>
            </div>
          </li>
          <li>
            <span className={`index ${navbarIndex === 1 ? "indexActive" : ""}`}>
              2
            </span>
            <div>
              <span className="stepNumber">STEP 2</span>
              <span className="stepDescription">SELECT PLAN</span>
            </div>
          </li>
          <li>
            <span className={`index ${navbarIndex === 2 ? "indexActive" : ""}`}>
              3
            </span>
            <div>
              <span className="stepNumber">STEP 3</span>
              <span className="stepDescription">ADD-ONS</span>
            </div>
          </li>
          <li>
            <span className={`index ${navbarIndex === 3 ? "indexActive" : ""}`}>
              4
            </span>
            <div>
              <span className="stepNumber">STEP 4</span>
              <span className="stepDescription">SUMMARY</span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
