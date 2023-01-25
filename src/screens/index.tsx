import {Navio} from 'rn-navio';

import {Main} from './main';
import {Login} from './login';
import {Join} from './join';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    Main,
    Login,
    Join,
  },
  stacks: {
    LoginStack: ['Login', 'Join'],
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
