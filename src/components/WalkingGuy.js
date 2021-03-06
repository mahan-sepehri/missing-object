import { useContext } from "react";
import WalkingGuySvg from "./characterSvgCodes/WalkingGuySvg";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";

const WalkingGuy = (props) => {
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
      className="svg-image walking-guy"
      style={props.style}
      onClick={checkWinner}
    >
      <WalkingGuySvg
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default WalkingGuy;
