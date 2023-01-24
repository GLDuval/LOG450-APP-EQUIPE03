import React from 'react';
import {SectionList, StyleSheet, TouchableHighlight} from 'react-native';
import {Assets, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import { navio } from '../';

export const GroceryStoresList: NavioScreen = observer(({}) => {
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
    <SectionList
        sections={groceryStores}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
            <TouchableHighlight
            underlayColor="Colors.transparent"
                onPress={() => {
                navio.show('GroceryInfos')
                }}
            >
            <View style={styles.cardContainer}>
                <View style={styles.card}>
                <View style={{flexDirection:"row"}}>
                    <Text style={styles.cardHeader}>
                    {item}
                    </Text>
                    <Icon
                    size={22}
                    tintColor={'#264653'}
                    source={Assets.icons.heart}
                    />
                </View>
                <Text style={styles.infos}>
                    Jusqu'à mecredi
                </Text>
                </View>
            </View>
            </TouchableHighlight>
        )}
        />
  );
});
