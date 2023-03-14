import { useEffect, useState } from 'react';
import { Grocery } from '../../models/Grocery';
import { getAll } from '../../repository/groceryRepository';

export function useGroceries() {
  const [groceries, setGroceries] = useState<Grocery[]>([]);

  useEffect(() => {
    function fetchData() {
      getAll().then(
        (result) => {
          setGroceries(result);
        },
        (err) => {
          console.log(err);
        },
      );
    }

    fetchData();
  }, []);

  return groceries;
}
