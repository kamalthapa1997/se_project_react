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
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import * as auth from "../../utils/auth";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

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
  // const [token, setToken] = useState(localStorage.getItem("token"));
  const [currentUser, setCurrentUser] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  const currentUserContextValue = {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const onAddItem = (value) => {
    console.log("to be posted value", value);
    postNewItems(value)
      .then((newItem) => {
        console.log("new items", newItem);
        setClothingItems((preItems) => [newItem, ...preItems]);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };
  const registerUserAccount = ({ email, password, name, avatar }) => {
    console.log("for register ", { email, password, name, avatar });
    try {
      auth.registerNewUser({ email, password, name, avatar });
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  //// ----- SIGH IN ------///////
  const userSignInAccount = ({ email, password }) => {
    console.log("for Log in", email, password);
    try {
      ///getting token
      auth.userSignIn({ email, password }).then((data) => {
        if (data) {
          localStorage.setItem("token", data.token);
          console.log("token from sign in", data.token);

          // id token valid? if yes, get info
          auth.checkTokenValidity(data.token).then((data) => {
            const userInfo = data.data;
            console.log(userInfo.name, userInfo.avatar, userInfo);
            // debugger;
            setCurrentUser(userInfo);
            setLoggedIn(true);

            // getting user clothing items
            auth.gettingUserItems(data.token).then((items) => {
              console.log(items.data);
              setClothingItems(items.data);
            });
          });
        }
      });
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };
  /// lool

  const handleDelete = (id) => {
    console.log("to be deleted id", id);
    deleteItems(id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => {
            console.log("kaa");
            return item.id !== id;
          })
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
  const handleSignUp = () => {
    setActiveModal("signUpModal");
  };
  const handleSignIn = () => {
    setActiveModal("signInModal");
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
        setClothingItems(items.data);
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
        <CurrentUserContext.Provider value={currentUserContextValue}>
          <Header
            location={userLocation}
            date={currentDate}
            modalExit={modalExit}
            handleCreateModal={handleCreateModal}
            handleSignUp={handleSignUp}
            handleSignIn={handleSignIn}
            currentUser={currentUser}
          />
          <Switch>
            <Route exact path="/">
              <Main
                clothingItems={clothingItems}
                closeModal={modalExit}
                wheatherTemp={temperature}
                onSelectCard={handleSelectedCard}
                currentUser={currentUser}
              />
            </Route>

            <Route path="/profile">
              <Profile
                handleCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
              />
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
              handleDelete={() => {
                console.log(selectedCard._id);
                return handleDelete(selectedCard._id);
              }}
              selectedCard={selectedCard}
              handleModalClose={handleModalClose}
            />
          )}
          {activeModal === "signUpModal" && (
            <RegisterModal
              handleModalClose={handleModalClose}
              registerUserAccount={registerUserAccount}
            />
          )}
          {activeModal === "signInModal" && (
            <LoginModal
              handleModalClose={handleModalClose}
              userSignInAccount={userSignInAccount}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
