import React from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { navio } from '..';
import FavoriteComponent from './favorite';

export const RecipesList: NavioScreen = observer(() => {
  const recipes = [
    {
      recipe_name: 'Pâtes à la carbonara',
    },
    {
      recipe_name: 'Salade de fruits',
    },
    {
      recipe_name: 'Riz au lait',
    },
    {
      recipe_name: "Caramil et jus d'orange",
    },
    {
      recipe_name: 'Macaroni et fromage original',
    },
    {
      recipe_name: 'Quiche aux légumes',
    },
    {
      recipe_name: 'Aiguillettes de poulet au curry',
    },
    {
      recipe_name: 'Dinde rôtie au four',
    },
    {
      recipe_name: 'Lasagnes au bœuf',
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    infos: {
      fontSize: 18,
      flex: 1,
      color: getTheme().details,
    },
    cardHeader: {
      fontSize: 20,
      flex: 1,
      color: getTheme().text,
      fontWeight: 'bold',
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: getTheme().grey,
      padding: 15,
      marginBottom: 20,
      borderRadius: 10,
    },
  });

  return (
    <>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              navio.show('RecipeDetails');
            }}
          >
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                  <View style={{ flexDirection: 'column', width: '75%' }}>
                    <Text style={styles.cardHeader}>{item.recipe_name}</Text>
                    <Text style={styles.infos}>Ingrédients (4)</Text>
                  </View>
                  <View style={{ flexDirection: 'column', width: '25%' }}>
                    <FavoriteComponent />
                  </View>
                </View>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </>
  );
});
