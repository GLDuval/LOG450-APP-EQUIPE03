import { db } from '../../firebaseConfig';
import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
  startAfter,
  where,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
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
  querySnapshot.forEach((document) => {
    const grocery: Grocery = {
      id: document.data().id as number,
      until: services.t.do(daysOfWeek[document.data().until as number]),
      name: document.data().name as string,
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
    {
      id: 9,
      name: 'Super C - Ataken',
      latitude: 45.520679,
      longitude: -73.563309,
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
  querySnapshot.forEach((document) => {
    products.push(document.data() as Product);
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
  querySnapshot.forEach((document) => {
    products.push(document.data() as Product);
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
  querySnapshot.forEach((document) => {
    recipes.push({ id: document.id, ...document.data() } as Recipe);
  });

  return recipes;
};

export const getMyRecipes = async (userId: string) => {
  let recipes: Recipe[] = [];
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const user = userSnap.data();
    recipes = user.recipes as Recipe[];
  } else {
    console.log('No such document!');
  }

  return recipes;
};

export const addRecipe = async (recipe: Recipe, userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const user = userSnap.data();
    const recipes = user.recipes as Recipe[];
    recipes.push(recipe);
    await updateDoc(userRef, { recipes: recipes });
  } else {
    console.log('No such document!');
  }
};

export const removeRecipe = async (recipe: Recipe, userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const user = userSnap.data();
    const recipes = user.recipes as Recipe[];
    const newRecipes = recipes.filter((r) => r.id !== recipe.id);
    await updateDoc(userRef, { recipes: newRecipes });
  } else {
    console.log('No such document!');
  }
};

export const addEmptyUserDocument = async (userId: string) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, { recipes: [], products: [] });
  }
};

export const getGroceryList = async (userId: string) => {
  let products: Product[] = [];
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    const user = userSnap.data();
    products = user.products as Product[];
  } else {
    console.log('No such document!');
  }

  return products;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const modifyGroceryListItemQuantity = async (
  userId: string,
  product: Product,
  quantity: number,
) => {
  const userRef = doc(db, 'users', userId);
  const userSnap = await getDoc(userRef);

  if (userSnap.exists()) {
    const user = userSnap.data();
    const products = user.products as Product[];
    let newProducts = products;
    if (quantity === 0) {
      newProducts = products.filter(
        (r) => r.product_name !== product.product_name && r.sale_price !== product.sale_price,
      );
    } else {
      let found = false;

      newProducts = products.map((r) => {
        if (r.product_name === product.product_name && r.sale_price === product.sale_price) {
          r.quantity = quantity;
          found = true;
        }
        return r;
      });

      if (!found) {
        product.quantity = quantity;
        newProducts.push(product);
      }
    }

    await updateDoc(userRef, { products: newProducts });
  } else {
    console.log('No such document!');
  }
};
