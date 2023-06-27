import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useEffect, useState } from "react";
import ModalPreview from "../ItemCard/ItemModal/ItemModal";
import {
  getWeatheraForecast,
  parseWeatherData,
  parseWeatherPlace,
} from "../Utils/WeatherApi";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [ActiveModal, SetActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [userLocation, setUserLocation] = useState("");
  const handleCreateModal = () => {
    SetActiveModal("createModal");
  };
  const handleModalClose = () => {
    SetActiveModal("");
  };
  const handleSelectedCard = (card) => {
    SetActiveModal("itemPreview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getWeatheraForecast().then((data) => {
      const temp = parseWeatherData(data);
      setTemperature(temp);
    });
  });
  useEffect(() => {
    getWeatheraForecast().then((data) => {
      const place = parseWeatherPlace(data);
      setUserLocation(place);
    });
  });

  const modalExit = (evt) => {
    if (
      evt.key === "Escape" &&
      (ActiveModal === "createModal" || ActiveModal === "itemPreview")
    ) {
      console.log("kamal");
      return SetActiveModal("");
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
        modalExit={modalExit}
        wheatherTemp={temperature}
        onSelectCard={handleSelectedCard}
      />
      <Footer />
      {ActiveModal === "createModal" && (
        <ModalWithForm handleModalClose={handleModalClose} title="New Garment">
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
      {ActiveModal === "itemPreview" && (
        <ModalPreview
          selectedCard={selectedCard}
          handleModalClose={handleModalClose}
        />
      )}
    </div>
  );
}

export default App;
