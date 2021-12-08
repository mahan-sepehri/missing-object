import React from "react";

import SvgImg from "./svgImg";

import "./Winner.css";

const Winner = (props) => {
  return (
    <div className="winner">
      <SvgImg
        personClassPants="winner-pants"
        personClassShirt="winner-shirt"
        fillColors={`.cls-1{fill:#e6d0c1;}.cls-2{fill:#eacbb7;}.cls-3{fill:#417183;}.cls-4{fill:#e9c741;}.cls-5{fill:#f1f1f1;}.cls-6{fill:#303030;}.cls-7{fill:#7a6356;}.cls-8{fill:#4c4c4c;}.winner-pants{fill:${props.pantsColor};}.winner-shirt{fill:${props.shirtColor};}`}
      />
    </div>
  );
};

export default Winner;
