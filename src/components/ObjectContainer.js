import React, { useContext } from "react";
import Person from "./person";
import Student from "./Student";
import DifficultyContext from "../context/difficultyContext";
import "./ObjectContainer.css";

const ObjectContainer = () => {
  const { difficulty } = useContext(DifficultyContext);

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

  const characterArr = [
    (i) => {
      return (
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
    },
    (i) => {
      return (
        <Student
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
    },
  ];

  const createMissingArr = () => {
    for (let i = 0; i < difficulty; i++) {
      const randomIndex = Math.floor(Math.random() * 2);
      console.log(randomIndex);
      missingObjectArr.push(characterArr[randomIndex](i));
    }
  };
  createMissingArr();

  const winner = missingObjectArr[winnerNumber];
  console.log(winner);

  return (
    <>
      <>
        <div className="missing-box">
          <div className="missing-container">{missingObjectArr}</div>
        </div>
        <div className="winner-container">
          <h2>Find This:</h2>
          {winner}
        </div>
      </>
    </>
  );
};
export default ObjectContainer;
