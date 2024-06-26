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
import MapView, { Marker, Region, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';

export const GroceryMap: NavioScreen = observer(() => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [region, setRegion] = useState<Region>();
  const positions = useMap();

  useEffect(() => {
    (() => {
      Location.requestForegroundPermissionsAsync().then(
        (response) => {
          if (response.status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
          } else {
            Location.getCurrentPositionAsync({}).then(
              (currLocation) => {
                setLocation(currLocation);
                setRegion({
                  latitude: currLocation.coords.latitude,
                  longitude: currLocation.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                });
              },
              (err) => {
                console.log(err);
              },
            );
          }
        },
        (err) => {
          console.log(err);
        },
      );
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
              <Text style={{ textAlign: 'center', marginTop: 15 }}>
                {services.t.do('map.permissionDenied')}
              </Text>
            ) : location && region ? (
              <MapView style={{ flex: 1 }} initialRegion={region} provider={PROVIDER_GOOGLE}>
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
