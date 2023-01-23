import React, {useCallback, useState} from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {Assets, Avatar, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {useNavigation} from '@react-navigation/native';
import {NavioScreen} from 'rn-navio';

import {services, useServices} from '../services';
import {useStores} from '../stores';
import {useAppearance} from '../utils/hooks';
import { Row } from '../components/row';

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
      data: ['Super C', 'Maxi', 'IGA', 'Metro', 'Provigo', 'Loblaws'],
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
    },
    topContainer: {
      fontSize: 24,
      flex: 1,
      paddingTop: 60,
      paddingBottom: 30,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 24,
      flex: 1,
      color: '#264653',
    },
    cardHeader: {
      fontSize: 20,
      flex: 1,
      color: Colors.black,
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 22,
      flex: 1,
      color: Colors.black,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    text: {
      fontSize: 20,
      flex: 1,
    },
    menuText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    infos: {
      fontSize: 18,
      flex: 1,
      color: '#696d6e',
    },
    cardContainer: {
      fontSize: 24,
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: '#e0e0de',
      padding: 15,
      marginVertical: 3,
      borderRadius: 10,
    },
    menuContainer: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    recepesCard: {
      flex: 1,
      backgroundColor: '#264653',
      borderRadius: 15,
      padding: 10,
      marginEnd: 5,
    },
    groceryListCard: {
      flex: 1,
      backgroundColor: '#E76F51',
      borderRadius: 15,
      padding: 10,
    },
    mapCart: {
      flex: 1,
      backgroundColor: '#578699',
      borderRadius: 15,
      padding: 10,
      marginTop: 5,
    }
  });
  
  return (
    <View flex style={{ backgroundColor: '#E9C46A'}}>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View>
          <View style={styles.topContainer}>
            <View style={{flexDirection:"row"}}>
              <Text style={styles.title}>
                Bonjour, {"\n"}{username} !
              </Text>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal:3}}>
                <Avatar source={{ uri: 'https://static.pexels.com/photos/60628/flower-garden-blue-sky-hokkaido-japan-60628.jpeg' }} size={50}/>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <View style={styles.menuContainer}>
            <View style={{flexDirection:"row"}}>
              <View style={styles.recepesCard}>
                <Icon
                  size={20}
                  tintColor={Colors.white}
                  source={Assets.icons['search']}
                />
                <Text style={styles.menuText}>
                  Mes {'\n'}recettes
                </Text>
              </View>

              <View style={{flexDirection:"column"}}>
                <View style={styles.groceryListCard}>
                  <Icon
                    size={20}
                    tintColor={Colors.white}
                    source={Assets.icons['search']}
                    style={{justifyContent: 'flex-end'}}
                  />
                  <Text style={styles.menuText}>
                    Liste {'\n'}d'épicerie
                  </Text>
                </View>

                <View style={styles.mapCart}>
                  <Icon
                    size={20}
                    tintColor={Colors.white}
                    source={Assets.icons['search']}
                    style={{justifyContent: 'flex-end'}}
                  />
                  <Text style={styles.menuText}>
                    Carte
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.subtitle}>
              Épiceries
            </Text>
          </View>
          
          <SectionList
            sections={groceryStores}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
                <View style={styles.cardContainer}>
                  <View style={styles.card}>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.cardHeader}>
                        {item}
                      </Text>
                      <View style={{flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal:3, marginTop: 4}}>
                        <Icon
                            size={22}
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
        </View>
      </ScrollView>
    </View>
  );
});
Main.options = () => ({
});
