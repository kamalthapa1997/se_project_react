import React, { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  return (
    <label className="switch">
      <input
        className="switch__box"
        type="checkbox"
        onChange={handleToggleSwitchChange}
      />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <div className=" switch__temps">
        <p className={currentTemperatureUnit === "F" ? "switch__active" : " "}>
          F
        </p>
        <p className={currentTemperatureUnit === "C" ? "switch__active" : ""}>
          C
        </p>
      </div>
    </label>
  );
};

export default ToggleSwitch;
