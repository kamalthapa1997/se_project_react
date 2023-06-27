import "./Header.css";
import avatar from "../images/avatar.svg";
import logo from "../images/Logo.svg";

const Header = ({
  location,
  date,
  handleCreateModal,
  modalExit,
  name = "Terrence Tegegne",
}) => {
  return (
    <header className="header">
      <div className=" header__section ">
        <div>
          <img className="header__logo" src={logo} alt="Logo" />
        </div>
        <p className=" header__info">
          {date}, {location}
        </p>
      </div>

      <div className=" header__section">
        <button
          type="button"
          className="header__btn"
          onKeyDown={modalExit}
          onClick={handleCreateModal}
        >
          + Add clothes
        </button>
        <p>{name}</p>
        <div>
          <img className="header__avatar" alt="Profile avatar" src={avatar} />
        </div>
      </div>
    </header>
  );
};
export default Header;
