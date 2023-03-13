import { useEffect, useState } from "react";
import { Grocery } from "../../models/Grocery";
import { getAll } from "../../repository/groceryRepository";

export function useGroceries() {
  const [groceries, setGroceries] = useState<Grocery[]>([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAll();
      setGroceries(result);
    }

    fetchData();
  }, []);

  return groceries;
}
