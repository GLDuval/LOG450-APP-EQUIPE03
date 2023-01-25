import React, {useCallback, useState} from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {TextField, Text, View, Button, Checkbox, Assets, LoaderScreen, Colors} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../services';
import {useStores} from '../stores';
import {useAppearance} from '../utils/hooks';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { TextInput } from 'react-native-gesture-handler';

export const Join: NavioScreen = observer(({}) => {
  useAppearance();
  const navigation = useNavigation();
  const {counter, ui} = useStores();
  const {t, api, navio} = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Firebase Create
  const createNewUser = useCallback((email: string, password: string) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setLoading(false);
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setLoading(false);
      console.log(errorCode, errorMessage);
    });
  }, []);

  /*const createNewUserGoogle = useCallback(() => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage);
      console.log(credential);
    });
  }, []);*/

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
    backText: {
        paddingTop: 10,
        fontSize: 18,
        flex: 1,
        fontWeight: 'bold',
        color: '#264653',
        textAlign: 'center',
      },
  });
  
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.header}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.headerTitle}>
              {services.t.do('signup.title')}
            </Text>
          </View>
        </View>
        
        <View style={{flexDirection:"column"}}>
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
            value={email}
            />
          </View>
          <View style={styles.input}>
            <TextInput 
            style={styles.textField}
            placeholder={services.t.do('signup.password')}
            secureTextEntry={true} 
            onChangeText={(text: string) => setPassword(text)}
            value={password}
            />
          </View>
        </View>

        <View style={styles.input}>
          <Button 
            label={services.t.do('signup.signup')}
            labelStyle={styles.loginButtonLabel}
            borderRadius={15}
            backgroundColor="#264653"
            style={{marginBottom: 10}}
            onPress={() => createNewUser(email, password)}
          />
        </View>
        {/*}
        <View style={styles.input}>
          <Button 
            label={services.t.do('signup.signUpWithGoogle')}
            labelStyle={styles.loginGoogleButtonLabel}
            borderRadius={15}
            backgroundColor="#FFFFFF"
            style={{borderColor: "#D6D6D6"}}
            iconSource={Assets.images.google}
            onPress={() => createNewUserGoogle()}
          />
        </View>
        {*/}
        <View style={styles.input}>
          <Text 
            onPress={() => navio.goBack()} style={styles.backText}>
            {services.t.do('signup.back')}
          </Text>
        </View>
        {loading && <LoaderScreen message={services.t.do('login.loading')} color={Colors.grey40} />}
      </ScrollView>
    </View>
  );
});
Join.options = () => ({
  
});
