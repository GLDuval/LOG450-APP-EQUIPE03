/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useEffect, useState } from 'react';
import { TouchableHighlight, StatusBar, ActivityIndicator } from 'react-native';
import { Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { useMap } from '../hooks/useMap';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export const GroceryMap: NavioScreen = observer(() => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState<Location.Region | undefined>(undefined);
  const positions = useMap();

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const currLocation = await Location.getCurrentPositionAsync({});
      setLocation(currLocation);
      setRegion({
        latitude: currLocation.coords.latitude,
        longitude: currLocation.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

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
          <View style={{ flex: 1 }}>
            {errorMsg ? (
              <Text>{errorMsg}</Text>
            ) : location ? (
              <MapView style={{ flex: 1 }} initialRegion={region}>
                <Marker
                  coordinate={region}
                  title={services.t.do('map.myLocation')}
                  pinColor={getTheme().blue}
                />
                {positions.map((coordinate, index) => (
                  <Marker
                    key={index}
                    coordinate={coordinate}
                    title={`${coordinate.name}`}
                    pinColor={getTheme().orange2}
                  />
                ))}
              </MapView>
            ) : (
              <View style={{ marginTop: 15 }}>
                <ActivityIndicator size="large" color={getTheme().blue} />
              </View>
            )}
          </View>
        </View>
      </View>
    </View>
  );
});
