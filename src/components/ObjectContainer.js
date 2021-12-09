import React, { useContext, useMemo, useState } from "react";
import Person from "./person";
import Student from "./Student";
import DifficultyContext from "../context/difficultyContext";
import LivesContext from "../context/livesContext";
import "./ObjectContainer.css";
import { useEffect } from "react/cjs/react.development";
import ShowResultContext from "../context/showResult";

const ObjectContainer = () => {
  const { difficulty } = useContext(DifficultyContext);
  const [missingObjArr, setMissingObjArr] = useState([]);
  const { lives } = useContext(LivesContext);
  const { setHasLost, setShowResult } = useContext(ShowResultContext);

  const winnerNumber = useMemo(
    () => Math.floor(Math.random() * difficulty),
    [difficulty]
  );
  const randomize = () => {
    const randomPosition = Math.random() * 80 + 10;
    return randomPosition;
  };

  const randomRgbColor = () => {
    const randomC = () => Math.floor(Math.random() * 256);
    const randomRgb = `rgb(${randomC()}, ${randomC()}, ${randomC()})`;
    return randomRgb;
  };

  const characterArr = useMemo(
    () => [
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
    ],
    [winnerNumber]
  );
  useEffect(() => {
    if (lives === 0) {
      console.log("you lost");
      setHasLost(true);
      setShowResult(true);
    }
  }, [lives, setHasLost, setShowResult]);

  useEffect(() => {
    let missingObjectArr = [];
    const createMissingArr = (difficulty) => {
      for (let i = 0; i < difficulty; i++) {
        const randomIndex = Math.floor(Math.random() * 2);
        missingObjectArr.push(characterArr[randomIndex](i));
      }
    };
    createMissingArr(difficulty);
    setMissingObjArr(missingObjectArr);
  }, [difficulty, characterArr]);

  const winner = missingObjArr[winnerNumber];

  return (
    <>
      <>
        <div className="missing-box">
          <div className="missing-container">{missingObjArr}</div>
        </div>
        <div className="bottom-box">
          <div className="lives-container">
            <span style={{ fontSize: "40px" }}>♥️ &times; {lives}</span>
          </div>
          <div className="winner-container">
            <h2>Find This:</h2>
            {winner}
          </div>
        </div>
      </>
    </>
  );
};
export default ObjectContainer;
