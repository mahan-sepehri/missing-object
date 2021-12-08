import React, { useContext } from "react";

import "./App.css";
import ObjectContainer from "./components/ObjectContainer";
import ShowResultContext from "./context/showResult";
import ResultModal from "./components/ResultModal";

const App = () => {
  const { showResult } = useContext(ShowResultContext);

  return (
    <>
      {showResult && <ResultModal />}

      {!showResult ? <ObjectContainer /> : null}
    </>
  );
};

export default App;
