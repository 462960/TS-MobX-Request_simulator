import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext<any>(undefined);

interface Props {
  //   children: any;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  interface Store {
    loaders: object[];
    addLoader: (loader: object) => void;
    // removeLoader: (i: number) => void;
  }
  const store = useLocalStore<Store>(() => ({
    loaders: [],
    addLoader: (loader) => {
      store.loaders.push(loader);
    },
    removeLoader: (i: number) => {
      store.loaders = [
        ...store.loaders.slice(0, i),
        ...store.loaders.slice(i + 1),
      ];
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
