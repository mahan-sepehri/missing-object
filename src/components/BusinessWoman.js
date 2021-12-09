import { useContext } from "react";
import BusinessWomanSvg from "./characterSvgCodes/BusinessWomanSvg";
import ShowResultContext from "../context/showResult";
import LivesContext from "../context/livesContext";

import "./person.css";

const BusinessWoman = (props) => {
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
      className="svg-image business-woman"
      style={props.style}
      onClick={checkWinner}
    >
      <BusinessWomanSvg
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.person${props.personId}-shirt{fill:${props.shirtColor};}.person${props.personId}-pants{fill:${props.pantsColor};}`}
      />
    </div>
  );
};

export default BusinessWoman;
