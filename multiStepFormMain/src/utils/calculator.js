import filterIsSelected from "./filterIsSelected";

function replaceAndConvertToNumber(value) {
  return Number.parseInt(value.replace(/[+$/a-z^d]/g, ""));
}

export default function totalCalculator(userData) {
  const planSelected = filterIsSelected(userData.planSelected)[0];

  const addonsSelected = filterIsSelected(userData.addonsSelected);

  const planPrice =
    userData.timePlan === "Monthly"
      ? replaceAndConvertToNumber(planSelected.price.monthly)
      : replaceAndConvertToNumber(planSelected.price.yearly);

  const addonPrice =
    userData.timePlan === "Monthly"
      ? addonsSelected
          .map((addon) => replaceAndConvertToNumber(addon.price.monthly))
          .reduce((acc, currentPrice) => acc + currentPrice, 0)
      : addonsSelected
          .map((addon) => replaceAndConvertToNumber(addon.price.yearly))
          .reduce((acc, currentPrice) => acc + currentPrice, 0);

  return `$${planPrice + addonPrice}/${
    userData.timePlan === "Monthly" ? "mo" : "yr"
  }`;
}
