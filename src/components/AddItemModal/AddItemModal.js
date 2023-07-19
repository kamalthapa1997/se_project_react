import React, { useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const AddItemModal = ({ handleModalClose, isOpen, onAddItem }) => {
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [link, setUrl] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const [weatherType, setWeatherType] = useState();
  const handleWeatherType = (e) => {
    setWeatherType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({ name, link, weatherType });
  };

  return (
    <ModalWithForm
      handleModalClose={handleModalClose}
      title="New Garment"
      buttonText="New garment"
      onSubmit={handleSubmit}
    >
      <label className="modal__label">
        Name
        <input
          className="modal__input"
          type="text>"
          name="Name"
          minLength={2}
          maxLength={20}
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__label">
        Image
        <input
          className="modal__input"
          type="url>"
          name="Image URL"
          minLength={2}
          placeholder="Image Url"
          value={link}
          onChange={handleUrlChange}
        />
      </label>
      <fieldset className="modal__radio">
        <p className="modal__checkbox-title">Select the weather type:</p>
        <label htmlFor="weather-hot" className="form__label">
          <input
            type="radio"
            name="weatherType"
            id="weather-hot"
            className="form__input"
            value="hot"
            onChange={handleWeatherType}
          />
          Hot
        </label>
        <label htmlFor="weather-warm" className="form__label">
          <input
            type="radio"
            name="weatherType"
            id="weather-warm"
            className="form__input"
            value="warm"
            onChange={handleWeatherType}
          />
          Warm
        </label>
        <label htmlFor="wather-cold" className="form__label">
          <input
            type="radio"
            name="weatherType"
            id="wather-cold"
            className="form__input"
            value="cold"
            onChange={handleWeatherType}
          />
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
