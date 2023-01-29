import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';

import { services } from '../services';
import { useAppearance } from '../utils/hooks';
import { TextInput } from 'react-native-gesture-handler';
import { getTheme } from '../utils/designSystem';

export const Login: NavioScreen = observer(() => {
  useAppearance();

  // STYLES
  const styles = StyleSheet.create({
    header: {
      flex: 1,
      paddingTop: 70,
      paddingBottom: 40,
      marginHorizontal: 15,
    },
    headerTitle: {
      fontSize: 32,
      flex: 1,
      color: getTheme().blueberry,
      textAlign: 'center',
    },
  });

  return (
    <View flex bg-bgColor>
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.header}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerTitle}>{services.t.do('login.title')}</Text>
          </View>
        </View>

        <View>
          <TextInput placeholder={services.t.do('login.email')} />
          <TextInput placeholder={services.t.do('login.password')} />
        </View>
      </ScrollView>
    </View>
  );
});
Login.options = () => ({});
