import React from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { Avatar, Button, Icon, Switch, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { getTheme } from '../../../src/utils/designSystem';
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
      marginTop: 15,
      Color: getTheme().blue,
    },
    closeIcon: {
      marginTop: 8,
      marginLeft: 10,
    },
    roundContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    roundshape: {
      backgroundColor: getTheme().lighterOrange,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 22,
    },
    roundshape2: {
      backgroundColor: getTheme().lightPurple,
      height: 44,
      width: 44,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 22,
    },
  });

  return (
    <View flex bg-bgColor>
      <StatusBar backgroundColor={getTheme().bgColor} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styleSheet.topContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              underlayColor="Colors.transparent"
              onPress={() => {
                navio.pop();
              }}
            >
              <Icon size={18} assetName={'close'} style={styles.closeIcon} />
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
            onPress={() => {
              navio.show('Login');
            }}
          />
        </View>

        <View style={styles.container}>
          <View style={{ flexDirection: 'row', marginBottom: 20 }}>
            <View style={(styles.roundContainer, { flex: 1, marginLeft: 10 })}>
              <TouchableHighlight style={styles.roundshape}>
                <Icon size={25} assetName={'language'} tintColor={getTheme().orange2} />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 2, marginTop: 8 }}>
              <Text style={{ fontSize: 18 }}>{services.t.do('profile.chooseLanguage')}</Text>
            </View>
            <View style={{ flex: 2, marginTop: 8 }}>
              <Text style={styleSheet.text}>English</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={(styles.roundContainer, { flex: 1, marginLeft: 10 })}>
              <TouchableHighlight style={styles.roundshape2}>
                <Icon size={20} assetName={'moon'} tintColor={getTheme().purple} />
              </TouchableHighlight>
            </View>
            <View style={{ flex: 2, marginTop: 8 }}>
              <Text style={{ fontSize: 18 }}>{services.t.do('profile.chooseTheme')}</Text>
            </View>
            <View style={{ flex: 2, marginTop: 8 }}>
              <Switch value={false} onValueChange={() => console.log('value changed')} />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
});
