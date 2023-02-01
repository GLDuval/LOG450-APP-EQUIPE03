import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { Text, View, Button, LoaderScreen, Colors } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';

import { services, useServices } from '../services';
import { useAppearance } from '../utils/hooks';
import { TextInput } from 'react-native-gesture-handler';
import { auth, webClientID } from '../../firebaseConfig';
import {
  GoogleAuthProvider,
  signInWithCredential,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import * as Google from 'expo-auth-session/providers/google';
import { getTheme } from '../utils/designSystem';
import { useAuthState } from 'react-firebase-hooks/auth';
import { styleSheet } from '../utils/stylesheet';

export const Login: NavioScreen = observer(() => {
  useAppearance();
  const { navio } = useServices();

  // State (local)
  const [isWrongLogin, setWrongLogin] = useState(false);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');
  const [user, loading] = useAuthState(auth);

  // Google login
  const [request, googleResponse, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: webClientID,
  });

  useEffect(() => {
    if (googleResponse?.type === 'success') {
      const { id_token } = googleResponse.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((userCredential) => {
          console.log(userCredential);
          navio.setRoot('MainStack');
        })
        .catch((error: FirebaseError) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  }, [googleResponse, navio]);

  useEffect(() => {
    if (user) {
      navio.setRoot('MainStack');
    }
  }, [user, navio]);

  const login = useCallback(
    async (email: string, password: string) => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          // Signed in
          // const user = userCredential.user;
          setWrongLogin(false);
          navio.setRoot('MainStack');
        })
        .catch((error: FirebaseError) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setWrongLogin(true);
          console.log(errorCode, errorMessage);
        });
    },
    [navio],
  );

  // STYLES
  const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      flex: 1,
      paddingTop: 10,
      marginHorizontal: 15,
    },
    joinText: {
      paddingTop: 10,
      fontSize: 18,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().blueberry,
      textAlign: 'center',
    },
    loginOptions: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      paddingBottom: 16,
    },
    wrongLoginText: {
      fontSize: 18,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().red,
      textAlign: 'left',
      paddingHorizontal: 25,
      paddingBottom: 15,
    },
    continueAsGuest: {
      fontSize: 18,
      flex: 1,
      textAlign: 'center',
      color: getTheme().blue,
    },
  });

  return (
    <View flex bg-bgColor>
      <StatusBar backgroundColor={getTheme().bgColor} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styleSheet.loginHeader}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styleSheet.loginHeaderTitle}>{services.t.do('login.title')}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={styleSheet.loginInput}>
            <TextInput
              value={emailInput}
              onChangeText={(email) => setEmail(email)}
              style={styleSheet.loginTextField}
              placeholder={services.t.do('login.email')}
            />
          </View>
          <View style={styleSheet.loginInput}>
            <TextInput
              value={passwordInput}
              onChangeText={(password) => setPassword(password)}
              style={styleSheet.loginTextField}
              placeholder={services.t.do('login.password')}
              secureTextEntry={true}
            />
          </View>
          {isWrongLogin && (
            <Text style={styles.wrongLoginText}>{services.t.do('login.wrongLogin')}</Text>
          )}
        </View>

        <View style={styleSheet.loginInput}>
          <View style={styles.loginOptions}>
            <View>
              <Text>{services.t.do('login.forgotPassword')}</Text>
            </View>
          </View>
        </View>

        <View style={styleSheet.loginInput}>
          <Button
            label={services.t.do('login.login')}
            labelStyle={styleSheet.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{ marginBottom: 10 }}
            onPress={() => login(emailInput, passwordInput)}
          />
        </View>
        <View style={styleSheet.loginInput}>
          <Button
            label={'Login with Google'}
            labelStyle={styleSheet.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{ marginBottom: 10 }}
            onPress={() => promptAsync()}
            disabled={!request}
          />
        </View>
        {/* }
        <View style={styleSheet.loginInput}>
          <Button
            label={services.t.do('login.loginWithGoogle')}
            labelStyle={styles.loginGoogleButtonLabel}
            borderRadius={15}
            backgroundColor="#FFFFFF"
            style={{borderColor: "#D6D6D6"}}
            iconSource={Assets.images.google}
          />
        </View>
        {*/}
        <View style={styleSheet.loginInput}>
          <Text onPress={() => navio.show('Join')} style={styles.joinText}>
            {services.t.do('login.signup')}
          </Text>
        </View>
        <View style={styleSheet.loginInput}>
          <Text onPress={() => console.log('TODO')} style={styles.continueAsGuest}>
            {services.t.do('login.continueAsGuest')}
          </Text>
        </View>
        {loading && <LoaderScreen message={services.t.do('login.loading')} color={Colors.grey40} />}
      </ScrollView>
    </View>
  );
});
Login.options = () => ({});
