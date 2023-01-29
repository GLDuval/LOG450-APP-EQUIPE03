import React from 'react';
import { StatusBar, TouchableHighlight } from 'react-native';
import { Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { RecipesList } from '../components/recipes-list';
import { SearchBar } from '../components/search-bar';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';

export const MyRecipes: NavioScreen = observer(() => {
  return (
    <View flex style={{ backgroundColor: getTheme().blueberry }}>
      <StatusBar backgroundColor={getTheme().blueberry} />
      <View style={styleSheet.topContainer}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableHighlight
            underlayColor="Colors.transparent"
            onPress={() => {
              navio.pop();
            }}
          >
            <Icon size={18} assetName={'close'} style={styleSheet.backIcon} />
          </TouchableHighlight>
          <Text style={styleSheet.header} center>
            {services.t.do('myRecipes.title')}
          </Text>
        </View>
        <SearchBar />
      </View>

      <View style={styleSheet.roundedTopCornersContainer} bg-bgColor>
        <RecipesList />
      </View>
    </View>
  );
});
