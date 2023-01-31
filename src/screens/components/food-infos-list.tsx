import React from 'react';
import { StyleSheet, Image, TextInput, FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';

export const FoodInfosList: NavioScreen = observer(() => {
  const food = [
    {
      product_name: 'Mini concombres',
      image_url: 'https://product-images.metro.ca/images/h97/h75/11204994465822.jpg',
      regular_price: '2,99 $ ch.',
      sale_price: '3,99 $ ch.',
      quantity: 2,
    },
    {
      product_name: 'Tomates rouges en grappe',
      image_url: 'https://product-images.metro.ca/images/h09/h62/9276941893662.jpg',
      regular_price: '5,11 $ env. ch. (775 g env.)',
      sale_price: '8,80 $ env. kg',
      quantity: 4,
    },
    {
      product_name: 'Bœuf haché mi-maigre',
      image_url: 'https://product-images.metro.ca/images/h5b/hcb/9225276358686.jpg',
      regular_price: '3,96 $ / 450 g',
      sale_price: '13,87 $ / kg',
      quantity: 1,
    },
    {
      product_name: 'Pistaches rôties et salées',
      image_url: 'https://product-images.metro.ca/images/h97/h8c/9633873330206.jpg',
      regular_price: '4,99 $  ch.',
      sale_price: '5,99 $  ch.',
      quantity: 1,
    },
    {
      product_name: 'Macaroni et fromage original',
      image_url: 'https://product-images.metro.ca/images/h29/h94/9986997256222.jpg',
      regular_price: '4 /  5,00 $',
      sale_price: '1,59 $  ch.',
      quantity: 1,
    },
    {
      product_name: 'Fromage à la crème original',
      image_url: 'https://product-images.metro.ca/images/hde/h06/9986804482078.jpg',
      regular_price: '4,77 $  ch.',
      sale_price: '5,99 $  ch.',
      quantity: 1,
    },
    {
      product_name: 'Macaroni et fromage original',
      image_url: 'https://product-images.metro.ca/images/h29/h94/9986997256222.jpg',
      regular_price: '4 /  5,00 $',
      sale_price: '1,59 $  ch.',
      quantity: 1,
    },
    {
      product_name: 'Fromage à la crème original',
      image_url: 'https://product-images.metro.ca/images/hde/h06/9986804482078.jpg',
      regular_price: '4,77 $  ch.',
      sale_price: '5,99 $  ch.',
      quantity: 1,
    },
  ];

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
      color: getTheme().darkerGrey,
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
      data={food}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={{ flexDirection: 'column' }}>
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
