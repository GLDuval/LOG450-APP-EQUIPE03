import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getTheme } from '../../utils/designSystem';
import { Button, Colors, Icon } from 'react-native-ui-lib';
import { addRecipe, getRecipe, removeRecipe } from '../../repository/myRecipeRepository';
import { UserContext } from '../../contexts/UserContext';
import { Recipe } from '../../models/Recipe';

interface FavoriteComponentProps {
  recipe: Recipe;
}

const FavoriteComponent = ({ recipe }: FavoriteComponentProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const [tint, setTint] = useState(getTheme().details);
  const user = useContext(UserContext);

  const toggleFavorite = useCallback(() => {
    if (user) {
      if (isChecked) {
        removeRecipe(recipe, user.uid).catch(console.error);
      } else {
        addRecipe(recipe, user.uid).catch(console.error);
      }
    }
    setTint(isChecked ? getTheme().details : getTheme().orange);
    setIsChecked(!isChecked);
  }, [isChecked, recipe, user]);

  useEffect(() => {
    const checkRecipe = async () => {
      const fetchedRecipe = await getRecipe(recipe.id, user?.uid ?? '');
      if (fetchedRecipe) {
        setIsChecked(true);
        setTint(getTheme().orange);
      }
    };
    checkRecipe().catch(() => console.error('Cannot fetch recipes'));
  }, [recipe.id, user?.uid]);

  return (
    <Button
      onPress={toggleFavorite}
      backgroundColor={Colors.transparent}
      style={{ width: 25, height: 25, marginTop: 5, marginLeft: 20 }}
    >
      <Icon assetName={'heart'} tintColor={tint} style={{ width: 25, height: 25 }} />
    </Button>
  );
};

export default FavoriteComponent;
