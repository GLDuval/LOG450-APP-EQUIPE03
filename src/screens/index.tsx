import { Navio } from 'rn-navio';

import { Dashboard } from './dashboard';
import { Login } from './login';
import { Join } from './join';
import { Profile } from './pages/profile';
import { GroceryInfos } from './pages/grocery-infos';
import { GroceryMap } from './pages/grocery-map';
import { GroceryList } from './pages/grocery-list';
import { MyRecipes } from './pages/my-recipes';

import { GroceryStoresList } from './components/grocery-stores-list';
import { RecipesList } from './components/recipes-list';
import { FoodInfosList } from './components/food-infos-list';
import { SearchBar } from './components/search-bar';

import { useAppearance } from '../utils/hooks';
import { screenDefaultOptions } from '../utils/designSystem';

// NAVIO
export const navio = Navio.build({
  screens: {
    Dashboard,
    Login,
    Join,
    Profile,
    GroceryInfos,
    GroceryMap,
    GroceryList,
    MyRecipes,

    // Components
    GroceryStoresList,
    RecipesList,
    FoodInfosList,
    SearchBar,
  },
  stacks: {
    LoginStack: ['Login', 'Join'],
    MainStack: [
      'Dashboard',
      'Login',
      'Profile',
      'GroceryInfos',
      'GroceryMap',
      'GroceryList',
      'MyRecipes',
      'GroceryStoresList',
      'RecipesList',
      'FoodInfosList',
      'SearchBar',
    ],
  },
  root: 'Tabs',
  hooks: [useAppearance],
  options: {
    stack: screenDefaultOptions,
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.Root;
