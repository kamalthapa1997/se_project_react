import "./App.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import ModalWithForm from "./ModalWithForm/ModalWithForm";

function App() {
  const wheatherTemp = "75°F";

  return (
    <div className="Appbody">
      <Header />
      <Main wheatherTemp={wheatherTemp} />
      <Footer />
    </div>
  );
}

export default App;
