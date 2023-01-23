import React from 'react';
import {ScrollView, SectionList, StyleSheet} from 'react-native';
import {Assets, Avatar, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import { navio } from '.';

export const Dashboard: NavioScreen = observer(({}) => {
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
      marginEnd: 10,
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
      marginTop: 10,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
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
              <View style={{flexDirection: 'row'}}>
                  <Avatar 
                    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                    size={60} 
                    onPress={() => {
                      navio.show('Profile');
                }} />
              </View>
            </View>
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <View style={styles.menuContainer}>
            <View style={{flexDirection:"row"}}>
              <View style={styles.recepesCard}>
                <View style={{flexDirection:"row-reverse"}}>
                  <Icon
                      size={20}
                      tintColor={Colors.white}
                      source={Assets.icons['search']}
                    />
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.menuText}>
                    Mes {'\n'}recettes
                  </Text>
                </View>
              </View>
            
              <View style={{flexDirection:"column", width:'50%'}}>
                <View style={styles.groceryListCard}>
                  <View style={{flexDirection:"row-reverse"}}>
                    <Icon
                        size={20}
                        tintColor={Colors.white}
                        source={Assets.icons['search']}
                      />
                  </View>
                  <Text style={styles.menuText}>
                    Liste {'\n'}d'épicerie
                  </Text>
                </View>

                <View style={styles.mapCart}>
                  <View style={{flexDirection:"row-reverse"}}>
                    <Icon
                        size={20}
                        tintColor={Colors.white}
                        source={Assets.icons['search']}
                      />
                  </View>
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
                      <View>
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
Dashboard.options = () => ({
});
