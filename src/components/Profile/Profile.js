import React from "react";

import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({ clothingItems, handleCreateModal, onSelectCard }) => {
  return (
    <div className="Profile">
      <SideBar />

      <ClothesSection
        clothingItems={clothingItems}
        handleCreateModal={handleCreateModal}
        onSelectCard={onSelectCard}
      />
    </div>
  );
};
export default Profile;
