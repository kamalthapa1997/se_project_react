import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" alt="sidebar avatar" src={avatar} />
      <h2 className="sidebar__name">Terrence Tegegne</h2>
    </div>
  );
};
export { SideBar };
