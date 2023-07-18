import React from "react";

import "./Profile.css";
import { SideBar } from "../SideBar/SideBar";
import { ClothingSection } from "../ClothesSection/ClothesSection";
const Profile = ({ clothingItems }) => {
  return (
    <div className="Profile">
      <SideBar />

      <ClothingSection clothingItems={clothingItems} />
    </div>
  );
};
export { Profile };
