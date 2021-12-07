import React from "react";
import Person from "./person";
import Winner from "./Winner";
import "./ObjectContainer.css";

const MISSING_OBJECT_NUMBER = 10;

const ObjectContainer = () => {
  // const [missingObjectNumber, setMissingObjectNumber] = useState(
  //   MISSING_OBJECT_NUMBER
  // );
  const missingObjectNumber = MISSING_OBJECT_NUMBER;

  const missingObjectArr = [];
  const winnerNumber = Math.floor(Math.random() * missingObjectNumber);
  const randomize = () => {
    const randomPosition = Math.random() * 90 + 5;
    return randomPosition;
  };

  const randomizeColor = () => {
    return Math.floor(Math.random() * 16777215).toString(16);
  };

  for (let i = 0; i < missingObjectNumber; i++) {
    missingObjectArr.push(
      <Person
        key={i}
        objectNum={i}
        winnerNumber={winnerNumber}
        style={{
          top: `${randomize()}%`,
          left: `${randomize()}%`,
        }}
        pantsColor={randomizeColor()}
        shirtColor={randomizeColor()}
        personId={`person${i}`}
      />
    );
  }

  const winnerPantsColor = missingObjectArr[winnerNumber].props.pantsColor;
  const winnerShirtColor = missingObjectArr[winnerNumber].props.shirtColor;

  return (
    <>
      <div className="winner-container">
        <h2>Find This:</h2>
        <Winner pantsColor={winnerPantsColor} shirtColor={winnerShirtColor} />
      </div>
      <div className="missing-container">{missingObjectArr}</div>
    </>
  );
};
export default ObjectContainer;
