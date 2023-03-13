import { useEffect, useState } from 'react';
import { getAllPositions } from '../../repository/groceryRepository';
import { GroceryPosition } from '../../models/GroceryPosition';

export function useMap() {
  const [positions, setPositions] = useState<GroceryPosition[]>([]);

  useEffect(() => {
    fetchGroceryPositions();
  }, []);

  async function fetchGroceryPositions() {
    const result = await getAllPositions();
    setPositions(result);
  }

  return positions;
}