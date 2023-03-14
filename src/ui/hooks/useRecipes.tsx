import { useState, useEffect } from 'react';
import { getAll } from '../../repository/recipeRepository';
import { Recipe } from '../../models/Recipe';

export function useRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    function fetchRecipes() {
      getAll().then(
        (result) => {
          setRecipes(result);
        },
        (err) => {
          console.log(err);
        },
      );
    }

    fetchRecipes();
  }, []);

  return recipes;
}
