/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Row({ data }) {
  return (
    <tr>
      <td className={!data.isaddon ? "planType" : "type"}>
        {data.name}
        {!data.isaddon && !data.isTotal && (
          <Link to="/plan" className="redirectTo">
            Change
          </Link>
        )}
      </td>
      <td
        className={
          !data.isaddon && !data.isTotal
            ? "planPrice"
            : data.isTotal
            ? "totalPrice"
            : "price"
        }
      >
        {data.value}
      </td>
    </tr>
  );
}

export default function Table({ data }) {
  let finishingData = [];
  const { planSelected, addonSelected, timePlan, total } = data;
  
  finishingData.push({
    name: `${planSelected.name}(${timePlan})`,
    value: planSelected.price,
    isaddon: planSelected.isaddon,
    isTotal: false,
  });

  addonSelected.forEach((addon) => {
    if (addon.isSelected) {
      finishingData.push({
        name: addon.name,
        value: addon.price,
        isaddon: addon.isaddon,
        isTotal: false,
      });
    }
  });

  finishingData.push({
    name: `Total (per ${timePlan === "Monthly" ? "month" : "year"})`,
    value: total,
    isaddon: false,
    isTotal: true,
  });

  return (
    <table className="summaryTable">
      <tbody>
        {finishingData.map((data, i) => (
          <Row data={data} key={i} />
        ))}
      </tbody>
    </table>
  );
}
