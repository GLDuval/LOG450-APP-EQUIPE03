import { Recipe } from '../models/Recipe';
import {
  getMyRecipes,
  addRecipe as addRecipeFirestore,
  removeRecipe as removeRecipeFirestore,
} from '../services/firestoreService';

export function getAllRecipes(userId: string) {
  const result = getMyRecipes(userId);
  return result;
}

export async function getRecipe(id: string, userId: string) {
  const recipes = await getMyRecipes(userId);
  const result = recipes.find((recipe) => recipe.id === id);
  return result;
}

export function addRecipe(recipe: Recipe, userId: string) {
  const result = addRecipeFirestore(recipe, userId);
  return result;
}

export function removeRecipe(recipe: Recipe, userId: string) {
  const result = removeRecipeFirestore(recipe, userId);
  return result;
}
