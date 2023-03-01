import React from 'react';
import { TouchableHighlight, StatusBar } from 'react-native';
import { Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { SearchBar } from '../components/search-bar';
import { Product } from '../../models/Product';
import { FoodInfosList } from '../components/food-infos-list';

export const GroceryList: NavioScreen = observer(() => {
  // TODO : Move to a repo + use real data
  const products: Product[] = [
    {
      id: '1',
      product_name: 'Product 1',
      image_url: 'https://example.com/product1.jpg',
      regular_price: '$10.99',
      sale_price: '$9.99',
      quantity: 10,
      created_at: new Date('2022-01-01'),
    },
    {
      id: '2',
      product_name: 'Product 2',
      image_url: 'https://example.com/product2.jpg',
      regular_price: '$5.99',
      sale_price: '$4.99',
      quantity: 20,
      created_at: new Date('2022-01-02'),
    },
    {
      id: '3',
      product_name: 'Product 3',
      image_url: 'https://example.com/product3.jpg',
      regular_price: '$15.99',
      sale_price: '$12.99',
      quantity: 5,
      created_at: new Date('2022-01-03'),
    },
  ];

  return (
    <View flex style={{ backgroundColor: getTheme().orange }}>
      <StatusBar backgroundColor={getTheme().orange} />
      <View style={styleSheet.topContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight
            underlayColor="Colors.transparent"
            onPress={() => {
              navio.pop();
            }}
          >
            <Icon size={18} assetName={'close'} style={styleSheet.closeIcon} />
          </TouchableHighlight>
          <Text center style={styleSheet.header}>
            {services.t.do('groceryList.title')}
          </Text>
        </View>
      </View>
      <View style={styleSheet.roundedTopCornersContainer} bg-bgColor>
        <View style={{ paddingTop: 20, paddingStart: 20, paddingEnd: 20 }}>
          <SearchBar />
        </View>

        <View style={{ height: 1000 }}>
          <FoodInfosList products={products} />
        </View>
      </View>
    </View>
  );
});
