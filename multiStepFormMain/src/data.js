import arcadeImg from "./assets/images/icon-arcade.svg";
import advanceImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const data = {
  "plan": [
    {
      planIndex: 0,
      name: "Arcade",
      image: arcadeImg,
      price: { monthly: "$9/mo", yearly: "$90/yr" },
      isSelected: true,
      isMonthly: true,
    },
    {
      planIndex: 1,
      name: "Advanced",
      image: advanceImg,
      price: { monthly: "$12/mo", yearly: "$120/yr" },
      isSelected: false,
      isMonthly: true,
    },
    {
      planIndex: 2,
      name: "Pro",
      image: proImg,
      price: { monthly: "$15/mo", yearly: "$150/yr" },
      isSelected: false,
      isMonthly: true,
    },
  ],
  "addons": [
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      price: { monthly: "+$1/mo", yearly: "+$10/yr" },
      isSelected: true,
      ariaText: "select online service",
      isMonthly: true,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      price: { monthly: "+$2/mo", yearly: "+$20/yr" },
      isSelected: true,
      ariaText: "select larger storage",
      isMonthly: true,
    },
    {
      name: "Customizable profile",
      description: "Custom theme on your profile",
      price: { monthly: "+$2/mo", yearly: "+$20/yr" },
      isSelected: false,
      ariaText: "select customizable profile",
      isMonthly: true,
    },
  ],
};
