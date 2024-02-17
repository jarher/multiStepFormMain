/* eslint-disable react/prop-types */
import "./table.css";
import { Link } from "react-router-dom";

function Row({ data }) {
  return (
    <tr>
      <td>{data.name}</td>
      <td>{data.price}</td>
    </tr>
  );
}

export default function Table({ data }) {
  const { userData } = data;
  return (
    <table className="summaryTable">
      <thead>
        <tr>
          <th>
            <span>
              {userData.planSelected.name}({userData.timePlan})
            </span>
            <span className="backLink">
              <Link to="/plan">Change</Link>
            </span>
          </th>
          <th>{userData.planSelected.price}</th>
        </tr>
      </thead>
      <tbody>
        {userData.addonsSelected
          .filter((data) => data.isSelected === true)
          .map((data, i) => (
            <Row data={data} key={i} />
          ))}
      </tbody>
    </table>
  );
}
