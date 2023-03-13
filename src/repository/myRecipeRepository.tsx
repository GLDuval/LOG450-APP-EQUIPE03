import { Recipe } from '../models/Recipe'
import { getMyRecipes, addRecipe, removeRecipe} from '../services/firestoreService'

export async function getAll() {
    const result = await getMyRecipes()
    return result
}

export async function add(recipe: Recipe) {
    const result = await addRecipe(recipe)
    return result
}

export async function remove(recipe: Recipe) {
    const result = await removeRecipe(recipe)
    return result
}