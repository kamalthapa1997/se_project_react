import React, { useContext } from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";

const SideBar = ({ updateMyProfile, handleLogout }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <div>
      {" "}
      <div className="sidebar">
        <img
          className="sidebar__avatar"
          alt="sidebar avatar"
          src={loggedIn ? `${currentUser.avatar}` : `${avatar}`}
        />
        <h2 className="sidebar__name">
          {loggedIn ? `${currentUser.name}` : "Terrence Tegegne"}
        </h2>
      </div>
      <div className="sidebar-userupdate">
        <p className="sidebar-userupdate__profile" onClick={updateMyProfile}>
          Change profile data
        </p>
        <Link className="sidebar__logout-link" to="/">
          <p className="siderbar_userupdate__logout" onClick={handleLogout}>
            Log out
          </p>
        </Link>
      </div>
    </div>
  );
};
export default SideBar;
