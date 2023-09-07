import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getItems,
  deleteItems,
  postNewItems,
  addCardLike,
  removeCardLike,
} from "../../utils/Api";

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
import UpdateProfile from "../UpdateProfile/UpdateProfile";
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
  const [token] = useState(localStorage.getItem("jwt"));
  const [currentUser, setCurrentUser] = useState({});

  const [loggedIn, setLoggedIn] = useState(false);

  const currentUserContextValue = {
    currentUser,
    setCurrentUser,
    loggedIn,
    setLoggedIn,
  };

  const onAddItem = (value) => {
    postNewItems(value)
      .then((newItem) => {
        console.log(newItem.data);
        setClothingItems((preItems) => [newItem.data, ...preItems]);
        console.log(clothingItems);
        handleCloseModal();
      })
      .catch((error) => {
        console.error(error.status);
      });
  };
  const registerUserAccount = ({ email, password, name, avatar }) => {
    try {
      auth.registerNewUser({ email, password, name, avatar });
      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  function handleTokenCheck(token) {
    if (token) {
      return auth
        .checkTokenValidity(token)
        .then((res) => {
          setLoggedIn(true);
          setCurrentUser(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  //// ----- SIGH IN ------///////
  const userSignInAccount = ({ email, password }) => {
    try {
      ///getting token
      auth.userSignIn({ email, password }).then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token);

          // id token valid? if yes, get info
          // auth.checkTokenValidity(data.token);
          handleTokenCheck(data.token);
          // history.push("/profile");

          // // getting user clothing items

          // });
        }
      });

      handleCloseModal();
    } catch (error) {
      console.error(error);
    }
  };

  function settingClothingItems(items) {
    const reverseItems = items.data.reverse();

    setClothingItems(reverseItems);
  }

  useEffect(() => {
    if (token) {
      handleTokenCheck(token).finally(() => {
        setLoggedIn(true);
        auth
          .gettingUserItems(token)
          .then((items) => {
            settingClothingItems(items);
          })
          .catch((error) => {
            console.error(`Error: ${error.status}`);
          });
      });
    } else {
      setLoggedIn(false);
    }
  }, [token]);

  const handleDelete = (id) => {
    deleteItems(id)
      .then(() => {
        setClothingItems((prevItems) => {
          return prevItems.filter((item) => {
            return item._id !== id;
          });
        });
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
  const handleCloseModal = () => {
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
  const updateMyProfile = () => {
    setActiveModal("updateMyProfile");
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
        settingClothingItems(items);
      })
      .catch((error) => {
        console.error(`Error: ${error.status}`);
      });
  }, []);

  useEffect(() => {
    if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

    const handleEscClose = (e) => {
      // define the function inside useEffect not to lose the reference on rerendering
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);

    return () => {
      // don't forget to add a clean up function for removing the listener
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [activeModal]); // watch activeModal here

  ///// FOR LIKE BUTTON
  const handleLikeClick = (id, isLiked) => {
    // const token = localStorage.getItem("jwt");
    !isLiked
      ? addCardLike(id, currentUser._id)
          .then((response) => {
            // console.log(response);
            const updatedCard = response.data;
            setClothingItems((cards) => {
              // console.log(cards);
              return cards.map((c) => (c._id === id ? updatedCard : c));
            });
          })
          .catch((err) => console.log(err))
      : removeCardLike(id, currentUser._id)
          .then((response) => {
            const updatedCard = response.data;

            setClothingItems((cards) => {
              return cards.map((c) => (c._id === id ? updatedCard : c));
            });
          })
          .catch((err) => console.log(err));
  };

  const userProfileUpdate = ({ name, avatar }) => {
    auth
      .profileUpdate(name, avatar)
      .then((data) => {
        if (data) {
          const profileInfo = data.data;

          setCurrentUser(profileInfo);
        }
        handleCloseModal();
      })
      .catch((err) => {
        console.error("Something goes wrong", err);
      });
  };

  ///// ---- HANDLE LOG OUT ----/////
  const handleLogout = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
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
            handleCreateModal={handleCreateModal}
            handleSignUp={handleSignUp}
            handleSignIn={handleSignIn}
            currentUser={currentUser}
          />
          <Switch>
            <Route exact path="/">
              <Main
                clothingItems={clothingItems}
                wheatherTemp={temperature}
                onSelectCard={handleSelectedCard}
                currentUser={currentUser}
                handlelikeclick={handleLikeClick}
              />
            </Route>

            <Route path="/profile">
              <Profile
                handleCreateModal={handleCreateModal}
                clothingItems={clothingItems}
                onSelectCard={handleSelectedCard}
                updateMyProfile={updateMyProfile}
                handlelikeclick={handleLikeClick}
                handleLogout={handleLogout}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "createModal" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "createModal"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "itemPreview" && (
            <ItemModal
              handleDelete={() => {
                return handleDelete(selectedCard._id);
              }}
              selectedCard={selectedCard}
              handleCloseModal={handleCloseModal}
            />
          )}
          {activeModal === "signUpModal" && (
            <RegisterModal
              handleCloseModal={handleCloseModal}
              registerUserAccount={registerUserAccount}
            />
          )}
          {activeModal === "signInModal" && (
            <LoginModal
              handleCloseModal={handleCloseModal}
              userSignInAccount={userSignInAccount}
            />
          )}
          {activeModal === "updateMyProfile" && (
            <UpdateProfile
              handleCloseModal={handleCloseModal}
              userProfileUpdate={userProfileUpdate}
              // userSignInAccount={userSignInAccount}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
