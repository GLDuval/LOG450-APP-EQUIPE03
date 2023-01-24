import React from 'react';
import {Dimensions, ScrollView, StyleSheet, TouchableHighlight, StatusBar, Image} from 'react-native';
import {Assets, Colors, Icon, TabController, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import {navio} from '..';
import {RecipesList} from '../components/recipes-list';
import {FoodInfosList} from '../components/food-infos-list';

export const GroceryInfos: NavioScreen = observer(({}) => {
  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      height: Dimensions.get("window").height
    },
    topContainer: {
      fontSize: 24,
      flex: 1,
      paddingTop: 60,
      paddingBottom: 30,
      marginHorizontal: 20,
    },
    backIcon: {
      marginTop: 13,
      tintColor: Colors.white,
    },
    image: {
      width: 150,
      height: 50,
    },
  });
  
  return (
    <View flex style={{ backgroundColor: '#DADADA'}}>
      <StatusBar backgroundColor='#DADADA' />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.topContainer}>
            <View style={{flexDirection:"row"}}>
              <TouchableHighlight
                underlayColor="Colors.transparent"
                onPress={() => {
                  navio.pop();
                }}
              >
                <Icon
                  size={18}
                  source={Assets.icons.close}
                  style={styles.backIcon}
                  />
              </TouchableHighlight>
              <View style={{flexDirection:"row", width:'100%'}} center>
                <Image
                    source={Assets.images.superC}
                    style={styles.image}
                  />
              </View>
            </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <TabController items={[{label: 'Circulaire'}, {label: 'Recettes'}]}>
            <TabController.TabBar 
              enableShadows
              indicatorStyle={{backgroundColor: '#E76F51'}}
              textStyle={{Color: '#E76F51'}}
              color='#E76F51'
            />
              <View flex>
                <TabController.TabPage index={0}>
                  <FoodInfosList />
                </TabController.TabPage>
                <TabController.TabPage index={1} lazy>
                  <RecipesList />
                </TabController.TabPage>
              </View>
          </TabController>
      </View>
      </ScrollView>
    </View>
  );
});

