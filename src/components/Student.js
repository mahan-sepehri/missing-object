import { useContext } from "react";
import StudentSVG from "./StudentSVG";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";

const Student = (props) => {
  const { setShowResult } = useContext(ShowResultContext);
  const { lives, setLives } = useContext(LivesContext);

  const checkWinner = () => {
    if (props.objectNum === props.winnerNumber) {
      setShowResult(true);
    } else {
      setLives(lives - 1);
    }
  };

  return (
    <div className="svg-image" style={props.style} onClick={checkWinner}>
      <StudentSVG
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.cls-1{fill:#e8dbce;}.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}.cls-4{fill:#736357;}.cls-5{fill:#f0e5d4;}.cls-6{fill:#333;}.cls-7{fill:#f0f0f0;}`}
      />
    </div>
  );
};

export default Student;
