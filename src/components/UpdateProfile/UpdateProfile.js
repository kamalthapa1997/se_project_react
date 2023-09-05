import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const UpdateProfile = ({ handleModalClose, userProfileUpdate }) => {
  //   const [name, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = useState("");
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, avatar);
    userProfileUpdate({ name, avatar });
  };

  return (
    <ModalWithForm
      handleModalClose={handleModalClose}
      title="Change profile data"
      buttonText="Save changes"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name*
        <input
          className="modal__input"
          type="text>"
          name="name"
          minLength={2}
          maxLength={20}
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input"
          type="url>"
          name="avatar"
          minLength={2}
          placeholder="Avatar"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};
export default UpdateProfile;
