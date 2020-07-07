import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext<any>(undefined);

type Props = {
  children: JSX.Element | null;
};

interface Store {
  // loaders: Array<object>;
  // Interchangable in many cases
  loaders: object[];
  addLoader: (loader: object) => void;
  removeLoader: (i: number) => void;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const store = useLocalStore<Store>(() => ({
    loaders: [],
    addLoader: (loader) => {
      store.loaders.push(loader);
    },
    removeLoader: (i) => {
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
