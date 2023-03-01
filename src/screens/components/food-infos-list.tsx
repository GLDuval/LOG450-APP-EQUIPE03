import React from 'react';
import { StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { getTheme } from '../../utils/designSystem';
import { Product } from '../../models/Product';

type FoodInfosListProps = {
  products: Product[];
};

export const FoodInfosList = (props: FoodInfosListProps) => {
  // STYLES
  const styles = StyleSheet.create({
    infos: {
      fontSize: 16,
      flex: 1,
      color: getTheme().red,
    },
    oldPrice: {
      fontSize: 15,
      flex: 1,
      color: getTheme().details,
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
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
      padding: 10,
      marginBottom: 20,
      borderRadius: 10,
      flexDirection: 'row',
    },
    textInput: {
      fontSize: 16,
      backgroundColor: getTheme().darkerGrey,
      color: getTheme().text,
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
    },
  });

  return (
    <FlatList
      onEndReachedThreshold={0.5}
      data={props.products}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
              <Image
                source={{ uri: item.image_url }}
                style={{ width: 85, height: 85, borderRadius: 10 }}
              />
            </View>

            <View style={{ flexDirection: 'column', paddingLeft: 20, width: '75%' }}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={styles.cardHeader}>{item.product_name}</Text>
                <TextInput
                  placeholder="0"
                  style={styles.textInput}
                  maxLength={3}
                  keyboardType="numeric"
                />
              </View>

              <Text style={styles.infos}>{item.regular_price}</Text>
              <Text style={styles.oldPrice}>{item.sale_price}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};
