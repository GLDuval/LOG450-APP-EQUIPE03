import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View, Button, LoaderScreen, Colors } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';

import { services, useServices } from '../services';
import { useAppearance } from '../utils/hooks';

import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { TextInput } from 'react-native-gesture-handler';
import { FirebaseError } from 'firebase/app';
import { getTheme } from '../utils/designSystem';

export const Join: NavioScreen = observer(() => {
  useAppearance();
  const { navio } = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);
  const [credentialsError, setCredentialsError] = useState(false);

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
          setCredentialsError(false);
          setLoading(false);
          navio.push('Login');
          console.log(user);
        })
        .catch((error: FirebaseError) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setCredentialsError(true);
          setLoading(false);
          console.log(errorCode, errorMessage);
        });
    },
    [name, navio],
  );

  // STYLES
  const styles = StyleSheet.create({
    header: {
      flex: 1,
      paddingTop: 90,
      paddingBottom: 40,
      marginHorizontal: 15,
    },
    headerTitle: {
      fontSize: 32,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().blueberry,
      textAlign: 'center',
    },
    container: {
      fontSize: 24,
      flex: 1,
      paddingTop: 10,
      marginHorizontal: 15,
    },
    input: {
      paddingHorizontal: 25,
      paddingBottom: 15,
    },
    textField: {
      fontSize: 20,
      backgroundColor: getTheme().bgColor,
      borderColor: getTheme().grey,
      borderWidth: 1.5,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    loginButton: {
      backgroundColor: getTheme().blueberry,
      borderRadius: 10,
    },
    loginButtonLabel: {
      fontSize: 20,
      padding: 5,
    },
    loginGoogleButtonLabel: {
      fontSize: 20,
      color: getTheme().blueberry,
      padding: 5,
    },
    backText: {
      paddingTop: 10,
      fontSize: 18,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().blueberry,
      textAlign: 'center',
    },
    credentialsErrorText: {
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
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerTitle}>{services.t.do('signup.title')}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={styles.input}>
            <TextInput
              style={styles.textField}
              placeholder={services.t.do('signup.name')}
              onChangeText={(text: string) => setName(text)}
              value={name}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textField}
              placeholder={services.t.do('signup.email')}
              onChangeText={(text: string) => setEmail(text)}
              value={emailInput}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              style={styles.textField}
              placeholder={services.t.do('signup.password')}
              secureTextEntry={true}
              onChangeText={(text: string) => setPassword(text)}
              value={passwordInput}
            />
          </View>
          {credentialsError && (
            <Text style={styles.credentialsErrorText}>
              {services.t.do('signup.passwordLength')}
            </Text>
          )}
        </View>

        <View style={styles.input}>
          <Button
            label={services.t.do('signup.signup')}
            labelStyle={styles.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{ marginBottom: 10 }}
            onPress={() => createNewUser(emailInput, passwordInput)}
          />
        </View>
        <View style={styles.input}>
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
