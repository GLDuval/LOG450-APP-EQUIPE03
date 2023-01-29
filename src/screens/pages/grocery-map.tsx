import React from 'react';
import { StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { SearchBar } from '../components/search-bar';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';

export const GroceryMap: NavioScreen = observer(() => {
  // STYLES
  const styles = StyleSheet.create({
    topContainer: {
      fontSize: 24,
      flex: 1,
      paddingTop: 60,
      paddingBottom: 20,
      marginHorizontal: 20,
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().blue }}>
      <StatusBar backgroundColor="#578699" />
      <View style={styles.topContainer}>
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
        <SearchBar />
      </View>

      <View style={styleSheet.roundedTopCornersContainer} bg-bgColor>
        <Text center>
          {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}{' '}
          {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}{' '}
          {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'} {'\n'}
        </Text>
      </View>
    </View>
  );
});
