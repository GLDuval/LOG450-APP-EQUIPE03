import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableHighlight,
  StatusBar,
  Text,
  FlatList,
  TextInput,
} from 'react-native';
import { Icon, TabController, View, Image } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { RecipesList } from '../components/recipes-list';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { useProductList } from '../hooks/useFlyer';
import { useRecipes } from '../hooks/useRecipes';
import IngredientNumberComponent from '../components/ingredient-number';

export const GroceryInfos: NavioScreen = observer(() => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { productList, loadMore, searchedProducts, searchByName } = useProductList();
  const recipes = useRecipes();

  const search = (text: string) => {
    setSearchQuery(text);
    searchByName(text);
  };

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
    infos: {
      fontSize: 16,
      flex: 1,
      color: getTheme().red,
    },
    oldPrice: {
      fontSize: 15,
      flex: 1,
      color: getTheme().details,
      textDecorationLine: 'line-through',
      textDecorationStyle: 'solid',
    },
    cardHeader: {
      fontSize: 20,
      flex: 1,
      color: getTheme().text,
      fontWeight: 'bold',
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: getTheme().grey,
      padding: 10,
      marginBottom: 20,
      borderRadius: 10,
      flexDirection: 'row',
    },
    textInput: {
      fontSize: 16,
      backgroundColor: getTheme().darkerGrey,
      color: getTheme().text,
      borderRadius: 20,
      width: 35,
      height: 40,
      textAlign: 'center',
    },
    searchInput: {
      fontSize: 16,
      padding: 10,
      borderRadius: 10,
      backgroundColor: getTheme().grey,
      color: getTheme().details,
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
            <Image assetGroup={'images'} assetName={'superC'} style={styles.image} />
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
            indicatorStyle={{ backgroundColor: getTheme().mainHeader }}
            backgroundColor={getTheme().bgColor}
            selectedLabelColor={getTheme().mainHeader}
          />
          <View flex>
            <TabController.TabPage index={0}>
              <View style={{ padding: 20 }}>
                <TextInput
                  style={styles.searchInput}
                  placeholder={services.t.do('actions.search')}
                  onChangeText={search}
                  value={searchQuery}
                />
              </View>
              <FlatList
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                data={searchQuery.length > 0 ? searchedProducts : productList}
                renderItem={({ item }) => (
                  <View style={styles.cardContainer}>
                    <View style={styles.card}>
                      <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                        <Image
                          source={{ uri: item.image_url }}
                          style={{ width: 85, height: 85, borderRadius: 10 }}
                        />
                      </View>

                      <View style={{ flexDirection: 'column', paddingLeft: 20, width: '75%' }}>
                        <View style={{ flexDirection: 'row' }}>
                          <Text style={styles.cardHeader}>{item.product_name}</Text>
                          <IngredientNumberComponent item={item} />
                        </View>

                        <Text style={styles.infos}>{item.sale_price}</Text>
                        <Text style={styles.oldPrice}>{item.regular_price}</Text>
                      </View>
                    </View>
                  </View>
                )}
              />
            </TabController.TabPage>
            <TabController.TabPage index={1} lazy>
              <RecipesList recipes={recipes} />
            </TabController.TabPage>
          </View>
        </TabController>
      </View>
    </View>
  );
});
