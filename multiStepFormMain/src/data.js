import arcadeImg from "./assets/images/icon-arcade.svg";
import advanceImg from "./assets/images/icon-advanced.svg";
import proImg from "./assets/images/icon-pro.svg";

export const data = {
  monthly: {
    plan: [
      {
        name: "Arcade",
        image: arcadeImg,
        price: "$9/mo",
        isaddon: false,
        isSelected: true,
      },
      {
        name: "Advanced",
        image: advanceImg,
        price: "$12/mo",
        isaddon: false,
        isSelected: false,
      },
      {
        name: "Pro",
        image: proImg,
        price: "$15/mo",
        isaddon: false,
        isSelected: false,
      },
    ],
    addons: [
      {
        addonKey: "addM1",
        name: "Online Service",
        description: "Access to multiplayer games",
        price: "+$1/mo",
        isSelected: true,
        isaddon: true,
      },
      {
        addonKey: "addM2",
        name: "Larger Storage",
        description: "Extra 1TB of cloud save",
        price: "+$2/mo",
        isSelected: true,
        isaddon: true,
      },
      {
        addonKey: "addM3",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: "+$2/mo",
        isSelected: false,
        isaddon: true,
      },
    ],
  },
  yearly: {
    plan: [
      {
        name: "Arcade",
        image: arcadeImg,
        price: "$90/yr",
        isaddon: false,
        isSelected: true,
      },
      {
        name: "Advanced",
        image: advanceImg,
        price: "$120/yr",
        isaddon: false,
        isSelected: false,
      },
      {
        name: "Pro",
        image: proImg,
        price: "$150/yr",
        isaddon: false,
        isSelected: false,
      },
    ],
    addons: [
      {
        addonKey: "addY1",
        name: "Online Service",
        description: "Access to multiplayer games",
        price: "+$10/yr",
        isSelected: true,
        isaddon: true,
      },
      {
        addonKey: "addY2",
        name: "Larger Storage",
        description: "Extra 1TB of cloud save",
        price: "+$20/yr",
        isSelected: true,
        isaddon: true,
      },
      {
        addonKey: "addY3",
        name: "Customizable profile",
        description: "Custom theme on your profile",
        price: "+$20/yr",
        isSelected: false,
        isaddon: true,
      },
    ],
  },
};
