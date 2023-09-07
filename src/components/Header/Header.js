import "./Header.css";

import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  location,
  date,
  handleCreateModal,

  handleSignUp,
  handleSignIn,
  currentUser,
}) => {
  const { loggedIn } = useContext(CurrentUserContext);

  return (
    <header className="header">
      <div className=" header__section ">
        <Link to="/">
          <div>
            <img className="header__logo" src={logo} alt="Logo" />
          </div>
        </Link>
        <p className=" header__info">
          {date}, {location}
        </p>
      </div>

      <div className=" header__section">
        <ToggleSwitch></ToggleSwitch>

        {loggedIn ? (
          <Navbar
            currentUser={currentUser}
            handleCreateModal={handleCreateModal}
          />
        ) : (
          //// SIGN UP AND SIGH IN
          <div className="header__signin-signup">
            <p
              className="header__signs"
              onClick={() => {
                handleSignUp();
              }}
            >
              {" "}
              Sign Up
            </p>
            <p
              className="header__signs"
              onClick={() => {
                handleSignIn();
              }}
            >
              {" "}
              Log in
            </p>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
