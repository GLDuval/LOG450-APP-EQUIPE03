import {Navio} from 'rn-navio';

import {Dashboard} from './dashboard';
import {Login} from './login';
import {Profile} from './pages/profile';
import {GroceryInfos} from './pages/grocery-infos';
import {GroceryMap} from './pages/grocery-map';
import {GroceryList} from './pages/grocery-list';
import {MyRecipes} from './pages/my-recipes';

import {GroceryStoresList} from './components/grocery-stores-list';
import {RecipesList} from './components/recipes-list';
import {FoodInfosList} from './components/food-infos-list';

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
    MyRecipes,

    // Components
    GroceryStoresList,
    RecipesList,
    FoodInfosList,
  },
  stacks: {
    MainStack: ['Dashboard','Login', 'Profile', 'GroceryInfos', 'GroceryMap', 'GroceryList', 'MyRecipes', 'GroceryStoresList', 'RecipesList', 'FoodInfosList'],
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
