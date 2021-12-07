import { createContext, useState } from "react";

const initialShowResult = {
  showResult: false,
  setShowResult: () => {},
};

const ShowResultContext = createContext(initialShowResult);

export const ShowResultContextProvider = (props) => {
  const [showResult, setShowResult] = useState(false);
  return (
    <ShowResultContext.Provider value={{ showResult, setShowResult }}>
      {props.children}
    </ShowResultContext.Provider>
  );
};

export default ShowResultContext;
