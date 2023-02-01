import React from 'react';
import { FlatList } from 'react-native';
import { Button, Text, View } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { NavioScreen } from 'rn-navio';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { services } from '../../services';
import Checkbox from './checkbox';

export const IngredientsList: NavioScreen = observer(() => {
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

  return (
    <>
      <View style={{ flexDirection: 'row', marginTop: 15 }} center>
        <Button
          label={services.t.do('recipeDetails.addIngredient')}
          labelStyle={styleSheet.loginButtonLabel}
          borderRadius={15}
          backgroundColor="#264653"
          style={{ marginBottom: 10 }}
          onPress={() => console.log('TODO')}
        />
      </View>

      <FlatList
        data={ingredients}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              {/* TODO: Make it work */}
              <Checkbox />
            </View>

            <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
              <Text style={(styleSheet.text, { color: getTheme().mainHeader })}>{item.name}</Text>
            </View>
          </View>
        )}
      />
    </>
  );
});
