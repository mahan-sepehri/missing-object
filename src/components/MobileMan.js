import { useContext } from "react";
import MobileManSvg from "./characterSvgCodes/MobileManSvg";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";

const MobileMan = (props) => {
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
      className="svg-image mobile-man"
      style={props.style}
      onClick={checkWinner}
    >
      <MobileManSvg
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.cls-1{fill:#f2e7d6;}.cls-2{fill:#666;}.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}.cls-5{fill:#edd5be;}.cls-6{fill:#1d1e1e;}`}
      />
    </div>
  );
};

export default MobileMan;
