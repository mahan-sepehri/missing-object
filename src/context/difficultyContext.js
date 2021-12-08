import { createContext, useState } from "react";

const initialDifficulty = {
  difficulty: 10,
  setDifficulty: () => {},
};

const DifficultyContext = createContext(initialDifficulty);

export const DifficultyContextProvider = (props) => {
  const [difficulty, setDifficulty] = useState(10);
  return (
    <DifficultyContext.Provider value={{ difficulty, setDifficulty }}>
      {props.children}
    </DifficultyContext.Provider>
  );
};

export default DifficultyContext;
