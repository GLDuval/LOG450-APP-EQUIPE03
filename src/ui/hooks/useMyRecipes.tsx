import { useEffect, useState } from 'react';
import { getAll, add, remove } from '../../repository/myRecipeRepository';
import { Recipe } from '../../models/Recipe';

export function useMyRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  function fetchRecipes() {
    const result = getAll();
    setRecipes(result);
  }

  function addRecipe(recipe: Recipe) {
    const result = add(recipe);

    if (result) {
      fetchRecipes();
    }
  }

  function removeRecipe(recipe: Recipe) {
    const result = remove(recipe);

    if (result) {
      fetchRecipes();
    }
  }

  return { recipes, addRecipe, removeRecipe };
}
