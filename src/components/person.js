import { useContext } from "react";
import SoccerPlayer from "./characterSvgCodes/SoccerPlayer";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";

const Person = (props) => {
  const { setShowResult } = useContext(ShowResultContext);
  const { lives, setLives } = useContext(LivesContext);

  const checkWinner = () => {
    if (props.objectNum === props.winnerNumber) {
      setShowResult(true);
    } else {
      console.log("not this one");
      setLives(lives - 1);
    }
  };

  return (
    <div
      className="svg-image soccer-player"
      style={props.style}
      onClick={checkWinner}
    >
      <SoccerPlayer
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default Person;
