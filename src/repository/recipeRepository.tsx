import { getRecipes } from '../services/firestoreService'

export async function getAll() {
    const result = await getRecipes()
    return result
}