import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import { Colors, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';

export const RecipesList: NavioScreen = observer(() => {
  const recipes = [
    {
      data: [
        'Caramilk et Orange',
        'Pâté chinois',
        'Lasage',
        'Poulet parmesan',
        'Pizzaghetti',
        'Saumon fumé',
      ],
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    infos: {
      fontSize: 18,
      flex: 1,
      color: getTheme().darkerGrey,
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
      backgroundColor: getTheme().grey,
      padding: 15,
      marginTop: 20,
      borderRadius: 10,
    },
  });

  return (
    <SectionList
      sections={recipes}
      keyExtractor={(item, index) => `${item}${index}`}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.cardHeader}>{item}</Text>
              <Icon size={22} tintColor={getTheme().darkerGrey} assetName={'heart'} />
            </View>
            <Text style={styles.infos}>Ingrédients (4)</Text>
          </View>
        </View>
      )}
    />
  );
});
