import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';
import {Assets, Avatar, Colors, Icon, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import {navio} from '.';
import {GroceryStoresList} from './components/grocery-stores-list';

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
      color: '#264653',
    },
    subtitle: {
      fontSize: 22,
      flex: 1,
      color: Colors.black,
      fontWeight: 'bold',
      marginVertical: 10,
      marginHorizontal: 20,
    },
    menuText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#FFFFFF',
    },
    menuContainer: {
      marginTop: 20,
      marginHorizontal: 20,
    },
    recepesCard: {
      flex: 1,
      backgroundColor: '#264653',
      borderRadius: 15,
      padding: 10,
      marginEnd: 10,
    },
    groceryListCard: {
      flex: 1,
      backgroundColor: '#E76F51',
      borderRadius: 15,
      padding: 10,
    },
    mapCart: {
      flex: 1,
      backgroundColor: '#578699',
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
    <View flex style={{backgroundColor: '#E9C46A'}}>
      <StatusBar backgroundColor="#E9C46A" />
      <ScrollView contentInsetAdjustmentBehavior="always">
        <View style={styles.topContainer}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.title}>
              Bonjour, {'\n'}
              {username} !
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Avatar
                source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
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
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.recepesCard}
                onPress={() => {
                  navio.show('MyRecipes');
                }}
              >
                <View style={{flexDirection: 'row-reverse'}}>
                  <Icon size={20} source={Assets.icons.recipe} />
                </View>
                <View style={styles.bottom}>
                  <Text style={styles.menuText}>Mes {'\n'}recettes</Text>
                </View>
              </TouchableOpacity>

              <View style={{flexDirection: 'column', width: '50%'}}>
                <TouchableOpacity
                  style={styles.groceryListCard}
                  onPress={()=> {
                    navio.show('GroceryList');
                  }}>
                  <View style={{flexDirection:'row-reverse'}}>
                    <Icon size={20} tintColor={Colors.white} source={Assets.icons.list} />
                  </View>
                  <Text style={styles.menuText}>Liste {'\n'}d&apos;épicerie</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.mapCart}
                  onPress={() => {
                    navio.show('GroceryMap');
                  }}
                >
                  <View style={{flexDirection:'row-reverse'}}>
                    <Icon size={20} tintColor={Colors.white} source={Assets.icons.map} />
                  </View>
                  <Text style={styles.menuText}>Carte</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.subtitle}>Épiceries</Text>

          <GroceryStoresList />
        </View>
      </ScrollView>
    </View>
  );
});
