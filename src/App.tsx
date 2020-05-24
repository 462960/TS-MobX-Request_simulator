import React from "react";
import "./App.scss";

import TopBar from "./components/TopBar";
import Container from "./components/Container";
import { StoreProvider } from "./stores/store";

const App: React.FC = () => {
  return (
    <StoreProvider>
      <div>
        <TopBar />
        <Container />
      </div>
    </StoreProvider>
  );
};

export default App;
