import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import { getItems, deleteItems, postNewItems } from "../../utils/Api";

import {
  getWeatheraForecast,
  parseWeatherData,
  parseWeatherPlace,
} from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { Switch, Route } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";

function App() {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [userLocation, setUserLocation] = useState("");
  const [clothingItems, setClothingItems] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddItem = (value) => {
    postNewItems(value)
      .then((newItem) => {
        setClothingItems((preItems) => [newItem, ...preItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };

  const handleDelete = (id) => {
    deleteItems(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item.id !== id)
        );
        handleCloseModal();
      })
      .catch((error) =>
        console.error("Error occurred while deleting item:", error)
      );
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

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

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch((error) => {
        console.error(`Error: ${error.status}`);
      });
  }, []);

  const modalExit = (evt) => {
    if (evt.key === "Escape" && activeModal !== "") {
      return setActiveModal("");
    }
  };

  return (
    <div className="Appbody">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          location={userLocation}
          date={currentDate}
          modalExit={modalExit}
          handleCreateModal={handleCreateModal}
        />
        <Switch>
          <Route exact path="/">
            <Main
              clothingItems={clothingItems}
              closeModal={modalExit}
              wheatherTemp={temperature}
              onSelectCard={handleSelectedCard}
            />
          </Route>

          <Route path="/profile">
            <Profile clothingItems={clothingItems} />
          </Route>
        </Switch>
        <Footer />
        {activeModal === "createModal" && (
          <AddItemModal
            handleModalClose={handleModalClose}
            isOpen={activeModal === "createModal"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "itemPreview" && (
          <ItemModal
            handleDelete={() => handleDelete(selectedCard.id)}
            selectedCard={selectedCard}
            handleModalClose={handleModalClose}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
