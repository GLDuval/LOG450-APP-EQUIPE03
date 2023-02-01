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

import { useAppearance } from '../utils/hooks';
import { screenDefaultOptions } from '../utils/designSystem';
import { stores } from '../stores';
import React, { useEffect } from 'react';

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
    OnboardingStack: ['OnboardingFirstPage', 'OnboardingSecondPage', 'OnboardingThirdPage'],
    LoginStack: ['Login', 'Join'],
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
export const AppRoot = () => {
  useEffect(() => {
    stores.ui.isFirstLaunch ? navio.setRoot('OnboardingStack') : navio.setRoot('LoginStack');
  }, []);

  return <navio.Root />;
};
