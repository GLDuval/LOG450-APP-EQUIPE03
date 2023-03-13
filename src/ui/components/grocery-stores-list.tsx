import React from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { navio } from '../';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { Grocery } from '../../models/Grocery';

type GroceryStoresListProps = {
  groceriesName: Grocery[];
};

export const GroceryStoresList = (props: GroceryStoresListProps) => {
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
      <FlatList
        data={props.groceriesName}
        keyExtractor={(item, index) => `${index}`}
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
                  {item.name}
                </Text>
                <Text style={styles.infos}>
                  {services.t.do('dashboard.until') + " "}
                  {item.until}
                </Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />
    </>
  );
};
