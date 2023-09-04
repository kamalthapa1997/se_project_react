import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Header = ({
  location,
  date,
  handleCreateModal,
  modalExit,
  handleSignUp,
  handleSignIn,
  currentUser,
}) => {
  const { loggedIn } = useContext(CurrentUserContext);
  console.log(" logged from nav", loggedIn);

  console.log("header", currentUser?.avtar);

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
            modalExit={modalExit}
          />
        ) : (
          //// SIGN UP AND SIGH IN
          <div>
            <p
              onClick={() => {
                console.log("clicked signup");
                handleSignUp();
              }}
            >
              {" "}
              Sign Up
            </p>
            <p
              onClick={() => {
                console.log("clicked login");
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
