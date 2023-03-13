import { useState, useEffect } from 'react';
import { getAll, getAllNext } from '../../repository/flyerRepository';
import { Product } from '../../models/Product';

export function useProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [lastProduct, setLastProduct] = useState<Product>({} as Product);

  useEffect(() => {
    async function fetchData() {
      const result = await getAll();
      setProductList(result);
      setLastProduct(result[result.length - 1] || ({} as Product));
    }
    fetchData();
  }, []);

  const loadMore = async () => {
    const result = await getAllNext(lastProduct);
    setProductList([...productList, ...result]);
    setLastProduct(result[result.length - 1] || ({} as Product));
  };

  return { productList, loadMore };
};
