import React from 'react';
import {Dimensions, ScrollView, SectionList, StyleSheet, TextInput, TouchableHighlight} from 'react-native';
import {Assets, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import { navio } from '..';

export const MyRecipes: NavioScreen = observer(({}) => {
  const onChangeText = (text: string) => {
    let message = '';
    if (text === '') {
      message = 'This field is mandatory';
    }
    if (text === 'Zzz') {
      message = 'Please enter a valid text';
    }
    setState({error: message});
  };

  const recipes = [
    {
      title: 'Épiceries',
      data: ['Caramilk et Orange', 'Pâté chinois', 'Lasage', 'Poulet parmesan', 'Pizzaghetti', 'Saumon fumé'],
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
      paddingBottom: 20,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 24,
      flex: 1,
      color: Colors.white,
      paddingBottom: 15,
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
    },
    backIcon: {
      marginTop: 8,
      tintColor: Colors.white,
    },
    textInput: {
      fontSize: 16,
      padding: 10,
      backgroundColor: '#DADADA',
      borderRadius: 10,
      color: '#7E7E7E',
    }
  });
  
  return (
    <View flex style={{ backgroundColor: '#264653'}}>
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
              Mes recettes
            </Text>
          </View>
          <View style={{padding:10}}>
            <TextInput
              placeholder="Rechercher"
              onChangeText={() => onChangeText}
              style={styles.textInput}
            />
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <SectionList
              sections={recipes}
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
                          source={Assets.icons.heart}
                        />
                      </View>
                    </View>
                    <Text style={styles.infos}>
                      Ingrédients (4)
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
function setState(arg0: { error: string; }) {
  throw new Error('Function not implemented.');
}

