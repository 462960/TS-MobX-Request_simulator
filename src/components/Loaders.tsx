import React, { useContext } from "react";
import { useObserver } from "mobx-react";

import { StoreContext } from "../stores/store";

// import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const Loaders: React.FC = () => {
  const store = useContext(StoreContext);

  return useObserver(() => (
    <div>
      {store.loaders.map((x: any) => (
        <Paper key={x.id}>
          <ul className="table-unit">
            <li>{x.name}</li>
            <li>{x.time}</li>
            <li>Del</li>
          </ul>
        </Paper>
      ))}
    </div>
  ));
};

export default Loaders;
