import React from 'react';
import {StyleSheet, SectionList, Image, TextInput, FlatList} from 'react-native';
import {Assets, Colors, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';

export const FoodInfosList: NavioScreen = observer(({}) => {
  const food = [
    {
      food: 'Mini concombres',
      image: 'https://product-images.metro.ca/images/h97/h75/11204994465822.jpg',
      price: '2,99 $ ch.',
      oldPrice: '3,99 $ ch.',
      quantity: 2,
    },
    {
      food: 'Tomates rouges en grappe',
      image: 'https://product-images.metro.ca/images/h09/h62/9276941893662.jpg',
      price: '5,11 $ env. ch. (775 g env.)',
      oldPrice: '8,80 $ env. kg',
      quantity: 4,
    },
    {
      food: 'Bœuf haché mi-maigre',
      image: 'https://product-images.metro.ca/images/h5b/hcb/9225276358686.jpg',
      price: '3,96 $ / 450 g',
      oldPrice: '13,87 $ / kg',
      quantity: 1,
    },
    {
      food: 'Pistaches rôties et salées',
      image: 'https://product-images.metro.ca/images/h97/h8c/9633873330206.jpg',
      price: '4,99 $  ch.',
      oldPrice: '5,99 $  ch.',
      quantity: 1,
    },
    {
      food: 'Macaroni et fromage original',
      image: 'https://product-images.metro.ca/images/h29/h94/9986997256222.jpg',
      price: '4 /  5,00 $',
      oldPrice: '1,59 $  ch.',
      quantity: 1,
    },
    {
      food: 'Fromage à la crème original',
      image: 'https://product-images.metro.ca/images/hde/h06/9986804482078.jpg',
      price: '4,77 $  ch.',
      oldPrice: '5,99 $  ch.',
      quantity: 1,
    },
  ];
  
  // STYLES
  const styles = StyleSheet.create({
    infos: {
      fontSize: 18,
      flex: 1,
      color: '#D77467',
    },
    oldPrice: {
      fontSize: 15,
      flex: 1,
      color: '#696d6e',
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid'
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
      padding: 10,
      marginTop: 20,
      borderRadius: 10,
      flexDirection: 'row',
    },
    textInput: {
      fontSize: 16,
      backgroundColor: "#ffffff",
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
    },
    container: {
      flex: 1,
      paddingTop: 22,
    },
  });
  
  return (
    <View style={styles.container}>
      <FlatList
        data={food}
        renderItem={({item}) => 
          <View style={styles.cardContainer}>
            <View style={styles.card}>
              <View style={{flexDirection:"column"}}>
                <Image
                    source={{ uri: item.image }}
                    style={{ width: 85, height: 85, borderRadius: 10 }}
                  />
              </View>

              <View style={{flexDirection:"column", paddingLeft:15, width: '70%'}}>
                <View style={{flexDirection:"row"}}>
                  <Text style={styles.cardHeader}>
                    {item.food}
                  </Text>
                  <TextInput
                    placeholder="0"
                    style={styles.textInput}
                    maxLength={3}
                    keyboardType="numeric"
                  />
                </View>
                
                <Text style={styles.infos}>
                  {item.price}
                </Text>
                <Text style={styles.oldPrice}>
                  {item.oldPrice}
                </Text>
              </View>
            </View>
          </View>
      }
      />
  </View>
  );
});

