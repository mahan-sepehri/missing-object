import { useContext } from "react";
import KyleSvg from "./characterSvgCodes/KyleSvg";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";

const Kyle = (props) => {
  const { setShowResult } = useContext(ShowResultContext);
  const { lives, setLives, setShowWrong } = useContext(LivesContext);

  const checkWinner = () => {
    if (props.objectNum === props.winnerNumber) {
      setShowResult(true);
    } else {
      setShowWrong(true);
      setLives(lives - 1);
      setTimeout(() => {
        setShowWrong(false);
      }, 300);
    }
  };

  return (
    <div className="svg-image kyle" style={props.style} onClick={checkWinner}>
      <KyleSvg
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default Kyle;
