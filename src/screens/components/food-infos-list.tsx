import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { getProducts, getProductsNextBatch } from '../../services/firestoreService';
import { Product } from '../../models/product';

export const FoodInfosList: NavioScreen = observer(() => {
  const [product, setProduct] = React.useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(
      (products) => {
        setProduct(products);
      },
      (err) => {
        console.log(err);
      },
    );
  }, []);

  const fetchNextBatch = () => {
    const lastProduct = product[product.length - 1];
    getProductsNextBatch(lastProduct).then(
      (nextBatch) => {
        setProduct([...product, ...nextBatch]);
      },
      (err) => console.log(err),
    );
  };

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
      color: getTheme().grey,
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
    },
  });

  return (
    <FlatList
      onEndReached={fetchNextBatch}
      onEndReachedThreshold={0.5}
      data={product}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'column', justifyContent: 'flex-end' }}>
              <Image
                source={{ uri: item.image_url }}
                style={{ width: 85, height: 85, borderRadius: 10 }}
              />
            </View>

            <View style={{ flexDirection: 'column', paddingLeft: 15, width: '70%' }}>
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
});
