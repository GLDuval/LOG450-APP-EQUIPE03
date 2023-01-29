import React from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { Avatar, Button, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { getStatusBarBGColor, getTheme } from '../../../src/utils/designSystem';
import { services } from '../../services';
import { styleSheet } from '../../utils/stylesheet';

export const Profile: NavioScreen = observer(() => {
  /* const options = [
    {label: 'Français', value: 'fr'},
    {label: 'English', value: 'en'},
  ];*/

  // STYLES
  const styles = StyleSheet.create({
    container: {
      padding: 20,
      marginTop: 20,
    },
    title: {
      fontSize: 30,
      flex: 1,
      marginBottom: 20,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'bold',
      Color: getTheme().blue,
    },
    backIcon: {
      marginTop: 8,
      marginLeft: 10,
    },
  });

  return (
    <View flex bg-bgColor>
      <StatusBar backgroundColor={getStatusBarBGColor()} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styleSheet.topContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              underlayColor="Colors.transparent"
              onPress={() => {
                navio.pop();
              }}
            >
              <Icon size={18} assetName={'close'} style={styles.backIcon} />
            </TouchableHighlight>
          </View>
        </View>
        <Text style={styles.title} center>
          {services.t.do('profile.title')}
        </Text>

        <View center>
          <Avatar
            source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
            size={90}
            onPress={() => {
              console.log('Change photo');
            }}
          />
        </View>

        <Text style={styles.subtitle} center>
          Félix-Antoine Tremblay
        </Text>

        <View center style={{ marginTop: 15 }}>
          <Button
            label={services.t.do('actions.logout')}
            size={Button.sizes.medium}
            backgroundColor={getTheme().blueberry}
          />
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flexDirection: 'column', width: '60%' }}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Text style={styleSheet.text}>{services.t.do('profile.chooseLanguage')}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', width: '40%' }}>
              <Text Text style={styleSheet.text}>
                Todo
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row', marginTop: 30 }}>
            <View style={{ flexDirection: 'column', width: '60%' }}>
              <View style={{ flexDirection: 'row-reverse' }}>
                <Text style={styleSheet.text}>{services.t.do('profile.chooseTheme')}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'column', width: '40%' }}>
              <Text Text style={styleSheet.text}>
                Todo
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});
