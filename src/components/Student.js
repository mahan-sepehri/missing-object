import { useContext } from "react";
import StudentSVG from "./characterSvgCodes/StudentSVG";
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
    <div
      className="svg-image student"
      style={props.style}
      onClick={checkWinner}
    >
      <StudentSVG
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default Student;
