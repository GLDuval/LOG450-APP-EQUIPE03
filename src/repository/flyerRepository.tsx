import { getProducts, getProductsNextBatch, getProductsByName } from '../services/firestoreService';
import { Product } from '../models/Product';

export async function getAll() {
  const result = await getProducts();
  return result;
}

export async function getAllNext(lastProduct: Product) {
  const result = await getProductsNextBatch(lastProduct);
  return result;
}

export async function getByName(query: string) {
  const result = await getProductsByName(query);
  return result;
}
