import { createContext, useState } from "react";

const initialLives = {
  lives: 3,
  setLives: () => {},
};

const LivesContext = createContext(initialLives);

export const LivesContextProvider = (props) => {
  const [lives, setLives] = useState(3);
  return (
    <LivesContext.Provider value={{ lives, setLives }}>
      {props.children}
    </LivesContext.Provider>
  );
};

export default LivesContext;
