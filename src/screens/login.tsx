import React, {useCallback, useState} from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {TextField, Text, View, Button, Checkbox, Assets, LoaderScreen, Colors} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import { services } from '../services';
import { useAppearance } from '../utils/hooks';
import { TextInput } from 'react-native-gesture-handler';
import { auth } from '../../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const Login: NavioScreen = observer(() => {
  useAppearance();

  // State (local)
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  // API Methods
  const getCounterValue = useCallback(async () => {
    setLoading(true);
    try {
      const {value} = await api.counter.get();

      counter.set('value', value);
    } catch (e) {
      console.log('[ERROR]', e);
    } finally {
      setLoading(false);
    }
  }, [api.counter, counter]);

  const login = useCallback(async (email: string, password: string) => {
    console.log(email, password);
    setLoading(true);
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        setLoading(false);
        navio.pushStack('MainStack');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoading(false);
        console.log(errorCode, errorMessage);
      });
  }, [])

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
      color: '#264653',
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
      backgroundColor: '#F6F6F6',
      borderColor: '#E8E8E8',
      borderWidth: 1.5,
      borderRadius: 10,
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    loginButton: {
      backgroundColor: '#264653',
      borderRadius: 10,
    },
    loginButtonLabel: {
      fontSize: 20,
      padding: 5,
    },
    loginGoogleButtonLabel: {
      fontSize: 20,
      color: "#264653",
      padding: 5,
    },
    joinText: {
      paddingTop: 10,
      fontSize: 18,
      flex: 1,
      fontWeight: 'bold',
      color: '#264653',
      textAlign: 'center',
    },
    loginOptions: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingBottom: 16,
    }
  });

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerTitle}>{services.t.do('login.title')}</Text>
          </View>
        </View>
        
        <View style={{flexDirection:"column"}}>
          <View style={styles.input}>
            <TextInput 
            value={email}
            onChangeText={(email) => setEmail(email)}
            style={styles.textField}
            placeholder={services.t.do('login.email')} />
          </View>
          <View style={styles.input}>
            <TextInput 
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={styles.textField}
            placeholder={services.t.do('login.password')}
            secureTextEntry={true} />
          </View>
        </View>

        <View style={styles.input}>
          <View style={styles.loginOptions}>
            <View>
              <Checkbox 
              value={remember}
              onValueChange={(remember: boolean) => setRemember(remember)}
              label={services.t.do('login.rememberMe')}/>
            </View>
            <View>
              <Text>
                {services.t.do('login.forgotPassword')}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.input}>
          <Button 
            label={services.t.do('login.login')}
            labelStyle={styles.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{marginBottom: 10}}
            onPress={() => login(email, password)}
          />
        </View>
        {/*}
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
          <Text 
            onPress={() => navio.show('Join')} style={styles.joinText}>
            {services.t.do('login.signup')}
          </Text>
        </View>
        {loading && <LoaderScreen message={services.t.do('login.loading')} color={Colors.grey40} />}
      </ScrollView>
    </View>
  );
});
Login.options = () => ({});
