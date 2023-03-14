import { useEffect, useState } from 'react';
import { getList, addItem, modifyQuantity } from '../../repository/groceryListRepository';
import { Product } from '../../models/Product';

export function useGroceryList() {
  const [groceryList, setGroceryList] = useState<Product[]>([]);

  useEffect(() => {
    fetchGroceryList();
  }, []);

  function fetchGroceryList() {
    setGroceryList(getList());
  }

  function addProduct(product: Product, quantity: number) {
    const result = addItem(product, quantity);

    if (result) {
      fetchGroceryList();
    }
  }

  function modifyProduct(product: Product, quantity: number) {
    const result = modifyQuantity(product, quantity);

    if (result) {
      fetchGroceryList();
    }
  }

  return { groceryList, addProduct, modifyProduct };
}
