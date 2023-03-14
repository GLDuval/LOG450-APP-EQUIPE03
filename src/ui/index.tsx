import { Navio } from 'rn-navio';

import { Dashboard } from './pages/homeView';
import { Login } from './pages/loginView';
import { Join } from './pages/signUpView';
import { Profile } from './pages/profileView';
import { GroceryInfos } from './pages/groceryView';
import { GroceryMap } from './pages/mapView';
import { GroceryList } from './pages/groceryListView';
import { MyRecipes } from './pages/myRecipesView';
import { RecipeDetails } from './pages/recipeDetailView';

import { OnboardingFirstPage } from './onboarding/firstPage';
import { OnboardingSecondPage } from './onboarding/secondPage';
import { OnboardingThirdPage } from './onboarding/thirdPage';

import { useAppearance } from '../utils/hooks';
import { screenDefaultOptions } from '../utils/designSystem';

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
