import React, { ReactNode } from 'react';

import { ServicesProvider } from '../services';
import { StoresProvider } from '../stores';

interface Props {
  children: ReactNode;
}

export const SSProvider = ({ children }: Props) => {
  return (
    <StoresProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </StoresProvider>
  );
};
