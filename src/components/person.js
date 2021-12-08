import { useContext } from "react";
import SvgImg from "./svgImg";
import ShowResultContext from "../context/showResult";

import "./person.css";

const Person = (props) => {
  const { setShowResult } = useContext(ShowResultContext);

  const checkWinner = () => {
    if (props.objectNum === props.winnerNumber) {
      setShowResult(true);
    } else {
      console.log("not this one");
    }
  };

  return (
    <div className="svg-image" style={props.style} onClick={checkWinner}>
      <SvgImg
        id={props.personId}
        personClassPants={`person${props.personId}-pants`}
        personClassShirt={`person${props.personId}-shirt`}
        fillColors={`.cls-1{fill:#e6d0c1;}.cls-2{fill:#eacbb7;}.cls-3{fill:#417183;}.cls-4{fill:#e9c741;}.cls-5{fill:#f1f1f1;}.cls-6{fill:#303030;}.cls-7{fill:#7a6356;}.cls-8{fill:#4c4c4c;}.person${props.personId}-pants{fill:${props.pantsColor};}.person${props.personId}-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default Person;
