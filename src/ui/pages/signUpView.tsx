import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View, Button, LoaderScreen, Colors } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';

import { services, useServices } from '../../services';
import { useAppearance } from '../../utils/hooks';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebaseConfig';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseError } from 'firebase/app';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { addEmptyUserDocument } from '../../services/firestoreService';

export const Join: NavioScreen = observer(() => {
  useAppearance();
  const { navio } = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [name, setName] = useState('');
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  // Firebase Create
  const createNewUser = useCallback(
    (email: string, password: string) => {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // Signed in
          const user = userCredential.user;
          await updateProfile(user, {
            displayName: name,
          });
          await addEmptyUserDocument(user.uid);
          setError(false);
          setLoading(false);
          navio.push('Login');
        })
        .catch((userError: FirebaseError) => {
          setError(true);
          switch (userError.code) {
            case 'auth/email-already-in-use':
              setErrorMessage(services.t.do('signup.emailAlreadyInUse'));
              break;
            case 'auth/weak-password':
              setErrorMessage(services.t.do('signup.weakPassword'));
              break;
            case 'auth/invalid-email':
              setErrorMessage(services.t.do('signup.invalidEmail'));
              break;
            default:
              setErrorMessage(services.t.do('signup.unknownError'));
              break;
          }
          setLoading(false);
          console.log(userError.code, userError.message);
        });
    },
    [name, navio],
  );

  // STYLES
  const styles = StyleSheet.create({
    container: {
      fontSize: 24,
      flex: 1,
      paddingTop: 10,
      marginHorizontal: 15,
    },
    backText: {
      paddingTop: 10,
      fontSize: 18,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().blueberry,
      textAlign: 'center',
    },
    error: {
      fontSize: 18,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().red,
      textAlign: 'left',
      paddingHorizontal: 25,
      paddingBottom: 15,
    },
  });

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styleSheet.loginHeader}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styleSheet.loginHeaderTitle}>{services.t.do('signup.title')}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={styleSheet.loginInput}>
            <TextInput
              style={styleSheet.loginTextField}
              placeholder={services.t.do('signup.name')}
              onChangeText={(text: string) => setName(text)}
              value={name}
            />
          </View>
          <View style={styleSheet.loginInput}>
            <TextInput
              style={styleSheet.loginTextField}
              placeholder={services.t.do('signup.email')}
              onChangeText={(text: string) => setEmail(text)}
              value={emailInput}
            />
          </View>
          <View style={styleSheet.loginInput}>
            <TextInput
              style={styleSheet.loginTextField}
              placeholder={services.t.do('signup.password')}
              secureTextEntry={true}
              onChangeText={(text: string) => setPassword(text)}
              value={passwordInput}
            />
          </View>
          {error && <Text style={styles.error}>{errorMessage}</Text>}
        </View>

        <View style={styleSheet.loginInput}>
          <Button
            label={services.t.do('signup.signup')}
            labelStyle={styleSheet.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{ marginBottom: 10 }}
            onPress={() => createNewUser(emailInput, passwordInput)}
          />
        </View>
        <View style={styleSheet.loginInput}>
          <Text onPress={() => navio.goBack()} style={styles.backText}>
            {services.t.do('signup.back')}
          </Text>
        </View>
        {loading && <LoaderScreen message={services.t.do('login.loading')} color={Colors.grey40} />}
      </ScrollView>
    </View>
  );
});
Join.options = () => ({});
