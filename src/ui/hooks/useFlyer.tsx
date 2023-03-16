import { useState, useEffect } from 'react';
import { getAll, getAllNext, getByName } from '../../repository/flyerRepository';
import { Product } from '../../models/Product';

export function useProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [lastProduct, setLastProduct] = useState<Product>({} as Product);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

  useEffect(() => {
    function fetchData() {
      getAll().then(
        (products) => {
          setProductList(products);
          setLastProduct(products[products.length - 1] || ({} as Product));
        },
        (err) => {
          console.log(err);
        },
      );
    }
    fetchData();
  }, []);

  const loadMore = () => {
    getAllNext(lastProduct).then(
      (nextBatch) => {
        setProductList([...productList, ...nextBatch]);
        setLastProduct(productList[productList.length - 1] || ({} as Product));
      },
      (err) => console.log(err),
    );
  };

  const searchByName = (query: string) => {
    getByName(query).then(
      (products) => {
        setSearchedProducts(products);
      },
      (err) => console.log(err),
    );
  };

  return { productList, loadMore, searchedProducts, searchByName };
}
