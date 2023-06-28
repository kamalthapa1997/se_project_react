import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ModalPreview from "../ItemModal/ItemModal";

import {
  getWeatheraForecast,
  parseWeatherData,
  parseWeatherPlace,
} from "../../utils/weatherApi";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [userLocation, setUserLocation] = useState("");
  const handleCreateModal = () => {
    setActiveModal("createModal");
  };
  const handleModalClose = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("itemPreview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeatheraForecast()
      .then((data) => {
        const temp = parseWeatherData(data);
        setTemperature(temp);
        const place = parseWeatherPlace(data);
        setUserLocation(place);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const modalExit = (evt) => {
    if (evt.key === "Escape" && activeModal !== "") {
      return setActiveModal("");
    }
  };

  return (
    <div className="Appbody">
      <Header
        location={userLocation}
        date={currentDate}
        modalExit={modalExit}
        handleCreateModal={handleCreateModal}
      />
      <Main
        closeModal={modalExit}
        wheatherTemp={temperature}
        onSelectCard={handleSelectedCard}
      />
      <Footer />
      {activeModal === "createModal" && (
        <ModalWithForm
          handleModalClose={handleModalClose}
          title="New Garment"
          buttonText="New garment"
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
            />
          </label>
          <label className="modal__label">
            Image
            <input
              className="modal__input"
              type="url>"
              name="Image URL"
              minLength={2}
              maxLength={20}
              placeholder="Image Url"
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
              />
              Hot
            </label>
            <label htmlFor="weather-warm" className="form__label">
              <input
                type="radio"
                name="weatherType"
                id="weather-warm"
                className="form__input"
              />
              Warm
            </label>
            <label htmlFor="wather-cold" className="form__label">
              <input
                type="radio"
                name="weatherType"
                id="wather-cold"
                className="form__input"
              />
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "itemPreview" && (
        <ModalPreview
          selectedCard={selectedCard}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
