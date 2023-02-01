import React from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, Colors, Icon, Image, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { services } from '../../services';
import { navio } from '..';
import { styleSheet } from '../../utils/stylesheet';
import { stores } from '../../stores';

export const OnboardingThirdPage: NavioScreen = observer(() => {
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
        <Image
          assetGroup={'images'}
          assetName={'onboarding1'}
          style={{ width: 350, height: 300 }}
          center
        />
        <Text style={styleSheet.onboardingTitle}>
          {services.t.do('onboarding.thirdPage.title')}
        </Text>
        <Text style={styleSheet.onboardingDescription}>
          {services.t.do('onboarding.thirdPage.description')}
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
                navio.show('OnboardingFirstPage');
              }}
            >
              <Icon
                size={10}
                style={{ marginStart: 20, marginEnd: 5 }}
                assetName={'dot'}
                tintColor={getTheme().blueberry}
              />
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                navio.show('OnboardingSecondPage');
              }}
            >
              <Icon
                size={10}
                style={{ marginEnd: 5 }}
                assetName={'dot'}
                tintColor={getTheme().blueberry}
              />
            </TouchableHighlight>
            <Icon size={10} assetName={'dot'} tintColor={getTheme().text2} />
          </View>
          <View style={{ flexDirection: 'column' }}>
            <TouchableHighlight
              underlayColor={'transparent'}
              onPress={() => {
                // Onboarding is done, set isFirstLaunch to false
                stores.ui.set('isFirstLaunch', false);
                navio.pushStack('LoginStack');
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
