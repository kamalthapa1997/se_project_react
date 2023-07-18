import "./Header.css";
import avatar from "../../images/avatar.svg";
import logo from "../../images/Logo.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";

const Header = ({ location, date, handleCreateModal, modalExit }) => {
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
        <button
          type="button"
          className="header__btn"
          onKeyDown={modalExit}
          onClick={handleCreateModal}
        >
          + Add clothes
        </button>
        <Link className="header__profile-name" to="/profile">
          Terrence Tegegne
        </Link>
        <div>
          <img className="header__avatar" alt="Profile avatar" src={avatar} />
        </div>
      </div>
    </header>
  );
};
export default Header;
