import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext<any>(undefined);

interface Props {
  //   children: any;
}

export const StoreProvider: React.FC<Props> = ({ children }) => {
  const store = useLocalStore(() => ({
    loaders: [{}],
    addLoader: (loader: object) => {
      store.loaders.push(loader);
      //   console.log("I am addLoader");
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
