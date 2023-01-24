import React from 'react';
import {Dimensions, ScrollView, StyleSheet, TouchableHighlight, StatusBar, SectionList, Image, TextInput} from 'react-native';
import {Assets, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import { navio } from '..';

export const GroceryList: NavioScreen = observer(({}) => {
  const recipes = [
    {
      data: ['Cocombre', 'Tostitos Chunky Salsa', 'Banane', 'Poulet', 'Pâtes spaghetti', 'Saumon'],
    },
  ];
  
  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      height: Dimensions.get("window").height
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
      color: Colors.white,
    },
    text: {
      fontSize: 20,
      flex: 1,
    },
    infos: {
      fontSize: 18,
      flex: 1,
      color: '#D77467',
    },
    oldPrice: {
      fontSize: 15,
      flex: 1,
      color: '#696d6e',
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid'
    },
    cardHeader: {
      fontSize: 20,
      flex: 1,
      color: Colors.black,
      fontWeight: 'bold',
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: '#e0e0de',
      padding: 15,
      marginTop: 20,
      borderRadius: 10,
      flexDirection: 'row',
    },
    backIcon: {
      marginTop: 8,
      tintColor: Colors.white,
    },
    textInput: {
      fontSize: 16,
      backgroundColor: "#ffffff",
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
    },
  });
  
  return (
    <View flex style={{ backgroundColor: '#E76F51'}}>
      <StatusBar backgroundColor='#E76F51' />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.topContainer}>
            <View style={{flexDirection:"row"}}>
              <TouchableHighlight
              underlayColor="Colors.transparent"
                onPress={() => {
                  navio.pop();
                }}
              >
                <Icon
                  size={18}
                  source={Assets.icons.close}
                  style={styles.backIcon}
                  />
              </TouchableHighlight>
                <Text style={styles.title} center>
                    Liste d'épicerie
                </Text>
            </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <SectionList
            sections={recipes}
            keyExtractor={(item, index) => item + index}
            renderItem={({item}) => (
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                  <View style={{flexDirection:"column"}}>
                    <Image
                        source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                        style={{ width: 100, height: 100, borderRadius: 10 }}
                      />
                  </View>

                  <View style={{flexDirection:"column", paddingLeft:15, width: '70%'}}>
                    <View style={{flexDirection:"row"}}>
                      <Text style={styles.cardHeader}>
                        {item}
                      </Text>
                      <TextInput
                        placeholder="1"
                        style={styles.textInput}
                        maxLength={3}
                      />
                    </View>
                    
                    <Text style={styles.infos}>
                      1.99$ Ch
                    </Text>
                    <Text style={styles.oldPrice}>
                      1.99$ Ch
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
      </View>
      </ScrollView>
    </View>
  );
});

