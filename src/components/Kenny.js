import { useContext } from "react";
import KennySvg from "./characterSvgCodes/KennySvg";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";
import DifficultyContext from "../context/difficultyContext";

const Kenny = (props) => {
  const { setShowResult } = useContext(ShowResultContext);
  const { lives, setLives, setShowWrong } = useContext(LivesContext);
  const { setDifficulty } = useContext(DifficultyContext);

  const checkWinner = () => {
    if (props.objectNum === props.winnerNumber) {
      setShowResult(true);

      setDifficulty((prev) => {
        console.log(prev);
        return prev + 1;
      });
    } else {
      setShowWrong(true);
      setLives(lives - 1);
      setTimeout(() => {
        setShowWrong(false);
      }, 300);
    }
  };

  return (
    <div className="svg-image kenny" style={props.style} onClick={checkWinner}>
      <KennySvg
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default Kenny;
