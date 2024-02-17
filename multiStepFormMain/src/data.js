import arcadeImg from "./assets/images/icon-arcade.svg";
import advanceImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const data = {
  monthly: {
    plan: [
      {
        planIndex: 0,
        name: "Arcade",
        image: arcadeImg,
        price: "$9/mo",
        isSelected: true,
        isMonthly: true,
      },
      {
        planIndex: 1,
        name: "Advanced",
        image: advanceImg,
        price: "$12/mo",
        isSelected: false,
        isMonthly: true,
      },
      {
        planIndex: 2,
        name: "Pro",
        image: proImg,
        price: "$15/mo",
        isSelected: false,
        isMonthly: true,
      },
    ],
    addons: [
      {
        name: "Online Service",
        description: "Access to multiplayer games",
        price: "+$1/mo",
        isSelected: true,
      },
      {
        name: "Larger Storage",
        description: "Extra 1TB of cloud save",
        price: "+$2/mo",
        isSelected: true,
      },
      {
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: "+$2/mo",
        isSelected: false,
      },
    ],
  },
  yearly: {
    plan: [
      {
        planIndex: 0,
        name: "Arcade",
        image: arcadeImg,
        price: "$90/yr",
        isSelected: true,
        isMonthly: false,
      },
      {
        planIndex: 1,
        name: "Advanced",
        image: advanceImg,
        price: "$120/yr",
        isSelected: false,
        isMonthly: false,
      },
      {
        planIndex: 2,
        name: "Pro",
        image: proImg,
        price: "$150/yr",
        isSelected: false,
        isMonthly: false,
      },
    ],
    addons: [
      {
        name: "Online Service",
        description: "Access to multiplayer games",
        price: "+$10/yr",
        isSelected: true,
      },
      {
        name: "Larger Storage",
        description: "Extra 1TB of cloud save",
        price: "+$20/yr",
        isSelected: true,
      },
      {
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: "+$20/yr",
        isSelected: false,
      },
    ],
  },
};
