import React, { useContext, useMemo, useState, useEffect } from "react";

import DifficultyContext from "../context/difficultyContext";
import LivesContext from "../context/livesContext";

// import Person from "./person";
// import Student from "./Student";
// import MobileMan from "./MobileMan";
// import BusinessWoman from "./BusinessWoman";
// import WalkingGuy from "./WalkingGuy";
import Kenny from "./Kenny";
import Cartman from "./Cartman";
import Stan from "./Stan";
import Kyle from "./Kyle";

import Spinner from "./Spinner";
import ShowResultContext from "../context/showResult";

import "./ObjectContainer.css";

const ObjectContainer = () => {
  const { difficulty } = useContext(DifficultyContext);
  const [missingObjArr, setMissingObjArr] = useState([]);
  const { lives } = useContext(LivesContext);
  const [livesArr, setLivesArr] = useState([]);
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
      // function (i) {
      //   return (
      //     <Person
      //       key={i}
      //       objectNum={i}
      //       winnerNumber={winnerNumber}
      //       style={{
      //         top: `${randomize()}%`,
      //         left: `${randomize()}%`,
      //       }}
      //       pantsColor={randomRgbColor()}
      //       shirtColor={randomRgbColor()}
      //       personId={`person${i}`}
      //     />
      //   );
      // },
      // function (i) {
      //   return (
      //     <Student
      //       key={i}
      //       objectNum={i}
      //       winnerNumber={winnerNumber}
      //       style={{
      //         top: `${randomize()}%`,
      //         left: `${randomize()}%`,
      //       }}
      //       pantsColor={randomRgbColor()}
      //       shirtColor={randomRgbColor()}
      //       personId={`person${i}`}
      //     />
      //   );
      // },
      // function (i) {
      //   return (
      //     <MobileMan
      //       key={i}
      //       objectNum={i}
      //       winnerNumber={winnerNumber}
      //       style={{
      //         top: `${randomize()}%`,
      //         left: `${randomize()}%`,
      //       }}
      //       pantsColor={randomRgbColor()}
      //       shirtColor={randomRgbColor()}
      //       personId={`person${i}`}
      //     />
      //   );
      // },
      // function (i) {
      //   return (
      //     <BusinessWoman
      //       key={i}
      //       objectNum={i}
      //       winnerNumber={winnerNumber}
      //       style={{
      //         top: `${randomize()}%`,
      //         left: `${randomize()}%`,
      //       }}
      //       pantsColor={randomRgbColor()}
      //       shirtColor={randomRgbColor()}
      //       personId={`person${i}`}
      //     />
      //   );
      // },
      // function (i) {
      //   return (
      //     <WalkingGuy
      //       key={i}
      //       objectNum={i}
      //       winnerNumber={winnerNumber}
      //       style={{
      //         top: `${randomize()}%`,
      //         left: `${randomize()}%`,
      //       }}
      //       pantsColor={randomRgbColor()}
      //       shirtColor={randomRgbColor()}
      //       personId={`person${i}`}
      //     />
      //   );
      // },
      function (i) {
        return (
          <Kenny
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
          <Cartman
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
          <Stan
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
          <Kyle
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
    const createMissingArr = (difficulty) => {
      for (let i = 0; i < difficulty; i++) {
        const randomIndex = Math.floor(Math.random() * characterArr.length);
        missingObjectArr.push(characterArr[randomIndex](i));
      }
    };
    createMissingArr(difficulty);
    setMissingObjArr(missingObjectArr);
  }, [difficulty, winnerNumber]);

  const winner = missingObjArr[winnerNumber];

  useEffect(() => {
    const livesArray = [];
    for (let i = 0; i < lives; i++) {
      livesArray.push("♥️");
    }
    setLivesArr(livesArray);
  }, [lives]);

  return (
    <>
      {missingObjArr.length !== 0 ? (
        <div className="bottom-box">
          <div className="lives-container">
            <span style={{ fontSize: "40px" }}>{livesArr}</span>
          </div>
          <div className="winner-container">
            <h2>Find This:</h2>
            {winner}
          </div>
        </div>
      ) : null}
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
    </>
  );
};
export default ObjectContainer;
