import React from 'react';
import { TouchableHighlight, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { Icon, TabController, Text, View } from 'react-native-ui-lib';
import { navio } from '..';
import { services } from '../../services';
import { getTheme } from '../../utils/designSystem';
import { styleSheet } from '../../utils/stylesheet';
import { IngredientsList } from '../components/ingredients-list';
import { InstructionsList } from '../components/instructions-list';
import { Recipe } from '../../models/Recipe';

type RecipeDetailsProps = {
  route: {
    params: {
      recipe: Recipe;
    };
  };
};

export const RecipeDetails = ({ route }: RecipeDetailsProps) => {
  const ingredientsLength = 8;

  // STYLES
  const styles = StyleSheet.create({
    page: {
      borderTopEndRadius: 30,
      borderTopStartRadius: 30,
      height: Dimensions.get('window').height,
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
            <Icon size={18} assetName={'back'} style={styleSheet.closeIcon} />
          </TouchableHighlight>
          <Text center style={styleSheet.header}>
            {route.params.recipe.name}
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
            { label: services.t.do('recipeDetails.ingredients') + ' (' + ingredientsLength + ')' },
            { label: services.t.do('recipeDetails.instructions') },
          ]}
        >
          <TabController.TabBar
            enableShadows
            labelColor={getTheme().mainHeader}
            indicatorStyle={{ backgroundColor: getTheme().mainHeader }}
            backgroundColor={getTheme().bgColor}
            selectedLabelColor={getTheme().mainHeader}
          />
          <View flex>
            <TabController.TabPage index={0}>
              <IngredientsList ingredients={route.params.recipe.ingredients} />
            </TabController.TabPage>
            <TabController.TabPage index={1} lazy>
              <InstructionsList instructions={route.params.recipe.instructions} />
            </TabController.TabPage>
          </View>
        </TabController>
      </View>
    </View>
  );
};
