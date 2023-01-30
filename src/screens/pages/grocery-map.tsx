import React from 'react';
import { TouchableHighlight, StatusBar } from 'react-native';
import { Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { SearchBar } from '../components/search-bar';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';

export const GroceryMap: NavioScreen = observer(() => {
  return (
    <View flex style={{ backgroundColor: getTheme().blue }}>
      <StatusBar backgroundColor="#578699" />
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
            {services.t.do('map.title')}
          </Text>
        </View>
      </View>

      <View style={styleSheet.roundedTopCornersContainer} bg-bgColor>
        <View style={{ paddingTop: 20, paddingStart: 20, paddingEnd: 20 }}>
          <SearchBar />
        </View>
        <Text center>
          {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}{' '}
          {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}{' '}
          {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
        </Text>
      </View>
    </View>
  );
});
