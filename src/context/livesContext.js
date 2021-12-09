import { createContext, useState } from "react";

const initialLives = {
  lives: 3,
  setLives: () => {},
};

const LivesContext = createContext(initialLives);

export const LivesContextProvider = (props) => {
  const [lives, setLives] = useState(3);
  const [showWrong, setShowWrong] = useState(false);
  return (
    <LivesContext.Provider value={{ lives, setLives, showWrong, setShowWrong }}>
      {props.children}
    </LivesContext.Provider>
  );
};

export default LivesContext;
