import { useEffect, useContext } from "react";
import { ReactComponent as SvgImage } from "../assets/person.svg";
import ShowResultContext from "../context/showResult";

import "./person.css";

const Person = (props) => {
  const { setShowResult } = useContext(ShowResultContext);

  useEffect(() => {
    const person = document.getElementById(`${props.personId}`);
    // console.log(person);
    const pants = person.querySelectorAll(".cls-9");
    // console.log(pants);
    const shirt = person.querySelectorAll(".cls-10");
    shirt.forEach((path) => (path.style.fill = `#${props.shirtColor}`));

    // console.log(props.pantsColor);
    pants.forEach((path) => (path.style.fill = `#${props.pantsColor}`));
  }, [props.pantsColor, props.shirtColor, props.personId]);

  const checkWinner = () => {
    if (props.objectNum === props.winnerNumber) {
      setShowResult(true);
    } else {
      console.log("not this one");
    }
  };

  return (
    <SvgImage
      className="svg-image"
      style={props.style}
      id={props.personId}
      onClick={checkWinner}
    />
  );
};

export default Person;