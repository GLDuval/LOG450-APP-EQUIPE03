import { db } from '../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit, startAfter } from 'firebase/firestore';
import { Product } from '../models/Product';
import { Recipe } from '../models/Recipe';

export const getProducts = async () => {
  const products: Product[] = [];

  const firestoreQuery = query(
    collection(db, 'products'),
    orderBy('created_at', 'desc'),
    limit(10),
  );
  const querySnapshot = await getDocs(firestoreQuery);
  querySnapshot.forEach((doc) => {
    products.push(doc.data() as Product);
  });

  return products;
};

export const getProductsNextBatch = async (lastProduct: Product) => {
  const products: Product[] = [];

  const firestoreQuery = query(
    collection(db, 'products'),
    orderBy('created_at', 'desc'),
    startAfter(lastProduct.created_at),
    limit(10),
  );
  const querySnapshot = await getDocs(firestoreQuery);
  querySnapshot.forEach((doc) => {
    products.push(doc.data() as Product);
  });

  return products;
};

export const getRecipes = async () => {
  const recipes: Recipe[] = [];

  const firestoreQuery = query(collection(db, 'recipes'));
  const querySnapshot = await getDocs(firestoreQuery);
  querySnapshot.forEach((doc) => {
    recipes.push(doc.data() as Recipe);
  });

  return recipes;
};
