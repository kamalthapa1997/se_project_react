import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const RegisterModal = ({ handleCloseModal, registerUserAccount }) => {
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    registerUserAccount({ email, password, name, avatar });
  };

  return (
    <ModalWithForm
      handleCloseModal={handleCloseModal}
      title="Log in"
      buttonText="Login"
      onSubmit={handleSubmit}
      linkToRegOrLogin="or Log in"
    >
      <label className="modal__label">
        Email
        <input
          required
          className="modal__input"
          type="email>"
          name="email"
          minLength={2}
          maxLength={20}
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__label">
        Password
        <input
          required
          className="modal__input"
          type="password"
          name="password"
          minLength={2}
          placeholder="password"
          value={password}
          onChange={handlePassword}
          autoComplete=""
        />
      </label>
      <label className="modal__label">
        Name
        <input
          required
          className="modal__input"
          type="text>"
          name="name"
          minLength={2}
          placeholder="name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Avatar
        <input
          required
          className="modal__input"
          type="url>"
          name="avatar"
          minLength={2}
          placeholder="avatar"
          value={avatar}
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};
export default RegisterModal;
