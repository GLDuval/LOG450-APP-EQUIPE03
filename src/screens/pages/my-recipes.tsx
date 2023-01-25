import React from 'react';
import { ScrollView, StatusBar, StyleSheet, TouchableHighlight } from 'react-native';
import { Colors, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { RecipesList } from '../components/recipes-list';
import { SearchBar } from '../components/search-bar';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';

export const MyRecipes: NavioScreen = observer(() => {
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
      paddingBottom: 20,
      marginHorizontal: 20,
    },
    title: {
      fontSize: 24,
      flex: 1,
      color: Colors.white,
      paddingBottom: 15,
    },
    backIcon: {
      marginTop: 8,
      tintColor: Colors.white,
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().blueberry }}>
      <StatusBar backgroundColor={getTheme().blueberry} />
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
              {services.t.do('myRecipes.title')}
            </Text>
          </View>
          <View style={{ padding: 10 }}>
            <SearchBar />
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <RecipesList />
        </View>
      </ScrollView>
    </View>
  );
});
