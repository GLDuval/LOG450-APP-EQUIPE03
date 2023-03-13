import {
  getGroceryList,
  addGroceryListItem,
  modifyGroceryListItemQuantity,
} from '../services/firestoreService';
import { Product } from '../models/Product';

export function getList() {
  const result = getGroceryList();
  return result;
}

export function addItem(product: Product, quantity: number) {
  const result = addGroceryListItem(product, quantity);
  return result;
}

export function modifyQuantity(product: Product, quantity: number) {
  const result = modifyGroceryListItemQuantity(product, quantity);
  return result;
}
