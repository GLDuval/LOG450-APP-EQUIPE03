import React from 'react';
import { SectionList, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '../';
import { getTheme } from '../../utils/designSystem';

export const GroceryStoresList: NavioScreen = observer(() => {
  const groceryStores = [
    {
      data: ['Super C'],
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    cardHeader: {
      fontSize: 20,
      flex: 1,
      fontWeight: 'bold',
      color: getTheme().textColor,
    },
    infos: {
      fontSize: 18,
      flex: 1,
      color: getTheme().details,
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: getTheme().grey,
      padding: 15,
      marginVertical: 3,
      borderRadius: 10,
    },
  });

  return (
    <>
      <SectionList
        sections={groceryStores}
        keyExtractor={(item, index) => `${item}${index}`}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor="Colors.transparent"
            onPress={() => {
              navio.show('GroceryInfos');
            }}
          >
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <Text Text style={styles.cardHeader}>
                  {item}
                </Text>
                <Text style={styles.infos}>{"Jusqu'à mecredi"}</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
      {/* TODO: Trouver une manière que la partie blanche va jusqu'au bas de la page */}
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
      <Text>{'\n'}</Text>
    </>
  );
});
