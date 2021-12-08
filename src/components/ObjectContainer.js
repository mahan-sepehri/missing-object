import React, { useContext, useState } from "react";
import Person from "./person";
import Winner from "./Winner";
import DifficultyContext from "../context/difficultyContext";
import StartModal from "./StartModal";
import "./ObjectContainer.css";

const ObjectContainer = () => {
  const { difficulty } = useContext(DifficultyContext);
  const [gameIsStarted, setGameIsStarted] = useState(false);

  const missingObjectArr = [];
  const winnerNumber = Math.floor(Math.random() * difficulty);
  const randomize = () => {
    const randomPosition = Math.random() * 80 + 10;
    return randomPosition;
  };

  const randomRgbColor = () => {
    const randomC = () => Math.floor(Math.random() * 256);
    const randomRgb = `rgb(${randomC()}, ${randomC()}, ${randomC()})`;
    return randomRgb;
  };

  const createMissingArr = () => {
    for (let i = 0; i < difficulty; i++) {
      missingObjectArr.push(
        <Person
          key={i}
          objectNum={i}
          winnerNumber={winnerNumber}
          style={{
            top: `${randomize()}%`,
            left: `${randomize()}%`,
          }}
          pantsColor={randomRgbColor()}
          shirtColor={randomRgbColor()}
          personId={`person${i}`}
        />
      );
    }
  };
  createMissingArr();

  const winnerPantsColor = missingObjectArr[winnerNumber].props.pantsColor;
  const winnerShirtColor = missingObjectArr[winnerNumber].props.shirtColor;

  return (
    <>
      {!gameIsStarted ? (
        <StartModal setGameIsStarted={setGameIsStarted} />
      ) : (
        <>
          <div className="missing-box">
            <div className="missing-container">{missingObjectArr}</div>
          </div>
          <div className="winner-container">
            <h2>Find This:</h2>
            <Winner
              pantsColor={winnerPantsColor}
              shirtColor={winnerShirtColor}
            />
          </div>
        </>
      )}
    </>
  );
};
export default ObjectContainer;
