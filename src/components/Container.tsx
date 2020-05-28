import React from "react";

import Paper from "@material-ui/core/Paper";
// import TextField from "@material-ui/core/TextField";

import InputModule from "./InputModule";
import Loaders from "./Loaders";
import AnimatedLoader from "./AnimatedLoader";

const Container: React.FC = () => {
  return (
    <div className="container">
      <Paper>
        <div className="loader-wrapper">
          <div className="table-container">
            <InputModule />
            <Loaders />
          </div>
          <div className="spinner-container">
            <AnimatedLoader />
            <span>Name</span>
            <span>sec left</span>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Container;
