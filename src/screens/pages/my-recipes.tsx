import React from 'react';
import {Dimensions, ScrollView, StyleSheet, TouchableHighlight} from 'react-native';
import {Assets, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import { navio } from '..';

export const MyRecipes: NavioScreen = observer(({}) => {
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
    title: {
      fontSize: 24,
      flex: 1,
      color: Colors.white,
    },
    text: {
      fontSize: 20,
      flex: 1,
    },
    backIcon: {
      marginTop: 8,
      tintColor: Colors.white,
    }
  });
  
  return (
    <View flex style={{ backgroundColor: '#264653'}}>
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
            <Text style={styles.title} center>
              Mes recettes
            </Text>
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <Text style={styles.text} center>
            TODO
          </Text>
        </View>
      </ScrollView>
    </View>
  );
});
