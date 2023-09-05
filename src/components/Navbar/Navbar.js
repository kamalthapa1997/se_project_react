import { useContext } from "react";
import avatar from "../../images/avatar.svg";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Navbar = ({ modalExit, handleCreateModal }) => {
  const { loggedIn, currentUser } = useContext(CurrentUserContext);

  return (
    <div className="header__info">
      <button
        type="button"
        className="header__btn"
        onKeyDown={modalExit}
        onClick={handleCreateModal}
      >
        + Add clothes
      </button>
      <Link className="header__profile-name" to="/profile">
        {loggedIn ? `${currentUser.name}` : " Terrence Tegegne"}
      </Link>
      <div>
        <img
          className="header__avatar"
          alt="Profile avatar"
          src={loggedIn ? `${currentUser.avatar}` : `${avatar}`}
        />
      </div>
    </div>
  );
};
export default Navbar;
