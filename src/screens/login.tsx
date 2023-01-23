import React, {useCallback, useState} from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {TextField, Text, View, Button, Checkbox} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../services';
import {useStores} from '../stores';
import {useAppearance} from '../utils/hooks';

const googleIcon = require('../../assets/google.png')

export const Login: NavioScreen = observer(({}) => {
  useAppearance();
  const navigation = useNavigation();
  const {counter, ui} = useStores();
  const {t, api, navio} = useServices();

  // State (local)
  const [loading, setLoading] = useState(false);

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
      paddingTop: 70,
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
    },
    textField: {
      fontSize: 20,
      backgroundColor: '#F6F6F6',
      borderColor: '#E8E8E8',
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
  });
  
  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.header}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.headerTitle}>
              {services.t.do('login.title')}
            </Text>
          </View>
        </View>
        
        <View style={{flexDirection:"column"}}>
          <View style={styles.input}>
            <TextField 
            style={styles.textField}
            placeholder={services.t.do('login.email')} 
            validate="email" 
            errorMessage={services.t.do('login.invalidEmail')} />
          </View>
          <View style={styles.input}>
            <TextField 
            style={styles.textField}
            placeholder={services.t.do('login.password')}
            secureTextEntry={true} />
          </View>
        </View>

        <View style={styles.input}>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <View>
              <Checkbox 
              value={false}
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
          />
        </View>
        <View style={styles.input}>
          <Button 
            label={services.t.do('login.loginWithGoogle')}
            labelStyle={styles.loginGoogleButtonLabel}
            borderRadius={15}
            backgroundColor="#FFFFFF"
            style={{borderColor: "#D6D6D6"}}
            iconSource={googleIcon}
          />
        </View>
      </ScrollView>
    </View>
  );
});
Login.options = () => ({
  
});
