import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe, RecipeNoId } from '../../model/recipes';
import { ApiRecipesRepository } from '../services/recipes.api.repository';

export const loadThunk = createAsyncThunk<Recipe[], ApiRecipesRepository>(
  'recipes/load',
  async (repo) => {
    const recipes = await repo.getAll();
    // localStorage.setItem('recipes', JSON.stringify(recipes));
    return recipes;
  }
);

export const addThunk = createAsyncThunk<
  Recipe,
  {
    repo: ApiRecipesRepository;
    formData: FormData;
    token: string;
  }
>('recipes/add', async ({ repo, formData, token }) => {
  const fullRecipe = await repo.create(formData, token);
  // localStorage.setItem('recipes', JSON.stringify(fullRecipe));
  return fullRecipe;
});

export const updateThunk = createAsyncThunk<
  Recipe,
  {
    repo: ApiRecipesRepository;
    recipe: Partial<RecipeNoId>;
    id: string;
    token: string;
  }
>('recipes/update', async ({ repo, recipe, id, token }) => {
  const updatedRecipe = await repo.update(recipe, id, token);
  return updatedRecipe;
});

export const eraseThunk = createAsyncThunk<
  Recipe['id'],
  {
    repo: ApiRecipesRepository;
    recipe: Recipe['id'];
    token: string;
  }
>('recipes/erase', async ({ repo, recipe, token }) => {
  await repo.delete(recipe, token);
  return recipe;
});
