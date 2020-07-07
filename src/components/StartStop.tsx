import React, { useContext } from "react";
import { StoreContext } from "../stores/store";
import { useObserver } from "mobx-react";

import Button from "@material-ui/core/Button";

interface Props {
  handleStart: () => void;
  handleStop: () => void;
}

const StartStop: React.FC<Props> = ({ handleStart, handleStop }) => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <ul className="start-stop">
      <li>
        <Button disabled={store.loaders.length === 0} onClick={handleStart}>
          Start
        </Button>
        <Button onClick={handleStop}>Stop</Button>
      </li>
    </ul>
  ));
};

export default StartStop;
