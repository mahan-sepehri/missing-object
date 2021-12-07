import React, { useEffect } from "react";

import { ReactComponent as SvgImage } from "../assets/person.svg";
import "./Winner.css";

const Winner = (props) => {
  useEffect(() => {
    const winnerPerson = document.querySelector(".winner");
    // console.log(person);
    const pants = winnerPerson.querySelectorAll(".cls-9");
    // console.log(pants);
    const shirt = winnerPerson.querySelectorAll(".cls-10");
    shirt.forEach((path) => (path.style.fill = `#${props.shirtColor}`));

    // console.log(props.pantsColor);
    pants.forEach((path) => (path.style.fill = `#${props.pantsColor}`));
  }, [props.pantsColor, props.shirtColor]);
  return <SvgImage className="winner" />;
};

export default Winner;
