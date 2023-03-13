import { useEffect, useState } from 'react';
import { getList, addItem, modifyQuantity} from '../../repository/groceryListRepository';
import { Product } from '../../models/Product';

export function useGroceryList() {
  const [groceryList, setGroceryList] = useState<Product[]>([]);

  useEffect(() => {
    fetchGroceryList();
  }, []);

  async function fetchGroceryList() {
    const result = await getList();
    setGroceryList(result);
  }

  async function addProduct(product: Product, quantity: number) {
    const result = await addItem(product, quantity);

    if (result) {
        fetchGroceryList()
    }
  }

  async function modifyProduct(product: Product, quantity: number) {
    const result = await modifyQuantity(product, quantity);

    if (result) {
        fetchGroceryList()
    }
  }

  return { groceryList, addProduct, modifyProduct };
}