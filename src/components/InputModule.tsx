import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { StoreContext } from "../stores/store";
// import { useObserver } from "mobx-react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

interface LoadUnit {
  name?: string;
  time?: number;
}
interface Props {
  setLoadersQueue: any;
}

const InputModule: React.FC<Props> = ({ setLoadersQueue }) => {
  const store = useContext(StoreContext);
  const [loader, setLoader] = useState<LoadUnit>({});

  const submitLoader = () => {
    store.addLoader({
      ...loader,
      id: uuidv4(),
    });
    setLoader({});
    setLoadersQueue([...store.loaders]);
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

  const { name, time } = loader;

  return (
    <ul className="table-unit" onChange={setValues}>
      <li>
        <TextField name="name" label="Loader name" value={name || ""} />
      </li>
      <li>
        <TextField
          name="time"
          label="Seconds"
          type="number"
          value={time || ""}
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
