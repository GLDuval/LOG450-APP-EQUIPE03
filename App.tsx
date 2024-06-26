import 'expo-dev-client';
import React, { useCallback, useEffect, useState } from 'react';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AppRoot } from './src/ui';
import {
  configureDesignSystem,
  getStatusBarBGColor,
  getStatusBarStyle,
} from './src/utils/designSystem';
import { hydrateStores } from './src/stores';
import { initServices, services } from './src/services';
import { SSProvider } from './src/utils/providers';
import { StatusBar } from 'expo-status-bar';
import { UserContext } from './src/contexts/UserContext';
import { LanguageContext } from './src/contexts/LanguageContext';
import { auth } from './firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLanguage } from './src/ui/hooks/useLanguage';
import { setupLanguage } from './src/repository/userRepository';

LogBox.ignoreLogs(['Require']);

export default (): JSX.Element => {
  setupLanguage(services.t.getLanguage().substring(0, 2));
  const language = useLanguage();
  const [ready, setReady] = useState(false);
  const [user] = useAuthState(auth);

  const start = useCallback(async () => {
    await SplashScreen.preventAutoHideAsync();

    await hydrateStores();
    configureDesignSystem();
    initServices();

    setReady(true);
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    start().catch(console.error);
  }, [start]);

  if (!ready) {
    return <></>;
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SSProvider>
        <LanguageContext.Provider value={language}>
          <UserContext.Provider value={user}>
            <StatusBar style={getStatusBarStyle()} backgroundColor={getStatusBarBGColor()} />
            <AppRoot />
          </UserContext.Provider>
        </LanguageContext.Provider>
      </SSProvider>
    </GestureHandlerRootView>
  );
};
