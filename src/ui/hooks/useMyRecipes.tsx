import { useContext, useEffect, useState } from 'react';
import { getAllRecipes } from '../../repository/myRecipeRepository';
import { Recipe } from '../../models/Recipe';
import { UserContext } from '../../contexts/UserContext';

export function useMyRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const user = useContext(UserContext);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (user) {
        const result = await getAllRecipes(user.uid);
        setRecipes(result);
      }
    };
    fetchRecipes().catch(() => console.error('Cannot fetch recipes'));
  }, [user]);

  return { recipes };
}
