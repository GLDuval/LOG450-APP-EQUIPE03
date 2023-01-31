import { Navio } from 'rn-navio';

import { Dashboard } from './dashboard';
import { Login } from './login';
import { Profile } from './pages/profile';
import { GroceryInfos } from './pages/grocery-infos';
import { GroceryMap } from './pages/grocery-map';
import { GroceryList } from './pages/grocery-list';
import { MyRecipes } from './pages/my-recipes';
import { RecipeDetails } from './pages/recipe-details';

import { FirstPage } from './onboarding/firstPage';
import { SecondPage } from './onboarding/secondPage';
import { ThirdPage } from './onboarding/thirdPage';

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
    Profile,
    GroceryInfos,
    GroceryMap,
    GroceryList,
    MyRecipes,

    FirstPage,
    SecondPage,
    ThirdPage,

    // Components
    GroceryStoresList,
    RecipesList,
    FoodInfosList,
    SearchBar,
    RecipeDetails,
  },
  stacks: {
    MainStack: [
      'FirstPage',
      'SecondPage',
      'ThirdPage',
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
      'RecipeDetails',
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
