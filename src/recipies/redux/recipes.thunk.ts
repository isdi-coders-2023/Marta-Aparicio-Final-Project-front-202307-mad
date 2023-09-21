import { createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe, RecipeNoId } from '../../model/recipes';
import { ApiRecipesRepository } from '../services/recipes.api.repository';

export const loadThunk = createAsyncThunk<Recipe[], ApiRecipesRepository>(
  'recipes/load',
  async (repo) => {
    const recipes = await repo.getAll();
    return recipes;
  }
);

export const addThunk = createAsyncThunk<
  Recipe,
  {
    repo: ApiRecipesRepository;
    recipe: RecipeNoId;
  }
>('recipes/add', async ({ repo, recipe }) => {
  const fullRecipe = await repo.create(recipe);
  return fullRecipe;
});

export const updateThunk = createAsyncThunk<
  Recipe,
  {
    repo: ApiRecipesRepository;
    recipe: Partial<Recipe>;
    id: string;
  }
>('recipes/update', async ({ repo, recipe, id }) => {
  const updatedRecipe = await repo.update(recipe, id);
  return updatedRecipe;
});

export const eraseThunk = createAsyncThunk<
  Recipe['id'],
  {
    repo: ApiRecipesRepository;
    recipe: Recipe;
  }
>('recipes/erase', async ({ repo, recipe }) => {
  await repo.delete(recipe.id);
  return recipe.id;
});
