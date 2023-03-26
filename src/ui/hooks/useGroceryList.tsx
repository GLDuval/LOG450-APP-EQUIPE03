import { useContext, useEffect, useState } from 'react';
import { getList, modifyQuantity } from '../../repository/groceryListRepository';
import { Product } from '../../models/Product';
import { UserContext } from '../../contexts/UserContext';

export function useGroceryList() {
  const [groceryList, setGroceryList] = useState<Product[]>([]);
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchGroceryList = async () => {
      if (user) {
        const result = await getList(user.uid);
        setGroceryList(result);
      }
    };
    fetchGroceryList().catch(() => console.error('Cannot fetch grocery list'));
  }, [user]);

  function modifyProduct(userId: string, product: Product, quantity: number) {
    void modifyQuantity(userId, product, quantity);
  }

  return { groceryList, modifyProduct };
}
