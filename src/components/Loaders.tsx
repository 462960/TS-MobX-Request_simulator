import React, { useContext } from "react";
import { useObserver } from "mobx-react";

import { StoreContext } from "../stores/store";

import Paper from "@material-ui/core/Paper";
import DeleteIcon from "@material-ui/icons/Delete";

interface Props {
  blocked: boolean;
  setLoadersQueue: any;
  setOpenMessage: (x: boolean) => void;
}

const Loaders: React.FC<Props> = ({
  blocked,
  setLoadersQueue,
  setOpenMessage,
}) => {
  const store = useContext(StoreContext);

  interface Loaders {
    name: string;
    time: number;
    id: string;
  }

  const deleteItem = (e: any) => {
    const i: number = store.loaders.findIndex((x: any) => x.id === e.target.id);
    !blocked && store.removeLoader(i);
    e.stopPropagation();
    !blocked && setLoadersQueue([...store.loaders]);
    if (blocked) {
      setOpenMessage(true);
      setTimeout(() => {
        setOpenMessage(false);
      }, 1500);
    }
  };

  return useObserver(() => (
    <div onClick={deleteItem}>
      {store.loaders.map((x: Loaders) => (
        <div className="unit" key={x.id}>
          <Paper>
            <ul className="table-unit">
              <li>{x.name}</li>
              <li>{x.time}</li>
              <li id={x.id} className="delete-icon">
                <DeleteIcon />
              </li>
            </ul>
          </Paper>
        </div>
      ))}
    </div>
  ));
};

export default Loaders;
