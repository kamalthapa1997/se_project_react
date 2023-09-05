import React from "react";

import "./Profile.css";
import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
const Profile = ({
  clothingItems,
  handleCreateModal,
  onSelectCard,
  updateMyProfile,
  onLikeClick,
}) => {
  return (
    <div className="Profile">
      <SideBar updateMyProfile={updateMyProfile} />

      <ClothesSection
        clothingItems={clothingItems}
        handleCreateModal={handleCreateModal}
        onSelectCard={onSelectCard}
        onLikeClick={onLikeClick}
      />
    </div>
  );
};
export default Profile;
