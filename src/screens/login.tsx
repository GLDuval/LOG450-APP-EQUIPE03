import React, {useCallback, useState} from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {Assets, Avatar, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../services';
import {useStores} from '../stores';
import {useAppearance} from '../utils/hooks';
import { TextInput } from 'react-native-gesture-handler';

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
      color: '#264653',
      textAlign: 'center',
    },
    container: {
      fontSize: 24,
      flex: 1,
      paddingTop: 10,
      marginHorizontal: 15,
    },
    title: {
      fontSize: 24,
      flex: 1,
      color: '#264653',
    },
    subtitle: {
      fontSize: 22,
      flex: 1,
      color: Colors.black,
      fontWeight: 'bold',
    },
    text: {
      fontSize: 20,
      flex: 1,
    },
    infos: {
      fontSize: 18,
      flex: 1,
      color: '#696d6e',
    },
    card: {
      backgroundColor: '#E9C46A',
      padding: 10,
      marginVertical: 3,
      borderRadius: 5,
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
        
        <View>
          <TextInput placeholder={services.t.do('login.email')} />
          <TextInput placeholder={services.t.do('login.password')} />
        </View>
      </ScrollView>
    </View>
  );
});
Login.options = () => ({
  
});
