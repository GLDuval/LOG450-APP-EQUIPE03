import { useEffect, useState } from 'react';
import { getAll, add, remove} from '../../repository/myRecipeRepository';
import { Recipe } from '../../models/Recipe';

export function useMyRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    const result = await getAll();
    setRecipes(result);
  }

  async function addRecipe(recipe: Recipe) {
    const result = await add(recipe);

    if (result) {
        fetchRecipes()
    }
  }

  async function removeRecipe(recipe: Recipe) {
    const result = await remove(recipe);

    if (result) {
        fetchRecipes()
    }
  }

  return { recipes, addRecipe, removeRecipe };
}