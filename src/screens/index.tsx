import {Navio} from 'rn-navio';

import {Main} from './main';
import {Login} from './login';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    Main,
    Login,
  },
  stacks: {
    MainStack: ['Main','Login'],
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
