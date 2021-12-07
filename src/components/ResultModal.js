import React, { useContext } from "react";
import ShowResultContext from "../context/showResult";
import "./ResultModal.css";

const ResultModal = () => {
  const { setShowResult } = useContext(ShowResultContext);

  const closeModal = () => {
    setShowResult(false);
  };
  return (
    <div className="overlay">
      <div className="result-modal">
        <h1>You won!</h1>
        <button className="play-again-button" onClick={closeModal}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
