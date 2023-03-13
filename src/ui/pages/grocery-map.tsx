import React from 'react';
import { TouchableHighlight, StatusBar, StyleSheet } from 'react-native';
import { Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
// import { useMap } from '../hooks/useMap';
import MapView from 'react-native-maps';

export const GroceryMap: NavioScreen = observer(() => {
  // TODO : FOR CAMMMM
  // const { positions } = useMap();

  const styles = StyleSheet.create({
    map: {
      flex: 1,
      marginTop: 20,
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().blue }}>
      <StatusBar backgroundColor={getTheme().blue} />
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
          <Text style={styleSheet.header} center>
            {services.t.do('map.title')}
          </Text>
        </View>
      </View>

      <View style={styleSheet.roundedTopCornersContainer} bg-bgColor>
        <View style={{ paddingTop: 20, paddingStart: 20, paddingEnd: 20, height: 1000 }}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 45.494222,
              longitude: -73.562569,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          />
        </View>
      </View>
    </View>
  );
});
