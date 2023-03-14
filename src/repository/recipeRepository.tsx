import { getRecipes } from '../services/firestoreService';

export function getAll() {
  const result = getRecipes();
  return result;
}
