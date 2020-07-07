import React, { useContext, useState, useEffect } from "react";
import { useObserver } from "mobx-react";

import { StoreContext } from "../stores/store";

import Paper from "@material-ui/core/Paper";

import InputModule from "./InputModule";
import Loaders from "./Loaders";
import AnimatedLoader from "./AnimatedLoader";
import StartStop from "./StartStop";

const Container: React.FC = () => {
  const store = useContext(StoreContext);
  const [currentName, setCurrentName] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [grad, setGrad] = useState<number>(0);
  const [loadersQueue, setLoadersQueue] = useState<any>([]);
  const [timerID, setTimerID] = useState<any>(null);

  useEffect(() => {
    if (currentTime === 0 && loadersQueue.length === 0) {
      clearInterval(timerID);
      setLoadersQueue([...store.loaders]);
    }
    currentTime < 0 && loadersQueue.length > 0 && takeLoader();
  }, [currentTime, loadersQueue.length]);

  const handleStart = () => {
    currentTime === 0 && takeLoader();

    const interval = setInterval(() => {
      setCurrentTime((x) => x - 1);
      setGrad((x) => x + 35);
    }, 1000);
    setTimerID(interval);
  };

  const handleStop = () => {
    clearInterval(timerID);
  };

  const takeLoader = () => {
    const item = loadersQueue.pop();
    setCurrentName(item.name);
    setCurrentTime(item.time);
  };

  return useObserver(() => (
    <div className="container">
      <Paper>
        <div className="loader-wrapper">
          <div className="table-container">
            <InputModule setLoadersQueue={setLoadersQueue} />
            <Loaders />
            <StartStop handleStart={handleStart} handleStop={handleStop} />
          </div>
          <div className="spinner-container">
            <AnimatedLoader grad={grad} />
            <span>{currentName}</span>
            <span>{currentTime} sec left</span>
          </div>
        </div>
      </Paper>
    </div>
  ));
};

export default Container;
