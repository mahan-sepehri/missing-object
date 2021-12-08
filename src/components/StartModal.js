import React from "react";
import InputSlider from "./InputSlider";

import "./ResultModal.css";

const StartModal = (props) => {
  return (
    <div className="overlay">
      <div className="result-modal">
        <h1>Let's Play a Game</h1>
        <div>
          <p>Choose Difficulty</p>
          <InputSlider />
        </div>
        <button
          className="play-again-button"
          onClick={() => props.setGameIsStarted(true)}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default StartModal;
