import React from 'react';
import {Dimensions, ScrollView, StyleSheet, TouchableHighlight, StatusBar, SectionList, Image, TextInput} from 'react-native';
import {Assets, Colors, Icon, TabController, Text, View} from 'react-native-ui-lib';
import {observer} from 'mobx-react';
import {NavioScreen} from 'rn-navio';
import { navio } from '..';

export const GroceryInfos: NavioScreen = observer(({}) => {
  const food = [
    {
      data: ['Cocombre', 'Tostitos Chunky Salsa', 'Banane', 'Poulet', 'Pâtes spaghetti', 'Saumon'],
    },
  ];

  const recipes = [
    {
      data: ['Caramilk et Orange', 'Pâté chinois', 'Lasage', 'Poulet parmesan', 'Pizzaghetti', 'Saumon fumé'],
    },
  ];
  
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
    infos: {
      fontSize: 18,
      flex: 1,
      color: '#696d6e',
    },
    oldPrice: {
      fontSize: 15,
      flex: 1,
      color: '#696d6e',
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid'
    },
    cardHeader: {
      fontSize: 20,
      flex: 1,
      color: Colors.black,
      fontWeight: 'bold',
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: '#e0e0de',
      padding: 15,
      marginTop: 20,
      borderRadius: 10,
      flexDirection: 'row',
    },
    recipeCard: {
      backgroundColor: '#e0e0de',
      padding: 15,
      marginTop: 20,
      borderRadius: 10,
    },
    backIcon: {
      marginTop: 13,
      tintColor: Colors.white,
    },
    textInput: {
      fontSize: 16,
      backgroundColor: "#ffffff",
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
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
                  <SectionList
                    sections={food}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({item}) => (
                      <View style={styles.cardContainer}>
                        <View style={styles.card}>
                          <View style={{flexDirection:"column"}}>
                            <Image
                                source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
                                style={{ width: 100, height: 100, borderRadius: 10 }}
                              />
                          </View>

                          <View style={{flexDirection:"column", paddingLeft:15, width: '70%'}}>
                            <View style={{flexDirection:"row"}}>
                              <Text style={styles.cardHeader}>
                                {item}
                              </Text>
                              <TextInput
                                placeholder="1"
                                style={styles.textInput}
                                maxLength={3}
                              />
                            </View>
                            
                            <Text style={styles.infos}>
                              1.99$ Ch
                            </Text>
                            <Text style={styles.oldPrice}>
                              1.99$ Ch
                            </Text>
                          </View>
                        </View>
                      </View>
                    )}
                  />
                </TabController.TabPage>
                <TabController.TabPage index={1} lazy>
                  <SectionList
                  sections={recipes}
                  keyExtractor={(item, index) => item + index}
                  renderItem={({item}) => (
                    <View style={styles.cardContainer}>
                      <View style={styles.recipeCard}>
                        <View style={{flexDirection:"row"}}>
                          <Text style={styles.cardHeader}>
                            {item}
                          </Text>
                          <Icon
                            size={22}
                            tintColor={'#264653'}
                            source={Assets.icons.heart}
                          />
                        </View>
                        <Text style={styles.infos}>
                          Ingrédients (4)
                        </Text>
                      </View>
                    </View>
                  )}
                />
                </TabController.TabPage>
              </View>
          </TabController>
      </View>
      </ScrollView>
    </View>
  );
});

