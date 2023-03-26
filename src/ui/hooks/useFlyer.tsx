import { useState, useEffect, useContext } from 'react';
import { getAll, getAllNext, getByName } from '../../repository/flyerRepository';
import { Product } from '../../models/Product';
import { UserContext } from '../../contexts/UserContext';
import { getList } from '../../repository/groceryListRepository';

export function useProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [lastProduct, setLastProduct] = useState<Product>({} as Product);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);

  const user = useContext(UserContext);

  useEffect(() => {
    function fetchData() {
      try {
        getAll().then((products) => {
          getList(user?.uid ?? '').then((groceryList) => {
            if (groceryList.length > 0) {
              const updatedProducts = products.map((product) => {
                const groceryListProduct = groceryList.find(
                  (p) => p.product_name === product.product_name,
                );

                if (groceryListProduct) {
                  return {
                    ...product,
                    quantity: groceryListProduct.quantity,
                  };
                }

                return product;
              });

              setProductList(updatedProducts);
            } else {
              setProductList(products);
            }

            setLastProduct(products[products.length - 1] || ({} as Product));
          }, console.error);
        }, console.error);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [user]);

  const loadMore = () => {
    getAllNext(lastProduct).then(
      (nextBatch) => {
        // updateProducts(nextBatch);
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
