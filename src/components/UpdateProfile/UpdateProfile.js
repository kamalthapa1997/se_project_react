import React, { useContext, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const UpdateProfile = ({ handleModalClose, userProfileUpdate }) => {
  const { currentUser } = useContext(CurrentUserContext);
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
          type="text"
          name="name"
          minLength={2}
          maxLength={20}
          placeholder="Enter your name"
          onChange={handleNameChange}
          value={currentUser.name}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          className="modal__input"
          type="url"
          name="avatar"
          minLength={2}
          placeholder="Avatar"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};
export default UpdateProfile;
