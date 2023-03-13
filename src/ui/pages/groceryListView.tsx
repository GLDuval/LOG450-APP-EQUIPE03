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
import { FoodInfosList } from '../components/food-infos-list';
import { useGroceryList } from '../hooks/useGroceryList';

export const GroceryList: NavioScreen = observer(() => {
  const { groceryList, modifyProduct } = useGroceryList();

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
          <FoodInfosList products={groceryList} modifyProduct={modifyProduct} />
        </View>
      </View>
    </View>
  );
});
