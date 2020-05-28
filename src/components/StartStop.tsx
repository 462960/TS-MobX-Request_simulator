import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";

interface Props {
  handleStart: () => void;
  handleStop: () => void;
}

const StartStop: React.FC<Props> = ({ handleStart, handleStop }) => {
  return (
    <ul className="start-stop">
      <li>
        <Button onClick={handleStart}>Start</Button>
        <Button onClick={handleStop}>Stop</Button>
      </li>
    </ul>
  );
};

export default StartStop;
