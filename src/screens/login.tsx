import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View, Button, Checkbox, LoaderScreen, Colors } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';

import { services, useServices } from '../services';
import { useAppearance } from '../utils/hooks';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseError } from 'firebase/app';
import { getTheme } from '../utils/designSystem';

export const Login: NavioScreen = observer(() => {
  useAppearance();
  const { navio } = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const login = useCallback(
    async (email: string, password: string) => {
      console.log(email, password);
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          navio.setRoot('MainStack');
        })
        .catch((error: FirebaseError) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setLoading(false);
          console.log(errorCode, errorMessage);
        });
    },
    [navio],
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
      justifyContent: 'space-between',
      paddingBottom: 16,
    },
  });

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerTitle}>{services.t.do('login.title')}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'column' }}>
          <View style={styles.input}>
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              style={styles.textField}
              placeholder={services.t.do('login.email')}
            />
          </View>
          <View style={styles.input}>
            <TextInput
              value={password}
              onChangeText={(password) => setPassword(password)}
              style={styles.textField}
              placeholder={services.t.do('login.password')}
              secureTextEntry={true}
            />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.loginOptions}>
            <View>
              <Checkbox
                value={remember}
                onValueChange={(remember: boolean) => setRemember(remember)}
                label={services.t.do('login.rememberMe')}
              />
            </View>
            <View>
              <Text>{services.t.do('login.forgotPassword')}</Text>
            </View>
          </View>
        </View>

        <View style={styles.input}>
          <Button
            label={services.t.do('login.login')}
            labelStyle={styles.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{ marginBottom: 10 }}
            onPress={() => login(email, password)}
          />
        </View>
        {/* }
        <View style={styles.input}>
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
        <View style={styles.input}>
          <Text onPress={() => navio.show('Join')} style={styles.joinText}>
            {services.t.do('login.signup')}
          </Text>
        </View>
        {loading && <LoaderScreen message={services.t.do('login.loading')} color={Colors.grey40} />}
      </ScrollView>
    </View>
  );
});
Login.options = () => ({});
