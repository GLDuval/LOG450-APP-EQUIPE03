import { db } from '../../firebaseConfig';
import { collection, getDocs, query, orderBy, limit, startAfter, where } from 'firebase/firestore';
import { Product } from '../models/Product';
import { Recipe } from '../models/Recipe';
import { Grocery } from '../models/Grocery';
import { GroceryPosition } from '../models/GroceryPosition';
import { services } from '../services';

export const getGroceries = async () => {
  const groceries: Grocery[] = [];
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const firestoreQuery = query(collection(db, 'groceries'));
  const querySnapshot = await getDocs(firestoreQuery);
  querySnapshot.forEach((doc) => {
    const grocery: Grocery = {
      id: doc.data().id as number,
      until: services.t.do(daysOfWeek[doc.data().until as number]),
      name: doc.data().name as string,
    };
    groceries.push(grocery);
  });

  return groceries;
};

export const getGroceriesPositions = () => {
  const groceryPostions: GroceryPosition[] = [
    {
      id: 1,
      name: 'Super C - Atwater',
      latitude: 45.485738,
      longitude: -73.580292,
    },
    {
      id: 2,
      name: 'Super C - Lasalle',
      latitude: 45.444698,
      longitude: -73.617049,
    },
    {
      id: 3,
      name: 'Super C - Marché St-Jacques',
      latitude: 45.506105,
      longitude: -73.568644,
    },
    {
      id: 4,
      name: 'Super C - Pie IX, Jarry',
      latitude: 45.570088,
      longitude: -73.601704,
    },
    {
      id: 5,
      name: 'Super C - Pie IX, Ontario',
      latitude: 45.563647,
      longitude: -73.567224,
    },
    {
      id: 6,
      name: 'Super C - Pointe-aux-Trembles',
      latitude: 45.651317,
      longitude: -73.503613,
    },
    {
      id: 7,
      name: 'Super C - Rivière-des-Prairies',
      latitude: 45.631228,
      longitude: -73.577579,
    },
    {
      id: 8,
      name: 'Super C - Saint-Léonard',
      latitude: 45.578809,
      longitude: -73.591102,
    },
    {
      id: 9,
      name: 'Super C - St-Jacques',
      latitude: 45.462977,
      longitude: -73.619152,
    },
  ];

  return groceryPostions;
};

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

export const getProductsByName = async (queryString: string) => {
  const products: Product[] = [];

  const firestoreQuery = query(
    collection(db, 'products'),
    where('product_name_lower', '>=', queryString.toLowerCase()),
    where('product_name_lower', '<=', queryString.toLowerCase() + '\uf8ff'),
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

export const getMyRecipes = () => {
  const recipes: Recipe[] = [];

  // TODO : Fetch the user recipes

  return recipes;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const addRecipe = (recipe: Recipe) => {
  // TODO : Add a recipe to the user connected
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const removeRecipe = (recipe: Recipe) => {
  // TODO : Remove a recipe to the user connected
  return null;
};

export const getGroceryList = () => {
  // TODO : Use the user real grocery list
  const products: Product[] = [
    {
      id: '1',
      product_name: 'Product 1',
      image_url: 'https://example.com/product1.jpg',
      regular_price: '$10.99',
      sale_price: '$9.99',
      quantity: 10,
      created_at: new Date('2022-01-01'),
    },
    {
      id: '2',
      product_name: 'Product 2',
      image_url: 'https://example.com/product2.jpg',
      regular_price: '$5.99',
      sale_price: '$4.99',
      quantity: 20,
      created_at: new Date('2022-01-02'),
    },
    {
      id: '3',
      product_name: 'Product 3',
      image_url: 'https://example.com/product3.jpg',
      regular_price: '$15.99',
      sale_price: '$12.99',
      quantity: 5,
      created_at: new Date('2022-01-03'),
    },
  ];

  return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const addGroceryListItem = (product: Product, quantity: number) => {
  // TODO : Save ingredient with the quantity
  return null;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const modifyGroceryListItemQuantity = (product: Product, quantity: number) => {
  // TODO : If quantity = 0, remove it from the list, if not, add the item
  return null;
};
