import React from "react";
import avatar from "../../images/avatar.svg";
import "./SideBar.css";
const SideBar = ({ updateMyProfile }) => {
  return (
    <div>
      {" "}
      <div className="sidebar">
        <img className="sidebar__avatar" alt="sidebar avatar" src={avatar} />
        <h2 className="sidebar__name">Terrence Tegegne</h2>
      </div>
      <div className="sidebar-userupdate">
        <p className="sidebar-userupdate__profile" onClick={updateMyProfile}>
          Change profile data
        </p>
        <p className="siderbar_userupdate__logout">Log out</p>
      </div>
    </div>
  );
};
export default SideBar;
