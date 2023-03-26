import React from 'react';
import { StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { getTheme } from '../../utils/designSystem';
import { Product } from '../../models/Product';
import { services } from '../../services';
import IngredientNumberComponent from './ingredient-number';

type FoodInfosListProps = {
  products: Product[];
};

export const FoodInfosList = (props: FoodInfosListProps) => {
  const [searchQuery, setSearchQuery] = React.useState('');

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
    searchInput: {
      fontSize: 16,
      padding: 10,
      borderRadius: 10,
      backgroundColor: getTheme().grey,
      color: getTheme().details,
    },
  });

  return (
    <View style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <TextInput
          style={styles.searchInput}
          placeholder={services.t.do('actions.search')}
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <FlatList
        contentContainerStyle={{ paddingBottom: 240 }}
        data={props.products.filter((recipe) =>
          recipe.product_name.toLowerCase().includes(searchQuery.toLowerCase()),
        )}
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
                  <IngredientNumberComponent item={item} />
                </View>

                <Text style={styles.infos}>{item.regular_price}</Text>
                <Text style={styles.oldPrice}>{item.sale_price}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
