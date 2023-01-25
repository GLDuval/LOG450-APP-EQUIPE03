import React from 'react';
import { ScrollView, StyleSheet, TouchableHighlight, StatusBar } from 'react-native';
import { Colors, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { FoodInfosList } from '../components/food-infos-list';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';

export const GroceryList: NavioScreen = observer(() => {
  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
    },
    topContainer: {
      fontSize: 24,
      flex: 1,
      paddingTop: 60,
      paddingBottom: 30,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 24,
      flex: 1,
      color: getTheme().textColor,
    },
    backIcon: {
      marginTop: 8,
      tintColor: Colors.white,
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().orange }}>
      <StatusBar backgroundColor={getTheme().orange} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.topContainer}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableHighlight
              underlayColor="Colors.transparent"
              onPress={() => {
                navio.pop();
              }}
            >
              <Icon size={18} assetName={'close'} style={styles.backIcon} />
            </TouchableHighlight>
            <Text style={styles.title} center>
              {services.t.do('groceryList.title')}
            </Text>
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <FoodInfosList />
        </View>
      </ScrollView>
    </View>
  );
});