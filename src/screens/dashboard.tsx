import React from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Avatar, Colors, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '.';
import { GroceryStoresList } from './components/grocery-stores-list';
import { services } from '../services';
import { getTheme } from '../utils/designSystem';
import { styleSheet } from '../utils/stylesheet';

export const Dashboard: NavioScreen = observer(() => {
  const username = 'Félix-Antoine';

  // STYLES
  const styles = StyleSheet.create({
    header: {
      fontSize: 24,
      flex: 1,
      color: getTheme().blueberry,
    },
    subtitle: {
      fontSize: 22,
      fontWeight: 'bold',
      marginVertical: 15,
      marginHorizontal: 20,
      color: getTheme().textColor,
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
      flex: 2,
      borderRadius: 15,
      padding: 10,
      marginEnd: 10,
      height: 160,
      backgroundColor: getTheme().blueberry,
    },
    groceryListCard: {
      flex: 1,
      borderRadius: 15,
      padding: 10,
      height: 175,
      backgroundColor: getTheme().orange,
    },
    mapCart: {
      flex: 1,
      borderRadius: 15,
      padding: 10,
      marginTop: 10,
      maxHeight: 65,
      backgroundColor: getTheme().blue,
    },
    alignTextAtBottom: {
      flex: 1,
      justifyContent: 'flex-end',
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().mustard }}>
      <StatusBar backgroundColor={getTheme().mustard} />
      <View style={styleSheet.topContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.header}>
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

      <View style={styleSheet.roundedTopCornersContainer} bg-bgColor>
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
              <View style={styles.alignTextAtBottom}>
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
    </View>
  );
});
