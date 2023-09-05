import React from "react";

import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
  updateMyProfile,
  handlelikeclick,
  handleLogout,
}) => {
  return (
    <div className="Profile">
      <SideBar updateMyProfile={updateMyProfile} handleLogout={handleLogout} />

      <ClothesSection
        clothingItems={clothingItems}
        handleCreateModal={handleCreateModal}
        onSelectCard={onSelectCard}
        handlelikeclick={handlelikeclick}
      />
    </div>
  );
};
export default Profile;
