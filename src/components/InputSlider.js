import React, { useContext, useState } from "react";
import DifficultyContext from "../context/difficultyContext";
import Spinner from "./Spinner";
import "./InputSlider.css";

const InputSlider = (props) => {
  const { setDifficulty } = useContext(DifficultyContext);
  const [difficultySliderValue, setDifficultySliderValue] = useState(50);
  const [isLoading, setIsLoading] = useState(false);
  const difficultyChangeHandler = () => {
    setDifficulty(difficultySliderValue);
    setIsLoading(true);
    setTimeout(() => {
      props.setGameIsStarted(true);
    }, 500);
  };
  return (
    <div className="input-slider-container">
      <div>
        <input
          type="range"
          id="difficulty"
          name="difficulty"
          min="10"
          max="200"
          step="1"
          value={difficultySliderValue}
          onChange={(e) => {
            setDifficultySliderValue(e.target.value);
          }}
        />
        <label htmlFor="difficulty">{difficultySliderValue}</label>
      </div>
      <div>
        <button className="play-again-button" onClick={difficultyChangeHandler}>
          {isLoading ? (
            <div>
              <span style={{ marginRight: "5px" }}>Loading...</span>
              <Spinner />
            </div>
          ) : (
            "Start"
          )}
        </button>
      </div>
    </div>
  );
};
export default InputSlider;
