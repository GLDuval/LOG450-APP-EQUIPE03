import React from 'react';
import { FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { Button, Colors, Constants, Dialog, Icon, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { services } from '../../services';

export const RecipesList: NavioScreen = observer(() => {
  const showDialog = () => {
    return true;
  };

  const hideDialog = () => {
    return true;
  };

  const recipes = [
    {
      recipe_name: 'Pâtes à la carbonara',
    },
    {
      recipe_name: 'Salade de fruits',
    },
    {
      recipe_name: 'Riz au lait',
    },
    {
      recipe_name: "Caramil et jus d'orange",
    },
    {
      recipe_name: 'Macaroni et fromage original',
    },
    {
      recipe_name: 'Quiche aux légumes',
    },
    {
      recipe_name: 'Aiguillettes de poulet au curry',
    },
    {
      recipe_name: 'Dinde rôtie au four',
    },
    {
      recipe_name: 'Lasagnes au bœuf',
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    infos: {
      fontSize: 18,
      flex: 1,
      color: getTheme().details,
    },
    cardHeader: {
      fontSize: 20,
      flex: 1,
      color: getTheme().text2,
      fontWeight: 'bold',
    },
    cardContainer: {
      flex: 1,
      marginHorizontal: 20,
    },
    card: {
      backgroundColor: getTheme().grey,
      padding: 15,
      marginTop: 20,
      borderRadius: 10,
    },
    roundedDialog: {
      backgroundColor: Colors.$backgroundDefault,
      marginBottom: Constants.isIphoneX ? 0 : 20,
      borderRadius: 12,
    },
  });

  return (
    <>
      <FlatList
        data={recipes}
        renderItem={({ item }) => (
          <TouchableHighlight
            underlayColor={'transparent'}
            onPress={() => {
              showDialog();
            }}
          >
            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <View style={{ flexDirection: 'row' }}>
                  <Text style={styles.cardHeader}>{item.recipe_name}</Text>
                  <Icon size={22} tintColor={getTheme().darkerGrey} assetName={'heart'} />
                </View>
                <Text style={styles.infos}>Ingrédients (4)</Text>
              </View>
            </View>
          </TouchableHighlight>
        )}
      />

      <Dialog
        useSafeArea
        bottom="true"
        height={500}
        panDirection={Dialog.directions.DOWN}
        containerStyle={styles.roundedDialog}
        visible={showDialog}
        pannableHeaderProps={'This is a pannable header Dialog'}
        supportedOrientations={['portrait', 'landscape']}
        ignoreBackgroundPress={false}
      >
        {
          <View>
            <Text style={styles.cardHeader}>Pâté chinois</Text>
            <Text>
              Ingrédients: 1 lb de viande hachée (boeuf ou porc) 1 tasse de lait 1/2 tasse de
              chapelure 1 oignon haché 1 boîte de maïs en grains égoutté 1 boîte de petits pois
              égouttés 1 cuillère à soupe de beurre Sel et poivre, au goût.
            </Text>
            <Text>
              Préparation: Préchauffer le four à 350 degrés F (175 degrés C). Dans un bol, mélanger
              la viande hachée, le lait, la chapelure, loignon haché, le maïs, les petits pois, le
              sel et le poivre. Verser cette préparation dans un plat à gratin beurré. Enfourner
              pendant environ 45 minutes, ou jusquà ce que la viande soit cuite. Servir chaud
              accompagné de riz.
            </Text>
            <Button text80 label={services.t.do('actions.close')} link onPress={hideDialog} />
          </View>
        }
      </Dialog>
    </>
  );
});
