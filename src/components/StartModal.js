import React from "react";
import InputSlider from "./InputSlider";

import "./ResultModal.css";

const StartModal = (props) => {
  // const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="overlay">
      <div className="result-modal">
        <h1 style={{ textAlign: "center" }}>Let's Play a Game</h1>
        <div>
          <p style={{ marginBottom: "20px", textAlign: "center" }}>
            Choose Difficulty
          </p>
          <InputSlider />
        </div>
        <button
          className="play-again-button"
          onClick={() => {
            // setIsLoading(false);
            props.setGameIsStarted(true);
          }}
        >
          Start
        </button>
        {/* {isLoading && <p>Loading...</p>} */}
      </div>
    </div>
  );
};

export default StartModal;
