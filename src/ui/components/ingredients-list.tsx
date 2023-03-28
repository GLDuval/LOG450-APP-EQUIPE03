import React from 'react';
import { FlatList } from 'react-native';
import { Text, View } from 'react-native-ui-lib';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import Checkbox from './checkbox';
import { RecipeIngredient } from '../../models/Recipe';

type IngredientsListProps = {
  ingredients: RecipeIngredient[];
};

export const IngredientsList = ({ ingredients }: IngredientsListProps) => {
  /* const handleAddIngredient = () => {
    if (user) {
      ingredients.forEach((ingredient) => {
        addIngredient(user.uid, ingredient, ingredient.quantity);
      });
    }
  };*/

  return (
    <>
      {/* <View style={{ flexDirection: 'row', marginTop: 15 }} center>
         <Button
          label={services.t.do('recipeDetails.addIngredient')}
          labelStyle={styleSheet.loginButtonLabel}
          borderRadius={15}
          backgroundColor="#264653"
          style={{ marginBottom: 10 }}
          onPress={{ handleAddIngredient }}
        />
      </View> */}

      <FlatList
        data={ingredients}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', paddingTop: 20, paddingLeft: 20 }}>
            <View style={{ flexDirection: 'column' }}>
              <Checkbox isChecked={false} />
            </View>

            <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
              <Text style={(styleSheet.text, { color: getTheme().mainHeader })}>
                {item.name} : {item.quantity}
              </Text>
            </View>
          </View>
        )}
      />
    </>
  );
};
