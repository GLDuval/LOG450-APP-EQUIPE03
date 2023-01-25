import React, { ReactNode } from 'react';

import './_hydration';
import { UIStore } from './ui';

class Stores {
  ui = new UIStore();
}

interface Props {
  children: ReactNode;
}

export const stores = new Stores();

const storeContext = React.createContext<Stores>(stores);

export const StoresProvider = ({ children }: Props) => (
  <storeContext.Provider value={stores}>{children}</storeContext.Provider>
);
export const useStores = (): Stores => React.useContext(storeContext);

export const hydrateStores = async () => {
  for (const key in stores) {
    if (Object.prototype.hasOwnProperty.call(stores, key)) {
      const s = stores[key as keyof Stores];

      if (s.hydrate) {
        await s.hydrate();
      }
    }
  }
};
