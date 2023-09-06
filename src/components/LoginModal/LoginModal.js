import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LoginModal = ({ handleCloseModal, userSignInAccount }) => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    userSignInAccount({ email, password });
  };

  return (
    <ModalWithForm
      handleCloseModal={handleCloseModal}
      title="Log in"
      buttonText="Next"
      onSubmit={handleSubmit}
      linkToRegOrLogin="or Register"
    >
      <label className="modal__label">
        Email
        <input
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
          className="modal__input"
          type="password"
          name="password"
          minLength={2}
          placeholder="password"
          value={password}
          onChange={handlePassword}
        />
      </label>
    </ModalWithForm>
  );
};
export default LoginModal;
