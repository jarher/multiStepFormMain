export default function totalCalculator(userData) {
  const planPrice = Number.parseInt(
    userData.planSelected.price.replace(/[+$/a-z^d]/g, "")
  );
  console.log(userData.addonsSelected);
  const addonPrice = userData.addonsSelected[userData.timePlan === "Monthly" ? 0 : 1]
    .filter((addon) => addon.isSelected === true)
    .map((addon) => Number.parseInt(addon.price.replace(/[+$/a-z^d]/g, "")))
    .reduce((acc, currentPrice) => acc + currentPrice, 0);

  return `$${planPrice + addonPrice}/${
    userData.timePlan === "Monthly" ? "mo" : "yr"
  }`;
}
