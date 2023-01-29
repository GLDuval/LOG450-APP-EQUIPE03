import React from 'react';
import { TouchableHighlight, StatusBar, StyleSheet, Dimensions, FlatList } from 'react-native';
import { Checkbox, Icon, TabController, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { navio } from '..';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';

export const RecipeDetails: NavioScreen = observer(() => {
  const ingredients = [
    {
      name: '1 lb de viande hachée (boeuf ou porc)',
      isCheck: false,
    },
    {
      name: '1 tasse de lait',
      isCheck: true,
    },
    {
      name: '1/2 tasse de chapelure',
      isCheck: false,
    },
    {
      name: '1 oignon haché',
      isCheck: true,
    },
    {
      name: '1 boîte de maïs en grains égoutté',
      isCheck: true,
    },
    {
      name: '1 boîte de petits pois égouttés',
      isCheck: false,
    },
    {
      name: '1 cuillère à soupe de beurre',
      isCheck: false,
    },
    {
      name: 'Sel et poivre, au goût',
      isCheck: false,
    },
  ];

  const instructions = [
    {
      step: 'Préchauffer le four à 350 degrés F (175 degrés C).',
      stepNumber: 1,
    },
    {
      step: "Dans un bol, mélanger la viande hachée, le lait, la chapelure, l'oignon haché, le maïs, les petits pois, le sel et le poivre.",
      stepNumber: 2,
    },
    {
      step: 'Verser cette préparation dans un plat à gratin beurré.',
      stepNumber: 3,
    },
    {
      step: "Enfourner pendant environ 45 minutes, ou jusqu'à ce que la viande soit cuite.",
      stepNumber: 4,
    },
    {
      step: 'Servir chaud accompagné de riz.',
      stepNumber: 5,
    },
  ];

  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      height: Dimensions.get('window').height,
    },
    instructions: {
      fontSize: 18,
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 20,
      color: getTheme().textColor,
      textAlign: 'justify',
    },
  });

  return (
    <View flex style={{ backgroundColor: getTheme().lightOrange }}>
      <StatusBar backgroundColor={getTheme().lightOrange} />
      <View style={styleSheet.topContainer}>
        <View style={{ flexDirection: 'row', paddingBottom: 20 }}>
          <TouchableHighlight
            underlayColor="Colors.transparent"
            onPress={() => {
              navio.pop();
            }}
          >
            <Icon size={18} assetName={'back'} style={styleSheet.backIcon} />
          </TouchableHighlight>
          <Text center style={styleSheet.header}>
            Pâté chinois
          </Text>
        </View>
      </View>
      <View style={styles.page} bg-bgColor>
        <View style={styleSheet.roundedTopCornersContainer}>
          <Text>{'\n'}</Text>
        </View>
        <TabController
          items={[
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            { label: services.t.do('recipeDetails.ingredients') + ' (' + ingredients.length + ')' },
            { label: services.t.do('recipeDetails.instructions') },
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
              <FlatList
                data={ingredients}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
                    <View style={{ flexDirection: 'column' }}>
                      {/* TODO: Make it work */}
                      <Checkbox
                        value={item.isCheck}
                        onValueChange={() => (item.isCheck = !item.isCheck)}
                        color={getTheme().lightOrange}
                      />
                    </View>

                    <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
                      <Text style={styleSheet.text}>{item.name}</Text>
                    </View>
                  </View>
                )}
              />
            </TabController.TabPage>
            <TabController.TabPage index={1} lazy>
              <FlatList
                data={instructions}
                renderItem={({ item }) => (
                  <View style={{ flexDirection: 'row' }}>
                    <View style={{ flexDirection: 'column', width: '15%' }}>
                      <Text style={styles.instructions}>{item.stepNumber}.</Text>
                    </View>
                    <View style={{ flexDirection: 'column', width: '85%' }}>
                      <Text style={styles.instructions}>{item.step}</Text>
                    </View>
                  </View>
                )}
              />
            </TabController.TabPage>
          </View>
        </TabController>
      </View>
    </View>
  );
});
