import React from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { getTheme } from '../../utils/designSystem';
import { navio } from '..';
import FavoriteComponent from './favorite';
import { Recipe } from '../../models/Recipe';

type RecipesListProps = {
  recipes: Recipe[];
  removeRecipe: (recipe: Recipe) => Promise<void>; // TODO remove recipe
};

export const RecipesList = (props: RecipesListProps) => {
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
        data={props.recipes}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              navio.N.navigate('RecipeDetails', { recipe: item });
            }}
          >
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                  <View style={{ flexDirection: 'column', width: '75%' }}>
                    <Text style={styles.cardHeader}>{item.name}</Text>
                    <Text style={styles.infos}>Ingrédients ({item.ingredients.length})</Text>
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
};
