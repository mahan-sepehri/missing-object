import React, { useContext } from "react";
import DifficultyContext from "../context/difficultyContext";

const InputSlider = () => {
  const { difficulty, setDifficulty } = useContext(DifficultyContext);
  const difficultyChangeHandler = (e) => {
    console.log(e.target.value);
    setDifficulty(e.target.value);
  };
  return (
    <div>
      <input
        type="range"
        id="difficulty"
        name="difficulty"
        min="10"
        max="200"
        value={difficulty}
        step="1"
        onChange={difficultyChangeHandler}
      />
      <label htmlFor="difficulty">{difficulty}</label>
    </div>
  );
};
export default InputSlider;
