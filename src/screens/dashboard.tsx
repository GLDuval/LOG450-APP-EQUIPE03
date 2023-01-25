import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Avatar, Colors, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '.';
import { GroceryStoresList } from './components/grocery-stores-list';
import { services } from '../services';
import { getTheme } from '../utils/designSystem';

export const Dashboard: NavioScreen = observer(() => {
  const username = 'Félix-Antoine';

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
    subtitle: {
      fontSize: 22,
      flex: 1,
      color: getTheme().textColor,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    menuText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: getTheme().text,
    },
    menuContainer: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    recepesCard: {
      flex: 1,
      backgroundColor: getTheme().blueberry,
      borderRadius: 15,
      padding: 10,
      marginEnd: 10,
    },
    groceryListCard: {
      flex: 1,
      backgroundColor: getTheme().orange,
      borderRadius: 15,
      padding: 10,
    },
    mapCart: {
      flex: 1,
      backgroundColor: getTheme().blue,
      borderRadius: 15,
      padding: 10,
      marginTop: 10,
    },
    bottom: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().mustard }}>
      <StatusBar backgroundColor={getTheme().mustard} />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.topContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.title}>
              {services.t.do('dashboard.hello')}
              {username} !
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Avatar
                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                size={60}
                onPress={() => {
                  navio.show('Profile');
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.page} bg-bgColor>
          <View style={styles.menuContainer}>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={styles.recepesCard}
                onPress={() => {
                  navio.show('MyRecipes');
                }}
              >
                <View style={{ flexDirection: 'row-reverse' }}>
                  <Icon size={20} assetName={'recipe'} />
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.menuText}>{services.t.do('dashboard.myRecipes')}</Text>
                </View>
              </TouchableOpacity>

              <View style={{ flexDirection: 'column', width: '50%' }}>
                <TouchableOpacity
                  style={styles.groceryListCard}
                  onPress={() => {
                    navio.show('GroceryList');
                  }}
                >
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <Icon size={20} tintColor={Colors.white} assetName={'list'} />
                  </View>
                  <Text style={styles.menuText}>{services.t.do('dashboard.groceryList')}</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.mapCart}
                  onPress={() => {
                    navio.show('GroceryMap');
                  }}
                >
                  <View style={{ flexDirection: 'row-reverse' }}>
                    <Icon size={20} tintColor={Colors.white} assetName={'map'} />
                  </View>
                  <Text style={styles.menuText}>{services.t.do('dashboard.map')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.subtitle}>{services.t.do('dashboard.groceries')}</Text>

          <GroceryStoresList />
        </View>
      </ScrollView>
    </View>
  );
});