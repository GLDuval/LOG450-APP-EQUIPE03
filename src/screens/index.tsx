import {Navio} from 'rn-navio';

import {Dashboard} from './dashboard';
import {Login} from './login';
import {Profile} from './pages/profile';
import {GroceryInfos} from './pages/grocery-infos';
import {GroceryMap} from './pages/grocery-map';
import {GroceryList} from './pages/grocery-list';
import {MyRecipes} from './pages/my-recipes';

import {useAppearance} from '../utils/hooks';
import {screenDefaultOptions} from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    Dashboard,
    Login,
    Profile,
    GroceryInfos,
    GroceryMap,
    GroceryList,
    MyRecipes
  },
  stacks: {
    MainStack: ['Dashboard','Login', 'Profile', 'GroceryInfos', 'GroceryMap', 'GroceryList', 'MyRecipes'],
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
