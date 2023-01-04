import React from "react";
import RoutingPage from "./routes/RoutingPage";
import StateContext from "./context/StateContext";

function App() {
  return (
    <>
      <StateContext>
        <RoutingPage />
      </StateContext>
    </>
  );
}

export default App;
