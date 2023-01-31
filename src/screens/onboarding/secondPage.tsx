import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, Colors, Icon, Image, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { services } from '../../services';
import { navio } from '..';
import { styleSheet } from '../../utils/stylesheet';

export const SecondPage: NavioScreen = observer(() => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: getTheme().bg2Color,
      }}
    >
      <View style={{ flex: 1 }}>
        <Button
          label={services.t.do('actions.skip')}
          color={getTheme().blueberry}
          backgroundColor={Colors.transparent}
          style={{ justifyContent: 'flex-end', paddingTop: 50, paddingRight: 40 }}
          onPress={() => {
            navio.show('Login');
          }}
        />
      </View>
      <View style={{ flex: 2 }} center>
        <Image assetName={'onboarding2'} style={{ width: 350, height: 300 }} center />
        <Text style={styleSheet.onboardingTitle}>
          {services.t.do('onboarding.secondPage.title')}
        </Text>
        <Text style={styleSheet.onboardingDescription}>
          {services.t.do('onboarding.secondPage.description')}
        </Text>
      </View>
      <View style={{ flex: 1, paddingTop: 100 }}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 20,
            marginTop: 50,
            justifyContent: 'space-between',
          }}
        >
          <View style={{ flexDirection: 'row', marginTop: 13 }}>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                navio.show('FirstPage');
              }}
            >
              <Icon
                size={10}
                style={{ marginStart: 20, marginEnd: 5 }}
                assetName={'dot'}
                tintColor={getTheme().blueberry}
              />
            </TouchableHighlight>
            <Icon
              size={10}
              assetName={'dot'}
              tintColor={getTheme().text}
              style={{ marginEnd: 5 }}
            />
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                navio.show('ThirdPage');
              }}
            >
              <Icon size={10} assetName={'dot'} tintColor={getTheme().blueberry} />
            </TouchableHighlight>
          </View>
          <View style={{ flexDirection: 'column' }}>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                navio.show('ThirdPage');
              }}
            >
              <Icon
                size={30}
                style={{ marginEnd: 30 }}
                assetName={'rightArrow'}
                tintColor={getTheme().blueberry}
              />
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
});
