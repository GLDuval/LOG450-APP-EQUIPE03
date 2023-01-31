import React from 'react';
import { Dimensions, StyleSheet, TouchableHighlight, StatusBar, Text } from 'react-native';
import { Icon, TabController, View, Image } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { RecipesList } from '../components/recipes-list';
import { FoodInfosList } from '../components/food-infos-list';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { SearchBar } from '../components/search-bar';

export const GroceryInfos: NavioScreen = observer(() => {
  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      height: Dimensions.get('window').height,
    },
    image: {
      width: 150,
      height: 50,
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().lightOrange }}>
      <StatusBar backgroundColor={getTheme().lightOrange} />
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
          <View style={{ flexDirection: 'row', width: '100%' }} center>
            <Image assetName={'superC'} style={styles.image} />
          </View>
        </View>
      </View>

      <View style={styles.page} bg-bgColor>
        <View style={styleSheet.roundedTopCornersContainer}>
          <Text>{'\n'}</Text>
        </View>
        <TabController
          items={[
            { label: services.t.do('groceryInfos.flyer') },
            { label: services.t.do('groceryInfos.recipes') },
          ]}
        >
          <TabController.TabBar
            enableShadows
            indicatorStyle={{ backgroundColor: getTheme().blueberry }}
            backgroundColor={getTheme().bgColor}
            selectedLabelColor={getTheme().blueberry}
          />
          <View flex>
            <TabController.TabPage index={0}>
              <View style={{ paddingTop: 20, paddingStart: 20, paddingEnd: 20 }}>
                <SearchBar />
              </View>
              <FoodInfosList />
            </TabController.TabPage>
            <TabController.TabPage index={1} lazy>
              <View style={{ paddingTop: 20, paddingStart: 20, paddingEnd: 20 }}>
                <SearchBar />
              </View>
              <RecipesList />
            </TabController.TabPage>
          </View>
        </TabController>
      </View>
    </View>
  );
});
