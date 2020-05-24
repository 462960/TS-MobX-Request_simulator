import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "../stores/store";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const InputModule: React.FC = () => {
  const store = useContext(StoreContext);
  const [loader, setLoader] = useState({});

  const submitLoader = () => {
    store.addLoader({
      ...loader,
      id: uuidv4(),
    });
    // console.log();
  };

  const setValues = (e: any) => {
    setLoader({
      ...loader,
      [e.target.name]:
        e.target.name === "name"
          ? e.target.value.trim()
          : Number(e.target.value),
    });
  };

  return (
    <ul className="table-unit">
      <li>
        <TextField onChange={setValues} name="name" label="Loader name" />
      </li>
      <li>
        <TextField
          onChange={setValues}
          name="time"
          label="Seconds"
          type="number"
        />
      </li>
      <li>
        <Button onClick={submitLoader} color="primary">
          Add
        </Button>
      </li>
    </ul>
  );
};

export default InputModule;