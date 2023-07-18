import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="SideBar">
      <img className="Profile__avatar" alt="Profile avatar" src={avatar} />
      <h2 className="profile__name">Terrence Tegegne</h2>
    </div>
  );
};
export { SideBar };
