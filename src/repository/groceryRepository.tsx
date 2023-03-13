import { getGroceries, getGroceriesPositions } from '../services/firestoreService';

export function getAll() {
  const result = getGroceries();
  return result;
}

export function getAllPositions() {
  const result = getGroceriesPositions();
  return result;
}
