import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className=" header__section ">
        <div>
          <img src="/images/Logo.svg " />
        </div>
        <div>date</div>
      </div>

      <div className=" header__section">
        <div>+ Add clothes</div>
        <div>name</div>
        <div>
          <img className="header__avatar" src="/images/avatar.svg " />
        </div>
      </div>
    </header>
  );
};
export default Header;
