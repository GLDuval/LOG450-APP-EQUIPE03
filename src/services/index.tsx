import React, { ReactNode } from 'react';

import { OnStartService } from './onStart';
import { TranslateService } from './translate';
import { getNavio } from '../ui';

class Services {
  t = new TranslateService();
  onStart = new OnStartService();

  // -- adding navio as a service
  get navio() {
    return getNavio();
  }
}

interface Props {
  children: ReactNode;
}

export const services = new Services();

const servicesContext = React.createContext<Services>(services);
export const ServicesProvider = ({ children }: Props) => (
  <servicesContext.Provider value={services}>{children}</servicesContext.Provider>
);
export const useServices = (): Services => React.useContext(servicesContext);

export const initServices = () => {
  for (const key in services) {
    if (Object.prototype.hasOwnProperty.call(services, key)) {
      const s = services[key as keyof Services] as IService;

      if (s.init) {
        s.init();
      }
    }
  }
};
