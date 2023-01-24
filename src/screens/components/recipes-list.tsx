import React from 'react';
import {SectionList, StyleSheet} from 'react-native';
import {Assets, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';

export const RecipesList: NavioScreen = observer(({}) => {
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
      data: ['Caramilk et Orange', 'Pâté chinois', 'Lasage', 'Poulet parmesan', 'Pizzaghetti', 'Saumon fumé'],
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
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
  });
  
  return (
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
              <Icon
                size={22}
                tintColor={'#264653'}
                source={Assets.icons.heart}
              />
            </View>
            <Text style={styles.infos}>
              Ingrédients (4)
            </Text>
          </View>
        </View>
      )}
    />
  );
});
function setState(arg0: { error: string; }) {
  throw new Error('Function not implemented.');
}

