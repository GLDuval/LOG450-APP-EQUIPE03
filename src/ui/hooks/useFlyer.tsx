import { useState, useEffect, useContext } from 'react';
import { getAll, getAllNext, getByName } from '../../repository/flyerRepository';
import { Product } from '../../models/Product';
import { UserContext } from '../../contexts/UserContext';
import { getList } from '../../repository/groceryListRepository';

export function useProductList() {
  const [productList, setProductList] = useState<Product[]>([]);
  const [lastProduct, setLastProduct] = useState<Product>({} as Product);
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const [groceries, setGroceries] = useState<Product[]>([]);

  const user = useContext(UserContext);

  useEffect(() => {
    function fetchData() {
      try {
        getAll().then((products) => {
          getList(user?.uid ?? '').then((groceryList) => {
            setGroceries(groceryList);
            if (groceryList.length > 0) {
              const updatedProducts = products.map((product) => {
                const groceryListProduct = groceryList.find(
                  (r) =>
                    r.product_name === product.product_name && r.sale_price === product.sale_price,
                );

                if (groceryListProduct) {
                  groceryList.splice(groceryList.indexOf(groceryListProduct), 1);
                  return {
                    ...product,
                    quantity: groceryListProduct.quantity,
                  };
                }

                setGroceries(groceryList);
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
        let newProductList = [];
        if (groceries.length > 0) {
          const updatedProducts = nextBatch.map((product) => {
            const groceryListProduct = groceries.find(
              (r) => r.product_name === product.product_name && r.sale_price === product.sale_price,
            );

            if (groceryListProduct) {
              groceries.splice(groceries.indexOf(groceryListProduct), 1);
              return {
                ...product,
                quantity: groceryListProduct.quantity,
              };
            }

            setGroceries(groceries);
            return product;
          });
          newProductList = [...productList, ...updatedProducts];
        } else {
          newProductList = [...productList, ...nextBatch];
        }
        setProductList(newProductList);
        setLastProduct(newProductList[newProductList.length - 1] || ({} as Product));
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
