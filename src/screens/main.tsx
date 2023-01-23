import React, {useCallback, useState} from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {Assets, Avatar, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../services';
import {useStores} from '../stores';
import {useAppearance} from '../utils/hooks';

export const Main: NavioScreen = observer(({}) => {
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

  const username = "Félix-Antoine"

  const groceryStores = [
    {
      title: 'Épiceries',
      data: ['Super C', 'Maxi', 'IGA'],
    },
  ];

  const recepes = [
    {
      title: 'Recettes',
      data: ['Caramilk et jus d\'orange', 'Maxi', 'IGA'],
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
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
        <View style={styles.container}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.title}>
              Bonjour, {"\n"}{username} !
            </Text>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal:3}}>
              <Avatar source={{ uri: 'https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg' }} size={50}/>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.subtitle}>
              Épiceries
            </Text>
            <Text style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal:3}}>
              Voir tout
            </Text>
          </View>
        </View>
        
        <SectionList
          sections={groceryStores}
          keyExtractor={(item, index) => item + index}
          renderItem={({item}) => (
              <View style={styles.container}>
                <View style={styles.card}>
                  <View style={{flexDirection:"row"}}>
                    <Text style={styles.text}>
                      {item}
                    </Text>
                    <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal:3, marginTop: 4}}>
                      <Icon
                          size={25}
                          tintColor={'#264653'}
                          source={Assets.icons['search']}
                        />
                    </View>
                  </View>
                  <Text style={styles.infos}>
                    Jusqu'à mercredi
                  </Text>
              </View>
            </View>
          )}
        />

        <View style={styles.container}>
          <View style={{flexDirection:"row"}}>
            <Text style={styles.subtitle}>
             Recettes
            </Text>
            <Text style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal:3}}>
              Voir tout
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});
Main.options = () => ({
  
});
