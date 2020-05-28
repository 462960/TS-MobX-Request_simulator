import React, { useContext } from "react";
import { useObserver } from "mobx-react";

import { StoreContext } from "../stores/store";

import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

const Loaders: React.FC = () => {
  const store = useContext(StoreContext);

  interface Loaders {
    name: string;
    time: number;
    id: string;
  }

  // const deleteItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const deleteItem = (e: any) => {
    const i: number = store.loaders.findIndex((x: any) => x.id === e.target.id);
    store.removeLoader(i);
  };

  return useObserver(() => (
    <div onClick={deleteItem}>
      {store.loaders.map((x: Loaders) => (
        <Paper key={x.id}>
          <ul className="table-unit">
            <li>{x.name}</li>
            <li>{x.time}</li>
            <li id={x.id} className="delete-icon">
              <DeleteIcon />
            </li>
          </ul>
        </Paper>
      ))}
    </div>
  ));
};

export default Loaders;
