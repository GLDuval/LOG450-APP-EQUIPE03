import { Navio } from 'rn-navio';

import { Dashboard } from './pages/dashboard';
import { Login } from './pages/login';
import { Join } from './pages/join';
import { Profile } from './pages/profile';
import { GroceryInfos } from './pages/grocery-infos';
import { GroceryMap } from './pages/grocery-map';
import { GroceryList } from './pages/grocery-list';
import { MyRecipes } from './pages/my-recipes';
import { RecipeDetails } from './pages/recipe-details';

import { OnboardingFirstPage } from './onboarding/firstPage';
import { OnboardingSecondPage } from './onboarding/secondPage';
import { OnboardingThirdPage } from './onboarding/thirdPage';

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
    RecipeDetails,

    OnboardingFirstPage,
    OnboardingSecondPage,
    OnboardingThirdPage,
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
