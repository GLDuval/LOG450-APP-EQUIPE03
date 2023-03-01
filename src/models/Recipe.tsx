export interface Recipe {
  id: number;
  name: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
}

export interface RecipeIngredient {
  name: string;
  quantity: string;
  isCheck: boolean;
}
