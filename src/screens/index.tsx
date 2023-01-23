import {Navio} from 'rn-navio';

import {Dashboard} from './dashboard';
import {Login} from './login';
import {Profile} from './pages/profile';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    Dashboard,
    Login,
    Profile,
  },
  stacks: {
    MainStack: ['Dashboard','Login', 'Profile'],
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
