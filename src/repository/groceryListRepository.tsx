import { getGroceryList, modifyGroceryListItemQuantity } from '../services/firestoreService';
import { Product } from '../models/Product';

export async function getList(userId: string) {
  const result = getGroceryList(userId);
  return result;
}

export function modifyQuantity(userId: string, product: Product, quantity: number) {
  modifyGroceryListItemQuantity(userId, product, quantity).catch((error) => {
    console.error(error);
  });
}
