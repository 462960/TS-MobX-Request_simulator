import React, { useState } from "react";
import "./App.scss";

import TopBar from "./components/TopBar";
import Container from "./components/Container";
import { StoreProvider } from "./stores/store";
import ModalMessage from "./components/ModalMessage";

const App: React.FC = () => {
  const [openMessage, setOpenMessage] = useState<boolean>(false);
  return (
    <StoreProvider>
      <div>
        <ModalMessage openMessage={openMessage} />
        <TopBar />
        <Container setOpenMessage={setOpenMessage} />
      </div>
    </StoreProvider>
  );
};

export default App;
