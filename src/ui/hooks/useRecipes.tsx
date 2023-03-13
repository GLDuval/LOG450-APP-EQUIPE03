import { useState, useEffect } from 'react';
import { getAll } from '../../repository/recipeRepository';
import { Recipe } from '../../models/Recipe';

export function useRecipes() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

    useEffect(() => {
        async function fetchRecipes() {
        const result = await getAll();
        setRecipes(result);
        }

        fetchRecipes();
    }, []);

    return recipes;
}
