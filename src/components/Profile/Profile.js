import React from "react";

import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({ clothingItems }) => {
  return (
    <div className="Profile">
      <SideBar />

      <ClothesSection clothingItems={clothingItems} />
    </div>
  );
};
export default Profile;
