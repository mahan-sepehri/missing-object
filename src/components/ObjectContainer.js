import React, { useContext, useMemo, useState, useEffect } from "react";
import Person from "./person";
import Student from "./Student";
import DifficultyContext from "../context/difficultyContext";
import LivesContext from "../context/livesContext";
import "./ObjectContainer.css";
import Spinner from "./Spinner";
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

  useEffect(() => {
    if (lives === 0) {
      console.log("you lost");
      setHasLost(true);
      setShowResult(true);
    }
  }, [lives, setHasLost, setShowResult]);

  useEffect(() => {
    let missingObjectArr = [];
    const characterArr = [
      function (i) {
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
      function (i) {
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
    // const characterArr = [
    //   (i) => {
    //     return (
    //       <Person
    //         key={i}
    //         objectNum={i}
    //         winnerNumber={winnerNumber}
    //         style={{
    //           top: `${randomize()}%`,
    //           left: `${randomize()}%`,
    //         }}
    //         pantsColor={randomRgbColor()}
    //         shirtColor={randomRgbColor()}
    //         personId={`person${i}`}
    //       />
    //     );
    //   },
    //   (i) => {
    //     return (
    //       <Student
    //         key={i}
    //         objectNum={i}
    //         winnerNumber={winnerNumber}
    //         style={{
    //           top: `${randomize()}%`,
    //           left: `${randomize()}%`,
    //         }}
    //         pantsColor={randomRgbColor()}
    //         shirtColor={randomRgbColor()}
    //         personId={`person${i}`}
    //       />
    //     );
    //   },
    // ];
    const createMissingArr = (difficulty) => {
      for (let i = 0; i < difficulty; i++) {
        const randomIndex = Math.floor(Math.random() * 2);
        missingObjectArr.push(characterArr[randomIndex](i));
      }
    };
    createMissingArr(difficulty);
    setMissingObjArr(missingObjectArr);
  }, [difficulty, winnerNumber]);

  const winner = missingObjArr[winnerNumber];

  return (
    <>
      <>
        <div className="missing-box">
          {missingObjArr.length === 0 ? (
            <div className="spinner-container">
              <h1>Loading...</h1>
              <Spinner />
            </div>
          ) : (
            <div className="missing-container">{missingObjArr}</div>
          )}
        </div>
        {missingObjArr.length !== 0 ? (
          <div className="bottom-box">
            <div className="lives-container">
              <span style={{ fontSize: "40px" }}>♥️ &times; {lives}</span>
            </div>
            <div className="winner-container">
              <h2>Find This:</h2>
              {winner}
            </div>
          </div>
        ) : null}
      </>
    </>
  );
};
export default ObjectContainer;
