import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter.jsx";
import { SpaceTravelProvider } from "./context/SpaceTravelContext";

function App() {
  return (
    <SpaceTravelProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </SpaceTravelProvider>
  );
}

export default App;
