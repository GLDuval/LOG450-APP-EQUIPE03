import { Recipe } from '../models/Recipe';
import { getMyRecipes, addRecipe, removeRecipe } from '../services/firestoreService';

export function getAll() {
  const result = getMyRecipes();
  return result;
}

export function add(recipe: Recipe) {
  const result = addRecipe(recipe);
  return result;
}

export function remove(recipe: Recipe) {
  const result = removeRecipe(recipe);
  return result;
}
