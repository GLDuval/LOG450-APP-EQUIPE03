import { Navio } from 'rn-navio';

import { Dashboard } from './dashboard';
import { Login } from './login';
import { Join } from './join';
import { Profile } from './pages/profile';
import { GroceryInfos } from './pages/grocery-infos';
import { GroceryMap } from './pages/grocery-map';
import { GroceryList } from './pages/grocery-list';
import { MyRecipes } from './pages/my-recipes';
import { RecipeDetails } from './pages/recipe-details';

import { OnboardingFirstPage } from './onboarding/firstPage';
import { OnboardingSecondPage } from './onboarding/secondPage';
import { OnboardingThirdPage } from './onboarding/thirdPage';

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

    OnboardingFirstPage,
    OnboardingSecondPage,
    OnboardingThirdPage,

    // Components
    GroceryStoresList,
    RecipesList,
    FoodInfosList,
    SearchBar,
    RecipeDetails,
  },
  stacks: {
    LoginStack: [
      'OnboardingFirstPage',
      'OnboardingSecondPage',
      'OnboardingThirdPage',
      'Login',
      'Join',
    ],
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
