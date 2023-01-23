import {Navio} from 'rn-navio';

import {Main} from './main';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    Main,
  },
  stacks: {
    MainStack: ['Main'],
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
