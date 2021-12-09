import React, { useContext } from "react";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";
import "./ResultModal.css";

const ResultModal = (props) => {
  const { setHasLost, setShowResult } = useContext(ShowResultContext);
  const { setLives } = useContext(LivesContext);

  const closeModal = () => {
    setHasLost(false);
    setLives(3);
    setShowResult(false);
  };
  return (
    <div className="overlay">
      <div className="result-modal">
        <h1>{props.msg}</h1>
        <button className="play-again-button" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
