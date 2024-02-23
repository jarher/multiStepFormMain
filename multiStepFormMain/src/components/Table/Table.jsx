/* eslint-disable react/prop-types */
import filterIsSelected from "../../utils/filterIsSelected";
import getPrice from "../../utils/getPrice";
import "./table.css";
import { Link } from "react-router-dom";

function Row({ data, timePlan }) {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{getPrice(timePlan, data)}</td>
    </tr>
  );
}

export default function Table({ data }) {
  const { userData } = data;

  const planSelected = filterIsSelected(userData.planSelected)[0];

  const addonsSelected = filterIsSelected(userData.addonsSelected);

  return (
    <table className="summaryTable">
      <thead>
        <tr>
          <th>
            <span>
              {planSelected.name}({userData.timePlan})
            </span>
            <span className="backLink">
              <Link to="/plan">Change</Link>
            </span>
          </th>
          <th>{getPrice(userData.timePlan, planSelected)}</th>
        </tr>
      </thead>
      <tbody>
        {addonsSelected.map((addon, i) => (
          <Row data={addon} timePlan={userData.timePlan} key={i} />
        ))}
      </tbody>
    </table>
  );
}
